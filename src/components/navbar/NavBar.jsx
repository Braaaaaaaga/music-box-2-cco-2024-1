import React from 'react';
import styles from './NavBar.module.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavBar = ({ logoInicio }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const isAdicionarPage = location.pathname === "/adicionar";
    const buttonClass = isAdicionarPage ? `${styles['logo-fim']} ${styles['active']}` : styles['logo-fim'];

    return (
        <nav className={styles["navbar"]}>
            <img onClick={() => navigate("/")} src={logoInicio}
                className={styles["logo-inicio"]} alt="Logo Início" />
            <button onClick={() => isAdicionarPage ? navigate("/musicas") :
                navigate("/adicionar")} className={buttonClass}>{isAdicionarPage ?
                    "Ver Musicas" : "Adicionar"}</button>
        </nav>
    );
};

export default NavBar;