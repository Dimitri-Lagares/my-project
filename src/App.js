import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home, Login, Register, Dashboard, Quotes } from './pages'
import RequireAuth from './auth/auth'
import './assets/css/App.css';
import Layout from './components/layout/Layout';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path='/quotes' element={<RequireAuth><Quotes/></RequireAuth>}/> */}
      <Route path='/quotes' element={<Quotes/>}/>
      <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
