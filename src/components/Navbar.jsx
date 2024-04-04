import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/home">Home</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/about">About</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/about/1">About 1</Link>
    </div>
  );
}
