import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./pages/Test";
import styles from './App.module.css'
import DetailsPlastic from "./pages/DetailsPlastic";
import Detailsboard from "./pages/Detailsboard";
import DetailsPaper from "./pages/DetailsPaper";
import DetailsGlass from "./pages/DetailsGlass";
import DetailsTextile from "./pages/DetailsTextile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Recicle from "./pages/Recicle";
import Profile from "./pages/Perfil";
import CopyRecicle from "./pages/CopyRecicle";

function App() {
  return (
    <div className={styles.App}>

    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/plasticos" element={<DetailsPlastic />} />
        <Route exact path="/cartón" element={<Detailsboard />} />
        <Route exact path="/papel" element={<DetailsPaper />} />
        <Route exact path="/vidrio" element={<DetailsGlass />} />
        <Route exact path="/textil" element={<DetailsTextile />} />
        <Route exact path="/recicla" element={<Recicle />} />
        <Route exact path="/perfil" element={<Profile />} />
        <Route exact path="/copio" element={<CopyRecicle />} />




        <Route exact path="/auth/login" element={<Login />} />
        <Route exact path="/auth/register" element={<Register />} />




        

 


        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
