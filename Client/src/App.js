import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Characters from "./components/Characters/Characters";
import CharacterInfo from "./components/CharacterInfo/CharacterInfo";
import Items from "./components/Items/Items";
import SignIn from "./components/AuthForm/SignIn";
import SignUp from "./components/AuthForm/SignUp";
import UserProfile from "./components/User/UserProfile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/champions" element={<Characters />} />
        <Route path="/champions/:champion_name" element={<CharacterInfo />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </div>
  );
}

export default App;
