/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect } from "react";
import { errorToast, successToast } from "../constants/toast";
import { useDeleteBookMutation } from "../redux/features/book/bookApi";
import { useNavigate } from "react-router-dom";

export default function Modal({
  open,
  control,
  id,
}: {
  open: boolean;
  control: () => void;
  id: string;
}) {
  const [deleteBook, { data, isSuccess, isError }] = useDeleteBookMutation();

  const handleDelete = () => {
    void deleteBook(id);
  };

  const navigate = useNavigate()

  useEffect(() => {
    if (isSuccess && data?.success) {
      successToast("Deleted successfully!");

      navigate("/all-books")
    }

    if (isError && !data?.success) {
      errorToast("Failed to delete!");
    }
  }, [data, isSuccess, isError]);

  return (
    open && (
      <>
        <div
          onClick={control}
          className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
        ></div>
        <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Confirm to delete the book?
          </h2>
          <div className="flex justify-center">
            <button
              onClick={() => handleDelete()}
              className="btn btn-error rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      </>
    )
  );
}
