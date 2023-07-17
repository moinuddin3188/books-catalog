import { Link } from "react-router-dom";
import avatar from "../assets/Avatar.png";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { userLogout } from "../redux/features/auth/authSlice";

export default function Navbar() {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(userLogout());
  };

  return (
    <div className="navbar bg-base-100/30 shadow-xl fixed top backdrop-blur-md z-10">
      <div className="flex-1">
        <Link to={"/"} className="font-bold text-xl pl-10 ">
          B<span className="text-orange-600">oo</span>k
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-base">
          <li>
            <Link to={"/all-books"}>All Books</Link>
          </li>
          {!user?.email && (
            <>
              <li>
                <Link to={"/login"}>Sign In</Link>
              </li>
              <li>
                <Link to={"/signup"}>Sign Up</Link>
              </li>
            </>
          )}
          {user?.email && (
            <li>
              <Link to={"/add-new-book"}>Add New Book</Link>
            </li>
          )}
          {user?.email && (
            <li onClick={() => handleLogOut()}>
              <a>Logout</a>
            </li>
          )}
        </ul>
        {user?.email && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={avatar} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li onClick={() => handleLogOut()}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
