import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";

const SignIn = () => {
  const { signInUser } = useContext(AuthProvider);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.pass.value;
    console.log(email, password);
    // sign in user
    signInUser(email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login Form</h2>
        <form onClick={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              email:
            </label>
            <input
              type="email"
              id="username"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="pass"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Login
          </button>
        </form>
        <p className="text-blue-400">
          New to authContext?{" "}
          <Link to="/register">
            <button className="border rounded-md p-1">Please register</button>{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
