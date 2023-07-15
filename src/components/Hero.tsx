/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useGetBooksQuery } from "../redux/features/book/bookApi";
import { IBook } from "../types/book.interface";
import BookCard from "./BookCard";

export default function Hero() {
  const { data, isLoading, isError } =
    useGetBooksQuery(undefined);
  const { data: books }: {data: IBook[]} = data;

  //decide what to render
  let content = null;

  if (isLoading) {
    content = <h1>Loading</h1>;
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
    <div className="pt-20">
      <h2 className="font-bold text-lg text-center py-4">Recent Books</h2>
      {content}
    </div>
  );
}
