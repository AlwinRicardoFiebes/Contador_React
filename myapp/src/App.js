import "./App.css"
import { useState } from "react"

export default function App() {

    const [numero, setNumero] = useState(0)

    function aumentar() {
        setNumero(numero + 1)
    }

    function diminuir() {
        setNumero(numero - 1)
    }

    function resetar() {
        setNumero(0)
    }

    return <div className="manter">    
        <h1>Contador</h1>
        <p>{numero}</p>
        <div>
        <button className="button1" onClick={diminuir}>Menos</button>
        <button className="button1" onClick={resetar}>Zerar</button>
        <button className="button1" onClick={aumentar}>Mais</button>
        </div>
    </div>
    
}