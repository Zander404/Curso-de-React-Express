import { Check, GameController } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox'
import { Input } from './Input';
import { useEffect, useState } from "react";



export function CreateAdModal(){
    interface Game {
        id: string;
        title: string;
        bannerUrl: string;
        _count: {
           ads: number;
        }
     
     }
     
    const [games, setGames] = useState<Game[]>([])

    useEffect(()=>{
       fetch('http://localhost:3333/games')
       .then(response => response.json())
       .then(data => {
          setGames(data)
       })
    }, [])
    return (
        <Dialog.Portal>
        <Dialog.Overlay  className='bg-black/60 inset-0 fixed'/>
        <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounder-lg w-[480px] shadow-lg shadow-black'>
           <Dialog.Title className='text-3xl font-black'>Publique um anuncio aqui</Dialog.Title>

           <form className='mt-8 flex flex-col gap-4'>


              <div className='flex flex-col gap-2'>
                 <label className='font-semibold' htmlFor="game">Qual o game?</label>
                 <select id='game' 
                 className="bg-zinc-900 py-3 px-4 rouded text-sm placeholder:text-zinc-500 appearance-none" 
                 >
                    <option disabled selected value="" >Selecione o game que deseja jogar</option>

                    {games.map(game => {
                        return (
                           <option key={game.id} value={game.id}>{game.title}</option> 
                        )
                    })}
                    </select> 
              </div>


              <div className='grid grid-col gap-2'>
                 <label className='font-semibold' htmlFor="name">Seu nome (ou nickname)</label>
                 <Input id='name' type="text" placeholder='Como te chamam no game?'/>
              </div>


              <div className='grid grid-col gap-6'>
                 <div className='flex flex-col gap-2' >
                    <label className='font-semibold' htmlFor='yearsPlaying'>Joga a quantos anos?</label>
                    <Input id="yearsPlaying" type="number" placeholder="Se for ZERO é Noob '-'" />
                 </div>


                 <div className='flex flex-col gap-2'>
                    <label className='font-semibold' htmlFor='discord'>Qual seu Discord?</label>
                    <Input id='discord' type="text" placeholder='Usuário#0000' />
                 </div> 

              
                 <div className='flex gap-6'>
                    <div className='flex flex-col gap-2 flex-1' >
                       <label className='font-semibold' htmlFor='weekDays'>Quando costuma jogar?</label>
                       <div>
                          <button className="w-8 h-8 rounded bg-zinc-900 " title="Domingo">D</button>
                          <button className="w-8 h-8 rounded bg-zinc-900 " title="Segunda">S</button>
                          <button className="w-8 h-8 rounded bg-zinc-900 " title="Terça">T</button>
                          <button className="w-8 h-8 rounded bg-zinc-900 " title="Quarta">Q</button>
                          <button className="w-8 h-8 rounded bg-zinc-900 " title="Quinta">Q</button>
                          <button className="w-8 h-8 rounded bg-zinc-900 " title="Sexta">S</button>
                          <button className="w-8 h-8 rounded bg-zinc-900 " title="Sabado">S</button>
                       </div>

                    </div>
                    <div className='flex flex-col gap-2 flex-1' >
                       <label className='font-semibold' htmlFor='hourStart'>Qual o horário do dia?</label>
                 

                       <div className='grid grid-col gap-2'>
                          <Input id='hourStart' type='time' placeholder="De" />
                          <Input id='hourEnd' type="time" placeholder="Até" />
                       </div>
                    </div>
                 </div>
              
                 <div className='mt-2 flex items-center gap-2 text-sm'>
                    <Checkbox.Root className="w-6 h-6 p-1 rounded bg-zinc-900 ">
                        <Checkbox.Indicator>
                            <Check className="w-4 h-4 text-emerald-400" ></Check>
                        </Checkbox.Indicator>
                    </Checkbox.Root>
                    Costumo me conectar em chamada de voz

                 </div>
              </div>
              <footer className='mt-4 flex justify-end gap-4'>
                 <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'> Cancelar</Dialog.Close>
                 <button
                  type='submit'
                  className='bg-violet-500 px-5 h-12 rounded-md font-semibold gap-3 hover:bg-violet-600'
                  >
                 
                    <GameController className='w-6 h-6' />
                 </button>
              </footer>
           </form>
          
        </Dialog.Content>
     </Dialog.Portal>
    )
}