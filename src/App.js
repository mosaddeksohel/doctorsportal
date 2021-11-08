import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Appointment from './Page/Appointment/Appointment/Appointment';
import Home from './Page/Home/Home/Home';
import Login from './Page/Login/Login/Login';
import PrivateRoute from './Page/Login/PrivateRoute/PrivateRoute';
import Register from './Page/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>

          <Routes >
            <Route exect path='/' element={<Home />}
            />
            <Route path='/home' element={<Home />}
            />
            <Route path='/login' element={<Login />}
            />
            <Route path='/register' element={<Register />}
            />
            <PrivateRoute path='/appointment' element={<Appointment />}
            />
          </Routes >
        </BrowserRouter>
      </AuthProvider>
    </div >
  );
}

export default App;
