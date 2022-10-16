import { Route, Routes } from "react-router-dom";
import "./App.css";
import FallBackPage from "./Components/FallBackPage";
import FrontHomePage from "./Components/FrontPage/FrontHomePage";
import LoginPage from "./Components/Login/LoginPage";
import ProfilePage from "./Components/Account/ProfilePage";
import UserPage from "./Components/Account/UserPage";
import RegisterPage from "./Components/Register/RegisterPage";
import PrivacyPolicy from "./Components/Static Pages/PrivacyPolicy";
import TermsOfUse from "./Components/Static Pages/TermsOfUse";
import WashPacks from "./Components/Account/WashPacks";
import AddOns from "./Components/Account/AddOns";
import Cars from "./Components/Account/Cars";
import WashPackAdd from "./Components/Packages/WashPackAdd";
import WashPackUpdate from "./Components/Packages/WashPackUpdate";
import AddOnAdd from "./Components/Packages/AddOnAdd";
import CarAdd from "./Components/Packages/CarAdd";
import OrderPage from "./Components/Order/OrderPage";
import AddOnUpdate from "./Components/Packages/AddOnUpdate";
import CarUpdate from "./Components/Packages/CarUpdate";
import OrderList from "./Components/Order/OrderList";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<FrontHomePage />} />

        <Route exact path="/login" element={<LoginPage />} />

        <Route exact path="/user" element={<UserPage />}>
          <Route exact path="profile" element={<ProfilePage />} />

          <Route exact path="orderlist" element={<OrderList />} />

          <Route exact path="book" element={<OrderPage />} />
          <Route exact path="selectcar" element={<Cars select={false} />} />
          <Route exact path="selectwashpack" element={<WashPacks select={false} />}/>
          <Route exact path="selectaddon" element={<AddOns select={false} />} />

          <Route exact path="washpacks" element={<WashPacks select={true} />} />
          <Route exact path="addwashpack" element={<WashPackAdd />} />
          <Route exact path="updatewashpack" element={<WashPackUpdate />} />

          <Route exact path="addons" element={<AddOns select={true} />} />
          <Route exact path="addaddon" element={<AddOnAdd />} />
          <Route exact path="updateaddon" element={<AddOnUpdate />} />

          <Route exact path="cars" element={<Cars select={true} />} />
          <Route exact path="addcar" element={<CarAdd />} />
          <Route exact path="updatecar" element={<CarUpdate />} />

          <Route exact path="privacypolicy" element={<PrivacyPolicy />} />
          <Route exact path="termsofuse" element={<TermsOfUse />} />
        </Route>

        <Route exact path="/register" element={<RegisterPage />} />

        <Route exact path="*" element={<FallBackPage />} />
      </Routes>
    </div>
  );
}

export default App;
