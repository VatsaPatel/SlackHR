import React, { Component } from "react";
import styles from "./TimeList.module.css";

export default class TimeList extends Component {
	render() {
		return (
			<div className={styles.Container}>
				<div className={styles.timesection}>
					<span className={styles.hour}>9</span>
					<span className={styles.ampm}>am</span>
				</div>
				<div className={styles.timesection}>
					<span className={styles.hour}>10</span>
					<span className={styles.ampm}>am</span>
				</div>
				<div className={styles.timesection}>
					<span className={styles.hour}>11</span>
					<span className={styles.ampm}>am</span>
				</div>
				<div className={styles.timesection}>
					<span className={styles.hour}>12</span>
					<span className={styles.ampm}>am</span>
				</div>
				<div className={styles.timesection}>
					<span className={styles.hour}>1</span>
					<span className={styles.ampm}>pm</span>
				</div>
				<div className={styles.timesection}>
					<span className={styles.hour}>2</span>
					<span className={styles.ampm}>pm</span>
				</div>
				<div className={styles.timesection}>
					<span className={styles.hour}>3</span>
					<span className={styles.ampm}>pm</span>
				</div>
				<div className={styles.timesection}>
					<span className={styles.hour}>4</span>
					<span className={styles.ampm}>pm</span>
				</div>
				<div className={styles.timesection}>
					<span className={styles.hour}>5</span>
					<span className={styles.ampm}>pm</span>
				</div>
			</div>
		);
	}
}
