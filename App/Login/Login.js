//
//  Login
//  Project
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { View, Image, StyleSheet, Text,TouchableOpacity,TextInput,ScrollView,KeyboardAvoidingView } from "react-native"
import React from "react"
import LinearGradient from "react-native-linear-gradient"


export default class Login extends React.Component {

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

	// _onSignUpPressButton() {
	// 	alert('You tapped the button!')
	// 	const {navigate} = this.props.navigation;
	// 	this.props.navigation.navigate('Signup1')
	// }

	render() {
		const {navigate} = this.props.navigation;
		return <View
				style={styles.loginView}>
			  <ScrollView>
				<KeyboardAvoidingView style={{ flex: 1 }} keyboardVerticalOffset={100} behavior={"position"}>
					<View
						style={styles.loginView}>
				<Image
					source={require("./../../assets/images/group-18-copy.png")}
					style={styles.group18CopyImage}/>
				<Text
					style={styles.loginToYourAccounText}>Login to your account</Text>
				<View
					style={styles.groupCopyView}>
					<Text
						style={styles.usernameText}>Username</Text>
					<TextInput
						style={styles.johndoe123Text}>johndoe123</TextInput>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.rectangle3View}/>
				</View>
				<View
					style={styles.groupCopyTwoView}>
					<Text
						style={styles.passwordText}>Password</Text>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
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
							<TextInput secureTextEntry={true}
								style={styles.textText}>****</TextInput>
							<View
								style={styles.rectangle3TwoView}/>
						</View>
						<TouchableOpacity onPress={this._onPressButton}>
						<Image
							source={require("./../../assets/images/eye-open-light-2.png")}
							style={styles.eyeOpenLightImage}/></TouchableOpacity>
					</View>
				</View>
			<TouchableOpacity onPress={this._onPressButton}>
				<Text
					style={styles.forgotPasswordText}>Forgot Password?</Text></TouchableOpacity>
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
						<TouchableOpacity onPress={this._onPressButton}>
					<View
						style={styles.btnView}>
						<Text
							style={styles.loginText}>LOGIN</Text>
					</View>
						</TouchableOpacity>

				</LinearGradient>
				<Text
					style={styles.needAnAccountSigText}>Need an account? </Text>
			<TouchableOpacity onPress={() => navigate('Signup2', {name: 'Jane'})}>
			<Text
				style={styles.needAnAccountSigText}>Sign Up</Text>
			</TouchableOpacity>
				<View
					style={{
						flex: 1,
					}}/>
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
									height: 39,
									marginTop: 1,
								}}>
								<View
									style={styles.rectangle6CopyView}/>
								<TouchableOpacity onPress={this._onPressButton}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 20,
										width: 89,
										top: 9,
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
									</TouchableOpacity>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									width: 130,
									height: 39,
								}}>
								<View
									style={styles.rectangle6CopyTwoView}/>
								<TouchableOpacity onPress={this._onPressButton}>
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
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<Text
						style={styles.orLoginUsingSociaText}>OR LOGIN USING SOCIAL</Text>
				</View>
					</View>
				</KeyboardAvoidingView>
			</ScrollView>
			</View>
	}
}

const styles = StyleSheet.create({
	loginView: {
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
	loginToYourAccounText: {
		backgroundColor: "transparent",
		color: "rgb(102, 102, 102)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 23,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "stretch",
		marginLeft: 47,
		marginRight: 118,
		marginTop: 60,
	},
	groupCopyView: {
		backgroundColor: "transparent",
		width: 282,
		height: 51,
		marginTop: 19,
		alignItems: "flex-start",
	},
	usernameText: {
		backgroundColor: "transparent",
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.17,
	},
	johndoe123Text: {
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
	rectangle3View: {
		backgroundColor: "rgb(216, 216, 216)",
		alignSelf: "stretch",
		height: 1,
	},
	groupCopyTwoView: {
		backgroundColor: "transparent",
		width: 282,
		height: 51,
		marginTop: 20,
	},
	passwordText: {
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
	textText: {
		color: "rgb(32, 32, 32)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 3,
		width: "60%",
		top: 0,
	},
	rectangle3TwoView: {
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
	forgotPasswordText: {
		backgroundColor: "transparent",
		color: "rgba(0, 0, 0, 0.4)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		alignSelf: "flex-end",
		marginRight: 46,
		marginTop: 14,
	},
	btnViewLinearGradient: {
		borderRadius: 3,
		width: 282,
		height: 40,
		marginTop: 36,
	},
	btnView: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	loginText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.54,
		backgroundColor: "transparent",
	},
	needAnAccountSigText: {
		color: "rgb(102, 102, 102)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 170,
		marginTop: 15,
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
		height: 39,
	},
	shapeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 10,
		height: 18,
		marginTop: 1,
	},
	facebookText: {
		backgroundColor: "transparent",
		color: "white",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginLeft: 11,
	},
	rectangle6CopyTwoView: {
		backgroundColor: "rgb(216, 35, 42)",
		borderRadius: 3,
		position: "absolute",
		right: 0,
		width: 130,
		top: 0,
		height: 39,
	},
	shapeTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
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
	orLoginUsingSociaText: {
		color: "rgb(103, 119, 129)",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 136,
		top: 0,
	},
})
