
import './App.css';

import InserirTodo from './componentes/InserirTodo/InserirTodo';
import Pendentes from './componentes/Pendentes/Pendentes';
import Concluidos from './componentes/Concluidos/Concluidos';
import { useEffect, useState } from 'react/cjs/react.development';
import Header from './componentes/Header/Header';

export default function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const list = localStorage.getItem('Todo');
    setTodoList(JSON.parse(list))
  }, [])

  const pegarValor = (novaLista) => {
    localStorage.setItem('Todo', JSON.stringify(novaLista));
    setTodoList(novaLista)
  }

  return (
    <div>
      <Header />
      <InserirTodo callback={pegarValor} />
      <Pendentes
        tituloSessao='Pendentes'
        todoList={todoList}
        callback={pegarValor}
      />
      <Concluidos
        tituloSessao='Concluido'
        todoList={todoList}
      />
    </div>
  );
}

