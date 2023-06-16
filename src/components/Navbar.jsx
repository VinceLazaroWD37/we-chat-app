import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="containerWrap flex justify-between navbar bg-neutral text-neutral-content text-orange-500 ">
      <a className="btn btn-ghost normal-case text-xl">we chat App</a>
      {currentUser ? <button onClick={handleLogout}>Logout</button> : ""}
    </div>
  );
};

export default Navbar;
