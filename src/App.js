import { useEffect, useState } from "react";

function App() {

  const [listaTarefas, setListaTarefas] = useState( [] );
  const [tarefa, setTarefas] = useState( { id: '' , texto: "" } ); 

  function AddTarefa()
  {
    if( tarefa.texto !== "" ){
      setListaTarefas([...listaTarefas, tarefa ]);
    }
  }
  function excluirTarefa( id )
  {
    const novaLista = listaTarefas.filter( ( tarefa ) => tarefa.id !== id );
    setListaTarefas( novaLista );
  }
  
    

  useEffect( () => {
    setTarefas( { id: '' , texto: "" } );
  }, [ listaTarefas ] )

  return (
    <>
      <header>
        <h1>React DO</h1>
      </header>
      <div>
        <input type="text" name="tarefa" placeholder="Insira aqui sua tarefa" value={tarefa.texto} onChange={ (e) => setTarefas( { id: Math.random(), texto: e.target.value } )}/>
        <button onClick={AddTarefa}>ADD</button>
        
      </div>
      <div>
        <ul>
        {listaTarefas.map( (item, index ) => (
          <li key={index}>{item.texto} <button onClick={ () => excluirTarefa(item.id)}>Excluir</button></li>
        ))}
        </ul>
      </div>
    </>
  );
}

export default App;
