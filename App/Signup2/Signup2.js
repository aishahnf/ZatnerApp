//
//  Signup2
//  Project
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import LinearGradient from "react-native-linear-gradient"
import {Text, StyleSheet, Image, View, TouchableOpacity, TextInput,ScrollView,KeyboardAvoidingView} from "react-native"
import React from "react"
import { Dropdown } from 'react-native-material-dropdown';
// import DatePicker from 'react-native-date-picker';
import DatePicker from 'react-native-datepicker'



export default class Signup2 extends React.Component {
	state = { date: "23-09-1993" }
	static navigationOptions = ({ navigation }) => {

		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}
	_onPressButton() {
		alert('You tapped the button!')
	}
	render() {
		let data = [{
			value: 'United Arab Emirates',
		}, {
			value: 'Egypt',
		}, {
			value: 'Bahrain',
		}];
		let citydata = [{
			value: 'Dubai',
		}, {
			value: 'Ajman',
		}, {
			value: 'Abu Dhabi',
		}];
		const {navigate} = this.props.navigation;
		return <View
				style={styles.signup2View}>
			<ScrollView>
				<KeyboardAvoidingView style={{ flex: 1 }} keyboardVerticalOffset={100} behavior={"position"}>
					<View
						style={styles.signup2View}>
				<View
					style={styles.groupView}>
					<Image
						source={require("./../../assets/images/oval-3.png")}
						style={styles.oval3Image}/>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.selectAPhotoText}>Select a photo</Text>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 16,
						right: 38,
						top: 37,
						bottom: 16,
						alignItems: "center",
					}}>
					<TouchableOpacity style={styles.backArrowImage} onPress={() => navigate('Login', {name: 'Jane'})}>
					<Image
						source={require("./../../assets/images/back-arrow.png")}
						style={styles.backArrowImage}/>
					</TouchableOpacity>
					<View
						style={styles.groupTwoView}>
						<Text
							style={styles.fullNameText}>Full Name</Text>
						<TextInput
							style={styles.johnDoeJuniorText}>John Doe Junior</TextInput>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.rectangle3SevenView}/>
					</View>
					<View
						style={styles.groupCopy3View}>
						<View
							pointerEvents="box-none"
							style={{
								width: 90,
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.phoneNumberText}>Phone Number</Text>
							<View
								pointerEvents="box-none"
								style={{
									width: 90,
									height: 20,
									marginTop: 6,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Image
									source={require("./../../assets/images/united-arab-emirates.png")}
									style={styles.unitedArabEmiratesImage}/>
								<Text
									style={styles.textText}>+971</Text>
								<Image
									source={require("./../../assets/images/triangle.png")}
									style={styles.triangleThreeImage}/>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.rectangle3FourView}/>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 173,
								marginTop: 21,
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.textTwoText}>4 274 0000</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.rectangle3ThreeView}/>
						</View>
					</View>
					<View
						style={styles.groupCopy2View}>
						<Text
							style={styles.dateOfBirthText}>Date of Birth</Text>
						{/*<View*/}
						{/*	pointerEvents="box-none"*/}
						{/*	style={{*/}
						{/*		height: 19,*/}
						{/*		marginLeft: 3,*/}
						{/*		marginTop: 6,*/}
						{/*		flexDirection: "row",*/}
						{/*		alignItems: "flex-start",*/}
						{/*	}}>*/}
							{/*<DatePicker*/}
							{/*	date={this.state.date}*/}
							{/*	onDateChange={date => this.setState({ date })}*/}
							{/*/>*/}

						{/*	<Text*/}
						{/*		style={styles.september1993Text}>21 September 1993</Text>*/}
						{/*	<View*/}
						{/*		style={{*/}
						{/*			flex: 1,*/}
						{/*		}}/>*/}
						{/*	<Image*/}
						{/*		source={require("./../../assets/images/calendar-interface-symbol-tool.png")}*/}
						{/*		style={styles.calendarInterfaceSymbolToolImage}/>*/}
						{/*</View>*/}
						<DatePicker
							style={{width: 200, borderColor:"transparent", borderBottomWidth:0}}
							date={this.state.date}
							mode="date"
							placeholder="select date"
							format="DD-MM-YYYY"
							minDate="23-09-1945"
							maxDate="23-09-1993"
							confirmBtnText="Confirm"
							cancelBtnText="Cancel"
							customStyles={{
								dateIcon: {
									position: 'absolute',
									left: 0,
									top: 4,
									marginLeft: 0
								},
								dateInput: {
									marginLeft: 36,
									borderColor:"transparent",
									borderBottomWidth:0
								}
								// ... You can check the source to find the other keys.
							}}
							onDateChange={(date) => {this.setState({date: date})}}
						/>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.rectangle3FiveView}/>
					</View>
					<View
						style={styles.groupCopy4View}>
						<Text
							style={styles.countryText}>Country</Text>
						<Dropdown style={styles.unitedArabEmiratesText}
								  label=''
								  data={data}
								  dropdownOffset = {{top:"10"}}
						/>
						{/*<View*/}
						{/*	pointerEvents="box-none"*/}
						{/*	style={{*/}
						{/*		height: 18,*/}
						{/*		marginLeft: 3,*/}
						{/*		marginTop: 6,*/}
						{/*		flexDirection: "row",*/}
						{/*		alignItems: "flex-start",*/}
						{/*	}}>*/}
						{/*	<Text*/}
						{/*		style={styles.unitedArabEmiratesText}>United Arab Emirates</Text>*/}

						{/*	<View*/}
						{/*		style={{*/}
						{/*			flex: 1,*/}
						{/*		}}/>*/}
						{/*	<Image*/}
						{/*		source={require("./../../assets/images/triangle.png")}*/}
						{/*		style={styles.triangleImage}/>*/}
						{/*</View>*/}
						{/*<View*/}
						{/*	style={{*/}
						{/*		flex: 1,*/}
						{/*	}}/>*/}
						{/*<View*/}
						{/*	style={styles.rectangle3View}/>*/}
					</View>
					<View
						style={styles.groupCopy5View}>
						{/*<Text*/}
						{/*	style={styles.cityText}>City</Text>*/}
						{/*<View*/}
						{/*	pointerEvents="box-none"*/}
						{/*	style={{*/}
						{/*		height: 18,*/}
						{/*		marginLeft: 3,*/}
						{/*		marginTop: 6,*/}
						{/*		flexDirection: "row",*/}
						{/*		alignItems: "flex-start",*/}
						{/*	}}>*/}
						{/*	<Text*/}
						{/*		style={styles.ajmanText}>Ajman</Text>*/}
						{/*	<View*/}
						{/*		style={{*/}
						{/*			flex: 1,*/}
						{/*		}}/>*/}
						{/*	<Image*/}
						{/*		source={require("./../../assets/images/triangle.png")}*/}
						{/*		style={styles.triangleTwoImage}/>*/}
						{/*</View>*/}
						{/*<View*/}
						{/*	style={{*/}
						{/*		flex: 1,*/}
						{/*	}}/>*/}
						{/*<View*/}
						{/*	style={styles.rectangle3TwoView}/>*/}
						<Text
							style={styles.countryText}>City</Text>
						<Dropdown style={styles.ajmanText}
								  label=''
								  data={citydata}
								  dropdownOffset = {{top:"10"}}
						/>
					</View>
					<View
					style={{
						flex: 1,
					}}/>
					<View
						style={styles.groupCopy6View}>
						<Text
							style={styles.addressLineText}>Address Line</Text>
						<TextInput
							style={styles.sheikhHumaidBinRaText}></TextInput>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.rectangle3SixView}/>
					</View>
					<LinearGradient
						start={{
							x: 0.12,
							y: 0.55,
						}}
						end={{
							x: 1.01,
							y: 0.57,
						}}
						locations={[0, 1]}
						colors={["rgb(13, 143, 197)", "rgb(0, 103, 165)"]}
						style={styles.group2ViewLinearGradient}>
						<View
							style={styles.group2View}>
							<TouchableOpacity onPress={this._onPressButton}>
							<Text
								style={styles.createAccountText}>CREATE ACCOUNT</Text>
							</TouchableOpacity>
						</View>
					</LinearGradient>
				</View>
					</View>
				</KeyboardAvoidingView>
			</ScrollView>
			</View>
	}
}

