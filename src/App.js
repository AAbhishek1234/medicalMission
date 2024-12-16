import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import ContactForm from './components/ContactForm';
function App() {
  return (
    <>

     <Router>
     <Routes>
     <Route path='/' element={<Home/>}> </Route>
     <Route path='/apply' element={<ContactForm/>}> </Route>
     </Routes>
        </Router>
    
    
    
    </>
  )
}

export default App