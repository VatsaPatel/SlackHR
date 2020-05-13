import React, { Component } from "react";
import styles from './Header.module.css';

import pp from './../../../assets/demo/pp.png';
import threedots from './../../../assets/icons/threeDots.svg';

import GreyBtnSmall from '../../buttons/GreyBtnSmall/GreyBtnSmall';
import RedBtnSmall from '../../buttons/RedBtnSmall/RedBtnSmall';

export default class Header extends Component {
	render() {
		return (
			<React.Fragment>
			<div className={styles.MessagePanel}>
					<div className={styles.PanelHeader}>
							<div>
								{this.props.labels.split(',').map((label) =>
										<RedBtnSmall className={styles.viewAllBtn}>{label}</RedBtnSmall>
								)}
							</div>
							<span className={styles.date}>{this.props.date}</span>
					</div>
					<div className={styles.header}>
						<img src={pp} className={styles.profile_image} alt="Logo" />
	          <span className={styles.actionStyle}>
							<span className={styles.profileNameStyle}>{this.props.senderName}</span>
							{this.props.action}
							<span className={styles.channelNameStyle}>#{this.props.channelName}</span>
						</span>
					</div>
					<div className={styles.msg}>
						<span className={styles.msgtext}>{this.props.message}</span>
							<div className={styles.btns}>
								<GreyBtnSmall className={styles.viewAllBtn} style={{padding: "6px 26px",fontSize: "15.2px", marginRight: "13px"}}>Message {this.props.senderName}</GreyBtnSmall>
								<GreyBtnSmall className={styles.viewAllBtn} style={{padding: "6px 26px",fontSize: "15.2px"}}>Mark as in-compliance</GreyBtnSmall>
							</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
