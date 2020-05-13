import React, { Component } from "react";
import styles from "./Media.module.css";

import GreyBtnSmall from "./../../../buttons/GreyBtnSmall/GreyBtnSmall";
import pp from "./../../../../assets/demo/pp.jpg";


export default class Media extends Component {
	render() {
		return (
			<div className={styles.media}>
				<img src={pp} className={styles.profile_image} alt="Logo" />
    	  		<span className={styles.actionStyle}>GTU Circular QP.pdf</span>
				<div className={styles.rightContainer}>
					<GreyBtnSmall>Add to Drive</GreyBtnSmall>
				</div>
			</div>
		);
	}
}
