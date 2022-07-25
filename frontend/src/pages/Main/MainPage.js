import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import AxiosAPI from 'apis/AxiosAPI';
import styled from 'styled-components';
import MainPageLogo from 'assets/image/main-page-logo.png'
import boy1 from 'assets/image/boy1.png'
import boy2 from 'assets/image/boy1.png'
import girl1 from 'assets/image/girl1.png'
import girl2 from 'assets/image/girl2.png'
import GroupList from 'components/Group/GroupList';


const Main = ({isLogin}) => {

    if(isLogin === true){

    }else{
        window.location.replace("http://localhost:3000/signin");
    }

    return (
        <Container>
            <GroupList/>
            <div className='top-content'>
                <div className='right'>
                    <p>     
                        안녕하세요!<br/>TRIP TIP이 여러분의 총무가 되어드립니다.
                    </p>
                    <img src={MainPageLogo} />
                </div>
            </div>

            <div className='bottom-content'>
                <div className='btns'>
                    <GroupMake to="/group">그룹 생성</GroupMake>
                    <GroupJoin to="/code">그룹 참여</GroupJoin>
                </div>

                <div className='logs'>
                    <h2>최근 활동</h2>
                    <div className='boxs'>
                        <div className='box'>
                            <h3>멋사 MT</h3>
                            <p>
                                참여 인원
                            </p>
                        </div>
                        <div className='box'>
                            <h3>멋사 MT</h3>
                            <p>
                                참여 인원
                            </p>
                        </div>
                        <div className='box'>
                            <h3>멋사 MT</h3>
                            <p>
                                참여 인원
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Container>
    );
};

export default Main;

const Container = styled.div`
    position : relative;
    width : 100%;
    height : 90%;
    display : flex;
    flex-direction: column;
    align-items: center;
    
    .top-content{
        position : relative;
        width : 100vw;
        height : 100px;
        padding-top : 20px;
        display : flex;
        flex-direction : row;
        align-items : center;
        text-align ; right;


        .right{
            position : absolute;       
            right : 90px;
            display : flex;
            align-items : center;

            p{
                text-align : right;
            }
    
            img{
                margin-left : 20px;
                height : 60px;
            }
        }
    }

    .bottom-content{
        position : absolute;
        width : 100vw;
        padding-bottom : 230px;
        top : 140px;
        display : flex;
        flex-direction : column;
        align-items : center;
        

        background-color : #F2F8FF;

        .btns{
            
            display : flex;
            margin : 80px 0;
        }

        .logs {
            background-color : white;
            border-radius : 10px;
            width : 70vw;
            padding : 30px 40px;
            box-shadow: 0px 2px 3px 1px #C8DCF3;


            h2{
                color : #0065FF;
            }

            .boxs{
                display : flex;
                flex-direction : row;
                justify-content : space-between;
            }
        }

        .box{
            width : 18vw;
            height : 120px;
            padding : 0 20px;
            background-color : #F9F9F9;
            
        }
    }

`;



const GroupMake = styled(NavLink)`
    width : 150px;
    height : 50px;
    display : flex;
    justify-content: center;
    align-items: center;
    background-color : #0065FF;
    color : white;
    text-decoration : none;
    text-align : center;
    border-radius : 5px;
    
`;
const GroupJoin = styled(NavLink)`
    width : 150px;
    height : 50px;
    display : flex;
    justify-content: center;
    align-items: center;
    background-color : #0065FF;
    color : white;
    text-decoration : none;
    text-align : center;
    border-radius : 5px;
    margin-left : 50px;
`
