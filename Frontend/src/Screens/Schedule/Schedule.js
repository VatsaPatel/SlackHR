import React, { Component } from "react";
import styles from "./Schedule.module.css";
import moment from "moment";

import Calendar from '../../components/Schedule/calendar/Calendar';
import Events from "./../../components/Schedule/Events/Events";
import type Moment from 'moment';

export type EventType = {
    date: Moment,
    title: string,
    description: string,
    image: string
};

// Generate fake event data
const FAKE_EVENTS: Array<EventType> = (() => {
    const startDay = moment()
        .subtract(2, "days")
        .startOf("day");
    return [...new Array(15)].map(_ => ({
        date: startDay.add(4, "hours").clone(),
    }));
})();

// Filter events by date
const filterEvents = (date: Moment): ?Array<EventType> =>
    FAKE_EVENTS.filter(event => event.date.isSame(date, "day"));

export default class Home extends Component {

	state = {
        events: filterEvents(moment())
    };

	onSelectDate = (date: Moment) => {
	// alert(date.calendar());
 };

	render() {
		const { events } = this.state;
		return (
			<div className={styles.feed}>
				<Calendar onSelectDate={this.onSelectDate} />
				<Events {...this.props} events={events} />
			</div>
		);
	}
}
