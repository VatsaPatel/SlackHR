import React, { Component } from "react";
import styles from "./Login.module.css";

import pp from "./../../assets/demo/pp.jpg";
import logo from "./../../assets/images/ADIT.png";
import BlueGradBtn from "./../../components/buttons/BlueGradBtn/BlueGradBtn";

export default class Login extends Component {

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.Header}>
						<div>
							<img src={logo} className={styles.logo} alt="Logo" />
						</div>
						<div className={styles.form}>
							<div className={styles.emailbox}>
								<input type="search" placeholder="Enter your Email / Enrollment Number" />
							</div>
							<div className={styles.footer}>
									<button className={styles.leftButton}>
										<span className={styles.replyStyle}>Can't log in</span>
									</button>
									<BlueGradBtn>Continue</BlueGradBtn>
							</div>
						</div>
						<div className={styles.wardiv}>
							<span className={styles.warning}>Warning!</span><br />
							<span className={styles.war1}>Only registered Adit App members can log in Adit App.</span><br />
							<span className={styles.war2}>The Website is solely for Adit App. Plagiarism is strictly prohibited.</span>
						</div>
					</div>
					<div className={styles.secondhalf}>
						<img src={pp} className={styles.profile_image} alt="Logo" />
					</div>
				</div>
			</div>
		);
	}
}
