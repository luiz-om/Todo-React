import { computeHeadingLevel } from '@testing-library/dom'
import React, { useState } from 'react'
import "./InserirTodo.css"


export default function InserirTodo(props) {
    const { callback } = props;

    const [todoList, setTodolist] = useState([])
    const [Text, setText] = useState("")
    const [Color, setColor] = useState('#000')

    const alteraValor = (event) => {
        let itemText = event.target.value
        setText(itemText);
    }
    const PegarCor = (event) => {
        let itemColor = event.target.value
        setColor(itemColor);
    }
    const salvarLocalStorage = () => {
        const banco = localStorage.getItem('Todo') || [];
        const ItemFinal = {
            color: Color,
            text: Text,
            type: 'pendente'
        }

        let novoBanco = []
        if (banco.length) {
            novoBanco = JSON.parse(banco);
            novoBanco.push(ItemFinal)
        } else {
            novoBanco.push(ItemFinal)
        }

        if (callback) callback(novoBanco);
        setText('')
    }
    const Limpar = () => {
        localStorage.clear();
        if (callback) callback([]);
        setText('')
    }
    return (

        <div className='Header'>
            <div className='HeaderRight'>
                <input className='inputButon' type="text" value={Text} onChange={alteraValor} />
                <input className='inputColor' type="color" onChange={PegarCor} />
                <button className='insertButton' onClick={salvarLocalStorage} value={Color}>Inserir</button>

            </div>
            <div className='HeaderLeft'>
                <button onClick={Limpar}>Limpar</button>
            </div>
        </div>

    )

}