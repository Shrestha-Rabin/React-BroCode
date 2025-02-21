import PropTypes, { string } from 'prop-types'

function UserGreeting (props) {

        // if(props.isLoggedIn) {
        //     return(
        //         <h2>Welcome home {props.username}</h2>
        //     );
        // }
        // else {
        //     return (
        //         <h2>Please log in to cotinue.</h2>
        //     );
        // }

        // using ternary operation
        // return ( props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2> : <h2 className="login-message">Please log in to cotinue.</h2>);


        // by using const to make it more readable
        const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>;
        const loginMessage = <h2 className="login-message">Please log in to cotinue.</h2>;
        return (props.isLoggedIn ? welcomeMessage : loginMessage);


}

UserGreeting.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool,
}

UserGreeting.defaultProps = {
    username: "Guest",
    isLoggedIn: false,
}

export default UserGreeting