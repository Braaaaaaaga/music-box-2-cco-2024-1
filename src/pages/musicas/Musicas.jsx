import api from "../../api";
import { toast } from 'react-toastify';
import styles from "./Musicas.module.css";
import { useNavigate } from "react-router-dom";
import logo from "../../utils/assets/logo.svg";
import React, { useState, useEffect } from "react";
import NavBar from "../../components/navbar/NavBar";
import CardMusica from "../../components/cardMusica/CardMusica";

const Musicas = () => {
    const navigate = useNavigate();
    const [cardsData, setCardsData] = useState();

    const handleBotaoEsquerda = (id) => {
        console.log(id)
        navigate(`/editar/${id}`);
    };

    const handleBotaoDireita = (id) => {
        toast.dismiss();
        api.delete(`/${id}`).then(() => {
            toast.success("Card de Música, deletado com sucesso!");
            recuperarValorDoCard()
        })
            .catch(() => {
                toast.error("Erro ao deletar, tente novamente!");
            })
    };

    function recuperarValorDoCard() {
        api.get().then((response) => {
            const { data } = response;
            setCardsData(data)
        }).catch(() => {
            toast.error("Erro ao recuperar os valores da API, tente novamente");
        })
    }
    useEffect(() => {
        recuperarValorDoCard();
    }, [])

    return (
        <>
            <NavBar logoInicio={logo} />
            <div className={styles["content-musicas"]}>
                {cardsData && cardsData.map((data, index) => (
                    <div key={index} className={styles["quadrado"]}>
                        <CardMusica
                            artista={data.artista}
                            nomeMusica={data.nomeMusica}
                            genero={data.genero}
                            anoLancamento={data.ano}
                            imagemSrc={data.imagem}
                            onClickBotaoEsquerda={() => handleBotaoEsquerda(data.id)}
                            onClickBotaoDireita={() => handleBotaoDireita(data.id)}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Musicas;