const styles = StyleSheet.create({
	signup2View: {
		backgroundColor: "white",
		flex: 1,

	},
	groupView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 88,
		top: 49,
		height: 94,
	},
	oval3Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 71,
		marginLeft: 9,
		marginRight: 9,
	},
	selectAPhotoText: {
		backgroundColor: "transparent",
		color: "rgb(114, 140, 155)",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginLeft: 3,
		marginRight: 3,
		marginBottom: 2,
	},
	backArrowImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 23,
		height: 22,
	},
	groupTwoView: {
		backgroundColor: "transparent",
		width: 282,
		height: 51,
		marginTop: 105,
		alignItems: "flex-start",
	},
	fullNameText: {
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.17,
		backgroundColor: "transparent",
	},
	johnDoeJuniorText: {
		backgroundColor: "transparent",
		color: "rgb(60, 79, 90)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.17,
		marginLeft: 3,
		marginTop: 6,
		width: "60%"
	},
	rectangle3SevenView: {
		backgroundColor: "rgb(216, 216, 216)",
		alignSelf: "stretch",
		height: 1,
	},
	groupCopy3View: {
		backgroundColor: "transparent",
		width: 282,
		height: 51,
		marginTop: 24,
		flexDirection: "row",
	},
	phoneNumberText: {
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.17,
		backgroundColor: "transparent",
	},
	unitedArabEmiratesImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 16,
		marginTop: 4,
	},
	textText: {
		backgroundColor: "transparent",
		color: "rgb(60, 79, 90)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.17,
		marginLeft: 5,
	},
	triangleThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 11,
		height: 7,
		marginLeft: 13,
		marginTop: 10,
	},
	rectangle3FourView: {
		backgroundColor: "rgb(216, 216, 216)",
		width: 89,
		height: 1,
	},
	textTwoText: {
		color: "rgb(60, 79, 90)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.17,
		backgroundColor: "transparent",
		marginRight: 83,
	},
	rectangle3ThreeView: {
		backgroundColor: "rgb(216, 216, 216)",
		width: 173,
		height: 1,
	},
	groupCopy2View: {
		backgroundColor: "transparent",
		width: 282,
		height: 51,
		marginTop: 24,
	},
	dateOfBirthText: {
		backgroundColor: "transparent",
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.17,
		alignSelf: "flex-start",
	},
	september1993Text: {
		backgroundColor: "transparent",
		color: "rgb(60, 79, 90)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.17,
	},
	calendarInterfaceSymbolToolImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 15,
		height: 17,
		marginTop: 2,
	},
	rectangle3FiveView: {
		backgroundColor: "rgb(216, 216, 216)",
		height: 1,
	},
	groupCopy4View: {
		backgroundColor: "transparent",
		width: 282,
		height: 51,
		marginTop: 24,
	},
	countryText: {
		backgroundColor: "transparent",
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.17,
		alignSelf: "flex-start",
	},
	unitedArabEmiratesText: {
		color: "rgb(60, 79, 90)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.17,
		backgroundColor: "transparent",
	},
	triangleImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 11,
		height: 7,
		marginTop: 9,
	},
	rectangle3View: {
		backgroundColor: "rgb(216, 216, 216)",
		height: 1,
	},
	groupCopy5View: {
		backgroundColor: "transparent",
		width: 282,
		height: 51,
		marginTop: 24,
	},
	cityText: {
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.17,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
	},
	ajmanText: {
		color: "rgb(60, 79, 90)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.17,
		backgroundColor: "transparent",
	},
	triangleTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 11,
		height: 7,
		marginTop: 9,
	},
	rectangle3TwoView: {
		backgroundColor: "rgb(216, 216, 216)",
		height: 1,
	},
	groupCopy6View: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 291,
		height: 51,
		marginBottom: 22,
		marginLeft: 40,
		marginTop: 24,
	},
	addressLineText: {
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.17,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
	},
	sheikhHumaidBinRaText: {
		color: "rgb(60, 79, 90)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.17,
		backgroundColor: "transparent",
		marginLeft: 3,
		marginRight: 23,
		marginTop: 6,
		width: "60%"
	},
	rectangle3SixView: {
		backgroundColor: "rgb(216, 216, 216)",
		height: 1,
		marginRight: 9,
	},
	group2ViewLinearGradient: {
		borderRadius: 3,
		width: 282,
		height: 40,
	},
	group2View: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	createAccountText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.54,
		backgroundColor: "transparent",
	},
})
