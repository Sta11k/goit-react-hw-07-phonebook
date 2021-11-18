import './App.css';
import Form from './components/Forms/Form';
import TodoList from './components/Todolist/Todolist';
import Filter from './components/Filter/Filter';
// import { Component } from 'react';
// import { useSelector } from 'react-redux';
// import { getVisibleContacts } from './redux/app/app-phonebook-selector';
// import { connect } from 'react-redux';
// import { TestList } from './components/Todolist/TestList';
export default function App() {
  return (
    <div className="App">
      <Form />
      <Filter />
      <TodoList />
      {/* <TestList /> */}
    </div>
  );
}
