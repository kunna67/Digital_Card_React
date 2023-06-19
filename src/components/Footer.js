import "../CSS/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <ul>
        <li className="twitter">
          <a
            href="https://twitter.com/KunnalBansal"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-square-twitter"></i>
          </a>
        </li>
        <li className="Linkedin">
          <a
            href="https://www.linkedin.com/in/kunnal-bansal-75273a207/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-square-facebook"></i>
          </a>
        </li>
        <li className="instagram">
          <a
            href="https://www.instagram.com/kunnalbansal93/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-square-instagram"></i>
          </a>
        </li>
        <li className="github">
          <a href="https://github.com/kunna67" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-square-github"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;