import { useContext } from "react";
import { AuthProvider } from "../Context/AuthContext";

const Home = () => {
  const authInfo = useContext(AuthProvider);
  console.log(authInfo);
  return (
    <div>
      <h2> This is Home</h2>
    </div>
  );
};

export default Home;
