import React, { Component } from 'react';
import styles from './HeadButton.css';

export default class HeadButton extends Component {
  render() {
    return (
      <span style={styles.button} class="button">
        {this.props.children}
      </span>
    );
  }
}
