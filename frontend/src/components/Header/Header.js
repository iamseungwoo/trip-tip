import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import LogoutButton from 'components/Auth/LogoutButton';
import logo from 'assets/image/logo-blue.png';
import { NavLink } from 'react-router-dom';
import { getCookie } from 'utils/Cookie';
import noAlertImg from 'assets/image/bell-01.png';
import alertImg from 'assets/image/bell-02.png';
import user from 'assets/image/user.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const authStore = useSelector(store => store.auth);
    const groupStore = useSelector(store => store.group);
    
    const a = () => {
        console.log(authStore);
    }
    const g = () => {
        console.log(groupStore);
    }
    return (
        <Container>
            <Logo href={authStore.isLogin === true ? `/main` : `/`}>
                <LogoImg
                    src={logo}
                    alt='logo'
                />
                <LogoTitle>TRIP TIP</LogoTitle>
            </Logo>
            <Element>
                <>     
                <button onClick={a}>사용자 스토어</button>
                <button onClick={g}>그룹 스토어</button> 
                    {/* 로그인되어있으면 프로필, 알림 이미지 */}
                    {authStore.isLogin === true ?
                        <>
                            <LinkImg to='/alert'>
                                <img src={noAlertImg}/>
                            </LinkImg>
                            <LinkImg to='/mypage'>
                                <img src={user}/>
                            </LinkImg>
                            <LogoutButton/>
                        </>
                        :
                        <>
                            
                        </>
                    }
                </> 
            </Element>

        </Container>
    );
};

export default Header;

const Container = styled.div`
    width : 100%;
    height : 10%;
    padding : 40px 0;
    display : flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    // border-bottom : 1px solid black;
`;

const Element = styled.div`
    display : flex;
    padding-right : 20px;
    justify-content: space-between;
    align-items : center;
`;

const Logo = styled.a`
    text-decoration : none;
    margin-left : 70px;
    display : flex;
    align-items : center;
    justify-content: center;
`;

const LogoImg = styled.img`
    width : 50px;
`;

const LogoTitle = styled.p`
    margin-left : 30px;
    font-size: 16px;
    font-weight: bold;
    color : #001E6C;
`;

const LinkImg = styled(NavLink)`
    text-decoration : none;
    border-radius: 0.5rem;
    background-color : white;
    margin : 0 15px;

    img{
        cursor : pointer;
        width : 25px;
    }
`;

