import React, { Component } from "react";
import styles from "./ChannelContent.module.css";

import ci from "./../../assets/demo/Design Resources/IT Channel.svg";
import chevronRight from './../../assets/icons/svg/chevron-right.svg';

export default class ChannelContent extends Component {
	render() {
		return (
				<div className={styles.container}>
					<div className={styles.overlay}>
						<img src={ci} className={styles.channel_image} alt="Logo" />
	        			<span className={styles.actionStyle}>
							<span className={styles.channelNameStyle}>{this.props.channelName}</span>
							<br />
							<div className={styles.new}>
								<i className={`${styles.alertCircle} wb-alert-circle`} aria-hidden="true" />
								<span className={styles.notificationNameStyle}>New</span>
							</div>
						</span>
						<div className={styles.rightContainer}>
							<img src={chevronRight} className={styles.chevronRight} alt="three" />
						</div>
					</div>
				</div>
		);
	}
}
