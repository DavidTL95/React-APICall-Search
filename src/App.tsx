
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './common/Header/Header'
import Home from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import Detail from './pages/Detail/Detail'
import './App.css'

// Flujo de información -> API --> apicall --> useeffect para hacer la api call --> usestate para almacenar la información --> renderizado

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
