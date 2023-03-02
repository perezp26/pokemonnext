import { FC } from "react";
import Head from "next/head"

import { NavBar } from '../ui/index';

interface Props  {
    children : JSX.Element,
    title? : string 
}

const origin = (typeof window === 'undefined' ? '' : window.location.origin)

export const Layout: FC<Props> = ({ children, title }) => {

  return (
    <>
         <Head>
            <title>{ title || 'Sin titulo'}</title>
            <meta name="author" content="Raul Perez" />
            <meta name="description" content="Información sobre el pokémon" />
            <meta name="keywords" content= {` ${ title }, pokémon, pokedex`} />

            <meta property="og:title" content={`Información sobre ${ title }`}/>
            <meta property="og:description" content={`  ${title}`} />
            <meta property="og:image" content={ `${ origin }/img/banner.png`} />
         </Head>   

         <NavBar />

         <main style={{ padding: '0px 20px' }}>
            { children }
         </main>
    </>
  )
}