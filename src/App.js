import { Route, Routes } from 'react-router-dom';
import NavMenu from './components/nav-menu/NavMenu';
import LogIn from './pages/log-in/LogIn';
import SignUp from './pages/sign-up/SignUp';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Routes>
        <Route path='log-in' element={<LogIn />} />
        <Route path='sign-up' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
