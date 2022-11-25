// import {useState} from 'react';
import styled from 'styled-components';
// import {FaFaceBookF, FaInstegram, FaTwitter} from 'react-icons/fa';
// import {Link} from 'react-router-dom';

function SignupSuccessPage({open, onClose}){
    function buttonClick(e) {
        window.location.replace("/login")
    }
    
    if(!open) return null;
    return (
        <Overlay onClick={onClose}>
        <div style={{display:"flex", position:"fixed", width:"100vw", height: "0vh", justifyContent:"center", opacity:"1", zIndex:"40"}}>
        <LoginContainer>  
            <LoginText>Password has been sent!</LoginText>            
            <LoginText>Please check your email!</LoginText>   
            {/* <ButtonContainer> */}             
                <StyledButton onClick={buttonClick}>Confirm</StyledButton>            
            {/* </ButtonContainer> */}             
        </LoginContainer>   
        </div>
        </Overlay>
    );
}

export default SignupSuccessPage;

const Overlay = styled.div`
    margin:0px;
    z-index:100;
    background-color: rgba(0, 0, 0, 0.5);
    background-size: cover;
    position: absolute; //??
    display: block;
    width: 100%;
    height: 905px;
`;

// const StyledP = styled.p`
//     color: white;
//     margin: 2rem 0 1rem 0;
// `;

const LoginContainer = styled.div`
    // z-index:1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 11.5% 40%;
    height: 25vh;
    width: 80%;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: #807474;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
`;

const LoginText = styled.div`
    margin: 2.2rem 0 0rem 0;
    color: white;
`;

// const InputContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     alien-items: center;
//     height:100%
//     width:100%;    
//     margin: 1rem 0 2rem 0;    
// `;


// const StyledInput = styled.input`
//     align-items: center;
//     background: rgba(255, 255, 255, 0.15);    
//     box-shadow: 0 8px 16px 0 rgba(31,38,135,0.37);
//     border-radius: 2rem;
//     width: 90%;
//     height: 2rem;
//     margin: 1rem 0 1rem 0;    
//     padding: 1rem 1rem 1rem 1rem;
//     border: none;    
//     outline: none;
//     color:#3c354e;
//     font-size: 1rem;
//     font-weight: bold;
//     &:focus{
//         display: inline-block;
//         box-shadow: 0 0 0 0.2rem #b9abe0;
//         backdrop-filter:blur(12rem);
//         border-radius:2rem;
//     }
//     &::placeholder{
//         color: white;
//         front-weight: 100;
//         front-size: 1rem;
//     }
// `;

// const ButtonContainer = styled.button`    
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;        
// `;

const StyledButton = styled.button`
    background: linear-gradient(to right, #14163c 0%, #03217b 79%);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    width: 40%;
    margin: 2rem 0 2.5rem 0;
    height: 3.5rem;
    border: none;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
`;
