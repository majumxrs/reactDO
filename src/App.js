import { useEffect, useState } from "react";

function App() {

  const [listaTarefas, setListaTarefas] = useState( [] );
  const [tarefa, setTarefas] = useState( { id: '' , texto: "" , status: "" } ); 

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
  function statusTarefa( id, status )
  {
      const index = listaTarefas. findIndex( (tarefa) => tarefa.id === id );
      const novoStatus = status;
      listaTarefas[index].status = !status;
      setListaTarefas( [...listaTarefas ] );
  }
  
    

  useEffect( () => {
    setTarefas( { id: '' , texto: "", status:"" } );
  }, [ listaTarefas ] )

  return (
    <>
      <header>
        <h1>React DO</h1>
      </header>
      <div>
        <input type="text" name="tarefa" placeholder="Insira aqui sua tarefa" value={tarefa.texto} onChange={ (e) => setTarefas( { id: Math.random(), texto: e.target.value, status: false} )}/>
        <button onClick={AddTarefa}>ADD</button>
        
      </div>
      <div>
        <ul>
        {listaTarefas.map( (item, index ) => (
          <li key={index}>{item.texto}   <button onClick={ () => statusTarefa(item.id, item.status)}>{item.status ? "Concluida" : "Não concluida"}</button>  <button onClick={ () => excluirTarefa(item.id)}>Excluir</button></li>
        ))}
        </ul>
      </div>
    </>
  );
}

export default App;
