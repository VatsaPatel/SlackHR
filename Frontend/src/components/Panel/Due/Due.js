import React, { Component } from "react";
import styles from "./Due.module.css";

import pp from "./../../../assets/demo/pp.jpg";

export default class Due extends Component {
	render() {
		return (
			<React.Fragment>
				<div className={styles.header}>
					<img src={pp} className={styles.profile_image} alt="Logo" />
	        		<div className={styles.content} >
	        			<div className={styles.actionStyle}>
							<span className={styles.profileNameStyle}>{this.props.name}</span>
						</div>
						<div>
							<span className={styles.channelNameStyle}>{this.props.enrollment}</span>
						</div>
					</div>
					<div className={styles.rightContainer}>
						<span className={styles.dueStyle}>{this.props.due}</span>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
