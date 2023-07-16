import { Link } from "react-router-dom";
import avatar from "../assets/Avatar.png"

export default function Navbar() {
  return (
    <div className="navbar bg-base-100/30 shadow-xl fixed top backdrop-blur-md z-10">
      <div className="flex-1">
        <a className="font-bold text-xl pl-10 ">
          B<span className="text-orange-600">oo</span>k
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/all-books"}>All Books</Link>
          </li>
          <li>
            <Link to={"/login"}>Sign In</Link>
          </li>
          <li>
            <Link to={"/signup"}>Sign Up</Link>
          </li>
        </ul>
        <div className="w-8 rounded-full">
          <img src={avatar} />
        </div>
      </div>
    </div>
  );
}
