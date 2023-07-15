import avatar from "../assets/Avatar.png"

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-xl fixed top backdrop-blur-sm z-10">
      <div className="flex-1">
        <a className="font-bold text-xl pl-10 ">
          B<span className="text-orange-600">oo</span>k
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>All Books</a>
          </li>
          <li>
            <a>Sign In</a>
          </li>
          <li>
            <a>Sign Up</a>
          </li>
        </ul>
        <div className="w-8 rounded-full">
          <img src={avatar} />
        </div>
      </div>
    </div>
  );
}
