import logo from "./lemon-icon.png";
export const FooterContent = () => {
  return (
    <footer>
      <div style={{display: "flex", justifyContent: "right", alignItems: "center", paddingRight: "3%"}}>
        <p>&copy; Copyright Little Lemon</p>
        <img src={logo} alt="Little Lemon Logo" width="20px" height="20px"/>
      </div>
    </footer>
  );
}
