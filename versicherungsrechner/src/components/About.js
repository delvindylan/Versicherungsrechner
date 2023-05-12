import { useState } from "react";

export default function About() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstname.length > 0 && lastname.length > 0 && email.length > 0 && message.length > 0) {
        alert("Submit Successful");
        handleClear()
      } else {
        alert("Submit failed, fill in the form");
      }
  };

  function handleClear() {
    setFirstname("");
    setLastname("");
    setEmail("");
    setMessage("");
  }

  return (

    <div>

        <h1 className="aboutTitle">About</h1>

        <div className="aboutPage">
        

            <div className="aboutText">
                <h2 className="aboutLabel">Description</h2>
                <p>Dieser Versicherungsrechner dient zur Berechnung der Schadensdeckung bei einer Hausratsversicherung. Dafür wird die Versicherungssumme, der Versicherungswert und die Schadenssumme verwendet.</p>
                <p>Die Versicherungssumme ist die versicherte Summe, welche der Versicherung vom Versicherungsnehmer angegeben wurde.</p>
                <p>Der Versicherungswert ist der Gesamtwert aller Objekte eines Hausrats.</p>
                <p>Die Schadenssumme ist die Summe des angerichteten Schadens.</p>
            </div>  

        <form className="contactForm" onSubmit={(e) => handleSubmit(e)}>
            <table>
                <h2 className="contactLabel">Contact</h2>
            <tbody>
                <div>
                <tr>
                    <td>
                    <input
                        className="contactInput"
                        type="text"
                        value={firstname}
                        placeholder="Firstname"
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                    </td>
                </tr>

                <tr>
                    <td>
                    <input
                        className="contactInput"
                        type="text"
                        value={lastname}
                        placeholder="Lastname"
                        onChange={(e) => setLastname(e.target.value)}
                    />
                    </td>
                </tr>

                <tr>
                    <td>
                    <input
                        className="contactInput"
                        type="text"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </td>
                </tr>
                <tr>
                    <td>
                    <input
                        className="contactInput"
                        type="text"
                        value={message}
                        placeholder="Message"
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    </td>
                </tr>
                </div>

                <div className="contactButtons">
                <tr>
                    <td>
                        <input
                        id="contactSubmit"
                        className="contactButton" 
                        type="submit" 
                        value="Submit" 
                        />
                    </td>
                    <td>
                    <input
                        id="contactClear"
                        className="contactButton"
                        type="button"
                        value="Clear"
                        onClick={handleClear}
                    />
                    </td>
                </tr>
                </div>
            </tbody>
            </table>
        </form>
        </div>
    </div>
  );
}
