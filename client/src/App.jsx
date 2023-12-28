import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router,Link,Routes,Route,useNavigate} from 'react-router-dom'
import HomeComponent from './components/HomeComponent'
import Registration from './components/Registration'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<HomeComponent/>}/>
        <Route path="/registration" element={<Registration/>}/>

        </Routes>
        </Router>
    </>
  )
}

export default App
