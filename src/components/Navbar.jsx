import logo from "./../../public/1702069160690.jpg";

const Navbar = () => {
  return (
    <nav className="navbar rounded-lg flex  justify-between container px-4">
      <h2 className="text-2xl text-white font-san font-semibold">Swift</h2>
      <div className="links flex gap-2 justify-center items-center">
        <img src={logo} alt="admin logo" className="w-10 h-10 rounded-full" />
        <h2 className="text-[18px] font-san font-semibold text-white">Admin</h2>
      </div>
    </nav>
  );
};

export default Navbar;
