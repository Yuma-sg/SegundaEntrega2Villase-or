import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

function App() {

  return (
    <div className="container-app">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={ <ItemListContainer greeting={"Bienvenidos a Mr. Jugo"} /> } />
          <Route path="/category/:idCategory" element={ <ItemListContainer greeting={"Bienvenidos a Mr. Jugo"} /> } />
          <Route path="/detail/:idProduct" element={ ItemDetailContainer} />
        </Routes>
        
        <Route path="*" element={ <div>Error 404 - Página no encontrada</div> } />
      </BrowserRouter>
    </div>
    
  )
}

export default App