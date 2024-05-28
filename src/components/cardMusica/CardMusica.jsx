
import React from "react";
import styles from "./CardMusica.module.css";
import transformarData from "../../utils/globals";
import capaImg from "../../utils/assets/capa.png";

const CardMusica = ({
    genero,
    artista,
    nomeMusica,
    anoLancamento,
    imagemSrc,
    onClickBotaoDireita,
    onClickBotaoEsquerda
}) => {
    return (
        <div className={styles["card-musica"]}>
            <div className={styles["imagem-container"]}>
                <img src={imagemSrc ? imagemSrc : capaImg} alt="Imagem" className={styles["imagem"]} />
            </div>
            <div className={styles["textos"]}>
                <h1>{nomeMusica || "N/A"}</h1>
                <p><span>Artista:</span> {artista || "N/A"} </p>
                <p><span>Gênero</span>: {genero || "N/A"}  </p>
                <p><span>Ano de Lançamento</span>: {transformarData(anoLancamento) || "N/A"}  </p>
            </div>
            <div className={styles["botoes"]}>
                <button onClick={onClickBotaoEsquerda} className={styles["botao"]}>Editar</button>
                <button onClick={onClickBotaoDireita} className={styles["botao"]}>Excluir</button>
            </div>
        </div>
    );
};

export default CardMusica;