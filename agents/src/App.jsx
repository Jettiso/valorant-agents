import { useState } from "react";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Character from "./components/Character";
import CharIcons from "./components/CharIcons";
import Footer from "./components/Footer";
import './style.css';

function App() {

    const [data, setData] = useState([]);
    const [characterInfo, setCharacterInfo] = useState({
        
    })

    
    useEffect(() => {
        fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
        .then(res => res.json())
        .then(resdata => setData(resdata.data))

    },[])

    return (
        <div className="app">
            <Nav />
            <Character characterInfo={characterInfo}/>
            <CharIcons info={data} setCharInfoHandler={setCharacterInfo}/>
            <Footer />
        </div>
    )

}

export default App;