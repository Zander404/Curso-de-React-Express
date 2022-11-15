import * as Dialog from '@radix-ui/react-dialog';
import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAdBanner() {
    return (
    <div className="pt-1 py-1 px-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
            <div>
                <strong className="block font-black text-2xl text-white">Não encontrou seu duo?</strong>
                <span className="block font-black text-1x1 text-zinc-400">Publique um anúncio para encotrar novos players</span>
            </div>
            <Dialog.Trigger className="bg-violet-500 py-3 px-4 text-white rounded hover:bg-violet-700 flex gap-3 ">
                <MagnifyingGlassPlus size="24" />
                Publicar
            </Dialog.Trigger>

        </div>
    </div>
        
    )
}