import { useEffect, useState } from "react";
import Style from "./global.module.css"
import "./app.css"

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
      <div className={Style.primeiradiv} >
        <input className={Style.caixatexto} type="text" name="tarefa" placeholder="Insira aqui sua tarefa" value={tarefa.texto} onChange={ (e) => setTarefas( { id: Math.random(), texto: e.target.value, status: false} )}/>
        <div>
          <button className={Style.btnadd} onClick={AddTarefa}>ADD</button>
        </div>
      </div>
      <div className={Style.segundadiv}>
        <h3 className={Style.caixaescrita}>Tarefas à fazer:</h3>
      </div>
      <div className="teste">
        <ul>
        {listaTarefas.map( (item, index ) => (
          <li className={item.status ? 'itemAtivo' : 'itemInativo'} key={index}>
            <button className={Style.btncirculo} onClick={ () => statusTarefa(item.id, item.status)}>{item.status ? <i  className="fa-solid fa-circle" style={{color:'red'}}></i> : <i class="fa-regular fa-circle" style={{color:'white'}}></i>}</button>
            <div className={Style.itemTexto}>
              {item.texto}
            </div>
            <button className={Style.btnlixo} onClick={ () => excluirTarefa(item.id)}><i class="fa-solid fa-trash" style={{color:'white'}}></i></button>
          </li>
        ))}
        </ul>
      </div>
    </>
  );
}

export default App;
