import ReviewCard from "./ReviewCard";

export default function Review() {
  return (
    <div className="container-md mx-auto px-36 mt-10">
      <div className="shadow-lg bg-white rounded-md p-10">
        <h1 className="font-semibold text-xl">Reviews</h1>
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}
