//
//  Signup1
//  Project
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { Text, StyleSheet, View, Image } from "react-native"
import React from "react"
import LinearGradient from "react-native-linear-gradient"


export default class Signup1 extends React.Component {

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
				style={styles.signup1View}>
				<Image
					source={require("./../../assets/images/group-18-copy.png")}
					style={styles.group18CopyImage}/>
				<Text
					style={styles.createANewAccountText}>Create a new account</Text>
				<View
					style={styles.groupView}>
					<Text
						style={styles.usernameText}>Username</Text>
					<Text
						style={styles.johndoe123Text}>johndoe123</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.rectangle3View}/>
				</View>
				<View
					style={styles.groupCopyView}>
					<Text
						style={styles.emailAddressText}>Email Address</Text>
					<Text
						style={styles.johnDoeMailComText}>john.doe@mail.com</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.rectangle3TwoView}/>
				</View>
				<View
					style={styles.groupCopyTwoView}>
					<Text
						style={styles.passwordText}>Password</Text>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							alignSelf: "stretch",
							marginTop: 4,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
							}}>
							<Text
								style={styles.textText}>************</Text>
							<View
								style={styles.rectangle3ThreeView}/>
						</View>
						<Image
							source={require("./../../assets/images/eye-open-light.png")}
							style={styles.eyeOpenLightImage}/>
					</View>
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
					style={styles.btnViewLinearGradient}>
					<View
						style={styles.btnView}>
						<Text
							style={styles.signUpText}>SIGN U</Text>
					</View>
				</LinearGradient>
				<View
					style={{
						flex: 1,
					}}/>
				<Text
					style={styles.alreadyHaveAnAccoText}>Already have an account? </Text>
				<View
					style={styles.group3View}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 6,
							height: 64,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 1,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								style={styles.rectangle8View}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.rectangle8CopyView}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								height: 40,
								marginTop: 23,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									width: 130,
									height: 40,
								}}>
								<View
									style={styles.rectangle6CopyView}/>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 20,
										width: 89,
										top: 10,
										height: 19,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Image
										source={require("./../../assets/images/shape-2.png")}
										style={styles.shapeImage}/>
									<Text
										style={styles.facebookText}>Facebook</Text>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									width: 130,
									height: 40,
								}}>
								<View
									style={styles.rectangle6CopyTwoView}/>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										right: 26,
										width: 79,
										top: 10,
										height: 19,
										flexDirection: "row",
										justifyContent: "flex-end",
										alignItems: "flex-start",
									}}>
									<Image
										source={require("./../../assets/images/shape.png")}
										style={styles.shapeTwoImage}/>
									<Text
										style={styles.googleText}>Google</Text>
								</View>
							</View>
						</View>
					</View>
					<Text
						style={styles.orSignUpUsingSocText}>OR SIGN UP USING SOCIAL</Text>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	signup1View: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "center",
	},
	group18CopyImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 151,
		height: 41,
		marginTop: 83,
	},
	createANewAccountText: {
		color: "rgb(102, 102, 102)",
		fontFamily: ".SFNSDisplay",
		fontSize: 23,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "stretch",
		marginLeft: 47,
		marginRight: 117,
		marginTop: 60,
	},
	groupView: {
		backgroundColor: "transparent",
		width: 282,
		height: 51,
		marginTop: 19,
		alignItems: "flex-start",
	},
	usernameText: {
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.17,
		backgroundColor: "transparent",
	},
	johndoe123Text: {
		color: "rgb(60, 79, 90)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.17,
		backgroundColor: "transparent",
		marginLeft: 3,
		marginTop: 6,
	},
	rectangle3View: {
		backgroundColor: "rgb(216, 216, 216)",
		alignSelf: "stretch",
		height: 1,
	},
	groupCopyView: {
		backgroundColor: "transparent",
		width: 282,
		height: 51,
		marginTop: 20,
		alignItems: "flex-start",
	},
	emailAddressText: {
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.17,
		backgroundColor: "transparent",
	},
	johnDoeMailComText: {
		color: "rgb(60, 79, 90)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.17,
		backgroundColor: "transparent",
		marginLeft: 3,
		marginTop: 6,
	},
	rectangle3TwoView: {
		backgroundColor: "rgb(216, 216, 216)",
		alignSelf: "stretch",
		height: 1,
	},
	groupCopyTwoView: {
		backgroundColor: "transparent",
		width: 282,
		height: 51,
		marginTop: 20,
		alignItems: "flex-start",
	},
	passwordText: {
		backgroundColor: "transparent",
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.17,
	},
	textText: {
		backgroundColor: "transparent",
		color: "rgb(32, 32, 32)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 3,
		width: 83,
		top: 0,
	},
	rectangle3ThreeView: {
		backgroundColor: "rgb(216, 216, 216)",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 4,
		height: 1,
	},
	eyeOpenLightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.3,
		position: "absolute",
		right: 0,
		width: 20,
		top: 6,
		height: 13,
	},
	btnView: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	btnViewLinearGradient: {
		borderRadius: 3,
		width: 282,
		height: 40,
		marginTop: 30,
	},
	signUpText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.54,
	},
	alreadyHaveAnAccoText: {
		backgroundColor: "transparent",
		color: "rgb(102, 102, 102)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 206,
		marginBottom: 28,
	},
	group3View: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 70,
		marginLeft: 47,
		marginRight: 46,
		marginBottom: 26,
	},
	rectangle8View: {
		backgroundColor: "rgb(197, 207, 214)",
		width: 64,
		height: 1,
	},
	rectangle8CopyView: {
		backgroundColor: "rgb(197, 207, 214)",
		width: 64,
		height: 1,
	},
	rectangle6CopyView: {
		backgroundColor: "rgb(0, 103, 165)",
		borderRadius: 3,
		position: "absolute",
		left: 0,
		width: 130,
		top: 0,
		height: 40,
	},
	shapeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 10,
		height: 18,
		marginTop: 1,
	},
	facebookText: {
		color: "white",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 11,
	},
	rectangle6CopyTwoView: {
		backgroundColor: "rgb(216, 35, 42)",
		borderRadius: 3,
		position: "absolute",
		right: 0,
		width: 130,
		top: 0,
		height: 40,
	},
	shapeTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 18,
		height: 18,
		marginRight: 11,
		marginTop: 1,
	},
	googleText: {
		color: "white",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	orSignUpUsingSocText: {
		backgroundColor: "transparent",
		color: "rgb(103, 119, 129)",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		alignSelf: "center",
		width: 146,
		top: 0,
	},
})
