import React, { useState } from 'react';
import axios from "axios"
import * as S from './styled'
import { useNavigate  } from "react-router-dom";

function Home(props) {
  let history = useNavigate();
  const [usuario, setUseuario] = useState('')
  const [erro, setErro] = useState(false)

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name)
      })
    //  console.log (JSON.stringify(repositoriesName))
    localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
    setErro(false)
    history('/repositories')
    })
    .catch(err => {
      setErro(true)
    })
    
    // .then(response => console.log(response.data))
  }

  return (
    <S.HomeContainer>
      <S.Content>
        {/* <h1>{props.title}</h1>  */}
        {/* <p> {usuario}</p> */}
        <S.Input className="usuarioInput" placeholder='Usuário' value={usuario} onChange={e => setUseuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}>pesquisar</S.Button>
      
      </S.Content>
      {erro ?   <S.ErrorMsg>Ocorreu um erro! Tente novamente</S.ErrorMsg> : '' }
    </S.HomeContainer>
  );
}

export default Home;
