import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Appointment from './Page/Appointment/Appointment/Appointment';

import Home from './Page/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes >
          <Route path='/home' element={<Home />}
          />
          <Route path='/appointment' element={<Appointment />}
          />

        </Routes >



      </BrowserRouter>
    </div >
  );
}

export default App;
