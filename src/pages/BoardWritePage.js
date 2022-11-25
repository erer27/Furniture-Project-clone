import styled from "styled-components";
// import {useState} from 'react';
import board_bg from "../images/board_bg.png";
import { Link } from "react-router-dom";

function BoardWritePage(){
    
    return(
        <div>
            <TextContainer>
                <BoardText>자유게시판</BoardText>
            </TextContainer>          

            
            <BoardUI >
                <div id="main" style={{display:"block", margin: "0 0 0 0", position:"relative", width:"100%", height: "10vh", justifyContent:"center", opacity:"0.98"}}>
                <img src={board_bg} alt=''></img></div>
                
                <BoardTableContainer style={{position:"relative", margin:"0px 10% 0px 42%"}}>
                {/* <BoardHeader></BoardHeader> */}
                <TableContainer>
                    <thead></thead>     
                    <tbody>
                        <tr>
                            <td>
                                <StyledInput placeholder='글쓴이'></StyledInput>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <StyledInput placeholder='비밀번호'></StyledInput>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <StyledInput placeholder='제 목'></StyledInput>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <ContentTextArea placeholder="내용"></ContentTextArea>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <StyledInput placeholder="첨부 파일"/>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <Link to='/board' style={{textDecoration: 'none'}}>
                            <ButtonContainer>
                                <StyledButton>이전</StyledButton>
                                <StyledButton>등록하기</StyledButton>
                            </ButtonContainer>                        
                        </Link>                        
                    </tfoot>
                </TableContainer>
                </BoardTableContainer>
                <PageFoot></PageFoot>
            </BoardUI>
            </div>
                    
    )
}

export default BoardWritePage;


const TextContainer = styled.div`
    // overflow-x:hidden;
    // overflow-y:hidden;    
    position: relative;
    margin: 35px 0 700px 0;// 0rem;
    font-weight: bold;
    height: 1px;
    width: 100%;
    align-items: center;
    justify-content: center;    
`;

const BoardText = styled.div`  
    font-family: 'Humanbumsuk';      
    color: white;
    margin: 35vh;// 9rem;  //35vh
    width: 50%;
    align-items: center;
    justify-content: center; 
    font-size: 6rem;
    color: #ffffff;
    text-shadow: 2px 2px 2px #433838;
`;

const BoardUI = styled.div`
    margin: 700px 0 0 0;
    height: 100%;
    width: 100%;    
`;


// const BoardHeader = styled.div``;

const BoardTableContainer = styled.div`
    margin: 0 0 0 0;
`;    

const TableContainer = styled.table`            
    // border-top: 1px solid #444444;
    // border-collapse: collapse;
`;

const ContentTextArea = styled.textarea`
    background: rgba(255, 255, 255, 0.15);    
    // box-shadow: 0 8px 12px 0 rgba(31,38,135,0.37);
    border-radius: 0.5rem;
    width: 40rem;
    height: 15rem;
    margin: 0.5rem 0 0.5rem 0;    
    padding: 1rem 1rem 1rem 1rem;
    border: solid #E4E0D6;  
    outline: none;
    color:#3c354e;
    font-size: 1rem;
    font-weight: bold;
    &:focus{
        display: inline-block;
        box-shadow: 0 0 0 0.2rem #b9abe0;
        // backdrop-filter:blur(12rem);
        border-radius:0.5rem;
    }
    &::placeholder{
        color: black;
        front-weight: 100;
        front-size: 1rem;
    }
`;

// const BoardTableTr = styled.tr`
//     border-bottom: 1px solid #444444;
//     padding: 8px;
//     width:100%;
// `;

// const BoardTableTd = styled.td`
//     border-bottom: 1px solid #444444;
//     padding: 8px;
//     width:100%;
// `;

const PageFoot = styled.div``;


const StyledInput = styled.input`    
    background: rgba(255, 255, 255, 0.15);    
    // box-shadow: 0 8px 12px 0 rgba(31,38,135,0.37);
    border-radius: 0.5rem;
    width: 94%;
    height: 2rem;
    margin: 0.2rem 0 0.2rem 0;    
    padding: 1rem 1rem 1rem 1rem;
    border: solid #E4E0D6;
    outline: none;
    color:#3c354e;
    font-size: 1rem;
    font-weight: bold;
    &:focus{
        display: inline-block;
        box-shadow: 0 0 0 0.2rem #e0eaff;  //box border color 
        backdrop-filter:blur(12rem);
        border-radius:0.5rem;
    }
    &::placeholder{
        color: black;
        front-weight: 100;
        front-size: 1rem;
    }
`;

const ButtonContainer = styled.div`    
    // width: 100%;
    display: flex;
    margin: 0 1rem 0 1rem;
    align-items: center;
    justify-content: center;        
`;

const StyledButton = styled.button`

    background: linear-gradient(to right, #E4E0D6 14%, #E4E0D6 79%);
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.2rem;
    width:100%;
    margin: 1.5rem 1rem 1.5rem 1rem;
    height: 3rem;
    border: none;
    color: black;
    border-radius: 0.5rem;
    cursor: pointer;
`;


