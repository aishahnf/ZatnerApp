//
//  Search
//  Project
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import LinearGradient from "react-native-linear-gradient"


export default class Search extends React.Component {

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
				style={styles.searchView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: -69,
						top: 0,
						bottom: -280,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							height: 143,
							marginRight: 69,
						}}>
						<LinearGradient
							start={{
								x: 0.07,
								y: 0.49,
							}}
							end={{
								x: 1.05,
								y: 0.64,
							}}
							locations={[0, 1]}
							colors={["rgb(13, 143, 197)", "rgb(0, 103, 165)"]}
							style={styles.snazzyImageViewLinearGradient}>
							<View
								style={styles.snazzyImageView}>
								<View
									style={styles.searchTwoView}>
									<Image
										source={require("./../../assets/images/icon-4.png")}
										style={styles.iconImage}/>
									<Text
										style={styles.searchACarOrCityText}>Search a car or city</Text>
								</View>
							</View>
						</LinearGradient>
						<Image
							source={require("./../../assets/images/arrow-3.png")}
							style={styles.arrowImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
						}}>
						<View
							style={styles.maskView}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 22,
								bottom: 0,
							}}>
							<View
								style={styles.group9View}>
								<Text
									style={styles.stationsNearbyText}>Stations nearby</Text>
								<View
									style={styles.viewView}>
									<View
										pointerEvents="box-none"
										style={{
											alignSelf: "flex-start",
											width: 82,
											height: 22,
											marginLeft: 2,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<Image
											source={require("./../../assets/images/building-2.png")}
											style={styles.buildingImage}/>
										<Text
											style={styles.dubaiTwoText}>Dubai</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.path2View}/>
								</View>
								<View
									style={styles.copyView}>
									<View
										pointerEvents="box-none"
										style={{
											alignSelf: "flex-start",
											width: 147,
											height: 22,
											marginLeft: 2,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<Image
											source={require("./../../assets/images/building-2.png")}
											style={styles.buildingTwoImage}/>
										<Text
											style={styles.abuDhabiTwoText}>Abu Dhabi	</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.path2TwoView}/>
								</View>
								<View
									style={styles.copy2View}>
									<View
										pointerEvents="box-none"
										style={{
											alignSelf: "flex-start",
											width: 175,
											height: 22,
											marginLeft: 2,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<Image
											source={require("./../../assets/images/building-2.png")}
											style={styles.buildingThreeImage}/>
										<Text
											style={styles.rasAlKhaimahText}>Ras Al Khaimah	</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.path2ThreeView}/>
								</View>
								<View
									style={styles.copy3View}>
									<View
										pointerEvents="box-none"
										style={{
											width: 175,
											height: 22,
											marginLeft: 2,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<Image
											source={require("./../../assets/images/building-2.png")}
											style={styles.buildingFourImage}/>
										<Text
											style={styles.ummAlQuwainText}>Umm Al Quwain	</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.path2FourView}/>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.copy4View}>
									<View
										pointerEvents="box-none"
										style={{
											alignSelf: "flex-start",
											width: 119,
											height: 22,
											marginLeft: 2,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<Image
											source={require("./../../assets/images/building-2.png")}
											style={styles.buildingFiveImage}/>
										<Text
											style={styles.fujairahText}>Fujairah	</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.path2FiveView}/>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.group8View}>
								<Text
									style={styles.popularCitiesText}>Popular Cities</Text>
								<View
									style={styles.groupView}>
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
												height: 88,
												flexDirection: "row",
												alignItems: "center",
											}}>
											<View
												style={styles.bitmapView}>
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
														style={styles.bitmapTwoView}>
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
																source={require("./../../assets/images/mask-3.png")}
																style={styles.maskImage}/>
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
															<LinearGradient
																start={{
																	x: 0.5,
																	y: 0,
																}}
																end={{
																	x: 0.5,
																	y: 0.83,
																}}
																locations={[0, 1]}
																colors={["transparent", "rgba(0, 0, 0, 0.6)"]}
																style={styles.maskTwoViewLinearGradient}>
																<View
																	style={styles.maskTwoView}/>
															</LinearGradient>
														</View>
													</View>
												</View>
												<View
													style={styles.textView}>
													<Text
														style={styles.dubaiText}>DUBAI</Text>
													<Text
														style={styles.carsText}>87 cars</Text>
												</View>
											</View>
											<View
												style={{
													flex: 1,
												}}/>
											<View
												style={styles.bitmapCopy3View}>
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
														style={styles.bitmapFourView}>
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
																source={require("./../../assets/images/mask-7.png")}
																style={styles.maskThreeImage}/>
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
															<LinearGradient
																start={{
																	x: 0.5,
																	y: 0,
																}}
																end={{
																	x: 0.5,
																	y: 0.83,
																}}
																locations={[0, 1]}
																colors={["transparent", "rgba(0, 0, 0, 0.6)"]}
																style={styles.maskFourViewLinearGradient}>
																<View
																	style={styles.maskFourView}/>
															</LinearGradient>
														</View>
													</View>
												</View>
												<View
													style={styles.textThreeView}>
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
															style={styles.sharjahText}>SHARJAH</Text>
													</View>
													<Text
														style={styles.carsThreeText}>65 cars</Text>
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
										<View
											style={styles.bitmapCopy2View}>
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
													style={styles.bitmapThreeView}>
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
															source={require("./../../assets/images/mask-6.png")}
															style={styles.maskTwoImage}/>
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
														<LinearGradient
															start={{
																x: 0.5,
																y: 0,
															}}
															end={{
																x: 0.5,
																y: 0.83,
															}}
															locations={[0, 1]}
															colors={["transparent", "rgba(0, 0, 0, 0.6)"]}
															style={styles.maskThreeViewLinearGradient}>
															<View
																style={styles.maskThreeView}/>
														</LinearGradient>
													</View>
												</View>
											</View>
											<View
												style={styles.textTwoView}>
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
														style={styles.abuDhabiText}>ABU DHABI</Text>
												</View>
												<Text
													style={styles.carsTwoText}>51 cars</Text>
											</View>
										</View>
									</View>
								</View>
							</View>
							<View
								style={styles.group7View}>
								<View
									style={styles.bitmapCopy4View}>
									<Text
										style={styles.bookInstantlyText}>Book Instantly</Text>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 0,
										height: 80,
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.carTypesText}>Car Types</Text>
									<View
										pointerEvents="box-none"
										style={{
											alignSelf: "stretch",
											height: 43,
											marginTop: 20,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<View
											style={styles.bitmapCopyView}>
											<Text
												style={styles.businessText}>Business</Text>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.bitmapCopy5View}>
											<Text
												style={styles.freeDeliveryText}>Free Delivery</Text>
										</View>
									</View>
								</View>
							</View>
							<View
								style={styles.group13View}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 10,
										height: 75,
									}}>
									<View
										style={styles.fill1View}/>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 17,
											right: 18,
											top: 19,
											height: 44,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<View
											style={styles.group2View}>
											<Image
												source={require("./../../assets/images/002-portfolio.png")}
												style={styles.portfolioImage}/>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.rentalsText}>RENTALS</Text>
										</View>
										<View
											style={styles.group3View}>
											<Image
												source={require("./../../assets/images/001-checklist.png")}
												style={styles.checklistImage}/>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.listingText}>LISTING</Text>
										</View>
										<Text
											style={styles.discoverText}>DISCOVER</Text>
										<View
											style={styles.group5View}>
											<Image
												source={require("./../../assets/images/alarm.png")}
												style={styles.alarmImage}/>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.alertsText}>ALERTS</Text>
										</View>
										<View
											style={styles.group6View}>
											<Image
												source={require("./../../assets/images/003-user.png")}
												style={styles.userImage}/>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.profileText}>PROFILE</Text>
										</View>
									</View>
								</View>
								<LinearGradient
									start={{
										x: 0.13,
										y: 0.13,
									}}
									end={{
										x: 1,
										y: 1,
									}}
									locations={[0, 1]}
									colors={["rgb(13, 143, 197)", "rgb(0, 103, 165)"]}
									style={styles.btnGridViewViewLinearGradient}>
									<View
										style={styles.btnGridViewView}>
										<Image
											source={require("./../../assets/images/binoculars-1.png")}
											style={styles.binoculars1Image}/>
									</View>
								</LinearGradient>
							</View>
						</View>
					</View>
				</View>
				<Text
					style={styles.zartnerSearchText}>Zartner Search</Text>
			</View>
	}
}

