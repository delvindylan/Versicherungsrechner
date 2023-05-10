import { useState } from "react"

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
        <div>

            <h1 id="title">Versicherungsrechner</h1>

            <h3>Beschreibung</h3>

            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>

            <h2>Rechner</h2>
            
            <div className="schadendeckungsbrechnung">
                <h3 className="outerpadding-title">Schadendeckungs-Berechnung</h3>

                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
            </div>
            
            <div className="outerpadding">
            <form onSubmit={ (e) => handleSubmit(e) }>
                <table>
                    <tbody>
                        
                        <tr>
                            <td><input className="input" type="number" value={versicherungssumme} placeholder="Versicherungssumme" onChange={ (e) => setVersicherungssumme(e.target.value) }/></td>
                        </tr>
                        <tr>
                            <td><input className="input" type="number" value={versicherungswert} placeholder="Versicherungswert" onChange={ (e) => setVersicherungswert(e.target.value) }/></td>
                        </tr>
                        <tr>
                            <td><input className="input" type="number" value={schadenssumme} placeholder="Schadenssumme" onChange={ (e) => setSchadenssumme(e.target.value) }/></td>
                        </tr>
                        <tr>
                            <td><input className="input" type="submit" value="Submit"/></td>
                            <td><input className="input" type="button" value="Clear" onClick={ handleClear }/></td>
                        </tr>

                    </tbody>
                </table>
            </form>
            </div>

            <h3>Schadensdeckung: </h3>
            <h3>{schadensdeckung}</h3>

        </div>

    )
}