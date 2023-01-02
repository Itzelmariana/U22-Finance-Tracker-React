import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAuthContext } from './hook/useAuthContext';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';

function App() {
  const { authIsReady } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
