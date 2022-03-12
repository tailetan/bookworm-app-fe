import "./footer.css";
import logofooter from "../../../assets/bookcovers/logofooter.png";

function Footer() {
  return (
    <footer className="bg-light px-5 py-2">
      <div className="logo ">
        <img src={logofooter} className="img-" alt="" />
      </div>
      <div className="ms-4 py-3" id="infor">
        <h4 className="my-0">BOOKWORM</h4>
        <p>Address: Nguyen Huu Tho Street, Tan Phong Ward, Ho Chi Minh City</p>
        <p>Phone: 0969004098</p>
      </div>
    </footer>
  );
}

export default Footer;
