import React, { Component } from "react";
import styles from "./Header.module.css";

import pp from "./../../../assets/demo/pp.jpg";
import threedots from './../../../assets/icons/threeDots.svg';

export default class Header extends Component {
	render() {
		return (
			<React.Fragment>
				<div className={styles.header}>
					<img src={pp} className={styles.profile_image} alt="Logo" />
          <span className={styles.actionStyle}>
						<span className={styles.profileNameStyle}>{this.props.senderName}</span>
						  {this.props.action}
						<br />
						<span className={styles.channelNameStyle}>{this.props.channelName}</span>
					</span>
					<div className={styles.rightContainer}>
						<span className={styles.timeStyle}>8h Ago</span>
						<img src={threedots} className={styles.threeDots} alt="three" />
					</div>
				</div>
				<div className={styles.Line} />
			</React.Fragment>
		);
	}
}
