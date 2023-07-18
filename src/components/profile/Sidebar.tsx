import { useNavigate } from "react-router-dom";
import SidebarHeader from "./SidebarHeader";

export default function SideBar() {
  const navigate = useNavigate();

  const handleRoute = (route: string) => {
    navigate(route);
  };

  return (
    <div className="col-span-1">
      <SidebarHeader />
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg mt-8">
        <table className="table table-pin-rows text-base">
          <tbody>
            <tr
              onClick={() => handleRoute("/profile/wishlist")}
              className="cursor-pointer"
            >
              <td>Wishlist</td>
            </tr>
            <tr
              onClick={() => handleRoute("/profile/my-list")}
              className="cursor-pointer"
            >
              <td>My list</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
