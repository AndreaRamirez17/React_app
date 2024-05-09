//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './componentes/navbar/Navbar.jsx';
import Hero from './componentes/hero/hero.jsx';
import Astros from "./componentes/astros/Astros.jsx"
import './App.css';
import { Routes,Route } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)
  const links=[
   {
    id:1,
    text:"home",
    link:'/',
   },
   {
    id:2,
    text:"apod",
    link:'/apod',
   },

   {
    id:3,
    text:"astros",
    link:"/astros",
   }
  ];
  return(
    <> 
     <Navbar header="space-app" links={links}/>
     <Routes>
       <Route element={<Hero/>} path='/'/>
       <Route element={<Astros/>}path='/astros'/>
     </Routes>
    </>
  ); 
}

export default App;





