import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React,{useState} from 'react';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";




function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message , type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
       
    }, 1500);

  } 

  const [mode, setMode] = useState('light');
  const toggleMode = () =>{
    if(mode ==='light'){
      setMode('dark');
      showAlert("dark mode is enabled","Success");
    }
    else{
      setMode('light');
      showAlert("Light mode is enabled","Success");
    }
  }
   return (
    <>
    {/* <Router> */}

   <Navbar title="TEXT UTILS" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
      {/* <Switch> */ }
          {/* <Route path="/About">
            <About />
          </Route>
          <Route path="/">
          <TextForm/>
          
          </Route>
        </Switch>
    </Router> */} 
  <TextForm/>
    </>
  );
}

export default App;
