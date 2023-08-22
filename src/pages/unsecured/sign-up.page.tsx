import { useForm } from "react-hook-form";
import { Button, Form, ScreenContainer } from "../../components";
import { useDispatch } from "react-redux";
import { signUpAction } from "../../redux";

export function SignUpPage() {
  const dispath = useDispatch();
  const {
    control,
    handleSubmit,
  } = useForm();

  return (
    <ScreenContainer>
      <Form.Field onSubmit={handleSubmit(
        (data) => dispath(signUpAction(
          data.email,
          data.password
        ))
      )}>
        <strong className="pb-4 text-center">Silahkan daftar</strong>
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
          Daftar
        </Button>
      </Form.Field>
    </ScreenContainer>
  );
}
