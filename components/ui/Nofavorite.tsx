

import { Container, Text, Image } from '@nextui-org/react';

export const Nofavorite = () => {
  return (
    <Container css={{
        display:'flex',
        flexDirection:'column',
        height:'calc(100hv - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center'
    }}>
        <Text h1>No hay favoritos</Text>
        <Image 
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg' 
            width={250}
            height={250}
            style={{ opacity: 0.1}}
            alt='no hay favoritos'
        />
    </Container>
  )
}
