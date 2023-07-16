/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import BookCard from "../components/BookCard";
import Footer from "../components/Footer";
import { useGetBooksQuery } from "../redux/features/book/bookApi";
import { IBook } from "../types/book.interface";
import { getYear } from "../utils/getYear";
import Navbar from "../layouts/Navbar";

const genres = ["Funny", "Drama", "Sci-fi", "Romance", "Action", "Adventure"];

export default function Books() {
  const { data, isLoading, isError } = useGetBooksQuery(undefined);
  const { data: books }: { data: IBook[] } = data || {};

  const allYears = getYear();

  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const handleGenreChange = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((c) => c !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

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
      <div className="grid grid-cols-3 gap-8">
        {books.map((book: IBook) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>
    );
  }

  return (
    <>
    <Navbar />
      <div className="container-md mx-auto px-36 pt-32">
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-1">
            <h1 className="font-bold text-lg">Filters</h1>
            <div className="form-control w-full rounded-md">
              <label className="label">
                <span className="label-text font-semibold">
                  Publication Year
                </span>
              </label>
              <select className="select select-bordered rounded-md">
                <option disabled selected>
                  Year
                </option>
                {allYears.map((x) => {
                  return <option key={x}>{x}</option>;
                })}
              </select>
            </div>

            <div className="form-control mt-4">
              <h1 className="text-sm font-semibold">Genre</h1>
              {genres.map((genre) => (
                <label className="label cursor-pointer justify-normal">
                  <input
                    checked={selectedGenres.includes(genre)}
                    onChange={() => handleGenreChange(genre)}
                    type="checkbox"
                    className="checkbox checkbox-sm checkbox-primary"
                  />
                  <span className="label-text pl-2">{genre}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="col-span-3 col-">{content}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
