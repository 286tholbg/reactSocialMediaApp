import "./login.scss"
import React, {useContext} from "react"
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/authContext"

const Login = () => {

    const {login} = useContext(AuthContext)
    console.log(login)

    const handleLogin = () => {
        login()
    }

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula, leo id sollicitudin pharetra, augue leo pellentesque urna, sit amet rutrum ex tortor eu est.</p>
                    <span>Do you have an account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login