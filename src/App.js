import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
function App() {
  return (
  <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>}/>
   </Routes>
   </BrowserRouter>
  </>
  );
}

export default App;
