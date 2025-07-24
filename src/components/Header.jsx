const Header = ({ name, title, isRed }) => {
  return (
    <div
      className={`text-center ${
        isRed ? "bg-red-700" : "bg-blue-950"
      } p-4 text-3xl text-white`}
    >
      <h1 className="my-5 text-4xl text-white ">{name}</h1>
      <h3 className="mb-2 "> {title} </h3>
    </div>
  );
};

export default Header;
