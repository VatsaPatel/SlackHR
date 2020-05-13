import React, { Component } from "react";
import styles from "./SubjectBig.module.css";

import BlueGradBtn from './../../buttons/BlueGradBtn/BlueGradBtn';


export default class SubjectBig extends Component {
	render() {
		return (
			<div className={styles.container}>
				<div className={styles.overlay}>
					<div className={styles.leftGradient} />
						<span className={styles.text}>Design of Algorithm Mid Sem 2 is left to be Evaluated</span>
         			<BlueGradBtn style={{ alignSelf: 'center',marginBottom: '25px', paddingLeft: '40px',paddingRight: '40px' }}>Start Evaluation</BlueGradBtn>
				</div>
			</div>
		);
	}
}
