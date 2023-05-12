
import { Link } from "react-router-dom";

export default function Home () {


    return (

        <div>


        <div className="homeTitle">

            <h1>Insurance Calculator</h1>

        </div>

        <Link to="/calculator">
            <input className="startButton" type="button" value="Start"/>
        </Link>


        </div>

    )
}