function Character({ characterInfo }) {
    const { displayName, description, fullPortrait, uuid } = characterInfo;


    return (
        <div className="character__container">
            <img src={fullPortrait} alt="" />
        </div>
    )
}
export default Character;
