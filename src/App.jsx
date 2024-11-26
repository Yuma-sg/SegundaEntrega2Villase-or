import Banner from "./components/Clases/Banner";
import EjemploContador from "./components/Clases/EjemploContador"
import "./App.css"

function App() {

  const saludo = () => {
    alert("saludos desde App")
  }

  return (
    <>
     <NavBar />
     <ItemListContainer />
    </>
    
  )
}

export default App