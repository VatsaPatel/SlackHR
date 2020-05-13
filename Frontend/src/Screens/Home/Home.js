import React, { Component } from "react";
import styles from "./Home.module.css";

import TimeRemaining from './../../components/Schedule/TimeRemaining/TimeRemaining';
import SubjectSmall from './../../components/Notifications/SubjectSmall/SubjectSmall';
import SubjectBig from './../../components/Notifications/SubjectBig/SubjectBig';
import NoSubject from './../../components/Notifications/NoSubject/NoSubject';
import Post from './../../components/Post/Post';
import Application from './../../components/Panel/Application/Application';
import Issues from './../../components/Panel/Issues/Issues';
import Pending from './../../components/Panel/Pending/Pending';

export default class Home extends Component {

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.feed}>
					{/* <div className={styles.coverUp} /> */}

					<Post
							type="Poll"
							senderImage="http://adit.ac.in/faculty/upload/spvitcp.jpg"
							senderName="Sudhir Vegad"
							action=" shared a blog in"
							channelName=" IT - Faculty Channel"
							textContent="When should we conduct weekly IT Faculty Meeting?"
						/>
					<TimeRemaining />
					<SubjectBig />
					<SubjectSmall />
					<NoSubject />

				</div>
				<div className={styles.panel}>
					<Application />
					<Pending />
					<Issues />
				</div>
			</div>
		);
	}
}
