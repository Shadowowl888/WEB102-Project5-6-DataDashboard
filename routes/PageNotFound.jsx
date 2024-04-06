import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div>
            <h1>Woah there! That page doesn't exist. Make sure to check the URL for any errors.</h1>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default PageNotFound;