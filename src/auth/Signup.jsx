import boat from "../assets/undraw_signup.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../validation/validation";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5269/api/User", data);

      if (response.status === 200) {
        console.log("User created successfully:", response.data);
        alert("User created successfully!");
        navigate("/signin");
      }
    } catch (error) {
      if (error.response) {
        console.error("Error:", error.response.data);
        alert(`Error: ${error.response.data}`);
      } else {
        console.error("Error during sign up:", error.message);
        alert(`Error: ${error.message}`);
      }
    }
  };


  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div
        className="h-full w-full sm:h-[80%] sm:w-[80%] grid sm:grid-cols-2"
        style={{ boxShadow: "20px 20px 20px #DEDEDE" }}
      >
        <div className="flex flex-col justify-center text-center m-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center font-bold text-3xl text-blue-500 mb-4">Sign Up</h1>
            <div className="mb-1 lg:mb-3">
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
            <div className="mb-1 lg:mb-3">
              <input
                className="border-blue-500 outline-none border-[3px] p-2 rounded w-[90%]"
                type="text"
                placeholder="Email"
                name="email"
                {...register("email")}
              />
              {errors.email && <p className="text-red-500 text-xs font-bold mt-1">{errors.email.message}</p>}
            </div>
            <div className="mb-1 lg:mb-3">
              <input
                className="border-blue-500 outline-none border-[3px] p-2 rounded w-[90%]"
                type="password"
                placeholder="Password"
                name="password"
                {...register("password")}
              />
              {errors.password && <p className="text-red-500 text-xs font-bold mt-1">{errors.password.message}</p>}
            </div>
            <div className="mb-1 lg:mb-3">
              <input
                className="border-blue-500 outline-none border-[3px] p-2 rounded w-[90%]"
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                {...register("confirmPassword")}
              />
              {errors.cpassword && <p className="text-red-500 text-xs font-bold mt-1">{errors.cpassword.message}</p>}
            </div>

            {/* Admin or user */}
            <div className="w-full">
              <select
                className="border-blue-500 outline-none border-[3px] p-2 rounded w-[90%]"
                name="role"
                id="role"
                {
                ...register("role")
                }
                defaultValue="User"
              >
                <option value="User"> User</option>
                <option value="Admin"> Admin</option>
              </select>
              <p className="text-xs lg:text-sm text-red-600  font-semibold pt-1">
                {errors.role?.message}
              </p>
            </div>

            <button className="bg-blue-500 text-white w-[90%] h-10 rounded-lg">Sign Up</button>
            <div className="mt-4 mb-1 lg:mb-3">
              <input
                className="border-blue-800 border-[3px] focus:border-blue-800 focus:outline-none h-4 w-4"
                type="checkbox"
                id="terms"
                name="iAgree"
                {...register("iAgree")}
              />
              <label className="ml-2 text-blue-500" htmlFor="terms">
                <span className="text-black">I agree to all </span> Terms and Conditions
              </label>
              {errors.iAgree && <p className="text-red-500 text-xs font-bold mt-1">{errors.iAgree.message}</p>}
            </div>
          </form>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="h-full w-[80%]" src={boat} alt="Sign up illustration" />
          <div className="text-center">
            <p className="lg:mb-32">
              Already a member? <a href="/signin" className="text-blue-500">Sign in</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signup;
