import classes from './AuthForm.module.scss';

const AuthForm = () => {

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(event);
    }

    return (
        <div className={classes.auth}>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input id='email'></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your password</label>
                    <input id='password'></input>
                </div>
                <div className={classes.actions}>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default AuthForm;