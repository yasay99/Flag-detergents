import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HowToUse from "./Pages/HowToUse";
import Types from "./Pages/Types";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/"element={<Home/>}/>
    <Route path="/Home"element={<Home/>}/>
    <Route path="/About"element={<About/>}/>
    <Route path="/Contact"element={<Contact/>}/>
    <Route path="/HTW"element={<HowToUse/>}/>
    <Route path="/Types"element={<Types/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
