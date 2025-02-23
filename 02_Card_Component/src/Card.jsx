import profilePic from './assets/profile.jpg';

function Card () {

    return(

        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h1 className='card-title'>Rabin Shrestha</h1>
            <p className='card-discription'>I am having fun with my sadness.</p>
        </div>
    )
}

export default Card