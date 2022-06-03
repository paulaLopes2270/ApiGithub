import React, { useState } from 'react';
import axios from "axios"
import * as S from './styled'

function Home(props) {
  const [usuario, setUseuario] = useState('')
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/{usuario}/repos`).then(response => console.log(response.data))
  }

  return (
    <>
      <S.Container>
        {/* <h1>{props.title}</h1>  */}
        <p> {usuario}</p>
        <S.Input className="usuarioInput" placeholder='Usuário' value={usuario} onChange={e => setUseuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}>pesquisar</S.Button>
      </S.Container>
    </>
  );
}

export default Home;
