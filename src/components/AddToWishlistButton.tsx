/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect } from "react";
import { useAddToWishListMutation } from "../redux/features/profile/profileApi";
import { useAppSelector } from "../redux/hook";
import { errorToast, successToast } from "../constants/toast";

export default function AddToWishlistButton({ bookId }: { bookId: string }) {
  const { user } = useAppSelector((state) => state.auth);
  const [addToWishlist, { data, isLoading, isSuccess, isError }] =
    useAddToWishListMutation();

  const handleAddToWishlist = () => {
    void addToWishlist({
      email: user?.email,
      data: { book: bookId },
    });
  };

  useEffect(() => {
    if (isSuccess && data && data?.data) {
      successToast("Added to wishlist successfully!");
    }

    if (isError) {
      errorToast("Failed to add");
    }
  }, [data, isSuccess, isError]);

  return (
    <button
      disabled={isLoading}
      onClick={() => handleAddToWishlist()}
      className="btn mr-4"
    >
      🤍
    </button>
  );
}
