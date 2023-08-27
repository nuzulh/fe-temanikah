import { useForm } from "react-hook-form";
import { Button, Form, ScreenContainer, Text, TextButton } from "../../components";
import { useDispatch } from "react-redux";
import { signUpAction } from "../../redux";
import { useRootState } from "../../hooks";
import { menuConfig } from "../../configs";
import { Link, useNavigate } from "react-router-dom";

export function SignUpPage() {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
  } = useForm();
  const darkMode = useRootState((state) => state.appState.darkMode);

  return (
    <ScreenContainer>
      <Form.Field>
        <Text className="pb-4 font-semibold">Silahkan daftar</Text>
        <Text
          className="text-sm pb-4"
        >
          Silahkan daftar untuk mulai membuat undangan online sesukamu!
        </Text>
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
          outline={!darkMode}
          onClick={
            handleSubmit(
              (data) => dispath(signUpAction(
                data.email,
                data.password,
                navigate
              ))
            )
          }
        >
          Daftar
        </Button>
      </Form.Field>
      <div className="flex items-center">
        <Text className="text-sm mr-2">
          Sudah punya akun?
        </Text>
        <Link to={menuConfig.get("SIGNIN").path}>
          <TextButton>
            masuk disini
          </TextButton>
        </Link>
      </div>
    </ScreenContainer>
  );
}
