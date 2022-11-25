import styled from "styled-components";
import {Link} from 'react-router-dom';
import {useState} from 'react';
import board_bg from "../images/board_bg.png";
// import BoardWritePage from "./BoardWritePage";
import BoardListPage from "./BoardListPage";


function BoardPage(){
    
    // const [color, setColor] = useState(false)
    // const changeColor = () => {
    //     if(window.scrollY >= 100){
    //         setColor(true)
    //     } else{
    //         setColor(false)
    //     }
    // }
    const [active] = useState(BoardListPage);
    // useEffect(()=>{
    //     setActive(BoardWritePage)
    // }, []);
    return(
        <div>
            <TextContainer>
                <BoardText>자유게시판</BoardText>
            </TextContainer>          
            
            <BoardUI >
                <div id="main" style={{zIndex:'5',display:"block", margin: "0 0 0 0", position:"relative", width:"70%", height: "10vh", justifyContent:"center", opacity:"0.9"}}>
                <img src={board_bg} alt=''></img></div>
                <div>{active}</div>
                {/* {active? <button z-index="15" onClick={()=> setActive(BoardWritePage)}>글쓰기</button> : null} */}
                
                    <ButtonContainer>
                    <Link to='/board/write' style={{textDecoration:"none"}}>
                    <StyledButton>글쓰기</StyledButton>
                    </Link>
                    </ButtonContainer>
                
                
                <PageFoot></PageFoot>
            </BoardUI>
            
            {/* </div> */}
            
        </div>
    )
}

export default BoardPage;

const ButtonContainer = styled.div`    
    z-index: 30;
    position: relative;
    width: 100vw;
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
    width: 100%;
    margin: 1.5rem 2rem 1.5rem 2rem;
    height: 3rem;
    border: none;
    color: black;
    border-radius: 0.5rem;
    cursor: pointer;
`;

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
    margin: 35vh 35vh 35vh 50vh;// 9rem;  //35vh
    width: 50%;
    align-items: center;
    justify-content: center; 
    font-size: 6rem;
    color: #ffffff;
    text-shadow: 2px 2px 2px #433838;
`;

const BoardUI = styled.div`
    margin: 0px 0 0 0;
    height: 100%;
    width: 100%;    
`;


// const BoardHeader = styled.div``;

// const BoardTableContainer = styled.div`
//     margin: 0 0 0 0;
// `;    

// const TableContainer = styled.table`        
    
//     border-top: 1px solid #444444;
//     border-collapse: collapse;
// `;

// const BoardTableTr = styled.tr`
//     border-bottom: 1px solid #444444;
//     padding: 1px;
//     width:100%;
// `;

// const BoardTableTd = styled.td`
//     border-bottom: 1px solid #444444;
//     padding: 8px;
//     width:20%;
// `;

const PageFoot = styled.div``;


// const Parallax = styled.div`
//     color: #fff;
//     margin: 0;
//     padding: 0;
//     perspective: 1px;
//     transform-style: preserve-3d;
//     height: 100%;
//     overflow-y: scroll;
//     overflow-x: hidden;
//     font-family: "Luna";
// `;

