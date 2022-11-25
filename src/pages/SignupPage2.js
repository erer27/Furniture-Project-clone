import signup_form from "../images/signup_form2.png";
import styled from "styled-components";
// import zIndex from "@material-ui/core/styles/zIndex";
function SignupPage(){
    return(
        // <sign_bg width="100px" height="100px"></sign_bg>
        <div>                                    
            <div id="main" style={{display:"flex", margin: "9rem", position:"fixed", width:"100vw", height: "70vh", justifyContent:"center", opacity:"0.9", zIndex:"1"}}>
                <img src={signup_form} alt=''></img> 
                <div style={{position:"absolute", top:"8px", right:"32%", zIndex:"2"}}>
                    
                    <CreateAccountText>Create A Account</CreateAccountText>
                    <InputContainer>
                        <StyledInput placeholder="id"></StyledInput>
                        <InputLine></InputLine>
                        <StyledInput placeholder="password"></StyledInput>
                        <InputLine></InputLine>
                        <StyledInput placeholder="name"></StyledInput>
                        <InputLine></InputLine>
                        <StyledInput placeholder="email"></StyledInput>
                        <InputLine></InputLine>
                        <StyledInput placeholder="nickname"></StyledInput> 
                        <InputLine></InputLine>                       
                    </InputContainer>
                    <StyledButton>sign up</StyledButton>
                    
                </div> 
                
                         
            </div>
            
            
        </div>

    )
}

export default SignupPage;


// const SignupContainer = styled.div`
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     margin: 10% 40%;
//     height: 55vh;
//     width: 40%;
//     background: rgba(255, 255, 255, 0.15);
//     box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//     backdrop-filter: blur(8.5px);
//     border-radius: 10px;
//     color: #807474;
//     text-transform: uppercase;
//     letter-spacing: 0.4rem;
// `;

const CreateAccountText = styled.div`
    margin: 3rem 0 2rem 0;
    color: #03217b;  / #03217b #b5afae
    front-weight: bold;
    front-size: 
    ;    
    text-transform: uppercase;
`;

const InputContainer = styled.div`        
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    alien-items: center;
    height:100%
    width:100%;    
    margin: 0rem 0 2rem 0;    
`;


const StyledInput = styled.input`
    align-items: center;
    background: rgba(255, 255, 255, 0.15);    
    border-radius: 2rem;
    width: 100%;
    height: 1rem;
    margin: 0.3rem 0 0.0.3rem 0;    
    padding: 1rem;
    border: none;    
    outline: none;
    color:#3c354e;
    font-size: 1rem;
    font-weight: bold;
    &:focus{
        display: inline-block;
        
        backdrop-filter:blur(12rem);
        // box-shadow: 0 0 0 0.2rem #b9abe0;/ frame있는 input box
        border-radius:2rem;
    }
    &::placeholder{
        color: #b9abe099;
        front-weight: 100;
        front-size: 1rem;
    }
`;


const InputLine = styled.div`
    // border top: 2px black;
    height: 1px;
    background: #03217b 100%; 
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
    width: 65%;
    height: 3rem;
    border: none;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
`;