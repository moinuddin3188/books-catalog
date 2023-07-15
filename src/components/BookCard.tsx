import { useNavigate } from "react-router-dom";
import { IBook } from "../types/book.interface";

interface IProps {
  book: IBook;
}

export default function BookCard({ book }: IProps) {
  const { imageUrl, title, author, genre, publicationYear, id } = book;
  const navigate = useNavigate();

  const goToProductDetails = () => {
    navigate(`/book-details/${id}`);
  };

  return (
    <div
      onClick={() => goToProductDetails()}
      className="card card-compact bg-base-100 shadow-xl cursor-pointer"
    >
      <figure>
        <img src={imageUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex">
          {genre.map((item: string) => (
            <div className="badge mr-2 bg-red-200">{item}</div>
          ))}
        </div>
        <div className="card-actions mt-4 font-semibold">
          <p>{author}</p>
          <p className="text-end">{publicationYear}</p>
        </div>
      </div>
    </div>
  );
}
