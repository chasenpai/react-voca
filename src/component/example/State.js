import { useState } from "react"; //useState 사용 시 import

export default function State() {

    //let name = "jun";
    const [name, setName] = useState("jun");

    function changeName() {
        //name = name === "jun" ? "woo" : "jun";
        //document.getElementById("name").innerText = name;
        setName(name === "jun" ? "woo" : "jun");
    }

    return(
        <div>
            <h1>State</h1>
            <h2>{name}</h2>
            <button onClick={changeName}>change</button>
        </div>
    )
}