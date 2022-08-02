import styled, { css } from 'styled-components'

export const HeoresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #${(props) => props.backgroundColor};
  padding: .5em;
  text-align: center;
  width: 80%;
  margin: 0 auto;
` 
export const Heroe = styled.div`
background: transparent;
  display: block;
  padding: 2em;
  order: 0;
  transition: background-color .5s ease-out;
  a {
    display: block;
    text-decoration: none;
  }
  &:hover {
    background: #E6D4D2;
  }
`
export const HeroeName = styled.h3`
  font-weight: bold;
  color: #3a3a3a;
  text-decoration: none;
`
export const SeeMore = styled.span`
  background: #CD3024;
  border-radius: 10px;
  color: white;
  display: inline-block;
  font-size: .8em;
  font-weight: bold;
  margin-top: 1em;
  padding: .2em .5em;
  transition: background-color .5s ease-out;
  &:hover {
    background: #B91306
  }
`
export const SearchComic = styled.input`
  border-color: #3a3a3a;
  border-radius: 100px;
  display: block;
  font-size: 1em;
  margin: 1em auto;
  padding: 1em 5em;
  text-align: center;
  &:focus {
    border-color: #B91306;
  }
`