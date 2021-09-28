import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Card from '../cards/cards';
import '../Pendentes/pendentes.css';

export default function Concluidos(props) {
    const { todoList, tituloSessao } = props;
    const [itens, setItens] = useState([]);

    useEffect(() => {
        const concluidos = (todoList || []).filter((item) => item.type === 'concluido')
        setItens(concluidos)
    }, [todoList]);

    return (
        <div className="Area">
            <div className='Conc'>
            <span className="Titulo">{tituloSessao}</span>
          
            </div>
            <span className="Titulocc"> { itens.length} Tarefas</span> 
            {(itens || []).map((item) => (
                <Card
                    key={item.text}
                    item={item}
                />
            ))}


        </div>
    )
}