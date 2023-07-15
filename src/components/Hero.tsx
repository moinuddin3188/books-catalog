
import BookCard from "./BookCard";

export default function Hero() {
  const books = [1, 1, 1, 1, 1];

  return (
    <div className="pt-20">
      <h2 className="font-bold text-lg text-center py-4">Recent Books</h2>
      <div className="grid grid-cols-4 gap-8">
        {books.map((book) => (
          <BookCard />
        ))}
      </div>
    </div>
  );
}
