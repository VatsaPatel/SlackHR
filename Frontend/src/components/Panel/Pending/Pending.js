import React, { Component } from "react";
import styles from "./Pending.module.css";

import Due from "./../Due/Due";
import Header from "./../Header/Header";

export default class Pending extends Component {

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.header}>
					<i className={`${styles.search_icon} wb-search`} aria-hidden="true" />
					<span className={styles.headertext}>Pending Dues</span>
				</div>
				<div className={styles.content}>
					<Header Name={"Tuition Fees"} />
					<Due name={"Vatsa Patel"} enrollment={"150010116062"} due={"Sem 5 Tuition Fees"} />
					<div className={styles.Line} />
					<Due name={"Trushar Patel"} enrollment={"150010116045"} due={"Sem 5 Tuition Fees"} />
				</div>
				<div className={styles.content}>
					<Header Name={"Equipment Due"} />
					<Due name={"Vatsa Patel"} enrollment={"150010116062"} due={"Fingerprint Sensor(EC)"} />
				</div>
			</div>
		);
	}
}

