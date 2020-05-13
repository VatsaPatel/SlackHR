import React, { Component } from "react";
import styles from "./Header.module.css";


export default class Header extends Component {
	render() {
		return (
			<React.Fragment>
				<div className={styles.header}>
					<i className={`${styles.search_icon} wb-search`} aria-hidden="true" />
					<span className={styles.profileNameStyle}>{this.props.Name}</span>
					<div className={styles.rightContainer}>
						<span className={styles.timeStyle}>{this.props.time}</span>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
