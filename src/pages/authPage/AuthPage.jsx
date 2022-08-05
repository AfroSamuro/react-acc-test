import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthHeader from "../../components/headers/AuthHeader/AuthHeader";
import './AuthPage.css'

export default function AuthPage(props) {

    const { users, setLoginInfo } = props;
    const [isWrong, setIsWrong] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsWrong(false)

        let { typedLogin, typedPassword } = document.forms[0];

        if (users.find(user => user.login === typedLogin.value &&
            user.password === typedPassword.value)) {
            navigate('/main')
            setLoginInfo()
        } else {
            setIsWrong(true)
        }

    }

    return (
        <>
            <AuthHeader />
            <main className="content">
                <form
                    className="content__authWindow"
                    onSubmit={handleSubmit}
                >
                    <p className="authWindow__title">
                        Authorization
                    </p>
                    <div
                        className="wrongAuth"
                        style={isWrong ? { opacity: '1', animation: 'HideWarning 0s 3s forwards' } : null} // не придумал, как сделать повторяющуюся анимацию неверного пароля
                    >
                        Wrong login or password!
                    </div>
                    <div className="authWindow__login">
                        <label className="login__title">
                            login
                        </label>
                        <input
                            className="login__input"
                            type="text"
                            name="typedLogin"
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