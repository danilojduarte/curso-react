import React, { useState } from "react";
import './TodoList.css';
import Icone from './assets/icon.webp';

function TodoList() {

    const [lista, setLista] = useState([]);
    const [novoItem, setNovoItem] = useState("");

    function adicionaItem(form) {
        form.preventDefault();
        if (!novoItem) {
            return;
        }
        setLista([...lista, { text: novoItem, isCompleted: false }]);
        setNovoItem("");
        document.getElementById('input-entrada').focus();
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <form onSubmit={adicionaItem}>
                <input
                    id="input-entrada"
                    type="text"
                    value={novoItem}
                    onChange={(e) => { setNovoItem(e.target.value) }}
                    placeholder="Adiconar uma tarefa"
                />
                <button className="add" type="submit">Add</button>
            </form>
            <div className="listaTarefas">
                <div style={{textAlign:'center'}}>
                    {
                        lista.length < 1
                            ?
                            <img className="icone-central" src={Icone} />
                    :
                    lista.map((item, index)=> (
                        <div 
                        className={item.isCompleted ? "item completo" : "item"}
                        >
                        <span>{item.text}</span>
                        <button className="del">Deletar</button>
                    </div>

                    ))
                           
                    }

                    <div className="item completo">
                        <span>Tarefa de exemplo</span>
                        <button className="del">Deletar</button>
                    </div>
                    <button className="deleteAll">Deletar Todas</button>
                </div>
            </div>
        </div>
    )
}

export default TodoList