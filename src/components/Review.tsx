/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState, FormEvent } from "react";
import ReviewCard from "./ReviewCard";
import { useAppSelector } from "../redux/hook";
import {
  useGetReviewQuery,
  usePostReviewMutation,
} from "../redux/features/review/reviewApi";
import { IReview } from "../types/review.interface";
import ReviewLoader from "./ui/ReviewLoader";

export default function Review({ id }: { id: string }) {
  const [myReview, setMyReview] = useState<string>("");

  const { user } = useAppSelector((state) => state.auth);

  const [
    postReview,
    { isLoading: postReviewLoading, isError: postReviewError },
  ] = usePostReviewMutation();
  const { data, isLoading, isError } = useGetReviewQuery(id);
  const { data: review }: { data: IReview } = data || {};
  const { reviews } = review || {};

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      id,
      data: {
        user: user?.id,
        review: myReview,
      },
    };

    void postReview(data);
  };

  //decide what to render
  let content = null;

  if (isLoading) {
    content = <ReviewLoader />;
  }

  if (!isLoading && isError) {
    content = <h1>Server error</h1>;
  }

  if (!isLoading && !isError && reviews?.length === 0) {
    content = <h1 className="mt-10 text-base">No Review</h1>;
  }

  if (!isLoading && !isError && reviews?.length > 0) {
    content = reviews?.map((review) => <ReviewCard review={review} />);
  }

  return (
    <div className="container-md mx-auto px-36 mt-10">
      <div className="shadow-lg bg-white rounded-md p-10">
        <h1 className="font-semibold text-3xl">Reviews</h1>
        {user?.email && (
          <form onSubmit={handleSubmit}>
            <div className="flex w-4/5 mt-5">
              <div className="form-control flex-grow mr-10">
                <label className="label">
                  <span className="label-text text-lg">Your Review</span>
                </label>
                <textarea
                  onChange={(e) => setMyReview(e.target.value)}
                  className="textarea textarea-bordered h-24 rounded-md"
                  placeholder="Review"
                ></textarea>
              </div>
              <div className="self-end">
                <button
                  disabled={postReviewLoading}
                  type="submit"
                  className="btn btn-secondary capitalize rounded-md"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}
        {content}
      </div>
    </div>
  );
}
