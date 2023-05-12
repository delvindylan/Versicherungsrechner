import { useState } from "react"

export default function Calculator() {
    
    const [versicherungssumme, setVersicherungssumme] = useState("")
    const [versicherungswert, setVersicherungswert] = useState("")
    const [schadenssumme, setSchadenssumme] = useState("")
    const [schadensdeckung, setSchadensdeckung] = useState("")
    const [versicherungsStatus, setVersicherungsStatus] = useState("")
    const [versicherungsText, setVersicherungsText] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        let calculatedSchadensdeckung = versicherungssumme / versicherungswert * schadenssumme
        let roundedSchadensdeckung = calculatedSchadensdeckung.toFixed(2)
        setVersicherungsText("Schadensdeckung der Hausratsversicherung")
        setSchadensdeckung("CHF " + roundedSchadensdeckung)
        //let currencySchadensdeckung = `CHF ${schadensdeckung}`; noch bearbeiten!!!
        if (versicherungssumme.length < 1 && versicherungswert.length < 1 && schadenssumme.length < 1) {
            alert("Fill in the Values");
            handleClear()
          }

        if (versicherungssumme > versicherungswert) {
            setVersicherungsStatus("Sie sind überversichert.")
        } else if (versicherungswert > versicherungssumme) {
            setVersicherungsStatus("Sie sind unterversichert.")
        } 
    }

    function handleClear() {
        setVersicherungssumme("")
        setVersicherungswert("")
        setSchadenssumme("")
        setSchadensdeckung("")
        setVersicherungsStatus("")
        setVersicherungsText("")
    }

    return (

        <div className="calculator">

            <h1 id="title">Insurance Calculator</h1>

            

            <div className="form">
            <form onSubmit={ (e) => handleSubmit(e) }>
                <table>
                    <tbody>
                        
                        <div className="inputBoxes">
                        <tr>
                            <td><input id="versicherungssumme" className="input" type="number" value={versicherungssumme} placeholder="Versicherungssumme" onChange={ (e) => setVersicherungssumme(e.target.value) }/></td>
                        </tr>
                        <tr>
                            <td><input id="versicherungswert" className="input" type="number" value={versicherungswert} placeholder="Versicherungswert" onChange={ (e) => setVersicherungswert(e.target.value) }/></td>
                        </tr>
                        <tr>
                            <td><input id="schadenssumme" className="input" type="number" value={schadenssumme} placeholder="Schadenssumme" onChange={ (e) => setSchadenssumme(e.target.value) }/></td>
                        </tr>
                        </div>

                        <div className="inputButtons">
                        <tr>
                            <td><input className="input" id="calculatorSubmit" type="submit" value="Calculate"/></td>
                            <td><input className="input" id="calculatorClear" type="button" value="Clear" onClick={ handleClear }/></td>
                        </tr>
                        </div>

                    </tbody>
                </table>
            </form>
            </div>
            
            <h2> {versicherungsText} </h2>

            <h2> {schadensdeckung} </h2>

            <h2> {versicherungsStatus} </h2>

        </div>

    )
}