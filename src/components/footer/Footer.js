import './footer.scss';
import inst from '../../image/inst.png';
import youtube from '../../image/youtube.png';
import vk from '../../image/vk.png';
import twitter from '../../image/twitter.png';
import mail from '../../image/mail.png';

const Footer = () => {
  return (
    <footer id="footer">
      <img
        src="https://www.desktopbackground.org/download/1280x900/2013/12/07/681835_black-and-white-iron-man_1600x900_h.jpg"
        alt="footer"></img>
      <div>
        <span>Marvel Studios' Eternals Red Carpet | Best Moments!</span>
        <span>
          'Marvel's Guardians of the Galaxy' and 'MARVEL Future Revolution' Earn 5 Nominations for
          The Game Awards 2021
        </span>
      </div>
      <div className="footer_contact">
        <img src={inst} alt="inst" />
        <img src={youtube} alt="youtube" />
        <img src={vk} alt="vk" />
        <img src={twitter} alt="twitter" />
        <img src={mail} alt="mail" />
      </div>
    </footer>
  );
};

export default Footer;
