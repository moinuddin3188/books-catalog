import { useLocation } from "react-router-dom";
import SideBar from "../components/profile/Sidebar";
import Navbar from "../layouts/Navbar";
import WishList from "../components/profile/WishList";
import MyList from "../components/profile/MyList";

export default function Profile() {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      <div className="container-md mx-auto px-36 pt-32">
        <div className="grid grid-cols-4 gap-8">
          <SideBar />
          {pathname === "/profile/wishlist" && <WishList />}
          {pathname === "/profile/my-list" && <MyList />}
        </div>
      </div>
    </>
  );
}
