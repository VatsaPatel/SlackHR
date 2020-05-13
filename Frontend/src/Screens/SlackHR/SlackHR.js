import React, { Component } from "react";
import styles from './SlackHR.module.css';

import Dashboard from '../../components/Dashboard/Dahboard.js';

import Addbutton from './../../components/buttons/RefreshButton/AddStudentButton';

export default class Home extends Component {

	render() {
		return (
			<div className={styles.container}>

				<div className={styles.feed}>
				<div className={styles.right}>
					<span className={styles.header}>SlackHR</span>
					<Addbutton>Back</Addbutton>
					</div>
					<Dashboard />
				</div>
			</div>
		);
	}
}
