import { IBook } from "../../types/book.interface";

export default function WishlistCard({book}: {book: IBook}) {
  const {imageUrl, title, author, price} = book

  return (
    <div className="card card-side border-b pb-2 mt-5">
      <figure>
        <img className="w-32" src={imageUrl} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{`@by ${author}`}</p>
        <h2 className="text-xl font-semibold">{price}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-error rounded-lg">Delete</button>
        </div>
      </div>
    </div>
  );
}
