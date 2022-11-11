//Componentes / Propriedades

interface ButtonProps{ //Definimos as carecteristicas do componente para poder ser setada para cada componente de forma idenpendente
   title: string;
}

interface DesenhoProps{
   nome: string;
   }

function Button(props: ButtonProps){ //Definimos o componente que vai receber tais carateristicas e como
   return (
      <button>
         {props.title}
      </button>
   )

}



function Desenho(props: DesenhoProps){
   return <div>
      <p>Para todos os esquisitos, se resolvam, especialmente você {props.nome}</p>
   </div>
}


function App() {
   return <div>
      <Button title="Teste 1" />
      <Button title="Teste 3" />
      <Button title="Teste 3" />
      <Button title="Teste 1" />
      <Desenho nome="Pedro" />
   </div>
}

export default App
