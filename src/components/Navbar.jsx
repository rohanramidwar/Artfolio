import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">
          <h2>brand name</h2>
        </Link>
      </div>
      <div>
        <input />
        <button>search</button>
      </div>
      <div>
        <Link to="/">
          <button>cart</button>
        </Link>
        <Link to="/">
          <button>profile</button>
        </Link>
        <Link to="/">
          <button>log out</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
