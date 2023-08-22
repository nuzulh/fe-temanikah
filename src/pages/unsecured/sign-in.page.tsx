import { useForm } from "react-hook-form";
import { Button, Form, ScreenContainer } from "../../components";
import { useDispatch } from "react-redux";
import { signInAction } from "../../redux";

export function SignInPage() {
  const dispath = useDispatch();
  const {
    control,
    handleSubmit,
  } = useForm();

  return (
    <ScreenContainer>
      <Form.Field onSubmit={handleSubmit(
        (data) => dispath(signInAction(
          data.email,
          data.password
        ))
      )}>
        <strong className="pb-4 text-center">Silahkan masuk</strong>
        <Form.Label text="Email" />
        <Form.TextInput
          control={control}
          type="email"
          name="email"
          placeholder="akun@gmail.com"
          rules={{
            required: "Email harus diisi",
          }}
        />
        <Form.Label text="Password" />
        <Form.TextInput
          control={control}
          type="password"
          name="password"
          placeholder="********"
          rules={{
            required: "Password harus diisi"
          }}
        />
        <Button
          onClick={() => {}}
        >
          Masuk
        </Button>
      </Form.Field>
    </ScreenContainer>
  );
}
