import { useDispatch } from "react-redux";
import { navigateToAction } from "../../redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../buttons.component";

export function Navbar() {
  const dispath = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="sticky h-12 w-full flex justify-between items-center bg-red-200">
      <p>(burger)</p>
      <section>
        <Button onClick={() => dispath(navigateToAction({
          navigate,
          name: "SIGNIN",
        }))}>
          Login
        </Button>
        <Button onClick={() => dispath(navigateToAction({
          navigate,
          name: "SIGNUP",
        }))}>
          Register
        </Button>
      </section>
    </div>
  );
}
