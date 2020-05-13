import React, { Component } from "react";
import styles from "./SubChannel.module.css";

export default class Channel extends Component {

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.header}>
					<span className={styles.header} >Sub Channels</span>
				</div>
			</div>
		);
	}
}