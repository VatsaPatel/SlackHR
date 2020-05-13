import React, { Component } from "react";

export default class CSSVariableApplicator extends Component {
  componentDidMount() {
    this.updateCSSVariables(this.props.variables);
  }

  componentDidUpdate(prevProps) {
    if (this.props.variables !== prevProps.variables) {
      this.updateCSSVariables(this.props.variables);
    }
  }
  updateCSSVariables(variables) {
    this.variables.forEach( (value, prop) => {
      document.documentElement.style.setProperty(prop, value);
    });
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}
