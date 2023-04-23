import { Link } from "react-router-dom";

function NaviBar() {

    return ( 

    <nav>

        <Link to="/">Home</Link>
        
        {"    "}

        <Link to="/blog-form"> Create New Blog </Link>

    </nav>

 );
}

export default NaviBar;