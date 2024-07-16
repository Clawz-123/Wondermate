import boat from "../assets/undraw_signin.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../validation/validation";

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div
        className="h-full w-full sm:h-[80%] sm:w-[80%] grid sm:grid-cols-2"
        style={{ boxShadow: "20px 20px 20px #DEDEDE" }}
      >
        <div className="flex flex-col justify-center text-center m-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center font-bold text-3xl text-blue-500 mb-4">Sign In</h1>
            <div className="mb-2 lg:mb-3">
              <input
                className="border-blue-500 outline-none border-[3px] p-2 rounded w-[90%]"
                type="text"
                placeholder="Username"
                id="username"
                name="username"
                {...register("username")}
              />
              {errors.username && <p className="text-red-500 text-xs font-bold">{errors.username.message}</p>}
            </div>
            <div className="mb-2 lg:mb-3">
              <input
                className="border-blue-500 outline-none border-[3px] p-2 rounded w-[90%]"
                type="password"
                placeholder="Password"
                name="password"
                {...register("password")}
              />
              {errors.password && <p className="text-red-500 text-xs font-bold mt-1">{errors.password.message}</p>}
            </div>
            <div className="mt-2 ml-6 mb-2 lg:mb-3 flex items-start">
              <input
                className="border-blue-500 border-[3px] focus:border-blue-500 focus:outline-none h-4 w-4"
                type="checkbox"
                id="terms"
                name="iAgree"
              />
              <label className="ml-2 text-blue-500" htmlFor="terms">
                <span className="text-black">Remember me </span>
              </label>
            </div>

            <button className="bg-blue-500 text-white w-[90%] h-10 rounded-lg">Sign In</button>
            <div className="text-center">
            <p className="lg:mb-32">
              New Here? <a href="/signup" className="text-blue-500">Sign Up</a>
            </p>
          </div>
           
          </form>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="h-[60%] lg:h-full w-[60%] lg:w-[80%]" src={boat} alt="Sign up illustration" />
          <div className="text-center">
            <p className="lg:mb-32">
              Or sign in with ......
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
