import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  if (loading) {
    return (
      <div>
        <h2>🌀</h2>
      </div>
    );
  }
  console.log(errors);
  return (
    <div>
      <h1>Welcome, let&apos;s listen to some music!</h1>
      <form
        onSubmit={handleSubmit((data) => {
          setLoading(true);
        })}
      >
        <input
          {...register("username", { required: "Please enter a username" })}
          placeholder="Please enter your Spotify Username"
        />
        <input
          {...register("password", { required: "Please enter a password" })}
          placeholder="Please enter your password"
          type="password"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
