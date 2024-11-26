//Componente de presentación

const Contador = () => {
    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={aumentarContador} >+</button>
        </div>
    )
}
export default Contador