import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import Counter from "./Counter";
import Auth from "./Auth";


const ReduxCounter = () => {

    const initialCountState = {
        count: 0
    }

    const counterReducer = (state = initialCountState, action) => {
        switch (action.type) {
            case 'Increment':
                return { count: state.count + action.payload }
            case 'Decrement':
                return { count: state.count - action.payload }
            case 'Reset':
                return { count: 0 }
            default:
                return state;
        }
    }

    const initialAuthState = {
        isAuth: false
    }

    const authReducer = (state = initialAuthState, action) => {
        switch (action.type) {
            case 'Login':
                return { isAuth: true }
            case 'Logout':
                return { isAuth: false }
            default:
                return state;
        }
    }

    const rootReducer = combineReducers({ count: counterReducer, auth: authReducer })
    const store = createStore(rootReducer);

    return (
        <div>
            <Provider store={store}>
                <h1>Redux</h1>
                <Counter />
                <Auth />
            </Provider>
        </div>
    )
}

export default ReduxCounter;