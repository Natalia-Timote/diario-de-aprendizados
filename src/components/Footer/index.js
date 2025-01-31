import "./Footer.css";

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
                <img src="../images/logo.png" className="logo" alt="Logo do Diário de Aprendizados" />
            </div>
            <div className="footer-dev">
                <p>Desenvolvido por Natalia Timote através de curso da Alura. Imagens: Canva</p>
            </div>
        </section>
    )
}

export default Footer;
