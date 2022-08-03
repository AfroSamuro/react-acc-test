import './MainHeader.css'
import logoL from '../../../images/logoL.svg'
import logoS from '../../../images/logoS.svg'
import logOut from '../../../images/logOut.svg'

export default function MainHeader() {


    return (
        <header className='headerMain'>
            <div className='headerMain__logo'>
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
            <div className='headerMain__user'>
                    <p className='user__title'>Username</p>
                    <div className='user__logOut'>
                        <img src={logOut} />
                    </div>
            </div>
        </header>
    )
}