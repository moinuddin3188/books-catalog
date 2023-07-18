import { useNavigate } from "react-router-dom";
import image from "../assets/Header.png";
import web from "../assets/web.png"

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="hero-content grid grid-cols-2 gap-8">
        <div className="shadow-lg bg-white p-8 rounded-lg">
            <p className="text-orange-400 mb-2">Reade Book</p>
          <img className="w-9/12" src={image} alt="" />
          <button onClick={() => navigate("/all-books")} className="btn btn-secondary mt-8">
            All Books
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <p className="text-sm text-gray-700 mt-8">
            Lorem ipsum dolor, sit amet consectetur{" "}
            <span className="text-secondary">adipisicing elit.</span>
            Dignissimos dicta reiciendis, dolorem cum minima.
          </p>
        </div>
        <div>
          <img src={web} alt="" />
        </div>
      </div>
    </div>
  );
}
