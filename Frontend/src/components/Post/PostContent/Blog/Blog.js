import React, { Component } from "react";
import styles from "./Blog.module.css";

import pp from "./../../../../assets/demo/pp.jpg";
import GreyBtnLarge from "./../../../buttons/GreyBtnLarge/GreyBtnLarge";


export default class Blog extends Component {
	render() {
		return (
			<div className={styles.container}>
				<div className={styles.header}>
					<img src={pp} className={styles.profile_image} alt="Logo" />
				</div>
				<div className={styles.textcontainer}>
					<span className={styles.textheader}>A New Eductional Model -</span>
					<span className={styles.textsub}>Medium.com</span>
				</div>
				<span className={styles.text}>Kids either understand a concept or they don't. It is a disservice to allow advancement when certain core concepts are not understood...</span>
				<GreyBtnLarge className={styles.btn}>Read More</GreyBtnLarge>
			</div>
		);
	}
}