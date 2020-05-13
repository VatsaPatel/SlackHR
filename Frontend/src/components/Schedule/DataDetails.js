import React, { Component } from "react";
import styles from "./DataDetails.module.css";
import { Circle } from "./../common";

const clipboard = require("../../../Icons/clipboard.svg");
const pamphlet = require("../../../Icons/pamphlet.svg");

class DataDetails extends Component {
	applyLetterSpacing(string, count = 1) {
		return string.split("").join("\u200A".repeat(count));
	}

	render() {
		const { professor, room, topic, style } = this.props;

		const startTime = new Date();
		const endTime = new Date();

		const eventStartHour =
			startTime.getHours() > 12 ? startTime.getHours() - 12 : startTime.getHours();
		const eventStartMinute = this.applyLetterSpacing("00");
		const eventEndHour = endTime.getHours() > 12 ? endTime.getHours() - 12 : endTime.getHours();
		const eventEndMinutes = this.applyLetterSpacing("50");
		const startPeriod = startTime.getHours() > 12 ? "PM" : "AM";
		const endPeriod = endTime.getHours() > 12 ? "PM" : "AM";

		return (

				<div>
					<div className={styles.timeStyle}>
						<div className={styles.timecontainer}>
							<p className={styles.hourStyle}>{eventStartHour}</p>
							<p className={styles.minuteStyle}>{` : ${eventStartMinute}`}</p>
							<p className={styles.apmStyle}>{` \u200A${startPeriod}`}</p>
						</div>
						<p className={styles.minuteStyle} style={{ alignSelf: "center", color: "black" }}>-</p>
						<div className={styles.timecontainer} >
							<p className={styles.hourStyle}>{eventEndHour}</p>
							<p className={styles.minuteStyle}>{` : ${eventEndMinutes}`}</p>
							<p className={styles.apmStyle}>{` \u200A${endPeriod}`}</p>
						</div>
					</div>
					<div className={styles.eventNotificationContainer}>
						<div className={styles.detailrowcontainer}>
							<div className={styles.iconDescContainer}>
								<Circle color="#a1a1a1" radius="14" className={styles.iconStyle}>
									<img width="17" source={clipboard} alt="clipboard"/>
								</Circle>
								<p className={styles.iconpStyle}>Topic :</p>
							</div>
							<p className={styles.eventNotificationp}>{topic}</p>
						</div>
						<div className={styles.line} />
						<div className={styles.detailrowcontainer}>
							<div className={styles.iconDescContainer}>
								<Circle color="#a1a1a1" radius="14" className={styles.iconStyle}>
									<img width="17" source={pamphlet} alt="pamplet"/>
								</Circle>
								<p className={styles.iconpStyle}>Room :</p>
							</div>
							<p className={styles.eventNotificationp}>{room}</p>
						</div>
					</div>
				</div>
		);
	}
}


export { DataDetails };
