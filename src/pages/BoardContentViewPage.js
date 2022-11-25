import styled from "styled-components";
// import {useState} from 'react';
import board_bg from "../images/board_bg.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import BoardDeletePage from "./BoardDeletePage";
// import { style } from "@mui/system";/

function BoardContentViewPage(){
    
    const [openModal, setOpenModal] = useState(false);

    return(
        <div>
            <TextContainer>
                <BoardText>자유게시판</BoardText>
            </TextContainer>          

            
            <BoardUI >
                <div id="main" style={{zIndex:'5', display:"block", margin: "0 0 0 0", position:"relative", width:"100%", height: "0vh", justifyContent:"center", opacity:"0.9"}}>
                    <img src={board_bg} alt=''></img>
                </div>
                <div>
                    <BoardDeletePage style={{position: 'absolute', zIndex:'100'}} open={openModal} onClose={()=>setOpenModal(false)}></BoardDeletePage>
                </div>

                <div style={{zIndex:'40', position:'relative', margin:"100px 0px 0px 35%"}}>

                    <table style={{width:"80%", textAlign:"left"}}>
                        <thead></thead>     
                                            
                        {/* <TableTbody style={{position:"relative", top:"0px", margin:"0px 10% 0px 40%"}}> */}
                        <tbody>
                        <tr style={{margin:"0 0 0rem 0", height:'30px'}}>
                            <td >
                                <h2>제 목</h2>
                            </td>
                        </tr>

                        <tr style={{height:'50px'}}>
                            <td>
                                <div>글쓴이</div>
                            </td>
                            {/* <td style={{marginLeft:0}}>
                                <div>글쓴이</div>
                            </td> */}
                        </tr>   

                        <tr style={{height:'30px'}}>
                            <td>
                                <div>시간</div>
                            </td>
                        </tr>
                        
                        <tr style={{height:'200px'}}>
                            <td >
                                <div>사진~~</div>
                            </td>                       
                        </tr>

                        <tr style={{height:'150px'}}>
                            <td >
                                <div>내 용</div>
                            </td>
                        </tr>
                        <tr style={{height:'100px'}}> 
                            <td >
                                댓글 내용
                            </td>
                            <td>
                                댓글 글쓴이 & 시간
                            </td>
                            {/* <td >
                                <div>댓글 시간</div>
                            </td> */}
                        </tr>
                        
                        {/* </TableTbody> */}
                        <tfoot>
                            <ButtonContainer>
                                <Link to='/board'><StyledButton>목록</StyledButton></Link>
                                <Link to='/board/modify'><StyledButton>수정하기</StyledButton></Link>
                                
                                <StyledButton onClick={() => setOpenModal(true)}>
                                    삭제하기</StyledButton>
                                    
                                <Link to='/board/reply'><StyledButton>댓글달기</StyledButton></Link>
                            </ButtonContainer>
                        </tfoot>
                        </tbody>
                    </table>
                </div>
                {/* <PageFoot></PageFoot>/ */}
            </BoardUI>
            </div>
                    
    )
}

export default BoardContentViewPage;


const TextContainer = styled.div`
    // overflow-x:hidden;
    // overflow-y:hidden;    
    position: relative;
    margin: 35px 0 70px 0; //40% 40% // 0rem;
    font-weight: bold;
    height: 1px;
    width: 100%;
    align-items: center;
    justify-content: center;    
`;

const BoardText = styled.div`  
    font-family: 'Humanbumsuk';      
    color: white;
    margin: 35vh 35% 30vh 25%;// 9rem;  //35vh
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
 

// const TableContainer = styled.table`                
//     // border-collapse: collapse;
//     // height: vh;
// `;

// const TableTbody = styled.tbody`
//     height: 70vh;
//     width: 100%;
//     margin: 0 0% 0 0%;
// `;


const ButtonContainer = styled.div`    
    width: 100%;
    // position: absolute;
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
    padding-left:50px;
    padding-right:50px;
    margin: 1.5rem 1rem 1.5rem 1rem;
    height: 3rem;
    border: none;
    color: black;
    border-radius: 0.5rem;
    cursor: pointer;
`;

