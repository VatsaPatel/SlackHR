import React, { Component } from "react";
import styles from "./Form.module.css";


export default class Header extends Component<Props> {
	props: Props;

	render() {
		return (
			<div className={styles.searchbox}>
				<input type="search" />
				<span className={styles.text} >Publication</span>
			</div>
		);
	}
}
