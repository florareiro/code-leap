"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { setUsername } from "../redux/features/userSlice";

export default function SignUp() {
  const dispatch = useDispatch();
  const [username, setUsernameValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const isUsernameEmpty = username === "";

  const handleSignUp = () => {
    if (isUsernameEmpty) {
      setErrorMessage("Please enter your username");
      return;
    }

    dispatch(setUsername({ username }));
    setUsernameValue("");
    console.log(username);
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center p-24
    bg-gradient-to-br from-[#7695EC] to-[#554593]
    "
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        <form className="bg-white max-w-fit shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <h1 className="mb-4 font-extrabold">Welcome to CodeLeap!</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-normal mb-1">
              Please enter your username
            </label>
            <input
              className="rounded-lg w-96 border border-slate-600 py-1 px-2"
              id="username"
              type="text"
              placeholder="John doe"
              value={username}
              onChange={(e) => setUsernameValue(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-end">
            {isUsernameEmpty ? (
              <button
                className="bg-gray-400 text-white font-bold py-1 rounded-lg px-4 focus:outline-none focus:shadow-outline"
                onClick={handleSignUp}
                disabled
              >
                ENTER
              </button>
            ) : (
              <Link
                className="bg-[#7695EC] hover:bg-blue-700 text-white font-bold py-1 rounded-lg px-4 focus:outline-none focus:shadow-outline"
                onClick={handleSignUp}
                href="/home"
              >
                ENTER
              </Link>
            )}
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
        </form>
      </div>
    </main>
  );
}
