import {Link} from 'react-router-dom';
import mainNav from './mainNavigation.module.css';
import logo from "../images/2.png";
import {useState} from 'react';
import styled from 'styled-components';

function MainNavigation({isScrolled}) {
    
    // const [isScrolled, setIsScrolled] = useState(false);
    // window.onscroll = () => {
    //     setIsScrolled(window.pageYOffset == 0 ? false:true);
    //     return () => (window.onscroll=null);
    // };

    // const [color, setColor] = useState(false)
    // const changeColor = () =>{
    //     if (window.scrollY >= 90) {
    //         setColor(true)
    //     } else {
    //         setColor(false)
    //     }
    // }
    
    // window.addEventListener('isScrolled', changeColor)
    return(
        
        <Container>
            <div className={`${isScrolled ? "scrolled" : ""} flex `}>
            <header  className={mainNav.header}>
                <div>
                    <Link to='/'>
                    <img src={logo} alt="logo_image" float={"left"} width={"100px"} height={"100px"} margin-left="4rem" ></img>
                    <div className={mainNav.logo} >ARIS</div>
                    </Link>
                </div>
                            
                <nav>                
                    <ul>                                        
                        <li>
                            <Link to='/intro'>기능소개</Link>
                        </li>
                        <li>
                            <Link to='/board'>게시판</Link>
                        </li>
                        <li>
                            <Link to='/login'>로그인</Link>
                        </li>
                        <li>
                            <Link to='/signup'>회원가입</Link>
                        </li>                   
                    </ul>
                </nav>            
            </header>
            </div>
        </Container>
    );
}

export default MainNavigation;


const Container = styled.div`
    height: 100px;
    .isScrolled {
        background-color: #E4E0D6;
        transition: 3s ease-in-out;
    }
`;