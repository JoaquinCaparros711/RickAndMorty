import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/public/Footer";
import Main from "./components/public/Main";
import { NavBar } from "./components/public/NavBar";
import { Detail } from "./components/public/Detail";
import { UserForm } from "./components/public/UserForm";

function App() {
  return (
    <div>
      <NavBar />

        <Routes>
          <Route exact path={"/"} Component={Main} />
          <Route path={"/details/:id"} Component={Detail} />
          <Route path={"/user-form"} Component={UserForm} />
        </Routes>

      <Footer />
    </div>
  );
}

export default App;
