
function ProfilePic () {
    const imageUrl = './src/assets/lordganesh.jpg';

    const handleClick = (e)=> e.target.style.display = "none";

    return (
        <>
            <img src={imageUrl} alt="profile picture" onClick={(e) => handleClick(e)} />
        </>
    );
}

export default ProfilePic