// import { style } from '@mui/system/Stack/createStack';
import styled from 'styled-components';
// import React, {Link} from 'react';
// import { Spa } from '@mui/icons-material';


function BoardModifyConfirmPage({open, onClose}) { // 
    
    function buttonClick() {
        window.location.href='/board/contentview'
    }
    if(!open) return null;
    return (
        <div>
            <Overlay onClick={onClose}>
                <WindowContainer onClick={(e) => {e.stopPropagation()}}>                                
                <div style={{display:"flex", margin:"0 1rem 0 0", justifyContent:'flex-end'}}>
                    <p style={{margin:"4rem 5rem 3rem 0"}}>수정하시겠습니까?</p>
                    <CloseP onClick={onClose}>X</CloseP>
                </div>
                <BtnContainer>
                    <BtnYesNO onClick={buttonClick}><Span>확인</Span></BtnYesNO>
                    <BtnYesNO onClick={onClose}><Span>취소</Span></BtnYesNO>
                </BtnContainer>
                </WindowContainer>
            </Overlay>
        </div>
    );
}

export default BoardModifyConfirmPage;

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

const WindowContainer = styled.div`
    border-radius: 0.5rem;
    // align-items: center;
    // justify-content: center;
    z-index: 100;
    width: 300px;  // max-width
    height: 200px;  //?
    position: absolute; //?
    margin: 15% 45% 20% 42%;
    top: 10% //사진 위로부터 black shadow 
    left: 50%;
    // transform: translate(-30%, -30%);
    display: column;
    background-color: #ffffff;
    box-shadow: 0 0 18px 0 tgba(0, 0, 0, 0.75);
`;


const CloseP = styled.p`    
    cursor: pointer;
`;

// const Content = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items; center;
//     justify-content: center;
//     text-align: center;
//     margin-top: 1rem;
//     padding: 1rem 2rem;
// `;

const BtnContainer = styled.div`
    display: flex;
`;


// const StyledModalInput = styled.input`
//     margin: 0rem 1rem 0rem 1rem;
//     height: 1.5rem;
//     border-radius: 0.3rem;
// `;

const BtnYesNO = styled.button`
    width: 50%;
    margin: 1rem;
    padding: 2px 0;
    border: bold;
    color: black;
    background: linear-gradient(to right, #E4E0D6 14%, #E4E0D6 79%);        
    letter-spacing: 0.5rem;
    padding-left:10px;
    padding-right:10px;
    margin: 1rem 1rem 1rem 1rem;
    height: 2rem;
    border: none;
    color: black;
    border-radius: 0.5rem;
    cursor: pointer;
`;

const Span = styled.span`
    font-weight: bold;
    display: flex;
    justify-content: center;
`;
