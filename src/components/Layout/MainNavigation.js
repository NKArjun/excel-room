import classes from './MainNavigation.module.css';
import logo from '../../images/excel-logo.png'
const MainNavigation = () => {
    const logout = () => {

    }

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt="Excel Logo"></img>
            </div>
            <nav>
                <ul>
                    <li>
                        Login
                    </li>
                    <li onClick={logout}>
                        Logout
                    </li>
                    <li>
                        Excels
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;