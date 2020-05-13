import React, { Component } from 'react';
import moment from 'moment';
import type Moment from 'moment';

type Props = {
  // Optional prop to pass a custom date to use instead of today
  currentDate?: string | Moment,
  // Callback executed when user taps on a date
  onSelectDate: (date: Moment) => any,
  // Number of days to show before today or custom current date
  showDaysAfterCurrent?: number,
  // Number of days to show after
  showDaysBeforeCurrent?: number,
};

type State = {
  // True when all dates have rendered
  allDatesHaveRendered: boolean,
  // Currently chosen date index
  currentDateIndex: ?number,
  // Store months and years of the dates visible on the screen
  // for rendering month(s) and year(s) above the dates
  visibleMonths: ?Array<string>,
  visibleYears: ?Array<string>,
  // Array of dates to show
  dates: Array<Moment>,
  // Store each day with to help with scrolling to specific days
  // and calculating which days are visible on the screen
  dayWidths: ?{| [index: number]: number |},
  // Store current scroll position
  scrollPositionX: number,
};

export default class Calendar extends Component<props> {

  props: Props;

  state: State;

  static defaultProps = {
    // Show 5 days before the current day
    showDaysBeforeCurrent: 5,
    // And after
    showDaysAfterCurrent: 5,
  };

  _scrolldiv;

  // Initialize the state with default values
  constructor(props: Props) {
    super(props);
    this.state = {
      allDatesHaveRendered: false,
      currentDateIndex: props.showDaysBeforeCurrent,
      dates: this.getDates(),
      dayWidths: undefined,
      scrollPositionX: 0,
      visibleMonths: undefined,
      visibleYears: undefined,
    };
  }

  // Get an array of dates for showing in a horizontal scroll div
  getDates = (): Array<Moment> => {

    // Go `showDaysBeforeCurrent` ago before today or custom `currentDate`
    const startDay = moment(undefined)
      .subtract(1 + 1, 'days');
    // Number of days in total
    const totalDaysCount = 1 + 1 + 1;

    // And return an array of `totalDaysCount` dates
    return [...Array(totalDaysCount)]
      .map(_ => startDay.add(1, 'day').clone());
  };

  render() {
    return (
      <div>
        <span>
          November, 2020 // random month and year for now
        </span>
        <div
          ref={scrolldiv => { this._scrolldiv = scrolldiv; }}
          horizontal={true}                         // Enable horizontal scrolling
          showsHorizontalScrollIndicator={false}    // Hide horizontal scroll indicators
          automaticallyAdjustContentInsets={false}  // Do not adjust content automatically
        >
          <span>{JSON.stringify(this.state.dates, null, 2)}</span>
        </div>
      </div>
    );
  }

}
