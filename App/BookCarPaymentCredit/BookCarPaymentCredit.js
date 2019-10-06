//
//  BookCarPaymentCredit
//  Project
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import LinearGradient from "react-native-linear-gradient"
import { Text, View, StyleSheet, Image } from "react-native"
import React from "react"


export default class BookCarPaymentCredit extends React.Component {

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

	render() {
	
		return <View
				style={styles.bookCarPaymentCreditView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							height: 84,
						}}>
						<LinearGradient
							start={{
								x: 0.11,
								y: 0.54,
							}}
							end={{
								x: 1.02,
								y: 0.59,
							}}
							locations={[0, 1]}
							colors={["rgb(13, 143, 197)", "rgb(0, 103, 165)"]}
							style={styles.snazzyImageViewLinearGradient}>
							<View
								style={styles.snazzyImageView}/>
						</LinearGradient>
						<Image
							source={require("./../../assets/images/arrow-2.png")}
							style={styles.arrowImage}/>
					</View>
					<View
						style={styles.group8View}>
						<Image
							source={require("./../../assets/images/red-card.png")}
							style={styles.redCardImage}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 30,
								right: 26,
								top: 102,
								bottom: -1,
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.textText}>1234 5678 9876 5432</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									height: 54,
									flexDirection: "row",
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.muhammadOmarText}>MUHAMMAD OMA</Text>
								<Image
									source={require("./../../assets/images/icon-3.png")}
									style={styles.iconImage}/>
							</View>
						</View>
					</View>
					<View
						style={styles.group7View}>
						<View
							style={styles.group4View}>
							<Text
								style={styles.cardCompanyText}>Card Company</Text>
							<View
								style={styles.searchCopyView}>
								<Text
									style={styles.visaText}>VISA</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("./../../assets/images/rectangle-13.png")}
									style={styles.rectangle13Image}/>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.group5TwoView}>
							<Text
								style={styles.expiryText}>Expiry</Text>
							<View
								style={styles.searchCopy3TwoView}>
								<Text
									style={styles.textFourText}>12/20</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.group3View}>
						<Text
							style={styles.cardholderNameText}>Cardholder Name</Text>
						<View
							style={styles.searchView}>
							<Text
								style={styles.muhammadOmarTwoText}>Muhammad Omar</Text>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.group2View}>
						<View
							pointerEvents="box-none"
							style={{
								width: 244,
								height: 75,
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.cardNumberCopyText}>Card Number</Text>
							<View
								style={styles.searchCopy2View}>
								<Text
									style={styles.textTwoText}>1234 5678 9876 5432</Text>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.group5View}>
							<Text
								style={styles.cvvText}>CVV</Text>
							<View
								style={styles.searchCopy3View}>
								<Text
									style={styles.textThreeText}>012</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.group6View}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Image
								source={require("./../../assets/images/rectangle-5.png")}
								style={styles.rectangleImage}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Text
								style={styles.addCreditCardText}>ADD CREDIT CARD</Text>
						</View>
					</View>
				</View>
				<Text
					style={styles.creditCardText}>Credit Card</Text>
			</View>
	}
}

const styles = StyleSheet.create({
	bookCarPaymentCreditView: {
		backgroundColor: "rgb(245, 245, 245)",
		flex: 1,
	},
	snazzyImageViewLinearGradient: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 84,
	},
	snazzyImageView: {
		width: "100%",
		height: "100%",
	},
	arrowImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 18,
		width: 9,
		top: 46,
		height: 17,
	},
	group8View: {
		backgroundColor: "transparent",
		height: 202,
		marginLeft: 16,
		marginRight: 16,
		marginTop: 17,
	},
	redCardImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 211,
	},
	textText: {
		color: "white",
		fontSize: 14.5,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	muhammadOmarText: {
		color: "rgb(37, 54, 105)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 27,
		letterSpacing: 0.66,
		backgroundColor: "transparent",
		width: 110,
	},
	iconImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		flex: 1,
		height: 16,
		marginLeft: 129,
		marginBottom: 25,
	},
	group7View: {
		backgroundColor: "transparent",
		height: 72,
		marginLeft: 16,
		marginRight: 16,
		marginTop: 14,
		flexDirection: "row",
		alignItems: "center",
	},
	group4View: {
		backgroundColor: "transparent",
		width: 244,
		height: 72,
	},
	cardCompanyText: {
		backgroundColor: "transparent",
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		alignSelf: "flex-start",
	},
	searchCopyView: {
		backgroundColor: "white",
		borderRadius: 5,
		height: 44,
		marginTop: 9,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	visaText: {
		backgroundColor: "transparent",
		color: "rgb(51, 64, 71)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		marginLeft: 17,
		marginTop: 8,
	},
	rectangle13Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 10,
		height: 8,
		marginRight: 14,
	},
	group5TwoView: {
		backgroundColor: "transparent",
		width: 82,
		height: 72,
		alignItems: "flex-start",
	},
	expiryText: {
		backgroundColor: "transparent",
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
	},
	searchCopy3TwoView: {
		backgroundColor: "white",
		borderRadius: 5,
		alignSelf: "stretch",
		height: 44,
		marginTop: 9,
		alignItems: "flex-start",
	},
	textFourText: {
		backgroundColor: "transparent",
		color: "rgb(51, 64, 71)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		marginLeft: 17,
		marginTop: 7,
	},
	group3View: {
		backgroundColor: "transparent",
		height: 72,
		marginLeft: 16,
		marginRight: 16,
		marginTop: 20,
	},
	cardholderNameText: {
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
	},
	searchView: {
		backgroundColor: "white",
		borderRadius: 5,
		height: 44,
		marginTop: 9,
		alignItems: "flex-start",
	},
	muhammadOmarTwoText: {
		backgroundColor: "transparent",
		color: "rgb(51, 64, 71)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		marginLeft: 17,
		marginTop: 7,
	},
	group2View: {
		backgroundColor: "transparent",
		height: 72,
		marginLeft: 16,
		marginRight: 16,
		marginBottom: 34,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	cardNumberCopyText: {
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
	},
	searchCopy2View: {
		backgroundColor: "white",
		borderRadius: 5,
		width: 244,
		height: 44,
		marginTop: 9,
		alignItems: "flex-start",
	},
	textTwoText: {
		backgroundColor: "transparent",
		color: "rgb(51, 64, 71)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		width: 144,
		marginLeft: 17,
		marginTop: 7,
	},
	group5View: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 82,
		height: 72,
	},
	cvvText: {
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
	},
	searchCopy3View: {
		backgroundColor: "white",
		borderRadius: 5,
		height: 44,
		marginTop: 9,
		alignItems: "flex-start",
	},
	textThreeText: {
		color: "rgb(51, 64, 71)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		width: 22,
		marginLeft: 17,
		marginTop: 7,
	},
	group6View: {
		backgroundColor: "transparent",
		height: 60,
	},
	rectangleImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 60,
	},
	addCreditCardText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.09,
		marginLeft: 116,
		marginRight: 116,
	},
	creditCardText: {
		color: "white",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		top: 42,
	},
})
