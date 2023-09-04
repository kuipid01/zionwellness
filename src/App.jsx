
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact";
import { motion, AnimatePresence } from 'framer-motion';
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
  
   <Route
          index
          element={
            <AnimatePresence  mode='wait'>
              <motion.div
               initial={{ x:-100, }}
                animate={{ x:0, }}
                exit={{ opacity:0,}}
                transition={{duration:.6}}
                key="home"
              >
                <Home />
              </motion.div>
            </AnimatePresence>
          }
        />
        <Route
          path="/contact"
          element={
            <AnimatePresence  mode='wait'>
              <motion.div
              initial={{ x:-100, }}
                animate={{ x:0, }}
                exit={{ opacity:0,}}
                transition={{duration:.6}}
                key="contact"
              >
                <Contact />
              </motion.div>
            </AnimatePresence>
          }
        />
        <Route
          path="/testimonials"
          element={
            <AnimatePresence  mode='wait'>
              <motion.div
              initial={{ x:-100, }}
                animate={{ x:0, }}
                exit={{ opacity:0,}}
                transition={{duration:.6}}
                key="testimonials"
              >
                <Testimonials />
              </motion.div>
            </AnimatePresence>
          }
        />
        <Route
          path="/about"
          element={
            <AnimatePresence  mode='wait'>
              <motion.div
              initial={{ x:-100, }}
                animate={{ x:0, }}
                exit={{ opacity:0,}}
                transition={{duration:.6}}
                key="about"
              >
                <About />
              </motion.div>
            </AnimatePresence>
          }
        />
        <Route
          path="/services"
          element={
            <AnimatePresence  mode='wait'>
              <motion.div
              initial={{ x:-100, }}
                animate={{ x:0, }}
                exit={{ opacity:0,}}
                transition={{duration:.6}}
                key="services"
              >
                <Services />
              </motion.div>
            </AnimatePresence>
          }
        />
        <Route
          path="/team"
          element={
            <AnimatePresence  mode='wait'>
              <motion.div
                 initial={{ x:-100, }}
                animate={{ x:0, }}
                exit={{ opacity:0,}}
                transition={{duration:.6}}
                key="team"
              >
                <Team />
              </motion.div>
            </AnimatePresence>
          }
        />
 </Route>
 {/* <Route path='/*' element={<NotFound />} /> */}
</Routes >
    </div>
  )
}

export default App
