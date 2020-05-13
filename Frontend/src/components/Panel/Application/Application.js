import React, { Component } from "react";
import styles from "./Application.module.css";

import Leave from "./../Leave/Leave";

export default class Application extends Component {

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.header}>
					<i className={`${styles.search_icon} wb-search`} aria-hidden="true" />
					<span className={styles.headertext}>Application Requests</span>
				</div>
				<Leave senderName={"Vatsa Patel (15001016062)"} channelName={"Moniter for ADIT App Project..."} />
				<Leave senderName={"Trushar Patel (15001016045)"} channelName={"To attend Gujarat Hackathon 2..."} />
			</div>
		);
	}
}
