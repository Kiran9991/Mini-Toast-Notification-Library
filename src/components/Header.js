import "./Header.css";

const Header = () => {
  return (
    <div className="mainNav">
        <span className="navHead"><a href="/">Header</a></span>
        <a href="/component3">Third Component</a>
        <a href="/component2">Second Component</a>
        <a href="/component1">First Component</a>
    </div>
  );
};

export default Header;
