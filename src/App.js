import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./about/About";
// import { createBrowserRouter } from "react-router-dom";
import MasterLayout from "./masterlayout/MasterLayout";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import Protopholio from "./potopholio/Portopholi";


const router = createBrowserRouter([
{path:'',element:<MasterLayout/>,children:[
  {path:'',element:<Home/>},
  {path:'about',element:<About/>},
  {path:'contact',element:<Contact/>},
  {path:'protopholio',element:<Protopholio/>},
 
]}
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

// 


export default App;
