import { useRef } from "react";
import { useState } from "react";
import AuthHeader from "../../components/headers/AuthHeader/AuthHeader";
import './AuthPage.css'

export default function AuthPage(props) {

    const { users } = props;

    const [typedLogin, setTypedLogin] = useState('')
    const [typedPassword, setTypedPassword] = useState('')
    const ref = useRef()

    const handleSubmit = (e) => {
        console.log('lol')
        if (e.key === 'Enter') {
            e.preventDefault();
            ref.current.submit();
            console.log(setTypedLogin, setTypedPassword)
            setTypedLogin('')
            setTypedPassword('')
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
                    onSubmit={e => e.preventDefault()}
                    ref={ref}
                    onKeyDown={handleSubmit}
                >
                    <p className="authWindow__title">
                        Authorization
                    </p>
                    <div className="authWindow__login">
                        <label className="login__title">
                            login
                        </label>
                        <input className="login__input" type="text" onChange={e => setTypedLogin(e.target.value)} />
                    </div>
                    <div className="authWindow__pass">
                        <label className="pass__title">
                            password
                        </label>
                        <input className="pass__input" type="password" onChange={e => setTypedPassword(e.target.value)} />
                    </div>
                </form>
            </main>
        </>
    )
}