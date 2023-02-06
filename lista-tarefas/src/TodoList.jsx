import React, { useState } from "react";
import './TodoList.css';

function TodoList(){

const [ lista, setLista ] = useState([]);
const [ novoItem, setNovoItem ] = useState("");

    function adicionaItem(form){
        form.preventDefault();
        if (!novoItem) {
            return;
        }
        setLista([...lista, {text: novoItem, isCompleted:false}]);
        setNovoItem("");
        document.getElementById('input-entrada').focus();
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <form onSubmit={adcionaItem}>
                <input 
                id="input-entrada"
                type="text"
                value={novoItem}
                onChange = {(e) => {setNovoItem(e.target.value)}}
                placeholder="Adiconar uma tarefa"
                />
                <button className="add" type="submit">Add</button>
            </form>
            <div className="listaTarefas">
                <div className="item">
                    <span>Tarefa de exemplo</span>
                    <button className="del">Deletar</button>
                </div>

                <div className="item completo">
                    <span>Tarefa de exemplo</span>
                    <button className="del">Deletar</button>
                </div>
                <button className="deleteAll">Deletar Todas</button>
            </div>
        </div>
    )
}

export default TodoList