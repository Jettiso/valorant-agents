import '../style.css'

function CharIcons({info, setCharInfoHandler}) {

        const result = info.map((char) => {
            let { displayName, displayIcon, background, description, fullPortrait, uuid } = char;
            
            return (
                <div className="characterIcon" key={uuid} onClick={(e) => {
                    setCharInfoHandler({
                        displayName: displayName,
                        displayIcon: displayIcon, 
                        description: description,
                        background: background,
                        fullPortrait: fullPortrait,
                        uuid : uuid
                
                    })
                }}>
                    <img src={displayIcon} alt="" />
                </div>
            )
        }) 
        // console.log(info)
        return (
            <>
                    <div className="icons__container">
                        {result}
                    </div>
            </>
        )
    }


export default CharIcons;