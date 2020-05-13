// @flow

import React, { Component } from "react";
import styles from "./Events.module.css";

import TimeList from "./TimeList/TimeList";
import Days from "./Days/Days";


export default class Events extends Component {
	render() {
		//const { events } = this.props; asertg
		return (
			<div className={styles.container}>
				<TimeList />
				<Days />
			</div>
		);
	}
}
