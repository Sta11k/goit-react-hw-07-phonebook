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
// import Timer from './components/Timer/Timer';
import { Observable } from 'rxjs';
export default function App() {
  const observable = new Observable(subscriber => {
    let caunt = 0;
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });

  console.log('just before subscribe');
  observable.subscribe({
    next(x) {
      console.log('got value ' + x);
    },
    error(err) {
      console.error('something wrong occurred: ' + err);
    },
    complete() {
      console.log('done');
    },
  });
  console.log('just after subscribe');

  const { data: contactApi, isFetching } = useFetchContactQuery();
  return (
    <div className="App">
      <Form />
      <Filter />
      {/* {isFetching} */}
      {contactApi && <TodoList contact={contactApi} />}
      {/* <TestList /> */}
      {/* <Timer /> */}
    </div>
  );
}
