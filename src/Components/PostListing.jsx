import react from 'react';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'

import { HeoresContainer } from "./Styles/heroe.style" 
import { Heroe } from "./Styles/heroe.style"
import { HeroeName } from "./Styles/heroe.style" 
import { SeeMore } from "./Styles/heroe.style" 
import { SearchComic } from "./Styles/heroe.style"



const PostListing = ({heroes})  => {
  const [searchHeroe, setSearchHeroe] = useState([]);
  return (
    <div>
      {/* seaarsh bar component */}
      <SearchComic type="text" placeholder="Search your favorite Comic" onChange={event => {setSearchHeroe(event.target.value)}}/>

      {/* container list with the heroes, set the color by parameter */}
      <HeoresContainer backgroundColor="EBDEDD">
        {heroes.filter((val) => {
          {/* if the search is empty return all the elements */}
          if (searchHeroe == "") return val
          else if (val.name.toLowerCase().includes(searchHeroe.toLowerCase())){
            return val
          }
        })
        .map((heroe,key) => (
            <Heroe key={key}><a href="">
              <img src={heroe.thumbnail.path+"/portrait_xlarge."+heroe.thumbnail.extension} />
             <HeroeName>{heroe.name}</HeroeName>
             <SeeMore>See More</SeeMore>
              </a></Heroe>
          ))}
      </HeoresContainer>
    </div>
    
  )
}
export default PostListing