//
//  BookCarPayment
//  Project
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import React from "react"
import LinearGradient from "react-native-linear-gradient"
import { StyleSheet, Image, View, Text } from "react-native"


export default class BookCarPayment extends React.Component {

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
				style={styles.bookCarPaymentView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						height: 293,
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
					<Text
						style={styles.selectPaymentMethoText}>SELECT PAYMENT METHOD</Text>
					<View
						style={styles.group11Copy2View}>
						<Text
							style={styles.creditCardText}>Credit Card</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/path-5.png")}
							style={styles.path5Image}/>
					</View>
					<View
						style={styles.group11Copy5View}>
						<Text
							style={styles.paypalText}>Paypal</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/path-5.png")}
							style={styles.path5TwoImage}/>
					</View>
				</View>
				<Text
					style={styles.paymentMethodText}>Payment Method</Text>
			</View>
	}
}

const styles = StyleSheet.create({
	bookCarPaymentView: {
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
	selectPaymentMethoText: {
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 16,
		marginTop: 26,
	},
	group11Copy2View: {
		backgroundColor: "transparent",
		borderWidth: 1,
		borderColor: "rgb(232, 232, 235)",
		borderStyle: "solid",
		height: 70,
		marginTop: 20,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	creditCardText: {
		color: "rgb(74, 74, 74)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		marginLeft: 16,
		marginTop: 20,
	},
	path5Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 9,
		height: 16,
		marginRight: 17,
	},
	group11Copy5View: {
		backgroundColor: "transparent",
		borderWidth: 1,
		borderColor: "rgb(232, 232, 235)",
		borderStyle: "solid",
		height: 70,
		marginTop: 1,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	paypalText: {
		color: "rgb(74, 74, 74)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		marginLeft: 16,
		marginTop: 20,
	},
	path5TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 9,
		height: 16,
		marginRight: 17,
	},
	paymentMethodText: {
		backgroundColor: "transparent",
		color: "white",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		alignSelf: "center",
		top: 42,
	},
})
