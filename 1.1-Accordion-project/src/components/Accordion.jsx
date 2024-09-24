import { useState } from "react";

export default function Accordion({ acc, singleAcc }){
    const [infoVisibility, setInfoVisibility] = useState(false);
    const toggleDisplay = () => {
        setInfoVisibility((prev) => !prev);
    }
    return (
        <>
            <div id="boxCont" key={acc.id}>
                <div id="titleCont">
                    <p id="boxHeading">{acc.title}</p>
                    <button id="boxBtn" onClick={toggleDisplay}>{infoVisibility?"↑":"↓"}</button>
                </div>
                <p id="boxInfo" className={infoVisibility ? "": "hidden"}>{acc.info}</p>
            </div>
        </>
    );
}