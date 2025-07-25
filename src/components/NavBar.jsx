const NavBar = ({ navItems }) => {
  return (
    <div className="bg-[#34495e] flex gap-4 items-center justify-center p-4 text-white font-black text-xl ">
      {navItems &&
        navItems.map((val) => {
          return (
            <a key={val.id} href={val.link} className={` ${val.className} `}>
              {val.label}
            </a>
          );
        })}
    </div>
  );
};

export default NavBar;
