
import { useState, useEffect } from 'react';
import { NextPage } from 'next';

import { Layout } from '@/components/layouts';
import {Nofavorite} from '@/components/ui';
import { localFavorites } from '@/utils';
import { FavoritePokemons } from '@/components/pokemon';

const FavoritePage:NextPage = () => {


  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([])

  useEffect(() => {
      setfavoritePokemons( localFavorites.pokemons() )
  }, [])
  

  return (
    <Layout title='Pokémons - Favoritos'>
        
       {
         favoritePokemons.length === 0 
                ? <Nofavorite />
                : <FavoritePokemons favoritePokemons={ favoritePokemons } />
       } 

    </Layout>
  )
}

export default FavoritePage