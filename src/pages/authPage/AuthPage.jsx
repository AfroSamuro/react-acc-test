import AuthHeader from "../../components/headers/AuthHeader";
import './AuthPage.css'

export default function AuthPage(props) {


    return (
        <>
            <AuthHeader />
            <main className="content">
                <article className="content__authWindow">
                    <p className="authWindow__title">
                        Authorization
                    </p>
                    <div className="authWindow__login">
                        <p className="login__title">
                            login
                        </p>
                        <input className="login__input" type="text" />
                    </div>
                    <div className="authWindow__pass">
                        <p className="pass__title">
                            password
                        </p>
                        <input className="pass__input" type="text" />
                    </div>
                </article>
            </main>
        </>
    )
}