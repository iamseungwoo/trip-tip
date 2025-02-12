from django.db import models
from django.conf import settings
from django.contrib.auth import get_user_model
from django.utils import timezone

import uuid
import base64
import codecs

def generate_random_slug_code(length=8):
    """
    generates random code of given length
    """
    return base64.urlsafe_b64encode(
        codecs.encode(uuid.uuid4().bytes, "base64").rstrip()
    ).decode()[:length]

CustomUser = get_user_model()

class Group(models.Model):
    group_id = models.BigAutoField(
        primary_key=True, 
        unique=True, 
        verbose_name="group_id"
    )
    group_name = models.CharField(max_length=45, verbose_name="group_name", default="group")
    code = models.CharField(
        max_length=45,
        unique=True,
        editable=False,
        default=generate_random_slug_code,
        verbose_name="code",
    )
    leader = models.ForeignKey(CustomUser, related_name='leader_user', on_delete=models.CASCADE, null=True, db_column='leader')

    def __str__(self):
        return self.group_name

class Member(models.Model):
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE, db_column='user_id',)
    group_id = models.ForeignKey(Group, on_delete=models.CASCADE, db_column='group_id',)

class Meeting(models.Model):
    meeting_id = models.BigAutoField(
        primary_key=True, 
        unique=True, 
        verbose_name="meeting_id"
    )
    create_dt = models.DateField(default=timezone.now, blank=True, null=True)
    is_clear = models.BooleanField(default=False)
    group_id = models.ForeignKey(Group, on_delete=models.CASCADE, db_column='group_id')


class Receipt(models.Model):
    receipt_id = models.BigAutoField(
        primary_key=True, 
        unique=True, 
        verbose_name="receipt_id"
    )
    receipt_name = models.CharField(max_length=45, verbose_name="receipt_name", default="receipt")
    total = models.IntegerField(default=0,)
    is_clear = models.BooleanField(default=False) # 최후에 삭제
    meeting_id = models.ForeignKey(Meeting, on_delete=models.CASCADE, db_column='meeting_id')
    paid_by = models.ForeignKey(
        CustomUser,
        related_name='manager',
        on_delete=models.CASCADE, 
        db_column='paid_by',
    )

    def __str__(self):
        return self.receipt_name
    
class Participant(models.Model):
    participant_id = models.BigAutoField(
        primary_key=True, 
        unique=True, 
        verbose_name="participant_id"
    )
    money = models.IntegerField(default=0)
    is_clear = models.BooleanField(default=False)
    receipt_id = models.ForeignKey(Receipt, on_delete=models.CASCADE, db_column='receipt_id')
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE, db_column='user_id')
    

