import { useEffect, useState } from "react";
import Word from "./Word";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {Link} from 'react-router-dom';

export default function Day() {
    
    const {day} = useParams();
    //커스텀 hooks
    const words = useFetch(`http://localhost:3001/words?day=${day}`)

    return (
        <>
            <h2>Day {day}</h2>
            {words.length === 0 && <span>Loading...</span>}
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id}/>
                    ))}
                </tbody>
            </table>
        </>
    );
}