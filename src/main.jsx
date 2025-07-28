import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GetNewTask from "./components/newTask.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from './components/heading.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
  <div className="container" style={{
    height:'auto', 
    width:'100vh', 
    backgroundColor:'hsla(88, 100%, 51%, 1.00)', 
    marginTop:"10px",
    borderRadius:"10px"
    }}>
    <Heading></Heading>
    <GetNewTask></GetNewTask>
  </div>

  </StrictMode>,
)
