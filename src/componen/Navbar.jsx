import "./Navbar.css";

function Navbar() {
  return (
    <header style={{ display: "flex", backgroundColor: "antiquewhite" }}>
      <h1 className="">Tara</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
