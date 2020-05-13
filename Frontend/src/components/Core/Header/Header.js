import React, { Component } from "react";
import styles from "./Header.module.css";

import logo from "./../../../assets/demo/logo.png";
import HeadButton from "./../../buttons/HeadButton/HeadButton";

import DropdownButton from './../../buttons/DropdownButton/DropdownButton';


export default class Header extends Component<Props> {
	props: Props;

	render() {
		return (
			<div className={styles.Header}>
				<img src={logo} className={styles.logo} alt="Logo" />
				<div className={styles.searchbox}>
					<input type="search" placeholder="Search..." />
					<i className={`${styles.search_icon} wb-search`} aria-hidden="true" />
					{/* <DropdownButton /> */}
				</div>
				<div className={styles.right_align}>
					<HeadButton><i className={`${styles.plus} wb-chat`} aria-hidden="true" /></HeadButton>
					<HeadButton><i className={`${styles.plus} wb-bell`} aria-hidden="true" /></HeadButton>
					<div className={styles.line}></div>
					<HeadButton><i className={`${styles.plus} wb-plus`} aria-hidden="true" /></HeadButton>
					<HeadButton><i className={`${styles.minus} wb-minus`} aria-hidden="true" /></HeadButton>
					<HeadButton><i className={`${styles.close} wb-close`} aria-hidden="true" /></HeadButton>
				</div>
			</div>
		);
	}
}
