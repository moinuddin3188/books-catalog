import book from "../assets/book.png";

export default function Signup() {
  return (
    <>
      <div className="grid grid-cols-2 gap-0 h-screen">
        <div className="flex items-center justify-center bg-white">
          <img className="h-screen py-10" src={book} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <div className="w-2/5">
            <h1 className="text-center text-2xl font-bold mb-4">Sign up</h1>
            <form action="" className="bg-white shadow-lg rounded-md p-4">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input mt-1 block w-full bg-gray-100 h-9 rounded-md border"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input mt-1 block w-full bg-gray-100 h-9 rounded-md border"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input mt-1 block w-full bg-gray-100 h-9 rounded-md border"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-input mt-1 block w-full bg-gray-100 h-9 rounded-md border"
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-secondary text-white py-2 px-4 rounded hover:bg-secondary-focus"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
