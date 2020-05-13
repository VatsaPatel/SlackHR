import React, { Component } from 'react';
import styles from './GreyBtnLarge.module.css';

export default class GreyBtnLarge extends Component {
  render() {
    return (
      <button type="button" className={` ${styles.button} ${ this.props.styleName }`} style={this.props.style}>
        {this.props.children}
      </button>
    );
  }
}
