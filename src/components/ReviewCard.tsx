/* eslint-disable @typescript-eslint/restrict-template-expressions */
import img from "../assets/Avatar.png";
import { IReviewData } from "../types/review.interface";

export default function ReviewCard({ review }: { review: IReviewData }) {
  const { user, review: userReview, postedAt } = review;
console.log(review)
  return (
    <div className="mt-10 border-b">
      <div className="flex items-center">
        <img
          className="w-10 h-10 ring ring-orange-400 ring-offset-1 rounded-full"
          src={img}
          alt=""
        />
        <div className="pl-4">
          <p className="text-sm">
            by{" "}
            <span className="text-primary">{`${user?.name?.firstName} ${user.name?.lastName}`}</span>
          </p>
          <p className="a text-gray-600">{new Date(postedAt).toDateString()}</p>
        </div>
      </div>
      <div className="mt-5 text-lg pb-5">
        <p>{userReview}</p>
      </div>
    </div>
  );
}
