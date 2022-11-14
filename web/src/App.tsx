//Componentes / Propriedades
import {MagnifyingGlassPlus} from 'phosphor-react';
import "/styles/main.css";
import logoSvg from "./assets/logo.svg";

function App() {
   return (
      <div className="max-w-7xl flex flex-col mx-auto items-center ">
         <img src={logoSvg} alt="Logo" />
         <h1 className="text-6xl text-white font-black mt-20">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">Duo</span> está aqui. </h1>


         {/* Div de Jogos */}
         <div className="grid grid-cols-6 gap-6 mt-16">
            <a href="#" className="relative rounded-lg overflow-hidden"> 
                        <img src="./game1.png" alt="" />
               <div className="m-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                  <strong className="font-bold text-white block">League of Legends</strong>
                  <span className="text-zinc-300 text-sm block">4 anúncios </span> 
               </div>
            </a>
            <a href="#" className="relative rounded-lg overflow-hidden">
               <img src="./game2.png" alt="" />
               <div className="m-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                  <strong className="font-bold text-white block">Dota 2</strong>
                  <span className="text-zinc-300 text-sm">4 anúncios </span> 
               </div>
            </a>
            <a href="#" className="relative rounded-lg overflow-hidden">
               <img src="./game3.png" alt="" />
               <div className="m-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                  <strong className="font-bold text-white block">Counter Strike</strong>
                  <span className="text-zinc-300 text-sm">4 anúncios </span> 
               </div>
            </a>
            <a href="#" className="relative rounded-lg overflow-hidden">
               <img src="./game4.png" alt="" />
               <div className="m-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                  <strong className="font-bold text-white block">Apex Legends</strong>
                  <span className="text-zinc-300 text-sm">4 anúncios </span> 
               </div>
            </a>
            <a href="#" className="relative rounded-lg overflow-hidden">
               <img src="./game5.png" alt="" />
               <div className="m-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                  <strong className="font-bold text-white block">Dragonball Super</strong>
                  <span className="text-zinc-300 text-sm">4 anúncios </span> 
               </div>
            </a>
            <a href="#" className="relative rounded-lg overflow-hidden">
               <img src="./game6.png" alt="" />
               <div className="m-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                  <strong className="font-bold text-white block">WoW</strong>
                  <span className="text-zinc-300 text-sm">4 anúncios </span> 
               </div>
            </a>

         </div>
         {/* Fim da Div de Jogos */}



         {/* Div da Caixa de Ajuda */}
         <div className="pt-1 py-1 px-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
            <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
               <div>
                  <strong className="block font-black text-2xl text-white">Não encontrou seu duo?</strong>
                  <span className="block font-black text-1x1 text-zinc-400">Publique um anúncio para encotrar novos players</span>
               </div>
               <button className="bg-violet-500 py-3 px-4 text-white rounded hover:bg-violet-700 flex gap-3 ">
                  <MagnifyingGlassPlus size="24" />
                  Publicar
               </button>

            </div>
         </div>
         {/* Fim da Caix de Ajuda */}
         
      </div>
   );
}

export default App
