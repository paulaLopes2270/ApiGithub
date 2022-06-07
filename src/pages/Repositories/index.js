import React, { useEffect, useState } from 'react'
import * as S from './styled'
import { useNavigate } from 'react-router-dom'

export default function Repositories() {
    const history = useNavigate();
    const [repositories, setRepositories] = useState([]);
    useEffect(() => {
        const repositoriesNamesFromLocalStorage = localStorage.getItem('repositoriesName');
        if (repositoriesNamesFromLocalStorage != null) {
            const repositoriesNames = JSON.parse(repositoriesNamesFromLocalStorage);
            setRepositories(repositoriesNames);
            // console.log(repositoriesNames)
            // localStorage.clear();
        }else{
            history.push('/')
        }

    }, []);
    return (
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                {repositories.map(repository => {
                    return (
                        <S.ListItem>{repository}</S.ListItem>
                    )
                })}

            </S.List >
            <S.LinkHome to='/'>Voltar</S.LinkHome>
        </S.Container>
    )
}