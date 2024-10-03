import './LoginSignup.css'
import { useState } from "react"

const LoginSignup = () => {

    const [action, setAction] = useState("Sign up");

    return (
        <form className="container" action='#'>
            <div className="header">
                <h1>{action}</h1>
                <div className="underline"></div>
            </div>
            <div className="input-container">
                {action === "Sign up" ? (
                    <div className="inputs">
                        <i className="ri-user-line"></i>
                        <input type="text" placeholder="Username" />
                    </div>
                ) : <div></div>}

                <div className="inputs">
                    <i className="ri-mail-line"></i>
                    <input type="email" placeholder="Email id" />
                </div>

                <div className="inputs">
                    <i className="ri-lock-password-line"></i>
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            {action === "Login" ? (
                <div className="forgot-password">Forgot Password?</div>
            ) : <div></div>}
            <div className="submit-container">
                <button
                    className={action === "Login" ? "submit gray" : "submit"}
                    onClick={() => setAction('Sign up')}
                    type='sumbit'
                >Sign Up</button>
                <button
                    className={action === "Sign up" ? "submit gray" : "submit"}
                    onClick={() => setAction('Login')}
                    type='sumbit'
                >Login</button>
            </div>
        </form>
    )
}

export default LoginSignup