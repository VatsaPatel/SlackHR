// @flow

import React, { PureComponent } from "react";
import type Moment from "moment";


export default class Date extends PureComponent {
	props: {
		// Date to render
		date: Moment,
		// Index for `onPress` and `onRender` callbacks
		index: number,
		// Whether it's the currently selected date or no
		isActive: boolean,
		// Called when user taps a date
		onPress: (index: number) => void,
		// Called after date is rendered to pass its width up to the parent component
		onRender: (index: number, width: number) => void
	};

	// Style helper functions that merge active date styles with the default ones
	// when rendering a date that was selected by user or was set active by default

	getContainerStyle = () => ({
		...styles.container,
		...(this.props.isActive ? styles.containerActive : {})
	});

	getDayStyle = () => ({
		...styles.day,
    ...(this.props.isActive
			? {
					...styles.textActive,
					...{
						color: "#1d1d26",
            fontSize: 13
					}
				}
			: {})
    });

	getDateStyle = () => ({
		...styles.date,
		...(this.props.isActive
			? {
					...styles.textActive,
					...{
						color: "#FFFFFF",
					}
				}
			: {})
	});

	// Call `onRender` and pass component's with when rendered
	onLayout = (event: { nativeEvent: { layout: { x: number, y: number, width: number, height: number } } }) => {
		const { index, onRender } = this.props;
		const { nativeEvent: { layout: { width } } } = event;
		onRender(index, width);
	};

	// Call `onPress` passed from the parent component when date is pressed
	onPress = () => {
		const { index, onPress } = this.props;
		onPress(index);
	};

	render() {
		const { date } = this.props;
		return (
			<div style={this.getContainerStyle()} onLayout={this.onLayout} onPress={this.onPress}>
				<div style={this.getDayStyle()}>{date.format("ddd").toUpperCase()}</div>
				{this.props.isActive ? (
						<div style={styles.dateActiveText}>{date.format("DD")}</div>
				) : (
					<div style={this.getDateStyle()}>{date.format("DD")}</div>
				)}
			</div>
		);
	}
}

const styles = {
	container: {
		borderBottomColor: "transparent",
		paddingHorizontal: 15,
		paddingBottom: 10,
		paddingTop: 2
	},
	containerActive: {
		borderBottomColor: "#FFFFFF"
	},
	day: {
		position: "relative",
		paddingTop: 2,
		paddingBottom: 2,
		color: "#6c6c72",
		textAlign: "center",
		fontSize: 13,
		fontFamily: "Avenir-Roman"
	},
	date: {
		fontSize: 16.5,
		color: "#1d1d26",
		fontFamily: "Avenir-Roman",
		position: "relative",
		marginTop: 17,
		marginBottom: 0,
		marginRight: 8,
		marginLeft: 8
	},
  dateActiveText: {
		fontSize: 16.5,
		color: "white",
		fontFamily: "Avenir-Roman",
		position: "relative",
    alignSelf: 'center'
	},
  dateActive: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginTop: 5,
    justifyContent: 'center',
    elevation: 10
  },
	textActive: {
		elevation: 5,
		fontSize: 20,
		padding: 10
	}
};
