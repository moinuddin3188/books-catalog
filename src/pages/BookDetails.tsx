/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Link, useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../redux/features/book/bookApi";
import { IBook } from "../types/book.interface";
import { useState } from "react";
import Modal from "../components/Modal";
import Review from "../components/Review";

export default function BookDetails() {
  const [opened, setOpened] = useState(false);

  const controlModal = () => {
    setOpened((prevState) => !prevState);
  };

  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleBookQuery(id as string);

  //decide what to render
  let content = null;

  if (isLoading) {
    content = <h1>Loading</h1>;
  }

  if (!isLoading && isError) {
    content = <h1>Server error</h1>;
  }

  if (!isLoading && !isError && data) {
    const { title, author, publicationYear, price, imageUrl, genre }: IBook =
      data.data || {};

    content = (
      <div className="grid grid-flow-row-dense grid-cols-3 gap-4 mt-10 shadow-lg bg-white">
        <div className="col-span-1 p-10">
          <div className="p-4 border-orange-200 border-2">
            <img className="w-auto" src={imageUrl} alt="" />
          </div>
        </div>
        <div className="col-span-2 p-10 space-y-7">
          <h1 className="font-bold text-xl text-gray-500">{title}</h1>
          <div>
            <p>
              by <span className="text-primary">{author}</span>
            </p>
            <p>Published: {publicationYear}</p>
          </div>
          <div>
            <span className="font-semibold">Category:</span>
            {genre.map((item: string) => (
              <span className="badge badge-secondary ml-2">{item}</span>
            ))}
          </div>
          <div>
            <p className="font-bold text-xl text-gray-600">PRICE. {price}$</p>
          </div>
          <Link to={`/edit-book/${id}`}>
            <button className="btn btn-outline btn-primary rounded-md px-8">
              EDIT
            </button>
          </Link>
          <button
            onClick={controlModal}
            className="btn btn-error ml-8 rounded-md px-8"
          >
            DELETE
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container-md mx-auto px-36">
        {content}
        <Modal open={opened} control={controlModal} />
      </div>
      <Review />
    </>
  );
}
