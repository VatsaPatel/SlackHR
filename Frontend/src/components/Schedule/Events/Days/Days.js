
import React, { Component } from "react";
import styles from "./Days.module.css";

import Day from './Day/Day';

const MONDAY = [
{ id: 1, SubjectName: 'CAPSTONE Lab: IT-5', color: 'purple', start: 0, duration: 81 * 2 },
{ id: 2, SubjectName: 'Design of Algorithms Lab: IT-3', color: 'red', start: 81 * 3, duration: 81 * 2 },
];

const TUESDAY = [
{ id: 1, SubjectName: 'Design of Algorithms: 313', color: 'red', start: 81 * 1, duration: 81 * 1 },
{ id: 2, SubjectName: 'Cyber Security Lab: IT-6', color: 'bluegreen', start: 81 * 6, duration: 81 * 2 },
];

const WEDNESDAY = [
{ id: 1, SubjectName: 'CAPSTONE Lab: IT-5', color: 'purple', start: 0, duration: 81 * 2 },
{ id: 2, SubjectName: 'Design of Algorithms: 313', color: 'red', start: 81 * 3, duration: 81 * 1, borderBottomLeftRadius1: 0, borderBottomRightRadius1: 0 },
{ id: 3, SubjectName: 'Information Security Lab: IT-3', color: 'yellow', start: 81 * 4, duration: 81 * 2, borderTopLeftRadius1: 0, borderTopRightRadius1: 0 },
];

const THURSDAY = [
{ id: 1, SubjectName: 'CAPSTONE Lab: IT-5', color: 'purple', start: 0, duration: 81 * 2 },
{ id: 2, SubjectName: 'Design of Algorithms: 313', color: 'red', start: 81 * 3, duration: 81 * 1 },
{ id: 3, SubjectName: 'Design of Algorithms Lab: IT-3', color: 'red', start: 81 * 6, duration: 81 * 2 },
];

const FRIDAY = [
{ id: 1, SubjectName: 'Design of Algorithms: 313', color: 'red', start: 81 * 4, duration: 81 * 1 },
];

const SATURDAY = [
{ id: 1, SubjectName: 'Project-1 Lab: IT-5 D5', color: 'blue', start: 81 * 1, duration: 81 * 2 },
];

export default class TimeList extends Component {
	render() {
		return (
			<div className={styles.container}>
				<Day day="Monday" data={MONDAY} />
				<Day day="Tuesday" data={TUESDAY} />
				<Day day="Wednesday" data={WEDNESDAY} isActive />
				<Day day="Thursday" data={THURSDAY} />
				<Day day="Friday" data={FRIDAY} />
				<Day day="Saturday" data={SATURDAY} />
			</div>
		);
	}
}
