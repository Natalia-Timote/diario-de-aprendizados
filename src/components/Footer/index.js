import "./Footer.css";
import Logo from "../Logo";

const Footer = () => {
    return (
        <section className="footer-infos">
            <div className="footer-list">
                <ul>
                    <li>
                        <a href="#"><img src="images/fb.png" alt="Facebook" /></a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#"><img src="images/ig.png" alt="Instagram" /></a>
                    </li>
                </ul>
            </div>
            <div className="footer-logo">
                <Logo />
            </div>
            <div className="footer-dev">
                <p>Desenvolvido durante curso da Alura. Por Natalia Timote.</p>
            </div>
        </section>
    )
}

export default Footer;
