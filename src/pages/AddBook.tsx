/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FormEvent, useState, useEffect } from "react";
import Navbar from "../layouts/Navbar";
import { useAddBookMutation } from "../redux/features/book/bookApi";
import { errorToast, successToast } from "../constants/toast";
import Toast from "../components/ui/Toast";

export default function AddBook() {
  const [name, setName] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [publicationYear, setPublicationYear] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  const [addBook, {data, isSuccess, isError}] = useAddBookMutation()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const data = {
      title: name,
      author,
      publicationYear: parseInt(publicationYear),
      genre: genre.split(",").map(name => name.trim().charAt(0).toUpperCase() + name.trim().slice(1)),
      price: Number(price),
      ...(imageUrl && { imageUrl: imageUrl }),
    };

    void addBook(data)

    event.preventDefault();
  };

  useEffect(() => {
    if(isSuccess && data?.success){
      successToast("Book added successfully!")
    }

    if(isError && !data?.success){
      errorToast("Failed to add book!")
    }
  }, [data, isSuccess, isError])

  return (
    <>
      <Navbar />
      <div className="container-md mx-auto px-36 pt-32">
        <h1 className="font-bold text-2xl text-secondary text-center">
          Add New Book
        </h1>
        <div className="flex justify-center">
          <div className="w-3/5 shadow-lg p-8 bg-white mt-5 rounded-md">
            <form onSubmit={handleSubmit}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Name"
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
                    required
                    type="text"
                    placeholder="Author"
                    onChange={(e) => setAuthor(e.target.value)}
                    className="input input-bordered w-full rounded-md"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Publication Year</span>
                  </label>
                  <input
                    required
                    type="number"
                    placeholder="Publication Year"
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
                    required
                    type="text"
                    placeholder="Genre"
                    onChange={(e) => setGenre(e.target.value)}
                    className="input input-bordered w-full rounded-md"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    required
                    type="number"
                    placeholder="Price"
                    step="0.01"
                    onChange={(e) => setPrice(e.target.value)}
                    className="input input-bordered w-full rounded-md"
                  />
                </div>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="input input-bordered w-full rounded-md"
                />
              </div>
              <button
                //   disabled={}
                type="submit"
                className="btn btn-secondary rounded-md px-8 mt-4"
              >
                Add Book
              </button>
            </form>
          </div>
        </div>
        <Toast />
      </div>
    </>
  );
}
