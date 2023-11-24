import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalStyle } from "./GlobalStyle"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Cadastrar } from "./pages/Cadastrar"
import { Page404 } from "./pages/Page404"
import { Menu } from "./components/Menu"

function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="cadastrar" element={<Cadastrar/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App