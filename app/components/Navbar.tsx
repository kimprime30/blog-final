import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="/welcome">Home</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <SearchBar />
      </ul>
    </nav>
  );
};

export default Navbar;
