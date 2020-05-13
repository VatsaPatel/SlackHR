import React, { Component } from "react";
import styles from "./SubjectSmall.module.css";

import BlueGradBtn from './../../buttons/BlueGradBtn/BlueGradBtn';


export default class SubjectSmall extends Component {
	render() {
		return (
			<div className={styles.container}>
				<div className={styles.overlay}>
					<div className={styles.leftGradient} />
						<span className={styles.text}>Student Feedback for Data Structure has been submitted.</span>
          <BlueGradBtn style={{ alignSelf: 'center', marginRight: '20px', paddingLeft: '40px',paddingRight: '40px' }}>View</BlueGradBtn>
				</div>
			</div>
		);
	}
}
