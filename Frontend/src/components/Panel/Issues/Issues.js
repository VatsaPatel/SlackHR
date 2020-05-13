import React, { Component } from "react";
import styles from "./Issues.module.css";

import Issue from "./../Issue/Issue";

export default class Issues extends Component {

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.header}>
					<i className={`${styles.search_icon} wb-search`} aria-hidden="true" />
					<span className={styles.headertext}>Issues that need Attention</span>
				</div>
				<div className={styles.content}>
					<Issue senderName={"Vatsa Patel (150010116062)"} channelName={" has not come to college since 13 days without any prior leave."} />
					<div className={styles.Line} />
					<Issue senderName={"Trushar Patel (150010116045)"} channelName={" has not come to college since 13 days without any prior leave."} />
					<div className={styles.Line} />
					<Issue senderName={"Devendra Patel (150010116045)"} channelName={" still has not cleared M/I components of 3 subjects."} />
				</div>
				<div className={styles.batchdiv}>
					<span className={styles.batch}>Your batch's Attendance has been reduced by 17% since last week</span>
				</div>
			</div>
		);
	}
}
