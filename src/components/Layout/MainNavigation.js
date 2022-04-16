import classes from './MainNavigation.module.scss';
import logo from '../../images/excel-logo.png'
const MainNavigation = () => {
    const logout = () => {

    }

    const login = async () => {
        const response = await fetch('http://localhost:3000/api/auth', {
            method: 'POST',
            body: JSON.stringify({ email: 'arjunnk@gmail.com', password: 'arjun' }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    }
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt="Excel Logo"></img>
            </div>
            <nav>
                <ul>
                    <li onClick={login}>
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