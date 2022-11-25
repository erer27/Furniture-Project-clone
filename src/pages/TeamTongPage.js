import amus from './TeamTongPage.module.css';
import {useState} from 'react';
import Axios from 'axios';

function TeamTongPage(){
       
        const [city, setCity] = useState("");
        const [cityResults, setCityResults] = useState([]);        
    
        const [subject, setSubject] = useState("");
        const [subjectResults, setSubjectResults] = useState([]);  

        const [winner, setWinner] = useState("");
        const [winnerResults, setWinnerResults] = useState([]);  

        const [prti, setPrti] = useState("");
        const [prtiResults, setPrtiResults] = useState([]); 

        const searchCity = () => {
            Axios.get('http://localhost:3001/searchCity', {params: {city: city}}).then((res) => {
                setCityResults(res.data);
            });   
        }     

        const searchSubject = () => {
            Axios.get('http://localhost:3001/searchSubject', {params: {subject: subject}}).then((res) => {
                setSubjectResults(res.data);
            });   
        }

        const searchWinner = () => {
            Axios.get('http://localhost:3001/searchWinner', {params: {winner: winner}}).then((res) => {
                setWinnerResults(res.data);
            });   
        }
    
        const searchPrti = () => {
            Axios.get('http://localhost:3001/searchPrti', {params: {prti: prti}}).then((res) => {
                setPrtiResults(res.data);
            });   
        }

       return(
        <div className={amus.user_info}>
            <h1>당신이 원하시는 학우를 찾아드리겠습니다!</h1>
            <label>지역: </label>
            <input type="text" onChange={(event) => {
                setCity(event.target.value);
            }}></input>           
            <label>수강과목명: </label>
            <input type="text" onChange={(event) => {
                setSubject(event.target.value);
            }}></input>        
            <label>경진대회 수상자: </label>
            <input type="text" onChange={(event) => {
                setWinner(event.target.value);
            }}></input>        
            <label>경진대회 유경험자: </label>
            <input type="text" onChange={(event) => {
                setPrti(event.target.value);
            }}></input>

            <button onClick={searchCity}>지역검색</button>
            {
                cityResults.map((result1) => {
                    return <div> {result1.s_name}, {result1.email}</div>;
                })
            }
            <button onClick={searchSubject}>과목검색</button>
            {
                subjectResults.map((result2) => {
                    return <div> {result2.s_name}, {result2.email}</div>;
                })
            }
            <button onClick={searchWinner}>수상자검색</button>
            {
                winnerResults.map((result3) => {
                    return <div> {result3.comp_name}, {result3.s_name}, {result3.email}</div>;
                })
            }            
            <button onClick={searchPrti}>유경험자검색</button>
            {
                prtiResults.map((result4) => {
                    return <div> {result4.comp_name}, {result4.s_name}, {result4.email}</div>;
                })
            }
                                
        </div>
    );
}

export default TeamTongPage;