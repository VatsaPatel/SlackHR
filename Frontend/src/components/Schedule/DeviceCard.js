import React, { Component } from "react";
import styles from "./DeviceCard.module.css";


class DeviceCard extends Component {
	render() {
		return (
			<div>
				<div className={styles.viewstyle}>
					<img className={styles.fpImageStyle} src={require("./../../assets/images/fp.png")} alt="fp"/>
					<p className={styles.fpTextStyle}>{this.props.children}</p>
				</div>
			</div>
    );
	}
}


export default DeviceCard;
