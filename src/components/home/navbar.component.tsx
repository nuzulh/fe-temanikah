import { useDispatch } from "react-redux";
import { signInAction, signUpAction } from "../../redux";

export function Navbar() {
  const dispath = useDispatch();

  return (
    <div className="sticky h-12 w-full flex justify-between items-center bg-red-200">
      <p>(burger)</p>
      <section>
        <button
          className="bg-emerald-500 rounded hover:bg-opacity-70 transition-all duration-300 shadow py-2 px-4 cursor-pointer text-white mr-2"
          onClick={() => dispath(signInAction("test@gmail.com", "12345678"))}
        >
          Sign In
        </button>
        <button
          className="bg-emerald-500 rounded hover:bg-opacity-70 transition-all duration-300 shadow py-2 px-4 cursor-pointer text-white"
          onClick={() => dispath(signUpAction("test3@gmail.com", "12345678"))}
        >
          Sign Up
        </button>
      </section>
    </div>
  );
}
