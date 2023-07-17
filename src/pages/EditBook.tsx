/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FormEvent, useState } from "react";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "../redux/features/book/bookApi";
import { useParams } from "react-router-dom";
import { IBook } from "../types/book.interface";
import { ToastContainer, toast } from "react-toastify";

export default function EditBook() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleBookQuery(id as string);
  const [updateBook, { isSuccess, isLoading: updateLoading }] =
    useUpdateBookMutation();

  const [name, setName] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [publicationYear, setPublicationYear] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const updated = () => toast("Book updated successfully");
  const errorToast = () => toast.error("Book update Failed");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const options: { id: string; data: Partial<IBook> } = {
      id: id as string,
      data: {
        ...(name && { title: name }),
        ...(author && { author }),
        ...(publicationYear && { publicationYear: parseInt(publicationYear) }),
        ...(genre && { genre: genre.split(",").map((name) => name.trim()) }),
        ...(price && { price: parseFloat(price) }),
      },
    };

    Object.keys(options.data).length && updateBook(options);
  };

  if (isSuccess) {
    updated();
  } else if (updateLoading) {
    errorToast();
  }

  //decide what to render
  let content = null;

  if (isLoading) {
    content = <h1>Loading</h1>;
  }

  if (!isLoading && isError) {
    content = <h1>Server error</h1>;
  }

  if (!isLoading && !isError && data) {
    const { title, author, publicationYear, price, genre }: IBook =
      data.data || {};

    content = (
      <form onSubmit={handleSubmit}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            defaultValue={title}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full rounded-md"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input
              type="text"
              placeholder="Author"
              defaultValue={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="input input-bordered w-full rounded-md"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Publication Year</span>
            </label>
            <input
              type="number"
              placeholder="Publication Year"
              defaultValue={publicationYear}
              onChange={(e) => setPublicationYear(e.target.value)}
              className="input input-bordered w-full rounded-md"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Genre
                <span className="text-xs text-red-400">
                  (Separate each genre with "," coma)
                </span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Genre"
              defaultValue={genre.join(", ")}
              onChange={(e) => setGenre(e.target.value)}
              className="input input-bordered w-full rounded-md"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              defaultValue={price}
              step="0.01"
              onChange={(e) => setPrice(e.target.value)}
              className="input input-bordered w-full rounded-md"
            />
          </div>
        </div>
        <button
          disabled={updateLoading}
          type="submit"
          className="btn btn-secondary rounded-md px-8 mt-4"
        >
          Update
        </button>
      </form>
    );
  }

  return (
    <div className="container-md mx-auto px-36 mt-20">
      <h1 className="font-bold text-2xl text-secondary text-center">
        Edit Book
      </h1>
      <div className="flex justify-center">
        <div className="w-3/5 shadow-lg p-8 bg-white mt-5 rounded-md">
          {content}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
