// import logo from './logo.svg';
import './App.css';
// import {BrowserRouter, Switch} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import MainPage from './pages/MainPage';
import MainNavigation from './components layout/MainNavigation';

// import {Link} from 'react-scroll';
import FunctionIntroPage from './pages/FunctionIntroPage';
import BoardPage from './pages/BoardPage';
import LoginPage from './pages/LoginPage';
import FindPwPage from './pages/FindPwPage';
import SignupPage from './pages/SignupPage';
import BoardWritePage from './pages/BoardWritePage';
import BoardContentViewPage from './pages/BoardContentViewPage';
import BoardModifyPage from './pages/BoardModifyPage';
import BoardReplyPage from './pages/BoardReplyPage';
// import ThreeDPage from './pages/ThreeDPage';/
import BoardDeletePage from './pages/BoardDeletePage';

function App() {
  
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false:true);
    return () => (window.onscroll=null);
  };
  return (
    <div>      
          <MainNavigation isScrolled={isScrolled}/>
          <Routes>  
            <Route path='/' element={<MainPage />}/> 
            {/* <Route path='/3d' element={<ThreeDPage />}/>       */}
            <Route path='/intro' element={<FunctionIntroPage />}/>
            <Route path='/board' element={<BoardPage />}/>
            <Route path='/login' element={<LoginPage />}/>
            <Route path='/findpw' element={<FindPwPage />}/>[]
            <Route path='/signup' element={<SignupPage />}/>
            <Route path='/board/write' element={<BoardWritePage />}/>
            <Route path='/board/contentview' element={<BoardContentViewPage />}/>
            <Route path='/board/modify' element={<BoardModifyPage />}/>
            <Route path='/board/reply' element={<BoardReplyPage />}/>
            <Route path='/board/delete' element={<BoardDeletePage />}/>
            
          </Routes>    
          
    </div>
    
  );
}

export default App;




