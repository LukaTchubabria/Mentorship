import Paragraph from "../components/Paragraph";
import Icon from "../components/Icon";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright-container">
        <Paragraph className="footer__copyright-text" text="Copyright © 2021" />
      </div>
      <div className="footer__social-media">
        <div className="footer__icon-container">
          <Icon instagram={true} />
        </div>
        <div className="footer__icon-container">
          <Icon instagram={false} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
