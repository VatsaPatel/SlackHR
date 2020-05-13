import React, { Component } from "react";
import styles from "./Footer.module.css";

import reply from './../../../assets/icons/reply.svg';

// like click function
// $(function() {
//   $(".heart").on("click", function() {
//     $(this).toggleClass("is-active");
//   });
// });

export default class Header extends Component {
	render() {
		return (
				<div className={styles.footer}>
					<button className={styles.leftButton}>
						<img src={reply} className={styles.replyIcon} alt="three" />
						<span className={styles.replyStyle}>Reply</span>
					</button>
					<div className={styles.heartcontainer}>
						<div className={styles.heart} />
					</div>
				</div>
			);
	}
}
