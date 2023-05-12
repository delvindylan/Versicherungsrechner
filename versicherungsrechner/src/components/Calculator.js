import { useState } from "react"

export default function Calculator() {
    
    const [versicherungssumme, setVersicherungssumme] = useState("")
    const [versicherungswert, setVersicherungswert] = useState("")
    const [schadenssumme, setSchadenssumme] = useState("")
    const [schadensdeckung, setSchadensdeckung] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        let calculatedSchadensdeckung = versicherungssumme / versicherungswert * schadenssumme
        let roundedSchadensdeckung = calculatedSchadensdeckung.toFixed(2)
        setSchadensdeckung(roundedSchadensdeckung)
        //let currencySchadensdeckung = `CHF ${schadensdeckung}`; noch bearbeiten!!!
        if (versicherungssumme.length < 1 && versicherungswert.length < 1 && schadenssumme.length < 1) {
            alert("Fill in the Values");
          } 
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
                            <td><input className="input" id="calculatorSubmit" type="submit" value="Calculate"/></td>
                            <td><input className="input" id="calculatorClear" type="button" value="Clear" onClick={ handleClear }/></td>
                        </tr>
                        </div>

                    </tbody>
                </table>
            </form>
            </div>

            <h3>Schadensdeckung der Hausratsversicherung: </h3>
            <h3> CHF {schadensdeckung}</h3>

        </div>

    )
}