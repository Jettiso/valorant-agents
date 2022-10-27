function Character({ characterInfo }) {
    const {
        displayName,
        description,
        fullPortrait,
        background,
        role,
        roleDesc,
        roleIcon,
        roleId,
    } = characterInfo;
    
    return (
        <div className="character__container">
            <div className="imgWrapper">
                <img src={fullPortrait} alt="" className="portrait" />
                <img src={background} alt="" className="bgi" />
            </div>
            <div className="character__details">
                <h1>{displayName}</h1>
                <p className="character__description">{description}</p>
                <div className="role__container">
                    <span><h2>{role}</h2> <img src={roleIcon} alt="" /></span>
                    <p>{roleDesc}</p>
                </div>
            </div>
        </div>
    );
}
export default Character;
