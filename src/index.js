import React from 'react';
import { render } from 'react-dom';

import Counter from './components/Counter';
import Input from './components/Input';
import Moods from './components/Moods';
import Spinner from './components/Spinner';
import Squares from './components/Squares';
import Programmers from './components/Programmers';
import ReactDOM from "react-dom";
import "./css/index.css";
import TodoList from "./components/TodoList";


render(
  <>
    <Counter />
    <Moods />
    <Spinner />
    <Input />
    <Squares />
    <Programmers />
  </>
  ,
  document.querySelector('#root')
);

ReactDOM.render (
    <div>
        <TodoList/>
    </div>,
    document.querySelector("#container")
);