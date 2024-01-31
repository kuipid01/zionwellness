import Home from "./pages/Home/Home";
import Contact from "./pages/Contact";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Testimonials from "./pages/Testimonials";
import Services from "./pages/Services";
import About from "./pages/About";
import Team from "./pages/Team";
import NewTeam from "./pages/NewTeam";

// import NotFound from './components/NotFound/NotFound'

function App() {
  const transitions = { duration: 1, ease: [0.6, 0.01, 0.9, 0.05] };
  return (
    <div className="App">
      {/* Routes for pages */}
      {/* Routes for pages */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: "2%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  exit={{ opacity: 0, y: "2%" }}
                  transition={transitions}
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
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: "2%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  exit={{ opacity: 0, y: "2%" }}
                  transition={transitions}
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
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: "2%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  exit={{ opacity: 0, y: "2%" }}
                  transition={transitions}
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
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: "2%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  exit={{ opacity: 0, y: "2%" }}
                  transition={transitions}
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
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: "2%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  exit={{ opacity: 0, y: "2%" }}
                  transition={transitions}
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
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: "-2%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  exit={{ opacity: 0, y: "2%" }}
                  transition={transitions}
                  key="team"
                >
                  <NewTeam />
                </motion.div>
              </AnimatePresence>
            }
          />
        </Route>
        {/* <Route path='/*' element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
