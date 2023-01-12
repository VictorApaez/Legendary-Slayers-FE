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
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signIn" element={<SignIn setUser={setUser} />} />
        <Route path="/signUp" element={<SignUp setUser={setUser} />} />
        {user && (
          <Route
            path="/userProfile"
            element={<UserProfile user={user} setUser={setUser} />}
          />
        )}
        <Route path="/champions" element={<Characters />} />
        <Route path="/champions/:champion_name" element={<CharacterInfo />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </div>
  );
}

export default App;
