import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthHeader from "../../components/headers/AuthHeader/AuthHeader";
import './AuthPage.css'

export default function AuthPage(props) {

    const { users, setLoginInfo } = props;

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();

        let { typedLogin, typedPassword } = document.forms[0];

        if (users.find(user => user.login === typedLogin.value &&
            user.password === typedPassword.value)) {
            navigate('/main')
            setLoginInfo()
        } else {
            // renderError()
        }
    }


    return (
        <>
            <AuthHeader />
            <main className="content">
                <div className="wrongLogin">
                    Wrong login or password!
                </div>
                <form
                    className="content__authWindow"
                    onSubmit={handleSubmit}
                // ref={ref}
                >
                    <p className="authWindow__title">
                        Authorization
                    </p>
                    <div className="authWindow__login">
                        <label className="login__title">
                            login
                        </label>
                        <input
                            className="login__input"
                            type="text"
                            name="typedLogin"
                            // onChange={e => setTypedLogin(e.target.value)}
                            // onKeyDown={handleSubmit}
                            required={true}
                        />
                    </div>
                    <div className="authWindow__pass">
                        <label className="pass__title">
                            password
                        </label>
                        <input
                            className="pass__input"
                            type="password"
                            name="typedPassword"
                            // onKeyDown={handleSubmit}
                            // onChange={e => setTypedPassword(e.target.value)} 
                            required
                        />
                    </div>
                    <button type="submit">
                        test
                    </button>
                </form>
            </main>
        </>
    )
}