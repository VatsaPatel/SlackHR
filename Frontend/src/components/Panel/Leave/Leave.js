import React, { Component } from "react";
import styles from "./Leave.module.css";

import Header from "./../Header/Header";

export default class Leave extends Component {

	render() {
		return (
			<div className={styles.content}>
				<div className={styles.notification}>
					<Header Name={"Leave Application"} time={"8h Ago"} />
				</div>
				<span className={styles.actionStyle}>
					<span className={styles.by}>By:</span>
					<span className={styles.profileNameStyle}>{this.props.senderName}</span>
					<br />
					<span className={styles.for}>For:</span>
					<span className={styles.channelNameStyle}>{this.props.channelName}</span>
				</span>
			</div>
		);
	}
}
