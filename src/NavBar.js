import NumResults from "./NumResults";
import Search from "./Search";
import Logo from "./Logo";
function NavBar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults />
    </nav>
  );
}
export default NavBar;
