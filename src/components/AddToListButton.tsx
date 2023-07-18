/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { useAddToMyListMutation } from "../redux/features/profile/profileApi";
import { useAppSelector } from "../redux/hook";
import { errorToast, successToast } from "../constants/toast";

export default function AddToListButton({ bookId }: { bookId: string }) {
  const { user } = useAppSelector((state) => state.auth);
  const [addToMyList, { data, isLoading, isSuccess, isError }] =
    useAddToMyListMutation();

  const handleAddToList = () => {
    void addToMyList({
      email: user?.email,
      data: { book: bookId, status: "will read" },
    });
  };

  useEffect(() => {
    if (isSuccess && data && data?.data) {
      successToast("Added to list successfully!");
    }

    if (isError) {
      errorToast("Failed to add");
    }
  }, [data, isSuccess, isError]);

  return (
    <button
      disabled={isLoading}
      className="btn mr-4"
      onClick={() => handleAddToList()}
    >
      Add to List
    </button>
  );
}
