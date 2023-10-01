import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthProvider);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.pass.value;
    console.log(name, email, password);
    
    // create user with firebase
    createUser(email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Register Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              username:
            </label>
            <input
              type="text"
              id="username"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              email:
            </label>
            <input
              type="email"
              id="email"
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
            Sign up
          </button>
        </form>
        <p className="text-blue-500 my-3">
          have account?{" "}
          <Link to="/login">
            <button className="border rounded-md p-1">Please Login </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
