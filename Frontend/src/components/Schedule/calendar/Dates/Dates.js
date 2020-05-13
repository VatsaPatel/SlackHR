// @flow

import React, { PureComponent } from "react";
import ScrollBooster from "scrollbooster";
import styles from "./Dates.module.css";

import type Moment from "moment";
import Date from "./../Date/Date";

export default class Dates extends PureComponent {
	props: {
		// Currently active date index
		currentDateIndex: ?number,
		// Array of dates to render
		dates: Array<Moment>,
		// Callback to handle date select
		onSelectDay: (index: number) => void,
		// Callback to handle date render
		onRenderDay: (index: number, width: number) => void
	};

	render() {
		const { currentDateIndex, dates, onSelectDay, onRenderDay } = this.props;
		return (
			<div className={`${styles.container}`}>
				<div className={`${styles.content}`}>
					{dates.map((date, index) => (
						<Date date={date} index={index} isActive={index === currentDateIndex} onClick={onSelectDay} onRender={onRenderDay} key={index} />
					))}
				</div>
			</div>
		);
	}
}
