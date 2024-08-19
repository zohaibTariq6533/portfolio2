import './App.css';
import Home from './componants/Home';
import Navbar from './componants/Navbar';
import Skills from './componants/Skills'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Contact from './componants/Contact';
import Projects from './componants/Projects';
import ScrollToTop from './componants/ScrollToTop'
import { useEffect, useState } from 'react';
import { PulseLoader} from 'react-spinners';

function App() {
  const apiKey=process.env.REACT_APP_API_KEY;
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },1000)
  },[])
  return (
    <>{
      loading?<div className='loaderPage'>
        <PulseLoader

          color={'rgb(220,171,42)'}
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"/>
      </div>
    :
    <Router>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/contact' element={<Contact api={apiKey}/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
      </Routes>
      
      
    </Router>
    }
    </>
  );
}

export default App;
