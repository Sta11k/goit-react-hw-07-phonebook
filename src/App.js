import './App.css';
import Form from './components/Forms/Form';
import TodoList from './components/Todolist/Todolist';
import Filter from './components/Filter/Filter';
import {
  useFetchContactQuery,
  useAddContactsMutation,
  useDeleteContactsMutation,
} from '../src/redux/app/operation';
// import { Component } from 'react';
// import { useSelector } from 'react-redux';
// import { getVisibleContacts } from './redux/app/app-phonebook-selector';
// import { connect } from 'react-redux';
// import TestList from './components/Todolist/TestList';
import Timer from './components/Timer/Timer';
export default function App() {
  const { data: contactApi, isFetching } = useFetchContactQuery();
  return (
    <div className="App">
      <Form />
      <Filter />
      {/* {isFetching} */}
      {contactApi && <TodoList contact={contactApi} />}
      {/* <TestList /> */}
      <Timer />
    </div>
  );
}
