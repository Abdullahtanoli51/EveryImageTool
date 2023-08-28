import { useState } from 'react';
import "../public/css/main.css"
import "../public/css/vendors.css"
import '../public/css/animate.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'

import AppRoutes from '../Routes/AppRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <AppRoutes></AppRoutes>
      
      
    
    </>
  )
}

export default App
