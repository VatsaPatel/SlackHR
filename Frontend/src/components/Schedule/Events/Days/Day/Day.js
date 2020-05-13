/* @flow */

import React, { Component } from "react";
import styles from "./Day.module.css";
import Gradient from "./../../../../Core/Gradients.module.css";
import ModalLauncher from './../../../../Core/ModalLauncher/ModalLauncher';
import EventDetails from './../../EventDetails/EventDetails';


let Styles = {};
Object.assign(Styles, styles, Gradient);

export default class Day extends Component {
	getColor(color) {
		switch (color) {
			case "purple":
				return Styles.purple;
			case "blue":
				return Styles.blue;
			case "red":
				return Styles.red;
			case "bluegreen":
				return Styles.bluegreen;
			case "green":
				return Styles.green;
			case "yellow":
				return Styles.yellow;
			default:
				return Styles.purple;
		}
	}

	renderSubjects() {
		return this.props.data.map(data => (
			<div
				className={`${Styles.SubjectContainer} ${this.getColor(data.color)}`}
				style={{
					top: data.start,
					height: data.duration,
					width: data.width,
					left: data.left,
					borderTopLeftRadius: data.borderTopLeftRadius1,
					borderBottomLeftRadius: data.borderBottomLeftRadius1,
					borderTopRightRadius: data.borderTopRightRadius1,
					borderBottomRightRadius: data.borderBottomRightRadius1
				}}>
				<span className={styles.SubjectFont}>
					<ModalLauncher buttonLabel={data.SubjectName} >
						<EventDetails />
					</ModalLauncher>
				</span>
			</div>
		));
	}

	render() {
		return (
			<div className={`${styles.dayssection}` + (this.props.isActive ? "_active" : "")}>
				<span className={`${styles.day}` + (this.props.isActive ? "_active" : "")}>{this.props.day}</span>
				<div className={`${styles.Line}` + (this.props.isActive ? "_active" : "")} />
				<div className={styles.listContainer}>
					{this.renderSubjects()}
					{/* <div className={`${Styles.SubjectContainer} ${Styles.purple}`} style={{ height: 81 * 2, top: 0 }}>
						<span className={styles.SubjectFont}>Data Structure</span>
					</div>
					<div className={styles.SubjectContainer} style={{ height: 81 * 2, top: 81 * 5 }}>
						<span className={styles.SubjectFont}>Data Structure</span>
					</div> */}
				</div>
			</div>
		);
	}
}
