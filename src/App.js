import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home, Login, Register, Dashboard, Quotes } from './pages'
import RequireAuth from './auth/auth'
import './assets/css/App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
