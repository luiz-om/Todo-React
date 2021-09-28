import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Card from '../cards/cards';
import './pendentes.css';

export default function Pendentes(props) {
    const { tituloSessao, todoList, callback } = props;

    const [itens, setItens] = useState([]);

    useEffect(() => {
        const pendentes = (todoList || []).filter((item) => item.type === 'pendente')
        setItens(pendentes)
    }, [todoList]);

    const definirConluido = (item) => {
        const novoItem = { color: item.color, text: item.text, type: 'concluido' };
        let storageList = todoList;
        const novaListaFiltrada = storageList.filter((value) => value.text !== item.text); //ira retornar todos menos o item que foi clicado
        const novoArray = novaListaFiltrada;
        novoArray.push(novoItem);
        if (callback) callback(novoArray)
    }

    return (
        <div className="Area" >

            <div className='Conc' >

                <span className="Titulo" > {tituloSessao} </span>


            </div> <span className="Titulocc"> { itens.length} Tarefas</span> 
            {
                (itens || []).map((item) => (<
                    Card key={item.text}
                    callback={definirConluido}
                    item={item}
                />
                ))
            }


        </div>
    )
}