import React, { Component } from 'react';
import Header from './components/Core/Header/Header';
import styles from './App.module.css';
import Sidebar from './components/Core/Sidebar/Sidebar';
import Content from './components/Core/Content/Content'; // eslint-disable-next-line
import backimg from './assets/demo/back.jpg';
import 'font-awesome/css/font-awesome.min.css';
import './assets/icons/wb-icons/web-icons.css';

type Props = {};

export default class App extends Component {
  props: Props;
  render() {
    return (
      <div className={styles.root} >
        <Header />
        <Sidebar />
        <Content />
      </div>
    );
  }
}
