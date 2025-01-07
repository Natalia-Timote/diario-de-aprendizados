import Button from "../Button";
import DropdownList from "../DropdownList";
import Input from "../Input";
import "./Form.css";


const Form = () => {

    const options = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "TypeScript",
        "Angular"
    ]
    
    const whenSaving = (event) => {
        event.preventDefault();
        console.log("You have clicked!")
    }

    return (
        <section className="form">
            <form onSubmit={whenSaving}>
                <h2>Insira as informações nos campos abaixo para registrar mais um aprendizado</h2>
                <Input label="Título" placeholder="Insira o título" />
                <Input label="Descrição" placeholder="Conte mais sobre o seu novo aprendizado" />
                <Input label="Tema" placeholder="Insira o tema do seu aprendizado" />
                <Input label="Imagem" placeholder="Insira uma imagem para ilustrar o seu aprendizado" />
                <DropdownList label="Linguagem ou ferramenta" options={options} />
                <Button>Enviar</Button>
            </form>
        </section>
    )
}

export default Form;
