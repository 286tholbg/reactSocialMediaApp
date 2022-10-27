import "./register.scss"

const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Lama Social.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula, leo id sollicitudin pharetra, augue leo pellentesque urna, sit amet rutrum ex tortor eu est.</p>
                    <span>Do you have an account?</span>
                    <button>Register</button>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register