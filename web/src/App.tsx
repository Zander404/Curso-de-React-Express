//React
import react, { useState, useEffect } from 'react';


import * as Dialog from '@radix-ui/react-dialog';


//Componentes 
import { GameBanner } from './components/GamerBanner';
import { CreateAdBanner } from './components/CreateAdBanner';


// Propriedades & Style
import "/styles/main.css";

//Logo 
import logoSvg from "./assets/logo.svg";
import { CreateAdModal } from './components/CreateAdModal';

interface Game {
   id: string;
   title: string;
   bannerUrl: string;
   _count: {
      ads: number;
   }

}


function App() {
   //Usando State do React
   const [games, setGames] = useState<Game[]>([])

   useEffect(()=>{
      fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
         setGames(data)
      })
   }, [])



   return (
      <div className="max-w-[1344px] flex flex-col mx-auto items-center my-20 ">
         <img src={logoSvg} alt="Logo" />
         <h1 className="text-6xl text-white font-black mt-20">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">Duo</span> está aqui. </h1>


         {/* Div de Jogos */}
         <div className="grid grid-cols-6 gap-6 mt-16">
            {games.map(game =>{
               return (
                  <GameBanner
                  key={game.id}
                  title= {game.title} 
                  bannerUrl = {game.bannerUrl}
                  adsCount = {game._count.ads}

                  />
               )
            })}
           <GameBanner
            title= 'League of Cachorro'
            bannerUrl ='https://static-cdn.jtvnw.net/ttv-boxart/62760102_IGDB-285x380.jpg'
            adsCount = {5}
            />
         </div>
         {/* Fim da Div de Jogos */}




         {/* Div da Caixa de Ajuda */}
         <Dialog.Root>
            <CreateAdBanner />
            <CreateAdModal />
           
         </Dialog.Root>
         {/* Fim da Caixa de Ajuda */}
         
      </div>
   );
}

export default App
