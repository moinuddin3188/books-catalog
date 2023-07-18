/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useGetMyListQuery } from "../../redux/features/profile/profileApi";
import { useAppSelector } from "../../redux/hook";
import { IBook } from "../../types/book.interface";
import MyListCard from "./MyListCard";

export default function MyList() {
  const { user } = useAppSelector((state) => state.auth);

  const { data, isLoading, isSuccess, isError } = useGetMyListQuery(
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

  if (!isLoading && !isError && isSuccess && userData?.myList?.length === 0) {
    content = <h1>Empty List</h1>;
  }

  if (!isLoading && !isError && isSuccess && userData?.myList?.length > 0) {
    content = userData?.myList.map((list: { book: IBook; status: string, _id: string }) => (
      <MyListCard list={list} />
    ));
  }

  return (
    <div className="col-span-3 bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-2xl border-b pb-5">My list</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </div>
  );
}
