

import { NextPage, GetStaticProps } from 'next'
import { Card, Grid, Row, Text } from '@nextui-org/react';

import { Layout } from '../components/layouts'
import { pokeApi}  from '../api/index';
import { PokemonListResponse, SmallPokemon } from '../interfaces/index';

import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons : SmallPokemon[]
}


 const HomePage: NextPage<Props> = ({ pokemons }) => {


  return (
    <Layout title='Pokemon Next'>
        <Grid.Container gap={ 2 } justify='flex-start'>
                { 
                  pokemons.map( ( e )=> ( 
                     <PokemonCard key= {e.id} pokemon = { e } />
                   )) 
                }
        </Grid.Container>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  
 const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

 const pokemons: SmallPokemon[] =  data.results.map(( p, index ) => ({
                                                        ...p,
                                                        id : index + 1,
                                                        img :`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ index + 1 }.svg`
                                                    })) 

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
