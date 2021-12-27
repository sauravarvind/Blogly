import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Welcome To Our Blog!</span>
        <span className="headerTitleLg">" Start Your Learn With Us "</span>
      </div>
      <img
        className="headerImg"
        src="https://s27389.pcdn.co/wp-content/uploads/2017/04/AdobeStock_100000042-2.jpeg.optimal.jpeg"
        alt=""
      />
    </div>
  );
}
