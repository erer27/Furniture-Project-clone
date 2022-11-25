import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// import {useState} from 'react';
// import board_bg from "../images/board_bg.png";
import "./font-family.css";

function BoardListPage(props) {
    return (
        <div>
            <BoardTableContainer style={{position:"relative", zIndex:"30", margin:"0px 10% 0px 42%", fontFamiy: 'Humanbumsuk'}}>
                <BoardHeader></BoardHeader>
                <TableContainer>
                    <thead>
                        <BoardTableTr>
                            <BoardTableTd><Font>번호</Font></BoardTableTd>
                            <div style={{height:'1px', background:'black'}}></div>
                            <BoardTableTd>제목</BoardTableTd>
                            <div style={{height:'1px', background:'black'}}></div>
                            <BoardTableTd>작성자</BoardTableTd>
                            <div style={{height:'1px', background:'black'}}></div>
                            <BoardTableTd>작성일</BoardTableTd>
                            <div style={{height:'1px', background:'black'}}></div>
                            <BoardTableTd>조회</BoardTableTd>
                            <div style={{height:'1px', background:'black'}}></div>
                        </BoardTableTr>   
                                             
                    </thead>
                    <div style={{width:'100%', height:'1px', background:'black'}}></div>
                    <tbody>                        
                        <BoardTableTr><BoardTableTd styled={{ fontFamiy: 'Humanbumsuk'}}>번호</BoardTableTd></BoardTableTr> 
                        <BoardTableTr><BoardTableTd><Link to='/board/contentview'>제목클릭</Link></BoardTableTd></BoardTableTr>
                        <BoardTableTr><BoardTableTd>작성자</BoardTableTd></BoardTableTr>
                        <BoardTableTr><BoardTableTd>작성자</BoardTableTd></BoardTableTr>
                        <BoardTableTr><BoardTableTd>작성일</BoardTableTd></BoardTableTr>
                        <BoardTableTr><BoardTableTd>조회</BoardTableTd></BoardTableTr>
                        <BoardTableTr><BoardTableTd>번호</BoardTableTd></BoardTableTr>
                        <BoardTableTr><BoardTableTd>제목</BoardTableTd></BoardTableTr>
                        <BoardTableTr><BoardTableTd>작성자</BoardTableTd></BoardTableTr>
                        <BoardTableTr><BoardTableTd>작성일</BoardTableTd></BoardTableTr>                                                
                    </tbody>
                        <div padding-top="100px">1 2 3 4 5 6 7 8 9 10</div>                                                                      
                        
                </TableContainer>
                </BoardTableContainer>
        </div>
    );
}

export default BoardListPage;



// const TextContainer = styled.div`
//     // overflow-x:hidden;
//     // overflow-y:hidden;    
//     position: relative;
//     margin: 35px 0 700px 0;// 0rem;
//     font-weight: bold;
//     height: 1px;
//     width: 100%;
//     align-items: center;
//     justify-content: center;    
// `;

// const BoardText = styled.div`  
//     font-family: 'Humanbumsuk';      
//     color: white;
//     margin: 35vh;// 9rem;  //35vh
//     width: 50%;
//     align-items: center;
//     justify-content: center; 
//     font-size: 6rem;
//     color: #ffffff;
//     text-shadow: 2px 2px 2px #433838;
// `;

// const BoardUI = styled.div`
//     margin: 700px 0 0 0;
//     height: 100%;
//     width: 100%;    
// `;


const BoardHeader = styled.div``;

const BoardTableContainer = styled.div`
    font-family: 'Humanbumsuk';
    margin: 0 0 0 0;
`;    

const TableContainer = styled.table`        
    
    // border-top: 1px solid #bfbaae;
    border-collapse: collapse;
`;

const BoardTableTr = styled.tr`
    // border-bottom: 1px solid #bfbaae;    
    margin: 2rem 1rem 2rem 1rem;
    padding: 1px;
    width:100%;
`;

const BoardTableTd = styled.td`    
    // border-bottom: 1px solid #bfbaae;
    padding: 8px;
    width:20%;
`;

const Font = styled.div`
    font-famiy: 'Humanbumsuk';  
`;

// const PageFoot = styled.div``;


