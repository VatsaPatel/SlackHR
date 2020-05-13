import React, { Component } from 'react';
import styles from './GreyBtnSmall.module.css';

export default class GreyBtnSmall extends Component {
  render() {
    return (
      <button type="button" className={`${ this.props.styleName } ${styles.button}`} style={this.props.style}>
        {this.props.children}
      </button>
    );
  }
}
