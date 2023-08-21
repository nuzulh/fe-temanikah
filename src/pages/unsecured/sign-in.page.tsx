import { useForm } from "react-hook-form";
import { BackButton, ScreenContainer } from "../../components";
import { useDispatch } from "react-redux";
import { signInAction } from "../../redux";

export function SignInPage() {
  const dispath = useDispatch();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  return (
    <ScreenContainer>
      <BackButton />
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(
        (data) => dispath(
          signInAction(data.email, data.password)
        )
      )}>
        <input {...register("email")} placeholder="test@mail.com" />
        <input {...register("password")} placeholder="********" />
        <input type="submit" />
      </form>
    </ScreenContainer>
  );
}
