import { useEffect, useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import styled, { css } from 'styled-components'

import './Components/Styles/App.css'
import logo from './img/logo.svg'
import  PostListing from './Components/PostListing'
import  GlobalStyle from './Components/Styles/GlobalStyle'



function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [heroes, setHeroes] = useState([]);
    useEffect(() => {
      fetch('https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=1&apikey=deee09649e76da698be9309401af1ab5&hash=ae35f532af3d7d370cdd1b412387e12c')
      .then(response => response.json())
      .catch((err) => console.log(err))
      .then((dataApi) => {
        isLoaded ? console.log("Carregou") : console.log("Aguarde, aplicacao carregando");
        setIsLoaded(true);
        setHeroes(dataApi.data.results);
        console.log(dataApi)
      
    })
  }, [])
  return (
    <div>
      <GlobalStyle />
      <header className="header-container">
        <img src={logo} alt="" />
      </header>
      <PostListing heroes={heroes} />
    </div>
  )
}


export default App
