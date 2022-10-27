function Character({ characterInfo }) {
    const { displayName, description, fullPortrait, uuid, background } = characterInfo;

    return (
        <div className="character__container">
            <div className="imgWrapper">
                <img src={fullPortrait} alt="" className="portrait"/>
                <img src={background} alt="" className="bgi"/>
            </div>
            <div className="character__details">
                <h1>{displayName}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}
export default Character;
