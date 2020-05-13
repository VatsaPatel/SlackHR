import React, { Component } from "react";
import styles from "./NoSubject.module.css";

import BlueGradBtn from './../../buttons/BlueGradBtn/BlueGradBtn';


export default class NoSubject extends Component {
	render() {
		return (
			<div className={styles.container}>
				<div className={styles.overlay}>
						<span className={styles.text}>Monthly report of IT 2015 Batch has been generated.</span>
          <BlueGradBtn style={{ alignSelf: 'center',marginLeft: '15px', marginRight: '20px', paddingLeft: '40px',paddingRight: '40px' }}>View</BlueGradBtn>
				</div>
			</div>
		);
	}
}