const styles = StyleSheet.create({
	searchView: {
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
		height: 143,
	},
	searchTwoView: {
		backgroundColor: "white",
		borderRadius: 5,
		height: 44,
		marginLeft: 16,
		marginRight: 16,
		marginTop: 83,
		flexDirection: "row",
		alignItems: "center",
	},
	iconImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		flex: 1,
		height: 17,
		marginLeft: 17,
		marginRight: 11,
	},
	searchACarOrCityText: {
		color: "rgb(189, 189, 189)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 11,
		marginTop: 7,
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
	maskView: {
		backgroundColor: "white",
		shadowColor: "rgba(120, 121, 147, 0.09)",
		shadowRadius: 20,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		right: 69,
		bottom: 0,
		height: 804,
	},
	group9View: {
		backgroundColor: "transparent",
		height: 366,
		marginLeft: 16,
		marginRight: 85,
	},
	stationsNearbyText: {
		color: "rgb(74, 74, 74)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
	},
	viewView: {
		backgroundColor: "transparent",
		height: 49,
		marginTop: 21,
	},
	buildingImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 21,
		height: 21,
		marginTop: 1,
	},
	dubaiTwoText: {
		color: "black",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 14,
	},
	path2View: {
		backgroundColor: "rgb(233, 233, 233)",
		height: 1,
		marginBottom: 1,
	},
	copyView: {
		backgroundColor: "transparent",
		height: 49,
		marginTop: 20,
	},
	buildingTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 21,
		height: 21,
		marginTop: 1,
	},
	abuDhabiTwoText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 14,
	},
	path2TwoView: {
		backgroundColor: "rgb(233, 233, 233)",
		height: 1,
		marginBottom: 1,
	},
	copy2View: {
		backgroundColor: "transparent",
		height: 49,
		marginTop: 21,
	},
	buildingThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 21,
		height: 21,
		marginTop: 1,
	},
	rasAlKhaimahText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 14,
	},
	path2ThreeView: {
		backgroundColor: "rgb(233, 233, 233)",
		height: 1,
		marginBottom: 1,
	},
	copy3View: {
		backgroundColor: "transparent",
		height: 49,
		marginTop: 21,
		alignItems: "flex-start",
	},
	buildingFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 21,
		height: 21,
		marginTop: 1,
	},
	ummAlQuwainText: {
		color: "black",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 14,
	},
	path2FourView: {
		backgroundColor: "rgb(233, 233, 233)",
		alignSelf: "stretch",
		height: 1,
		marginBottom: 1,
	},
	copy4View: {
		backgroundColor: "transparent",
		height: 49,
	},
	buildingFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 21,
		height: 21,
		marginTop: 1,
	},
	fujairahText: {
		color: "black",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 14,
	},
	path2FiveView: {
		backgroundColor: "rgb(233, 233, 233)",
		height: 1,
		marginBottom: 1,
	},
	group8View: {
		backgroundColor: "transparent",
		height: 124,
		marginLeft: 16,
		marginBottom: 34,
	},
	popularCitiesText: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-start",
	},
	groupView: {
		backgroundColor: "transparent",
		height: 88,
		marginTop: 19,
	},
	bitmapView: {
		backgroundColor: "transparent",
		width: 136,
		height: 88,
	},
	bitmapTwoView: {
		backgroundColor: "transparent",
		height: 88,
	},
	maskImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 88,
	},
	maskTwoView: {
		width: "100%",
		height: "100%",
	},
	maskTwoViewLinearGradient: {
		borderRadius: 10,
		height: 88,
	},
	textView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 52,
		top: 28,
		height: 40,
	},
	dubaiText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 22,
		backgroundColor: "transparent",
		position: "absolute",
		left: -1,
		right: -1,
		top: 0,
	},
	carsText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 22,
		backgroundColor: "transparent",
		position: "absolute",
		left: 5,
		right: 5,
		top: 14,
	},
	bitmapCopy3View: {
		backgroundColor: "transparent",
		width: 136,
		height: 88,
	},
	bitmapFourView: {
		backgroundColor: "transparent",
		height: 88,
	},
	maskThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 88,
	},
	maskFourView: {
		width: "100%",
		height: "100%",
	},
	maskFourViewLinearGradient: {
		borderRadius: 10,
		height: 88,
	},
	textThreeView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 78,
		top: 28,
		height: 40,
	},
	sharjahText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 22,
	},
	carsThreeText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 22,
		backgroundColor: "transparent",
		position: "absolute",
		left: 18,
		right: 17,
		top: 14,
	},
	bitmapCopy2View: {
		backgroundColor: "transparent",
		width: 136,
		height: 88,
	},
	bitmapThreeView: {
		backgroundColor: "transparent",
		height: 88,
	},
	maskTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 88,
	},
	maskThreeView: {
		width: "100%",
		height: "100%",
	},
	maskThreeViewLinearGradient: {
		borderRadius: 10,
		height: 88,
	},
	textTwoView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 91,
		top: 28,
		height: 40,
	},
	abuDhabiText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 22,
	},
	carsTwoText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 22,
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		top: 14,
	},
	group7View: {
		backgroundColor: "transparent",
		height: 80,
		marginLeft: 16,
		marginBottom: 57,
	},
	bitmapCopy4View: {
		backgroundColor: "rgb(241, 95, 94)",
		borderRadius: 10,
		shadowColor: "rgb(255, 212, 211)",
		shadowRadius: 20,
		shadowOpacity: 1,
		position: "absolute",
		alignSelf: "center",
		width: 136,
		top: 37,
		height: 43,
	},
	bookInstantlyText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 22,
		marginLeft: 22,
		marginRight: 22,
		marginTop: 7,
	},
	carTypesText: {
		color: "rgb(74, 74, 74)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	bitmapCopyView: {
		backgroundColor: "rgb(96, 211, 141)",
		borderRadius: 10,
		shadowColor: "rgb(215, 255, 230)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: 136,
		height: 43,
	},
	businessText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 22,
		marginLeft: 39,
		marginRight: 39,
		marginTop: 7,
	},
	bitmapCopy5View: {
		backgroundColor: "rgb(93, 168, 243)",
		borderRadius: 10,
		shadowColor: "rgb(209, 232, 255)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: 136,
		height: 43,
	},
	freeDeliveryText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 22,
		backgroundColor: "transparent",
		marginLeft: 25,
		marginRight: 25,
		marginTop: 7,
	},
	group13View: {
		backgroundColor: "transparent",
		height: 85,
		marginRight: 69,
	},
	fill1View: {
		backgroundColor: "rgb(254, 254, 254)",
		shadowColor: "rgba(0, 0, 0, 0.07)",
		shadowRadius: 28,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 75,
	},
	group2View: {
		backgroundColor: "transparent",
		width: 42,
		height: 43,
		marginTop: 1,
	},
	portfolioImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 24,
		marginLeft: 11,
		marginRight: 10,
		marginTop: 1,
	},
	rentalsText: {
		color: "rgb(160, 160, 160)",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	group3View: {
		backgroundColor: "transparent",
		width: 36,
		height: 44,
		marginLeft: 36,
	},
	checklistImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 24,
		marginLeft: 8,
		marginRight: 8,
		marginTop: 1,
	},
	listingText: {
		backgroundColor: "transparent",
		color: "rgb(160, 160, 160)",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	discoverText: {
		backgroundColor: "transparent",
		color: "rgb(0, 103, 165)",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		flex: 1,
		marginLeft: 30,
		marginRight: 32,
		marginTop: 28,
	},
	group5View: {
		backgroundColor: "transparent",
		width: 34,
		height: 43,
		marginRight: 39,
		marginTop: 1,
	},
	alarmImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 24,
		marginLeft: 5,
		marginRight: 4,
	},
	alertsText: {
		color: "rgb(160, 160, 160)",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	group6View: {
		backgroundColor: "transparent",
		width: 38,
		height: 44,
	},
	userImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 24,
		marginLeft: 7,
		marginRight: 7,
	},
	profileText: {
		color: "rgb(160, 160, 160)",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	btnGridViewViewLinearGradient: {
		borderRadius: 15,
		shadowColor: "rgba(0, 103, 165, 0.18)",
		shadowRadius: 12,
		shadowOpacity: 1,
		position: "absolute",
		alignSelf: "center",
		width: 52,
		top: 0,
		height: 52,
	},
	btnGridViewView: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
	},
	binoculars1Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 21,
		marginLeft: 11,
		marginRight: 10,
	},
	zartnerSearchText: {
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
