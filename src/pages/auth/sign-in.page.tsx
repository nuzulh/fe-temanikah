import { useForm } from "react-hook-form";
import { Button, Form, ScreenContainer, Separator, Text, TextButton } from "../../components";
import { useDispatch } from "react-redux";
import { signInAction } from "../../redux";
import { useRootState } from "../../hooks";
import { Link, useNavigate } from "react-router-dom";
import { menuConfig } from "../../configs";

export function SignInPage() {
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
        <Text className="pb-4 font-semibold">Silahkan masuk</Text>
        <Text
          className="text-sm pb-4"
        >
          Masuk dan kustomisasi undangan online pernikahanmu, sesuai dengan apa yang kamu mau.
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
              (data) => dispath(signInAction(
                data.email,
                data.password,
                navigate
              ))
            )
          }
        >
          Masuk
        </Button>
      </Form.Field>
      <TextButton>
        Lupa password?
      </TextButton>
      <Separator />
      <div className="flex items-center">
        <Text className="text-sm mr-2">
          Belum punya akun?
        </Text>
        <Link to={menuConfig.get("SIGNUP").path}>
          <TextButton>
            Daftar sekarang
          </TextButton>
        </Link>
      </div>
    </ScreenContainer>
  );
}
