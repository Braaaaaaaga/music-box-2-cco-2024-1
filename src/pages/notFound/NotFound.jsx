import React from "react";
import styles from "./NotFound.module.css";
import logo from "../../utils/assets/logo.svg";
import NavBar from "../../components/navbar/NavBar";
import imgNotFound from "../../utils/assets/404.svg";
const NotFound = () => {
    return (
        <>
            <NavBar logoInicio={logo} />
            <div className={styles["content"]}>
                <h1>Página não encontrada</h1>
                <img src={imgNotFound} alt="Erro 404" />
            </div>
        </>
    );
};
export default NotFound;