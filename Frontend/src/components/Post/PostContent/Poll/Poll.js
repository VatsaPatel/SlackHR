import React, { Component } from "react";
import styles from "./Poll.module.css";


export default class Poll extends Component {
	render() {
		return (
			<div className={styles.container}>
				<div className={styles.leftGradient} />
					<span className={styles.text}>Saturday 12:00 PM</span>
			</div>
		);
	}
}
