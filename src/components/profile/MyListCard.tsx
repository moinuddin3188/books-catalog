import { useState, useEffect } from "react";
import { IBook } from "../../types/book.interface";
import { useUpdateStatusMutation } from "../../redux/features/profile/profileApi";
import { useAppSelector } from "../../redux/hook";

export default function MyListCard({
  list,
}: {
  list: { book: IBook; status: string; _id: string };
}) {
  const [toggle, setToggle] = useState<boolean>(false);
  const [select, setSelect] = useState<string>("");
  const [changeStatus, setChangeStatus] = useState<string>("");

  const {user} = useAppSelector(state => state.auth)

  const [updateStatus, { isLoading, isSuccess }] =
    useUpdateStatusMutation();

  const { book, status, _id } = list;
  const { imageUrl, title, author } = book;

  const handleUpdateStatus = () => {
    void updateStatus({email: user?.email, data: {id: _id, status: select}})
  };

  useEffect(() => {
    if(isSuccess){
      setToggle(!toggle)
    }
  }, [isSuccess])

  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={imageUrl} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>
        {title}
        <br />
        <span className="badge badge-ghost badge-sm">@by {author}</span>
      </td>
      <td>
        {!toggle ? (
          status
        ) : (
          <select
            onChange={(e) => setSelect(e.target.value)}
            className="select select-bordered w-full max-w-xs rounded-md"
          >
            <option disabled selected>
              Status
            </option>
            <option>will read</option>
            <option>reading</option>
            <option>finished reading</option>
          </select>
        )}
      </td>
      <td>
        {toggle ? (
          <button
            disabled={isLoading}
            onClick={() => handleUpdateStatus()}
            className="btn btn-ghost btn-xs capitalize bg-base-200"
          >
            submit
          </button>
        ) : (
          <button
            disabled={isLoading}
            onClick={() => setToggle(!toggle)}
            className="btn btn-ghost btn-xs capitalize bg-base-200"
          >
            edit
          </button>
        )}
        <button className="btn btn-xs btn-warning capitalize ml-2">
          delete
        </button>
      </td>
    </tr>
  );
}
