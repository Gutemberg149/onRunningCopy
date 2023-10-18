import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import GlobalStyle from "./assets/utils/GlobalStyle";
import ShoesPage from "./assets/pages/shoepage/ShoesPage";
import SingleProduct from "../src/assets/pages/singleProduct/SingleProduct";
import CartProvider from "./assets/contexts/CartToggleContex.jsx";
import Featured from "./assets/pages/featured/Featured";
import Orderstatus from "./assets/pages/ordertStatus/Orderstatus";
import ReferFriend from "./assets/pages/referFriend/ReferFriend";
import SignUpPage from "./assets/pages/signuppage/SignUpPage";
import Movement from "./assets/pages/movement/Movement";
import TheFace from "./assets/pages/movement/articlesPages/theface/TheFace";
import TheRunBeyond from "./assets/pages/movement/articlesPages/therunbeyond/TheRunBeyond";
import MoovementBoost from "./assets/pages/movement/articlesPages/moovementBoost/MoovementBoost";
import CreatiingChange from "./assets/pages/movement/articlesPages/creatingchanges/CreatiingChange";
import StepsToRun from "./assets/pages/movement/articlesPages/stepstorun/StepsToRun";
import Dedicated from "./assets/pages/movement/articlesPages/dedicated/Dedicated";
import TheUltimate from "./assets/pages/movement/articlesPages/theultimate/TheUltimate";
import Point2 from "./assets/pages/movement/articlesPages/point2/Point2";
import Innovation from "./assets/pages/inovation/Innovation";
import About_On from "./assets/pages/about_on/About_On";
import ScrollTotheTop from "./assets/componentes/scrollTotheTop";
import { UserAuthContextProvider } from "./assets/contexts/UserAuthContext";
import ProtectedRoute from "./assets/componentes/ProtectedRoute";
import UserAccount from "./assets/pages/ClinteAccount/UserAccount";
import Account from "./assets/pages/ClinteAccount/Account";
import CheckOut from "./assets/pages/checkout/CheckOut";
import OrderPlaced from "./assets/pages/OrderPlaced";
import ContactUs from "./assets/pages/contactUs/ContactUs";
import StoresLocation from "./assets/pages/stores/StoresLocation";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <GlobalStyle />
        <ScrollTotheTop />
        <UserAuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/useraccount"
              element={
                <ProtectedRoute>
                  <UserAccount />
                </ProtectedRoute>
              }
            />

            <Route path="/ShoesPage" element={<ShoesPage />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/featured" element={<Featured />} />
            <Route path="/orderstatus" element={<Orderstatus />} />
            <Route path="/referfriend" element={<ReferFriend />} />
            <Route path="/signUpPage" element={<SignUpPage />} />
            <Route path="/movement" element={<Movement />} />
            <Route path="/theface" element={<TheFace />} />
            <Route path="/therunbeyond" element={<TheRunBeyond />} />
            <Route path="/moovimentboost" element={<MoovementBoost />} />
            <Route path="/point2" element={<Point2 />} />
            <Route path="/creatingchenges" element={<CreatiingChange />} />
            <Route path="/stepstorun" element={<StepsToRun />} />
            <Route path="/dedicated" element={<Dedicated />} />
            <Route path="/theultimate" element={<TheUltimate />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/abouton" element={<About_On />} />
            <Route path="/stores" element={<StoresLocation />} />
            <Route path="/orderplaced" element={<OrderPlaced />} />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <CheckOut />
                </ProtectedRoute>
              }
            />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
