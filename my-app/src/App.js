
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Regester from './pages/Auth/CreateNewAccount';
import SignIn from './pages/Auth/SignIn';
import HomePage from './pages/website/HomePage';
import CreateNewAccount from './pages/Auth/CreateNewAccount';
import ForgetPassword from './pages/Auth/ForgetPassword';

function App() {
  return (
    <div className="App">
    <Routes>
     
      <Route path='/' element={  <HomePage/>}></Route>
      <Route path='/SignIn' element={ <SignIn/>}></Route>
      <Route path='/CreateNewAccount' element={ <CreateNewAccount/>}></Route>
      <Route path='/ForgetPassword' element={ <ForgetPassword/>}></Route>

    </Routes>
   
   
    </div>
  );
}

export default App;
