import api from "../../api";
import React, { useState } from "react";
import styles from "./Adicionar.module.css";
import logo from "../../utils/assets/logo.svg";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import imgCantor from "../../utils/assets/pessoa-ouvindo-disco.svg";
import { toast } from "react-toastify";

function Adicionar() {
    const navigate = useNavigate();
    const [ano, setAno] = useState("");
    const [genero, setGenero] = useState("");
    const [imagem, setImagem] = useState("");
    const [artista, setArtista] = useState("");
    const [nomeMusica, setNomeMusica] = useState("");
    const handleSave = () => {
        const objetoAdicionado = {
            nomeMusica,
            artista,
            genero,
            ano,
            imagem
        };

        api.post(``, {
            nomeMusica,
            artista,
            genero,
            ano,
            imagem
        }).then(() => {
            toast.success("Novo Card criado com sucesso!");
            sessionStorage.setItem("editado",
                JSON.stringify(objetoAdicionado));
            navigate("/musicas")
        }).catch(() => {
            toast.error("Ocorreu um erro ao salvar os dados, por favor, tente novamente.");
        })
    };
    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    }
    const handleBack = () => {
        navigate("/musicas");
    };

    return (
        <>
            <NavBar logoInicio={logo} />
            <div className={styles["container-adicionar"]}>
                <div className={styles["secao-esquerda-adicionar"]}>
                    <form>
                        <h1>Adicionar</h1>
                        <input
                            type="text"
                            value={nomeMusica}
                            placeholder="Nome da música"
                            onChange={(e) => handleInputChange(e, setNomeMusica)}
                        />
                        <input
                            type="text"
                            value={artista}
                            placeholder="Artista"
                            onChange={(e) => handleInputChange(e, setArtista)}
                        />
                        <input
                            type="text"
                            value={genero}
                            placeholder="Genero"
                            onChange={(e) => handleInputChange(e, setGenero)}
                        />

                        <input
                            type="text"
                            value={ano}
                            placeholder="Ano de Lançamento"
                            onChange={(e) => handleInputChange(e, setAno)}
                        />
                        <input
                            type="text"
                            value={imagem}
                            placeholder="URL da Imagem"
                            onChange={(e) => handleInputChange(e, setImagem)}
                        />
                        <div className={styles["buttons-container"]}>
                            <button type="button" onClick={handleSave}>
                                Salvar
                            </button>
                            <button type="button" onClick={handleBack}>
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
                <div className={styles["secao-direita-adicionar"]}>
                    <img src={imgCantor} alt="Imagem de uma pessoa
ouvindo música" />
                </div>
            </div>

        </>
    );
}
export default Adicionar;