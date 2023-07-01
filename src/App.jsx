
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact";

import './App.css'
import { Route, Routes } from 'react-router-dom'
import SharedLayout from "./components/SharedLayout";
import Testimonials from "./pages/Testimonials";
import Services from "./pages/Services";
import About from "./pages/About";
import Team from "./pages/Team";

// import NotFound from './components/NotFound/NotFound'

function App() {

  return (
    <div className="App">
      {/* Routes for pages */}
     {/* Routes for pages */}
 <Routes >
 <Route path='/' element={<SharedLayout />} >
   <Route index element= {<Home />} />
   <Route path='/contact' element={<Contact />} />
   <Route path='/testimonials' element={<Testimonials />} />
   <Route path='/about' element={<About/>} />
   <Route path='/services' element={<Services />} />
   <Route path='/team' element={<Team />} />
 </Route>
 {/* <Route path='/*' element={<NotFound />} /> */}
</Routes >
    </div>
  )
}

export default App
