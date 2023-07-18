/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useGetWishListQuery } from "../../redux/features/profile/profileApi";
import { useAppSelector } from "../../redux/hook";
import { IBook } from "../../types/book.interface";
import WishlistCard from "./WishlistCard";

export default function WishList() {
  const { user } = useAppSelector((state) => state.auth);

  const { data, isLoading, isSuccess, isError } = useGetWishListQuery(
    user?.email
  );
  const { data: userData } = data || {};

  //what to render
  let content = null;

  if (isLoading) {
    content = <h1>Loading</h1>;
  }

  if (!isLoading && isError) {
    content = <h1>Server error</h1>;
  }

  if (!isLoading && !isError && isSuccess && userData?.wishList?.length === 0) {
    content = <h1>Empty List</h1>;
  }

  if (!isLoading && !isError && isSuccess && userData?.wishList?.length > 0) {
    content = userData?.myList.map((book: IBook) => (
      <WishlistCard book={book} />
    ));
  }

  return (
    <div className="col-span-3 bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-2xl border-b pb-5">My Wishlist</h1>
      <div className="mt-5">{content}</div>
    </div>
  );
}
