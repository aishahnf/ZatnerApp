//
//  BookCar1
//  Project
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { Text, View, Image, StyleSheet } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import React from "react"


export default class BookCar1 extends React.Component {

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
				style={styles.bookCar1View}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: -428,
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
						pointerEvents="box-none"
						style={{
							height: 113,
							marginLeft: 16,
							marginRight: 25,
							marginTop: 15,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/mask-copy-2.png")}
							style={styles.maskCopy2Image}/>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								height: 108,
								marginLeft: 10,
								alignItems: "flex-end",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									height: 54,
								}}>
								<View
									style={styles.group7View}>
									<View
										style={styles.starsView}>
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
											<View
												pointerEvents="box-none"
												style={{
													height: 11,
													flexDirection: "row",
													alignItems: "center",
												}}>
												<Image
													source={require("./../../assets/images/star-1.png")}
													style={styles.star1Image}/>
												<Image
													source={require("./../../assets/images/star-1.png")}
													style={styles.star1CopyImage}/>
												<View
													style={{
														flex: 1,
													}}/>
												<View
													pointerEvents="box-none"
													style={{
														width: 23,
														height: 11,
													}}>
													<View
														pointerEvents="box-none"
														style={{
															position: "absolute",
															right: 0,
															top: 0,
															bottom: 0,
															justifyContent: "center",
														}}>
														<Image
															source={require("./../../assets/images/star-1.png")}
															style={styles.star1Copy3Image}/>
													</View>
													<View
														pointerEvents="box-none"
														style={{
															position: "absolute",
															right: 0,
															top: 0,
															bottom: 0,
															justifyContent: "center",
														}}>
														<Image
															source={require("./../../assets/images/star-1-copy-4-2.png")}
															style={styles.star1Copy4Image}/>
													</View>
												</View>
											</View>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												alignSelf: "center",
												top: 0,
												bottom: 0,
												justifyContent: "center",
											}}>
											<Image
												source={require("./../../assets/images/star-1.png")}
												style={styles.star1Copy2Image}/>
										</View>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.tripsText}>116 trips</Text>
								</View>
								<Text
									style={styles.itemCopyText}>Mercedes-Benz Slk-Class 201</Text>
							</View>
							<Text
								style={styles.byAbdullahText}>by Abdullah</Text>
							<View
								style={styles.group8View}>
								<Text
									style={styles.aedFiveText}>152 AED</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.perDayText}>per day</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.group12View}>
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
									position: "absolute",
									left: 0,
									right: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<Image
									source={require("./../../assets/images/rectangle-8.png")}
									style={styles.rectangle8Image}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 22,
									right: 21,
									top: 10,
									bottom: 18,
								}}>
								<View
									pointerEvents="box-none"
									style={{
										height: 22,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.tue20Mar2019Text}>Tue, 20 Mar 2019</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.thur10Apr2019Text}>Thur, 10 Apr 2019</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.rasAlKhaimahText}>Ras Al Khaimah</Text>
							</View>
							<Text
								style={styles.amText}>10:00 AM</Text>
							<Text
								style={styles.pmText}>08:30 PM</Text>
							<Text
								style={styles.pickupReturnLocaText}>Pickup & Return Location</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 28,
								height: 42,
							}}>
							<Image
								source={require("./../../assets/images/rectangle-12.png")}
								style={styles.rectangle12Image}/>
							<View
								style={styles.rectangle11View}/>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 112,
							marginTop: 38,
						}}>
						<Text
							style={styles.selectDetailsText}>SELECT DETAILS</Text>
						<View
							style={styles.group11Copy2View}>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "flex-start",
									width: 101,
									height: 43,
									marginLeft: 16,
									marginTop: 9,
								}}>
								<Text
									style={styles.selectOptionText}>Select option</Text>
								<Text
									style={styles.extrasOptionsText}>Extras Options</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/path-5.png")}
								style={styles.path5Image}/>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.group11Copy5View}>
						<View
							pointerEvents="box-none"
							style={{
								width: 129,
								height: 43,
								marginLeft: 16,
								marginTop: 9,
							}}>
							<Text
								style={styles.enterMessageText}>Enter message</Text>
							<Text
								style={styles.messageToOwnerText}>Message to Owner</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/path-5.png")}
							style={styles.path5ThreeImage}/>
					</View>
					<View
						style={styles.group11Copy4View}>
						<View
							pointerEvents="box-none"
							style={{
								width: 88,
								height: 43,
								marginLeft: 16,
								marginTop: 9,
							}}>
							<Text
								style={styles.selectDetailsTwoText}>Select details</Text>
							<Text
								style={styles.insuranceText}>Insurance</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/path-5.png")}
							style={styles.path5FourImage}/>
					</View>
					<View
						style={styles.group11Copy3View}>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "flex-start",
								width: 117,
								height: 43,
								marginLeft: 16,
								marginTop: 9,
							}}>
							<Text
								style={styles.selectMethodText}>Select method</Text>
							<Text
								style={styles.paymentMethodText}>Payment Method</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/path-5.png")}
							style={styles.path5TwoImage}/>
					</View>
					<Text
						style={styles.paymentText}>PAYMENT</Text>
					<View
						style={styles.group21View}>
						<Image
							source={require("./../../assets/images/rectangle-8-2.png")}
							style={styles.rectangle8TwoImage}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 18,
								bottom: 0,
							}}>
							<View
								style={styles.group5View}>
								<View
									style={styles.group4View}>
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
											style={styles.group3View}>
											<Text
												style={styles.farePricePerDayText}>Fare Price per day</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.aedText}>152.00 AED</Text>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.group2TwoView}>
											<Text
												style={styles.valueAddedTaxVatText}>Value Added Tax (VAT)</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<Image
												source={require("./../../assets/images/information-button.png")}
												style={styles.informationButtonImage}/>
											<Text
												style={styles.aedThreeText}>5.50 AED</Text>
										</View>
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
										<View
											style={styles.group2View}>
											<Text
												style={styles.farePriceFor20DaText}>Fare Price for 20 days</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.aedTwoText}>157.50 AED</Text>
										</View>
									</View>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.group10View}>
									<View
										style={styles.rectangle2View}/>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										pointerEvents="box-none"
										style={{
											height: 22,
											flexDirection: "row",
											alignItems: "flex-end",
										}}>
										<Text
											style={styles.totalText}>Tota</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.aedFourText}>3150.00 AED</Text>
									</View>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/combined-shape-3.png")}
								style={styles.combinedShapeImage}/>
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
								source={require("./../../assets/images/rectangle.png")}
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
								style={styles.bookNowText}>BOOK NOW</Text>
						</View>
					</View>
				</View>
				<Text
					style={styles.bookCarText}>BOOK CAR</Text>
			</View>
	}
}

