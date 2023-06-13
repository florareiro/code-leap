export default function SignUp() {
  return (
    <main className=" min-h-screen flex items-center justify-center p-24 bg-[#DDDDDD]">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <form className="bg-white max-w-fit shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <h1 className="mb-4 font-extrabold">Welcome to CodeLeap!</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-normal mb-1">
              Please enter your username
            </label>
            <input
              className="rounded-lg w-96 border  border-slate-600 py-1 px-2"
              id="username"
              type="text"
              placeholder="John doe"
            />
          </div>
          <div className="flex items-center justify-end">
            <button
              className="bg-[#7695EC] hover:bg-blue-700 text-white font-bold py-1 rounded-lg px-4 focus:outline-none focus:shadow-outline"
              type="button"
            >
              ENTER
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
