import React, { Component } from "react";
import styles from "./Issue.module.css";


export default class Issue extends Component {

	render() {
		return (
			<React.Fragment>
				<span className={styles.actionStyle}>
					<span className={styles.channelNameStyle}>{this.props.senderName}</span>
					<span className={styles.channelNameStyle}>{this.props.channelName}</span>
				</span><br />
			</React.Fragment>
		);
	}
}
