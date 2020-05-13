// @flow

import React, { PureComponent } from "react";
import styles from "./Date.module.css";

import type Moment from "moment";

export default class Date extends PureComponent {
	props: {
		// Date to render
		date: Moment,
		// Index for `onPress` and `onRender` callbacks
		index: number,
		// Whether it's the currently selected date or no
		isActive: boolean,
		// Called when user taps a date
		onPress: (index: number) => void,
		// Called after date is rendered to pass its width up to the parent component
		onRender: (index: number, width: number) => void
	};

	// Style helper functions that merge active date styles with the default ones
	// when rendering a date that was selected by user or was set active by default ///

	// Call `onRender` and pass component's with when rendered
	onLayout = (event: { nativeEvent: { layout: { x: number, y: number, width: number, height: number } } }) => {
		const { index, onRender } = this.props;
		const { nativeEvent: { layout: { width } } } = event;
		onRender(index, width);
	};

	// Call `onPress` passed from the parent component when date is pressed sdgh
	onPress = () => {
		const { index, onClick } = this.props;
		onClick(index);
	};

	//zdxtgh

	render() {
		const { date } = this.props;
		return (
			<button className={`${styles.container}` + (this.props.isActive ? "_active" : "")} onLayout={this.onLayout} onClick={this.onPress}>
				<span className={`${styles.day}` + (this.props.isActive ? "_active" : "")}>{date.format("ddd").toUpperCase()}</span>
				<span className={`${styles.date}` + (this.props.isActive ? "_active" : "")}>{date.format("DD")}</span>
			</button>
		);
	}
}
