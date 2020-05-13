import React, { Component } from 'react';
import styles from './AddStudentButton.module.css';

export default class AddButton extends Component {
  render() {
    return (
      <button className={styles.button} onClick={this.props.onClick}>
      	<i className={`${styles.plus} wb-arrow-left`} aria-hidden="true" />
        {this.props.children}
      </button>
    );
  }
}
