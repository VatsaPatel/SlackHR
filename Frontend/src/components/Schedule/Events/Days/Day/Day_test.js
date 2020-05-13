/* @flow */

import React, { Component } from "react";
import styles from './Day.module.css';

export default class Day extends Component {

	renderSubjects() {
		return this.props.data.map(data => (
			<div
				key={data.id}
				color={data.color}
				onPress={this.handleClick}
			>
				<p>{data.SubjectName}</p>
			</div>
		));
	}

	render() {
		return (
				<div className={styles.dayssection}>
					<span className={styles.day}>{this.props.day}</span>
					<div className={styles.Line} />
				</div>
		);
	}
}
