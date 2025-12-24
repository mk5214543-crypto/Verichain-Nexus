// 
// import Navbar from './Components/Navbar/Navbar'
// import Hero from './Components/Navbar/Pages/Hero/Hero'
// import Project from './Components/Navbar/Pages/Project/Project'
// import About from './Components/Navbar/Pages/About/About';
// import Contact from './Components/Navbar/Pages/Contact/Contact';
// import Footer from './Components/Footer/Footer';
// function App() {
//   return (
//     <>
//     <div className='w-full'>
//        
//       <Navbar></Navbar>
//       {/* <Hero></Hero>
//       <Project></Project>
//       <About></About>
//       <Contact></Contact>
//       <Footer></Footer> */}
//     </div>
     
//     </>
//   );
// }

// export default App;







import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Snowparticles from './Components/BackgroundParticles/LinkedNodesBackground'
import Loginform from './Components/Loginform/Loginform';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Navbar/Pages/Home/Home';
import About from './Components/Navbar/Pages/About/About';
import ProjectCard from './Components/Navbar/Pages/Projectcard/ProjectCard'
import Contact from './Components/Navbar/Pages/Contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-[#E5E7EB]">
      {/* Agar particles use karna ho to yahan */}
       

      <Router>
        <Snowparticles /> 
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectCard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
