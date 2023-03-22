import { useDispatch, useSelector } from "react-redux";


const Auth = () => {
    const dispatch = useDispatch();
    const value = useSelector(state => state.auth);

    const login = () => {
        dispatch({ type: 'Login' });
    }
    const logout = () => {
        dispatch({ type: 'Logout' });
    }

    return (
        <div>
            <h2>Login: {value.isAuth ? 'True' : 'False'}</h2>
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Auth;