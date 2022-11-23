import { Check, GameController, ToggleLeft } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox'
import { Input } from './Input';
import { FormEvent, useEffect, useState } from "react";
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import axios from "axios";



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
    const [weekDays, setWeekDays] = useState<string[]>([])
    const [useVoiceChannel, setUseVoiceChannel] = useState(false)

    useEffect(()=>{
       axios('http://localhost:3333/games')
       .then(response => {
          setGames(response.data)
       })
    }, [])

    function handleCreateAd(event: FormEvent){
      event.preventDefault()
      const formData = new FormData(event.target as HTMLFormElement)
      const data = Object.fromEntries(formData)

      if(!data.name){
         return
      }
         
      try{
      axios.post(`http://localhost:3333/games/${data.game}/ads`,{
         "name": data.name,
         "yearsPlaying": Number(data.yearsPlaying),
         "discord": data.discord,
         "weekDays": weekDays.map(Number),
         "hourStart": data.hourStart,
         "hourEnd": data.hourEnd,
         "useVoiceChannel": useVoiceChannel,
      })
      alert("Anúncio criado com sucesso!")

      }catch(err){
         console.log(err)
         alert("Erro ao criar o anúncio")

      }
   }
    return (
        <Dialog.Portal>
        <Dialog.Overlay  className='bg-black/60 inset-0 fixed'/>
        <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounder-lg w-[480px] shadow-lg shadow-black'>
           <Dialog.Title className='text-3xl font-black'>Publique um anuncio aqui</Dialog.Title>

           <form onSubmit={handleCreateAd} className='mt-8 flex flex-col gap-4'>


              <div className='flex flex-col gap-2'>
                 <label className='font-semibold' htmlFor="game">Qual o game?</label>
                 <select name="game" id='game' 
                 className="bg-zinc-900 py-3 px-4 rouded text-sm placeholder:text-zinc-500 appearance-none"
                 defaultValue="" 
                 >
                    <option disabled value="" >Selecione o game que deseja jogar</option>

                    {games.map(game => {
                        return (
                           <option key={game.id} value={game.id}>{game.title}</option> 
                        )
                    })}
                    </select> 
              </div>


              <div className='grid grid-col gap-2'>
                 <label className='font-semibold' htmlFor="name">Seu nome (ou nickname)</label>
                 <Input name="name" id='name' type="text" placeholder='Como te chamam no game?'/>
              </div>


              <div className='grid grid-col gap-6'>
                 <div className='flex flex-col gap-2' >
                    <label className='font-semibold' htmlFor='yearsPlaying'>Joga a quantos anos?</label>
                    <Input name="yearsPlaying" id="yearsPlaying" type="number" placeholder="Se for ZERO é Noob '-'" />
                 </div>


                 <div className='flex flex-col gap-2'>
                    <label className='font-semibold' htmlFor='discord'>Qual seu Discord?</label>
                    <Input name="discord" id='discord' type="text" placeholder='Usuário#0000' />
                 </div> 

              
                 <div className='flex gap-6'>
                    <div className='flex flex-col gap-2 flex-1' >
                       <label className='font-semibold' htmlFor='weekDays'>Quando costuma jogar?</label>
                       <div>
                        <ToggleGroup.Root type="multiple" onValueChange={setWeekDays} value={weekDays}>
                           <ToggleGroup.Item value="0" className={`w-8 h-8 rounded ${weekDays.includes('0') ? 'bg-violet-500' : ' bg-zinc-900'} `} title="Domingo">D</ToggleGroup.Item>
                           <ToggleGroup.Item value="1" className={`w-8 h-8 rounded ${weekDays.includes('1') ? 'bg-violet-500' : ' bg-zinc-900'} `} title="Segunda">S</ToggleGroup.Item>
                           <ToggleGroup.Item value="2" className={`w-8 h-8 rounded ${weekDays.includes('2') ? 'bg-violet-500' : ' bg-zinc-900'} `} title="Terça">T</ToggleGroup.Item>
                           <ToggleGroup.Item value="3" className={`w-8 h-8 rounded ${weekDays.includes('3') ? 'bg-violet-500' : ' bg-zinc-900'} `} title="Quarta">Q</ToggleGroup.Item>
                           <ToggleGroup.Item value="4" className={`w-8 h-8 rounded ${weekDays.includes('4') ? 'bg-violet-500' : ' bg-zinc-900'} `} title="Quinta">Q</ToggleGroup.Item>
                           <ToggleGroup.Item value="5" className={`w-8 h-8 rounded ${weekDays.includes('5') ? 'bg-violet-500' : ' bg-zinc-900'} `} title="Sexta">S</ToggleGroup.Item>
                           <ToggleGroup.Item value="6" className={`w-8 h-8 rounded ${weekDays.includes('6') ? 'bg-violet-500' : ' bg-zinc-900'} `} title="Sabado">S</ToggleGroup.Item>
                          </ToggleGroup.Root>
                       </div>

                    </div>
                    <div className='flex flex-col gap-2 flex-1' >
                       <label className='font-semibold' htmlFor='hourStart'>Qual o horário do dia?</label>
                 

                       <div className='grid grid-col gap-2'>
                          <Input  name="hourStart" id='hourStart' type='time' placeholder="De" />
                          <Input  name="hourEnd" id='hourEnd' type="time" placeholder="Até" />
                       </div>
                    </div>
                 </div>
              
                 <div className='mt-2 flex items-center gap-2 text-sm'>
                    <Checkbox.Root
                    onCheckedChange={(checked) =>{
                     if (checked == true){
                        setUseVoiceChannel(true)
                     }else{
                        setUseVoiceChannel(false)
                     }
                    } }
                    className="w-6 h-6 p-1 rounded bg-zinc-900 ">
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
                  className='bg-violet-500 px-5 py-3 h-12 rounded-md font-semibold gap-3 hover:bg-violet-600 flex '
                  >Procurar seu duo
                 
                    <GameController className='w-6 h-6' />
                 </button>
              </footer>
           </form>

        </Dialog.Content>
     </Dialog.Portal>
    )
}