import { useState } from "react"
import "./style.css"

export default function Homepage () {

    const [versicherungssumme, setVersicherungssumme] = useState("")
    const [versicherungswert, setVersicherungswert] = useState("")
    const [schadenssumme, setSchadenssumme] = useState("")
    const [schadensdeckung, setSchadensdeckung] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setSchadensdeckung(versicherungssumme/versicherungswert*schadenssumme)
    }

    function handleClear() {
        setVersicherungssumme("")
        setVersicherungswert("")
        setSchadenssumme("")
        setSchadensdeckung("")
    }

    return (
        <div id="outerpadding">

            <h1 id="title">Versicherungsrechner</h1>

            <h3>Beschreibung</h3>

            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>

            <h2>Rechner</h2>
            
            <div className="schadendeckungsbrechnung">
                <h3>Schadendeckungs-Berechnung</h3>
                
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
            </div>
            

            <form onSubmit={ (e) => handleSubmit(e) }>
                <table>
                    <tbody>
                        <tr>
                            <td><input type="text" value={versicherungssumme} placeholder="Versicherungssumme" onChange={ (e) => setVersicherungssumme(e.target.value) }/></td>
                        </tr>
                        <tr>
                            <td><input type="text" value={versicherungswert} placeholder="Versicherungswert" onChange={ (e) => setVersicherungswert(e.target.value) }/></td>
                        </tr>
                        <tr>
                            <td><input type="text" value={schadenssumme} placeholder="Schadenssumme" onChange={ (e) => setSchadenssumme(e.target.value) }/></td>
                        </tr>
                        <tr>
                            <td><input type="submit" value="Submit"/></td>
                            <td><input type="button" value="Clear" onClick={ handleClear }/></td>
                        </tr>
                    </tbody>
                </table>
            </form>

            <h3>Schadensdeckung: </h3>
            <h3>{schadensdeckung}</h3>

        </div>

    )
}