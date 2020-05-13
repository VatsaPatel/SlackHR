import React, { Component } from "react";
import styles from "./TimeRemaining.module.css";

import BlueGradBtn from './../../buttons/BlueGradBtn/BlueGradBtn';

import pamphlet from "./../../../assets/icons/svg/pamphlet.svg";
import clipboard from "./../../../assets/icons/svg/clipboard.svg";

export default class TimeRemaining extends Component {
	render() {
		return (
			<div className={styles.container}>
				<div className={styles.top}>
					<p className={styles.topTitle}>Your Data Structure Class starts in 7 minutes.</p>
				</div>
				<div className={styles.bottom}>
					<div className={styles.timeContainer}>
						<div className={styles.timeSingleContainer}>
							<span className={styles.hourStyle}>9</span>
							<span className={styles.minuteStyle}>:00</span>
							<span className={styles.apmStyle}> AM</span>
						</div>
						<span className={styles.hyphenStyle}>-</span>
						<div className={styles.timeSingleContainer}>
							<span className={styles.hourStyle}>10</span>
							<span className={styles.minuteStyle}>:00</span>
							<span className={styles.apmStyle}> AM</span>
						</div>
					</div>


					<div className={styles.detailmainContainer}>
						<div className={styles.detailrowcontainer}>
							<div className={styles.iconDescContainer}>
								<div className={styles.circle}>
									<img src={clipboard} className={styles.icon} alt="Logo" />
								</div>
								<span className={styles.iconText}>Topic:</span>
							</div>
							<span className={styles.descText}>CH - 03 : Linked List</span>
						</div>
						<div className={styles.line} />
						<div className={styles.detailrowcontainer}>
							<div className={styles.iconDescContainer}>
								<div className={styles.circle}>
									<img src={pamphlet} className={styles.icon} alt="Logo" />
								</div>
								<span className={styles.iconText}>Room:</span>
							</div>
							<span className={styles.descText}>Room No. 212</span>
						</div>
					</div>



					<BlueGradBtn style={{ marginTop: '26px', marginBottom: '25px' }}>Start Class</BlueGradBtn>
				</div>
			</div>
		);
	}
}
