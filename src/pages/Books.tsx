/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import BookCard from "../components/BookCard";
import Footer from "../components/Footer";
import { useGetBooksQuery } from "../redux/features/book/bookApi";
import { IBook } from "../types/book.interface";

export default function Books() {
  const { data, isLoading, isError } = useGetBooksQuery(undefined);
  console.log(data, "Data")
  const { data: books }: { data: IBook[] } = data || {};
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
    <>
      <div className="container-md mx-auto px-36">
        <div className="pt-20">{content}</div>
      </div>
      <Footer />
    </>
  );
}
