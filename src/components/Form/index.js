import { useState } from "react";
import Button from "../Button";
import DropdownList from "../DropdownList";
import Input from "../Input";
import "./Form.css";
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [languageOrTool, setlanguageOrTool] = useState("");
    const [img, setImg] = useState("");
    const [theme, setTheme] = useState("");
    const [themeName, setThemeName] = useState("");
    const [themeColor, setThemeColor] = useState("");


    const whenSaving = (event) => {
        event.preventDefault();
        props.whenRecordingLearning({
            id: uuidv4(),
            favorite: false,
            title,
            description,
            languageOrTool,
            img,
            theme,
        })
        setTitle("");
        setDescription("");
        setlanguageOrTool("");
        setImg("");
        setTheme("");
    }

    const whenSavingTheme = (event) => {
        event.preventDefault();
        props.whenRecordingTheme({
            title: themeName,
            color: themeColor,
        })
        setThemeName("");
        setThemeColor("");
    }

    return (
        <section className="form">
            <form onSubmit={whenSaving}>
                <h2>Criar novo aprendizado</h2>
                <Input
                    required={true}
                    label="Título" 
                    placeholder="Insira o título" 
                    enteredValue={title}
                    toTheChanged={enteredValue => setTitle(enteredValue)}
                />
                <Input
                    required={true} 
                    label="Descrição" 
                    placeholder="Conte mais sobre o seu novo aprendizado" 
                    enteredValue={description}
                    toTheChanged={enteredValue => setDescription(enteredValue)}
                />
                <Input
                    required={true} 
                    label="Linguagem ou ferramenta" 
                    placeholder="Insira qual linguagem ou ferramenta utilizou" 
                    enteredValue={languageOrTool}
                    toTheChanged={enteredValue => setlanguageOrTool(enteredValue)}
                />
                <Input
                    required={true} 
                    label="Imagem" 
                    placeholder="Insira uma imagem para ilustrar o seu aprendizado" 
                    enteredValue={img}
                    toTheChanged={enteredValue => setImg(enteredValue)}
                />
                <DropdownList 
                    label="Tema" 
                    themes={props.themes} 
                    enteredValue={theme}
                    toTheChanged={enteredValue => setTheme(enteredValue)}
                />
                <Button>Enviar</Button>
            </form>

            <form onSubmit={whenSavingTheme}>
                <h2>Criar novo tema de estudo</h2>
                <Input
                    required={true}
                    label="Tema" 
                    placeholder="Insira o tema" 
                    enteredValue={themeName}
                    toTheChanged={enteredValue => setThemeName(enteredValue)}
                />
               
                <Input
                    required={true} 
                    label="Cor" 
                    placeholder="Insira a cor do tema" 
                    enteredValue={themeColor}
                    toTheChanged={enteredValue => setThemeColor(enteredValue)}
                />
                <Button>Enviar</Button>
            </form>
        </section>
    )
}

export default Form;
