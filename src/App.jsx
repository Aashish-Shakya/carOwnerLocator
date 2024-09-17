import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { SignIn } from "./pages/Signin";
import { SignUp } from "./pages/SignUp";
import { Navbar } from "./components/Navbar";
import { Dashboard } from "./pages/Dashboard";
// import { UserProvider } from "./pages/Users";

const App = () => {
   
  return(
  <>
    <BrowserRouter >
    
    <Navbar/>
        
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='dashboard' element={<Dashboard />}></Route>


      </Routes>
    
    </BrowserRouter>
  </>
  )
};

export default App;