import React from "react";
import styles from "./Home.module.css";
import imgPrincipal from "../../utils/assets/img-fundo-principal.png";
const Home = () => {
    return (
        <>
            <div className={styles["background-image"]}>
                <img src={imgPrincipal} alt="Imagem de fundo" />
                <div className={styles["titulo"]}>
                    <h1>
                        Deixe a música <span> sair da caixa</span>
                    </h1>
                    <button>Começar</button>
                </div>
            </div>
        </>
    );
};
export default Home;