import {useState} from 'react';
import styled from 'styled-components';
// import {FaFaceBookF, FaInstegram, FaTwitter} from 'react-icons/fa';
import './LoginPage.css';
import SignupSuccessPage from './SignupSuccessPage';

function SignupPage(){

    const [openModal, setOpenModal] = useState(false);
    return (
            <div style={{display:"flex", position:"fixed", width:"100vw", height: "50vh", justifyContent:"center", opacity:"1", zIndex:"1"}}>
            <div>
                <SignupSuccessPage style={{position: 'absolute', zIndex:'100'}} open={openModal} onClose={()=>setOpenModal(false)}></SignupSuccessPage>
            </div>
            <SignupContainer>  
                <SignupText>Create a account</SignupText>
                <InputContainer>
                    <StyledInput placeholder='name'></StyledInput>
                    <StyledInput placeholder='id'></StyledInput>
                    <StyledInput placeholder='password'></StyledInput>                    
                    <StyledInput placeholder='email'></StyledInput>
                    <StyledInput placeholder='phone'></StyledInput>
                </InputContainer>
                {/* /<ButtonContainer> */}
                    <StyledButton onClick={()=>{setOpenModal(true)}}>SIGN UP</StyledButton>
                {/* </ButtonContainer> */}
                {/* <ForgetPassword></ForgetPassword> */}
            </SignupContainer>   
            </div>
            
    );
}

export default SignupPage;

const SignupContainer = styled.div`
    z-index:1;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 3rem 35%;
    height: 80vh;
    width: 100%;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: #807474;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
`;

const SignupText = styled.div`
    margin: 4.2rem 0 1.8rem 0;
    color: white;
    font-size: 1.2rem;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    alien-items: center;
    height: 100%
    width: 100%;    
    margin: 1rem 1rem 1rem 0;    
`;


const StyledInput = styled.input`
    align-items: center;
    background: rgba(255, 255, 255, 0.15);    
    box-shadow: 0 8px 16px 0 rgba(31,38,135,0.37);
    border-radius: 2rem;
    width: 90%;
    height: 2rem;
    margin: 1rem 0 1rem 0;    
    padding: 1rem 1.5rem 1rem 1.5rem;
    border: none;    
    outline: none;
    color:#3c354e;
    font-size: 1.1rem;
    font-weight: bold;
    &:focus{
        display: inline-block;
        box-shadow: 0 0 0 0.2rem #b9abe0;
        backdrop-filter:blur(12rem);
        border-radius:2rem;
    }
    &::placeholder{
        color: white;
        front-weight: 100;
        front-size: 1rem;
    }
`;

// const ButtonContainer = styled.button`    
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;        
// `;

const StyledButton = styled.button`
    background: linear-gradient(to right, #14163c 0%, #03217b 79%);
    text-transform: uppercase;
    font-size: 1rem; //1.2rem;
    letter-spacing: 0.2rem;
    width: 55%;
    margin: 1rem 0 0rem 0;
    height: 4rem;
    border: none;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
`;

// const ForgetPassword = styled.h4`
//     margin: 1rem 0 0 0;    
//     cursor: pointer;
//     color: white;
// `;
// rfc;
