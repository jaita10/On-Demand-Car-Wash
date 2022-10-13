import { Route, Routes } from 'react-router-dom';
import './App.css';
import FallBackPage from './Components/FallBackPage';
import FrontHomePage from './Components/FrontPage/FrontHomePage';
import LoginPage from './Components/Login/LoginPage';
import ProfilePage from './Components/Account/ProfilePage';
import UserPage from './Components/Account/UserPage';
import RegisterPage from './Components/Register/RegisterPage';
import PrivacyPolicy from './Components/Static Pages/PrivacyPolicy';
import TermsOfUse from './Components/Static Pages/TermsOfUse';
import WashPacks from './Components/Account/WashPacks';
import AddOns from './Components/Account/AddOns';
import Cars from './Components/Account/Cars';

function App() {
  return (
    <div >

      <Routes>
        <Route exact path='/' element={<FrontHomePage />} />

        <Route exact path='/login' element={<LoginPage />} />

        <Route exact path='/user' element={<UserPage />} >

          <Route exact path='profile' element={<ProfilePage />} />
          <Route exact path='washpacks' element={<WashPacks />} />
          <Route exact path='addons' element={<AddOns />} />
          <Route exact path='cars' element={<Cars />} />
          <Route exact path='privacypolicy' element={<PrivacyPolicy />} />
          <Route exact path='termsofuse' element={<TermsOfUse />} />

        </Route>

        <Route exact path='/register' element={<RegisterPage />} />

        <Route exact path='*' element={<FallBackPage />} />

      </Routes>

    </div>

  );
}

export default App;
