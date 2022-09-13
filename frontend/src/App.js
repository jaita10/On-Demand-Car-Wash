import { Route, Routes } from 'react-router-dom';
import './App.css';
import FrontHomePage from './Components/FrontPage/FrontHomePage';
import LoginPage from './Components/Login/LoginPage';
import RegisterPage from './Components/Register/RegisterPage';

function App() {
  return (
    <div >

      <Routes>
        <Route exact path='/' element={<FrontHomePage />}/>
        <Route exact path='/login' element={<LoginPage />}/>
        <Route exact path='/register' element={<RegisterPage />}/>
      </Routes>

    </div>

  );
}

export default App;
