import './AuthHeader.css'
import logoL from '../../../images/logoL.svg'
import logoS from '../../../images/logoS.svg'

export default function AuthHeader() {


    return (
        <header className='headerAuth'>
            <div className='headerAuth__logo'>
                <img
                    className='logo__large'
                    src={logoL}
                    alt="logo"
                />
                <img
                    className='logo__small'
                    src={logoS}
                    alt="logo"
                />
            </div>
        </header>
    )
}