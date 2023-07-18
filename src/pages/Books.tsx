/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FormEvent, useState } from "react";
import BookCard from "../components/BookCard";
import Footer from "../components/Footer";
import { useGetBooksQuery } from "../redux/features/book/bookApi";
import { IBook } from "../types/book.interface";
import { getYear } from "../utils/getYear";
import Navbar from "../layouts/Navbar";
import { useNavigate } from "react-router-dom";
import Toast from "../components/ui/Toast";
import CardLoader from "../components/ui/CardLoader";

const genres = [
  "Fiction",
  "Classic",
  "Fantasy",
  "Young Adult",
  "Dystopian",
  "Romance",
  "Adventure",
  "Science Fiction",
  "Modernist",
  "Spiritual",
];

export default function Books() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [publicationYear, setPublicationYear] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data, isLoading, isError, error } = useGetBooksQuery({
    genre: selectedGenres,
    publicationYear: Number(publicationYear),
    searchTerm,
  });
  const { data: books }: { data: IBook[] } = data || {};

  const allYears = getYear();

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSearchTerm(input);
  };

  const handleGenreChange = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((c) => c !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const removeFilter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setPublicationYear("");
    setSelectedGenres([]);
    setSearchTerm("");
  };

  const navigate = useNavigate();

  //decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <div className="grid grid-cols-3 gap-8">
        {Array(5)
          .fill(undefined)
          .map(() => (
            <CardLoader />
          ))}
      </div>
    );
  }

  if (!isLoading && isError) {
    console.log(error);
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
        {/*-------->>>> Search bar  <<<<-------- */}
        <form onSubmit={handleSearch}>
          <div className="a mb-8 flex justify-center">
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-2/3"
            />
            <button type="submit" className="btn btn-secondary ml-2">
              Search
            </button>
            <button
              type="button"
              onClick={() => navigate("/add-new-book")}
              className="btn btn-primary ml-2"
            >
              + Add New
            </button>
          </div>
        </form>

        <div className="grid grid-cols-4 gap-8">
          {/*-------->>>> filter section  <<<<-------- */}
          <div className="col-span-1">
            <h1 className="font-bold text-lg">Filters</h1>
            <form id="filter" onReset={removeFilter}>
              <div className="form-control w-full rounded-md">
                <label className="label">
                  <span className="label-text font-semibold">
                    Publication Year
                  </span>
                </label>
                <select
                  required
                  onChange={(e) => setPublicationYear(e.target.value)}
                  className="select select-bordered rounded-md"
                >
                  <option selected>All Year</option>
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
              <div className="mt-2">
                <button
                  type="reset"
                  className="btn btn-primary rounded-md py-0.5"
                >
                  Remove Filter
                </button>
              </div>
            </form>
          </div>

          {/* books grid */}
          <div className="col-span-3 col-">{content}</div>
        </div>
      </div>
      <Footer />
      <Toast />
    </>
  );
}
