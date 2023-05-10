import { useState } from "react"

export default function Calculator() {
    
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

        <div className="calculator">

            <h1 id="title">Insurance Calculator</h1>

            <h3>Description</h3>

            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
            
            <div className="form">
            <form onSubmit={ (e) => handleSubmit(e) }>
                <table>
                    <tbody>
                        
                        <div className="inputBoxes">
                        <tr>
                            <td><input className="input" type="number" value={versicherungssumme} placeholder="Versicherungssumme" onChange={ (e) => setVersicherungssumme(e.target.value) }/></td>
                        </tr>
                        <tr>
                            <td><input className="input" type="number" value={versicherungswert} placeholder="Versicherungswert" onChange={ (e) => setVersicherungswert(e.target.value) }/></td>
                        </tr>
                        <tr>
                            <td><input className="input" type="number" value={schadenssumme} placeholder="Schadenssumme" onChange={ (e) => setSchadenssumme(e.target.value) }/></td>
                        </tr>
                        </div>

                        <div className="inputButtons">
                        <tr>
                            <td><input className="input" type="submit" value="Submit"/></td>
                            <td><input className="input" type="button" value="Clear" onClick={ handleClear }/></td>
                        </tr>
                        </div>

                    </tbody>
                </table>
            </form>
            </div>

            <h3>Schadensdeckung der Hausratsversicherung: </h3>
            <h3>{schadensdeckung}</h3>

        </div>

    )
}