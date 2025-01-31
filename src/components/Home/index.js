import { IoIosArrowDropdownCircle } from "react-icons/io";
import "./Home.css";

const Home = () => {
    return (
        <section className="home">
            <img src="../images/banner.png" className="banner" alt="Banner com logo do Diário de Aprendizados" />
            <IoIosArrowDropdownCircle onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })} className="arrow-down" />
        </section>
    )
}

export default Home;
