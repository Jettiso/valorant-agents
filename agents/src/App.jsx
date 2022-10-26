import { useState } from "react";
import { useEffect } from "react";
import Character from "./components/Character";

function App() {

    const [data, setData] = useState([]);
    const [characterInfo, setCharacterInfo] = useState({
        displayName: "",
        displayIconSmall: "", 
        description: "",
        background: "",
        fullPortrait: "",
        uuid : ""

    })

    console.log(characterInfo)
    
    useEffect(() => {
        fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
        .then(res => res.json())
        .then(resdata => setData(resdata.data))

    },[])

    return (
        <div className="app">
            <Character info={data} setCharInfoHandler={setCharacterInfo}/>
        </div>
    )

}

export default App;