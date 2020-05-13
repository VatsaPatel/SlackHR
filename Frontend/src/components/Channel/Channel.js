import React, { Component } from "react";
import styles from "./Channel.module.css";
import ChannelContent from "./../ChannelContent/ChannelContent";

export default class Channel extends Component {

	render() {
		return (
			<div className={styles.container}>
				<ChannelContent channelName={"IT Channel"}  />
			</div>
		);
	}
}