import React, { Component } from "react";
import styles from "./PostContent.module.css";

import Media from "./Media/Media";
import Blog from "./Blog/Blog";
import Poll from './Poll/Poll';
import GreyBtnLarge from "./../../buttons/GreyBtnLarge/GreyBtnLarge";

export default class PostContent extends Component {
	PostRendering(type) {
		switch (type) {
			case "blog":
				return (
						<Blog />
				);
			case "basic":
				return <span className={styles.text}>{this.props.textContent}</span>;
			case "schedule_data":
				return (
					<React.Fragment>
						<span className={styles.text}>{this.props.textContent}</span>
						<GreyBtnLarge style={{ marginTop: "10px" }}>Add to Schedule</GreyBtnLarge>
					</React.Fragment>
				);
			case "Poll":
				return (
					<React.Fragment>
						<span className={styles.pollText}>{this.props.textContent}</span>
						<Poll />
						<Poll />
					</React.Fragment>
				);
			case "media":
				return (
					<React.Fragment>
						<span className={styles.pollText}>{this.props.textContent}</span>
						<Media />
					</React.Fragment>
				);
			default:
				return (
					<span className={styles.text}>
						TCS Placement Officers will be conducting a meeting with Placement Co-ordinators on Tuesday 2nd January at 10:00 AM in Room 141.
					</span>
				);
		}
	}

	render() {
		return <div className={styles.container}>{this.PostRendering(this.props.type)}</div>;
	}
}
