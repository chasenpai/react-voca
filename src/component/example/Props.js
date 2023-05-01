import { useState } from "react"
import UserName from "./UserName";

export default function Props ({age}) {
    
    const [name, setName] = useState("jun");
    //props를 변경하려면 state를 만들어야함
    //const [age, setAge] = useState(props.age);
    const msg = age > 19 ? "성인" : "미성년자";

    return (
        <div>
            <h1>Properties</h1>
            <h2 id="name">{name}({age} : {msg})</h2>
            <UserName name={name}/>
            <button onClick={() => {
                setName(name === "jun" ? "woo" : "jun");
                //setAge(age + 1);
            }}>change</button>
        </div>
    )
}