


function Character({ info, setCharInfoHandler }) {

    const result = info.map((char) => {
        let { displayName, displayIconSmall, background, description, fullPortrait, uuid } = char;

        return (
            <div className="character" key={uuid} onClick={(e) => {
                setCharInfoHandler({
                    displayName: {displayName},
                    displayIconSmall: {displayIconSmall}, 
                    description: {description},
                    background: {background},
                    fullPortrait: {fullPortrait},
                    uuid : {uuid}
            
                })
            }}>
                <h1>{displayName}</h1>
                <img src={displayIconSmall} alt={displayName} />
                <p className="description">{description}</p>
                <img src={background} alt="background" />
                <img src={fullPortrait} alt="portrait" />
            </div>
        )
    }) 


    return (
        <>
        {result}
        </>
    )
}

export default Character;