import './App.css'
import Navbar from "./Components/Navbar.jsx";
import { motion } from "framer-motion"
import styles from './Components/Checker.module.scss'
import styles1 from './Components/Navbar.module.scss'
import {useRef,useState} from "react";
import Checker from "./Components/Checker.jsx";

function App() {
    const constraintsRef = useRef(null)
    const [colour, setcolour] = useState("blue");
  return (
      <motion.div className={styles.div} ref={constraintsRef}>
          <Checker color={colour}/>
          <motion.div className={styles1.navi} drag dragConstraints={constraintsRef} whileDrag={{ scale: 1.1 }}>
              <Navbar color={colour} setting={setcolour}/>
          </motion.div>
      </motion.div>
  )
}

export default App