const styles = StyleSheet.create({
	bookCar1View: {
		backgroundColor: "rgb(245, 245, 245)",
		flex: 1,
	},
	snazzyImageView: {
		width: "100%",
		height: "100%",
	},
	snazzyImageViewLinearGradient: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 84,
	},
	arrowImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 18,
		width: 9,
		top: 46,
		height: 17,
	},
	maskCopy2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 149,
		height: 112,
		marginTop: 1,
	},
	group7View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 59,
		top: 0,
		height: 22,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	starsView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 64,
		height: 11,
	},
	star1Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 11,
	},
	star1CopyImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 11,
		marginLeft: 1,
	},
	star1Copy3Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 11,
		marginRight: 11,
	},
	star1Copy4Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 11,
	},
	star1Copy2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 11,
	},
	tripsText: {
		color: "rgb(155, 155, 155)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
	},
	itemCopyText: {
		color: "rgb(51, 64, 71)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 16,
		letterSpacing: 0.15,
		paddingTop: 1,
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 175,
		top: 21,
	},
	byAbdullahText: {
		color: "rgb(144, 156, 162)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
		letterSpacing: 0.17,
		backgroundColor: "transparent",
		marginRight: 101,
	},
	group8View: {
		backgroundColor: "transparent",
		width: 105,
		height: 23,
		marginRight: 70,
		marginTop: 11,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	aedFiveText: {
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 53,
	},
	perDayText: {
		backgroundColor: "transparent",
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		marginRight: 3,
	},
	group12View: {
		backgroundColor: "transparent",
		height: 140,
		marginLeft: 16,
		marginRight: 16,
		marginTop: 28,
	},
	rectangle8Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.04)",
		shadowRadius: 12,
		shadowOpacity: 1,
		width: null,
		height: 140,
	},
	tue20Mar2019Text: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 22,
	},
	thur10Apr2019Text: {
		color: "rgb(74, 74, 74)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 22,
		backgroundColor: "transparent",
	},
	rasAlKhaimahText: {
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 22,
		backgroundColor: "transparent",
		alignSelf: "center",
	},
	amText: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 22,
		position: "absolute",
		left: 52,
		width: 60,
		top: 29,
	},
	pmText: {
		color: "rgb(74, 74, 74)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 22,
		backgroundColor: "transparent",
		position: "absolute",
		right: 51,
		width: 62,
		top: 29,
	},
	pickupReturnLocaText: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 22,
		position: "absolute",
		alignSelf: "center",
		top: 80,
	},
	rectangle12Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 8,
		height: 16,
	},
	rectangle11View: {
		backgroundColor: "rgb(120, 121, 147)",
		opacity: 0.1,
		height: 1,
	},
	selectDetailsText: {
		backgroundColor: "transparent",
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		position: "absolute",
		left: 16,
		width: 122,
		top: 0,
	},
	group11Copy2View: {
		backgroundColor: "transparent",
		borderWidth: 1,
		borderColor: "rgb(232, 232, 235)",
		borderStyle: "solid",
		position: "absolute",
		left: 0,
		right: 0,
		top: 42,
		height: 70,
		flexDirection: "row",
		alignItems: "center",
	},
	selectOptionText: {
		color: "rgb(171, 171, 171)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		top: 21,
	},
	extrasOptionsText: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		position: "absolute",
		left: 0,
		top: 0,
	},
	path5Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
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
		marginBottom: 1,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	enterMessageText: {
		backgroundColor: "transparent",
		color: "rgb(171, 171, 171)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		position: "absolute",
		left: 0,
		top: 21,
	},
	messageToOwnerText: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		position: "absolute",
		left: 0,
		top: 0,
	},
	path5ThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 9,
		height: 16,
		marginRight: 17,
	},
	group11Copy4View: {
		backgroundColor: "transparent",
		borderWidth: 1,
		borderColor: "rgb(232, 232, 235)",
		borderStyle: "solid",
		height: 70,
		marginBottom: 1,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	selectDetailsTwoText: {
		color: "rgb(171, 171, 171)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		top: 21,
	},
	insuranceText: {
		color: "rgb(74, 74, 74)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		top: 0,
	},
	path5FourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 9,
		height: 16,
		marginRight: 17,
	},
	group11Copy3View: {
		backgroundColor: "transparent",
		borderWidth: 1,
		borderColor: "rgb(232, 232, 235)",
		borderStyle: "solid",
		height: 70,
		marginBottom: 39,
		flexDirection: "row",
		alignItems: "center",
	},
	selectMethodText: {
		color: "rgb(171, 171, 171)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		top: 21,
	},
	paymentMethodText: {
		color: "rgb(74, 74, 74)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		top: 0,
	},
	path5TwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 9,
		height: 16,
		marginRight: 17,
	},
	paymentText: {
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
		marginBottom: 16,
	},
	group21View: {
		backgroundColor: "transparent",
		height: 176,
		marginLeft: 16,
		marginRight: 16,
		marginBottom: 39,
	},
	rectangle8TwoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.04)",
		shadowRadius: 12,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		right: 0,
		top: 1,
		height: 163,
	},
	group5View: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 302,
		height: 123,
		marginLeft: 19,
	},
	group4View: {
		backgroundColor: "transparent",
		height: 75,
	},
	group3View: {
		backgroundColor: "transparent",
		height: 14,
		flexDirection: "row",
		alignItems: "center",
	},
	farePricePerDayText: {
		color: "rgb(118, 125, 133)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 14,
		paddingTop: 4,
		backgroundColor: "transparent",
	},
	aedText: {
		color: "rgb(44, 47, 51)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		lineHeight: 14,
		paddingTop: 4,
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 78,
	},
	group2TwoView: {
		backgroundColor: "transparent",
		height: 19,
		flexDirection: "row",
		alignItems: "center",
	},
	valueAddedTaxVatText: {
		color: "rgb(118, 125, 133)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 14,
		paddingTop: 4,
		backgroundColor: "transparent",
	},
	informationButtonImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 19,
		height: 19,
		marginRight: 44,
	},
	aedThreeText: {
		color: "rgb(44, 47, 51)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		lineHeight: 14,
		paddingTop: 4,
		backgroundColor: "transparent",
	},
	group2View: {
		backgroundColor: "transparent",
		height: 14,
		flexDirection: "row",
		alignItems: "center",
	},
	farePriceFor20DaText: {
		backgroundColor: "transparent",
		color: "rgb(118, 125, 133)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 14,
		paddingTop: 4,
	},
	aedTwoText: {
		backgroundColor: "transparent",
		color: "rgb(44, 47, 51)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		lineHeight: 14,
		paddingTop: 4,
	},
	group10View: {
		backgroundColor: "transparent",
		height: 32,
	},
	rectangle2View: {
		backgroundColor: "rgb(228, 228, 228)",
		height: 1,
	},
	totalText: {
		backgroundColor: "transparent",
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 14,
		paddingTop: 8,
	},
	aedFourText: {
		backgroundColor: "transparent",
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		lineHeight: 14,
		paddingTop: 8,
	},
	combinedShapeImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 12,
	},
	group6View: {
		backgroundColor: "transparent",
		height: 60,
	},
	rectangleImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 60,
	},
	bookNowText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.09,
		backgroundColor: "transparent",
		marginLeft: 143,
		marginRight: 143,
	},
	bookCarText: {
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
