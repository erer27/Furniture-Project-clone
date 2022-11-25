import {useState} from 'react';
import styled from 'styled-components';
// import {FaFaceBookF, FaInstegram, FaTwitter} from 'react-icons/fa';
// import {Link} from 'react-router-dom';
import FindPwConfirmPage from './FindPwConfirmPage';

function FindPwPage(){
    
    const [openModal, setOpenModal] = useState(false);
    return (
        <div style={{display:"flex", position:"fixed", width:"100vw", height: "0vh", justifyContent:"center", opacity:"1", zIndex:"40"}}>
        <div>
            <FindPwConfirmPage style={{position: 'absolute', zIndex:'100'}} open={openModal} onClose={()=>setOpenModal(false)}></FindPwConfirmPage>
        </div>
        <LoginContainer>  
            <LoginText>Forget Password?</LoginText>
            <InputContainer>
                <StyledInput placeholder='id or email'></StyledInput>                
            </InputContainer>
            {/* <ButtonContainer> */}
                <StyledButton onClick={()=>{setOpenModal(true)}}>Confirm</StyledButton>
            {/* </ButtonContainer> */}             
        </LoginContainer>   
        </div>
    );
}

export default FindPwPage;

// const StyledP = styled.p`
//     color: white;
//     margin: 2rem 0 1rem 0;
// `;

const LoginContainer = styled.div`
    // z-index:1;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 7rem 40% 7rem 40%;
    height: 37vh;
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
    margin: 3rem 0 2rem 0;
    color: white;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    alien-items: center;
    height:100%
    width:100%;    
    margin: 1rem 0 1.5rem 0;    
`;


const StyledInput = styled.input`
    align-items: center;
    background: rgba(255, 255, 255, 0.15);    
    box-shadow: 0 8px 16px 0 rgba(31,38,135,0.37);
    border-radius: 2rem;
    width: 90%;
    height: 2rem;
    margin: 1rem 0 1rem 0;    
    padding: 1rem 1rem 1rem 1rem;
    border: none;    
    outline: none;
    color:#3c354e;
    font-size: 1rem;
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
    letter-spacing: 0.2rem;
    width: 40%;
    margin: 1.5rem 0 2.5rem 0;
    height: 3.5rem;
    border: none;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
`;
