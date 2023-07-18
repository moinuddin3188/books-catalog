/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useGetRecentBooksQuery } from "../redux/features/book/bookApi";
import { IBook } from "../types/book.interface";
import BookCard from "./BookCard";
import CardLoader from "./ui/CardLoader";

export default function Hero() {
  const { data, isLoading, isError } =
    useGetRecentBooksQuery(undefined);
  const { data: books }: {data: IBook[]} = data || {};

  //decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <div className="grid grid-cols-4 gap-8">
        {Array(5).fill(undefined).map(() => (
          <CardLoader />
        ))}
      </div>
    );
  }

  if (!isLoading && isError) {
    content = <h1>Server error</h1>;
  }

  if (!isLoading && !isError && books.length === 0) {
    content = <h1>No books</h1>;
  }

  if (!isLoading && !isError && books.length > 0) {
    content = (
      <div className="grid grid-cols-4 gap-8">
        {books.map((book: IBook) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-20">
      <h2 className="font-bold text-3xl text-center py-4">Recent Books</h2>
      {content}
    </div>
  );
}
