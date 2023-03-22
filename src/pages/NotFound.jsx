import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>Page is not found!</h1>
            <Link to='/'>Go main</Link>
        </div>
    )
}

export default NotFound;