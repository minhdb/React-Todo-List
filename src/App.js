import React, {useState, useReducer } from 'react';
import {mount, route} from 'navi';
import {Router, View} from 'react-navi'

import { Container } from 'react-bootstrap';

import appReducer from './reducers';

import {ThemeContext, StateContext} from './Contexts';

import CreateTodo from "./main/CreateTodo";
import TodoList from "./main/TodoList";
import HeaderBar from './pages/HeaderBar'
import HomePage from './pages/HomePage'

function App() {

  const [ state, dispatch ] = useReducer(appReducer, { user: {}, todos: [] });

  const {user} = state;

  const [theme, setTheme] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral'
  })

  const routes = mount({
    '/': route({view :<HomePage />}),
    '/todos/create':route({view: <CreateTodo />}),
    '/todo/:id': route(req => {
      return { view: <TodoList id={req.params.id} /> }
    }),
  });
  
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <StateContext.Provider value={{state: state, dispatch: dispatch}}>
          <Router routes={routes}>
            <Container>
              <HeaderBar setTheme={setTheme}/>
              <hr/>
              <View/>
            </Container>
          </Router>
        </StateContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
