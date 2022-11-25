// import {useState} from 'react';
import styled from 'styled-components';
// import {FaFaceBookF, FaInstegram, FaTwitter} from 'react-icons/fa';
import './LoginPage.css';
import {Link} from 'react-router-dom';
// const MainContainer = styled.div'
//     display: flex;
//     align-items: center;
//     flex-direction
// ';

function LoginPage(){
//     const [form, setForm] = useState({
//         id: '',
//         pw: ''
//     });
//     const {id, pw} = form;
    
//     const onChange = e => {
//         const nextForm = {
//             form,
//             [e.target.value]: e.target.value
//         };
//         setForm(nextForm);
//     };
   
//     const onClick = () =>{
//         alert(id+":"+pw);
//         setForm({
//             username: '',
//             msg:''
//         });        
//     };
   
//     const onKeyPress = e => {
//         if(e.key === 'Enter'){
//             onClick();
//         }
//     };

    // render() { 

    function buttonClick(){
        window.location.replace('/board')
    }
    return (

        // <MainContainer>/</MainContainer>                    
        // <div className='div'> 
            
        //     <center>
        //     <table id='table22' >
        //         <tr>    
        //             <td colSpan={2} align="center"><h1>로그인</h1></td>
        //         </tr>                
        //         <tr>
        //             <td>아이디</td>
        //             <td><input
        //                 type="text"
        //                 name="id"
        //                 placeholder='id'
        //                 value={id}  // message, text, value 결과는 똑같아..
        //                 onChange={onChange}
        //                 onKeyPress={onKeyPress}          // input box에서 enter 치면  
        //             /></td>
        //             </tr>            
        //         <tr>
        //             <td>비밀번호</td>
        //             <td><input
        //                 type="text"
        //                 name="pw"
        //                 placeholder='pw'
        //                 value={pw}
        //                 // {/*   // message, text, value 결과는 똑같아.. */}
        //                 onChange={onChange}                
        //                 onKeyPress={onKeyPress}
        //             /></td>                    
        //         </tr>
        //         <tr>
        //             <td colSpan={2} align="center"><button onClick={onClick}>로그인</button></td>
        //         </tr>
        //         <tr>
        //             <td >비밀번호 찾기</td>
        //             <td >회원가입</td>
        //         </tr>                
        //     </table>
        //     </center>
        //     <div className='overlay'></div>
        // </div>
            <div style={{display:"flex", position:"fixed", width:"100vw", height: "50vh", justifyContent:"center", opacity:"1", zIndex:"40"}}>
            <LoginContainer>  
                <LoginText>Weclome</LoginText>
                <InputContainer>
                    <StyledInput placeholder='id or email'></StyledInput>
                    <StyledInput placeholder='password'></StyledInput>                    
                </InputContainer>
                {/* <ButtonContainer> */}
                    <StyledButton onClick={buttonClick}>LOGIN</StyledButton>
                {/* </ButtonContainer> */}
                <Link to='/findpw' style={{textDecoration:"none"}}><StyledP>Forget Password?</StyledP></Link>
                <Link to='/signup' style={{textDecoration:"none"}}><StyledP>Sign up</StyledP></Link>                
            </LoginContainer>   
            </div>
            
    );
}

export default LoginPage;

// const StyledLink = styled.link`

// `;

const StyledP = styled.p`
    color: white;
    margin: 2rem 0 1rem 0;
`;
const LoginContainer = styled.div`
    z-index:1;
    display: flex;
    align-items: center;    
    // justify-content: center;    
    flex-direction: column;
    margin: 7rem 36%;
    height: 65vh;
    width: 100%;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: #807474;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
`;

const LoginText = styled.h3`
    margin: 4.5rem 0 2rem 0;
    color: white;
    letter-spacing: 0.5rem;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    alien-items: center;
    height: 100%
    width: 100%;    
    margin: 1rem 3rem 2rem 0;    
`;


const StyledInput = styled.input`
    align-items: center;
    background: rgba(255, 255, 255, 0.15);    
    box-shadow: 0 8px 16px 0 rgba(31,38,135,0.37);
    border-radius: 2rem;
    width: 100%;
    height: 2rem;
    margin: 1rem 0 1rem 0;    
    padding: 1rem 1rem 1rem 2rem;
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
    box-shadow: 0 8px 16px 0 rgba(31,38,135,0.37);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    width: 45%;
    margin: 1rem 0 2rem 0;
    height: 3.5rem;
    border: none;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
`;

// const ForgetPassword = styled.div`
//     margin: 1rem 0 0 0;    
//     cursor: pointer;
//     color: white;
// `;
// rfc;
