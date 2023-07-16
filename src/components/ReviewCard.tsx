import img from "../assets/Avatar.png";

export default function ReviewCard() {
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
            by <span className="text-primary">Author name</span>
          </p>
          <p className="a text-gray-600">Date</p>
        </div>
      </div>
      <div className="mt-5 text-lg pb-5">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          quaerat, quidem similique repudiandae non nulla aut vitae rem mollitia
          velit totam animi tempora ad! Aliqu
        </p>
      </div>
    </div>
  );
}
