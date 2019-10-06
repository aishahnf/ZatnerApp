//
//  Details
//  Project
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import React from "react"
import { Text, Image, StyleSheet, View } from "react-native"


export default class Details extends React.Component {

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
				style={styles.detailsView}>
				<View
					pointerEvents="box-none"
					style={{
						height: 282,
					}}>
					<Image
						source={require("./../../assets/images/mask-copy-2-2.png")}
						style={styles.maskCopy2Image}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 18,
							right: 15,
							top: 44,
							height: 231,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/arrow-2.png")}
							style={styles.arrowImage}/>
						<Image
							source={require("./../../assets/images/group-11.png")}
							style={styles.group11Image}/>
						<Image
							source={require("./../../assets/images/icon-group.png")}
							style={styles.iconGroupImage}/>
					</View>
				</View>
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
					style={styles.itemCopyText}>Mercedes-Benz Slk Fortify{"\n"}Class 201</Text>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "flex-start",
						width: 199,
						height: 18,
						marginLeft: 16,
						marginTop: 14,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<View
						style={styles.bitmapCopyView}>
						<Text
							style={styles.businessText}>Business</Text>
					</View>
					<View
						style={styles.bitmapCopy2View}>
						<Text
							style={styles.instantText}>Instant</Text>
					</View>
					<View
						style={styles.bitmapCopy3View}>
						<Text
							style={styles.luxuryText}>Luxury</Text>
					</View>
				</View>
				<Text
					style={styles.benzSlkClass2016Text}>Benz SLk Class 2016 is specifically designed around  porteur-style racks and front-loading optimization. Dedicated commuters, credit card tourers, and sweaty back people looking to ditch their backpack need look no further.</Text>
				<View
					style={{
						flex: 1,
					}}/>
				<Text
					style={styles.readMoreText}>READ MORE</Text>
				<View
					style={styles.searchView}>
					<View
						pointerEvents="box-none"
						style={{
							width: 117,
							height: 38,
							marginLeft: 14,
							marginTop: 3,
						}}>
						<Text
							style={styles.pickupReturnText}>Pickup & Return</Text>
						<Text
							style={styles.rasAlKhaimahText}>Ras Al Khaimah</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<Image
						source={require("./../../assets/images/building.png")}
						style={styles.buildingImage}/>
				</View>
				<View
					style={styles.searchCopyView}>
					<View
						pointerEvents="box-none"
						style={{
							width: 206,
							marginLeft: 14,
							marginTop: 3,
						}}>
						<Text
							style={styles.tripDatesText}>Trip Dates</Text>
						<Text
							style={styles.mar201000AmMText}>Mar 20, 10:00 AM - Mar 27, 10:00 AM</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<Image
						source={require("./../../assets/images/calendar.png")}
						style={styles.calendarImage}/>
				</View>
				<View
					style={styles.group4View}>
					<Text
						style={styles.specificationsText}>SPECIFICATIONS</Text>
					<View
						pointerEvents="box-none"
						style={{
							height: 48,
							marginLeft: 16,
							marginRight: 92,
							marginTop: 13,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.seatsYes04Text}>Seats</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.doorsYes02Text}>Doors</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 48,
							marginLeft: 16,
							marginRight: 106,
							marginTop: 16,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.typeBusinessClassText}>Type</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.tires26x15Text}>Tires</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 48,
							marginLeft: 16,
							marginRight: 68,
							marginTop: 16,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.breakDoubleDiscText}>Break</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.gasIncludedYes1Text}>Gas included{"\n"}</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						pointerEvents="box-none"
						style={{
							height: 48,
							marginLeft: 16,
							marginRight: 88,
							marginBottom: 35,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<Text
							style={styles.mpgYes22Text}>MPG</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.usbInputYesText}>USB Input{"\n"}</Text>
					</View>
				</View>
				<View
					style={styles.group3View}>
					<Text
						style={styles.postByText}>POST BY</Text>
					<View
						style={styles.group5View}>
						<Image
							source={require("./../../assets/images/mask-2.png")}
							style={styles.maskImage}/>
						<Text
							style={styles.abdullahBinAzharText}>Abdullah Bin{"\n"}Azhar</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.group2View}>
							<Image
								source={require("./../../assets/images/icon-7.png")}
								style={styles.iconImage}/>
						</View>
					</View>
				</View>
				<View
					style={styles.group3CopyView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: -2,
							height: 263,
						}}>
						<Text
							style={styles.similarCarsText}>SIMILAR CARS</Text>
						<View
							pointerEvents="box-none"
							style={{
								height: 222,
								marginTop: 19,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
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
										justifyContent: "center",
									}}>
									<View
										style={styles.backgroundView}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: -1,
										right: -1,
										top: -0,
										bottom: 11,
										alignItems: "flex-start",
									}}>
									<Image
										source={require("./../../assets/images/img-3.png")}
										style={styles.imgImage}/>
									<Text
										style={styles.itemText}>Ford Mustan</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.group8View}>
										<Text
											style={styles.aed152Text}>AED 152</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.perDayText}>per day</Text>
									</View>
								</View>
								<View
									style={styles.group7TwoView}>
									<View
										style={styles.starsTwoView}>
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
													style={styles.star1TwoImage}/>
												<Image
													source={require("./../../assets/images/star-1.png")}
													style={styles.star1CopyTwoImage}/>
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
															style={styles.star1Copy3TwoImage}/>
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
															style={styles.star1Copy4TwoImage}/>
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
												style={styles.star1Copy2TwoImage}/>
										</View>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.tripsTwoText}>116 trips</Text>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.group12Copy2View}>
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
										style={styles.backgroundThreeView}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: -1,
										right: -1,
										top: -0,
										bottom: 11,
										alignItems: "flex-start",
									}}>
									<Image
										source={require("./../../assets/images/img-3.png")}
										style={styles.imgThreeImage}/>
									<Text
										style={styles.itemThreeText}>Ford Mustan</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.group8ThreeView}>
										<Text
											style={styles.aed152ThreeText}>AED 152</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.perDayThreeText}>per day</Text>
									</View>
								</View>
								<View
									style={styles.group7FourView}>
									<View
										style={styles.starsFourView}>
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
													style={styles.star1FourImage}/>
												<Image
													source={require("./../../assets/images/star-1.png")}
													style={styles.star1CopyFourImage}/>
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
															style={styles.star1Copy3FourImage}/>
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
															style={styles.star1Copy4FourImage}/>
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
												style={styles.star1Copy2FourImage}/>
										</View>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.tripsFourText}>116 trips</Text>
								</View>
							</View>
						</View>
					</View>
					<View
						style={styles.group12CopyView}>
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
								style={styles.backgroundTwoView}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: -1,
								right: -1,
								top: -0,
								bottom: 11,
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/img-3.png")}
								style={styles.imgTwoImage}/>
							<Text
								style={styles.itemTwoText}>Ford Mustan</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.group8TwoView}>
								<Text
									style={styles.aed152TwoText}>AED 152</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.perDayTwoText}>per day</Text>
							</View>
						</View>
						<View
							style={styles.group7ThreeView}>
							<View
								style={styles.starsThreeView}>
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
											style={styles.star1ThreeImage}/>
										<Image
											source={require("./../../assets/images/star-1.png")}
											style={styles.star1CopyThreeImage}/>
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
													style={styles.star1Copy3ThreeImage}/>
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
													style={styles.star1Copy4ThreeImage}/>
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
										style={styles.star1Copy2ThreeImage}/>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.tripsThreeText}>116 trips</Text>
						</View>
					</View>
				</View>
				<View
					style={styles.group6View}>
					<View
						style={styles.rectangleView}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 16,
							right: 0,
							top: 0,
							height: 60,
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/rectangle-2.png")}
							style={styles.rectangleImage}/>
						<Text
							style={styles.bookingRateText}>Booking Rate</Text>
						<View
							style={styles.group8FourView}>
							<Text
								style={styles.aed152FourText}>AED 15</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.perDayFourText}>per day</Text>
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
						<Text
							style={styles.bookNowText}>BOOK NOW</Text>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	detailsView: {
		backgroundColor: "rgb(245, 245, 245)",
		flex: 1,
	},
	maskCopy2Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 282,
	},
	arrowImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 9,
		height: 17,
		marginTop: 2,
	},
	group11Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 44,
		height: 18,
		marginLeft: 135,
		marginTop: 213,
	},
	iconGroupImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		flex: 1,
		height: 19,
		marginLeft: 133,
	},
	group7View: {
		backgroundColor: "transparent",
		height: 22,
		marginLeft: 16,
		marginRight: 243,
		marginTop: 21,
		flexDirection: "row",
		alignItems: "center",
	},
	starsView: {
		backgroundColor: "transparent",
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
		backgroundColor: "transparent",
		resizeMode: "center",
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
		alignSelf: "flex-start",
	},
	itemCopyText: {
		color: "rgb(51, 64, 71)",
		fontFamily: ".SFNSDisplay",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0.24,
		paddingTop: 2,
		backgroundColor: "transparent",
		marginLeft: 16,
		marginRight: 101,
		marginTop: 3,
	},
	bitmapCopyView: {
		backgroundColor: "rgb(235, 235, 235)",
		borderRadius: 9,
		width: 62,
		height: 18,
		justifyContent: "center",
	},
	businessText: {
		color: "rgb(74, 74, 74)",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 11,
		marginRight: 11,
	},
	bitmapCopy2View: {
		backgroundColor: "rgb(235, 235, 235)",
		borderRadius: 9,
		width: 62,
		height: 18,
		marginLeft: 7,
		justifyContent: "center",
	},
	instantText: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginLeft: 15,
		marginRight: 15,
	},
	bitmapCopy3View: {
		backgroundColor: "rgb(235, 235, 235)",
		borderRadius: 9,
		width: 62,
		height: 18,
		marginLeft: 6,
		justifyContent: "center",
	},
	luxuryText: {
		color: "rgb(74, 74, 74)",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 16,
		marginRight: 16,
	},
	benzSlkClass2016Text: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		alignSelf: "flex-start",
		width: 338,
		marginLeft: 16,
		marginTop: 11,
	},
	readMoreText: {
		backgroundColor: "transparent",
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		alignSelf: "flex-start",
		width: 78,
		marginLeft: 16,
		marginBottom: 8,
	},
	searchView: {
		backgroundColor: "white",
		borderRadius: 10,
		height: 50,
		marginLeft: 16,
		marginRight: 16,
		marginBottom: 10,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	pickupReturnText: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		position: "absolute",
		left: 0,
		top: 0,
	},
	rasAlKhaimahText: {
		color: "rgb(189, 189, 189)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		top: 16,
	},
	buildingImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "center",
		width: 19,
		height: 21,
		marginRight: 15,
	},
	searchCopyView: {
		backgroundColor: "white",
		borderRadius: 10,
		height: 50,
		marginLeft: 16,
		marginRight: 16,
		marginBottom: 35,
		flexDirection: "row",
	},
	tripDatesText: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		position: "absolute",
		left: 0,
		top: 0,
	},
	mar201000AmMText: {
		backgroundColor: "transparent",
		color: "rgb(189, 189, 189)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		position: "absolute",
		left: 0,
		width: 206,
		bottom: 0,
	},
	calendarImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "center",
		width: 18,
		height: 20,
		marginRight: 15,
	},
	group4View: {
		backgroundColor: "transparent",
		borderWidth: 1,
		borderColor: "rgba(120, 121, 147, 0.1)",
		borderStyle: "solid",
		height: 331,
	},
	specificationsText: {
		backgroundColor: "transparent",
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		alignSelf: "flex-start",
		marginLeft: 16,
		marginTop: 23,
	},
	seatsYes04Text: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0.2,
		backgroundColor: "transparent",
	},
	doorsYes02Text: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0.2,
		backgroundColor: "transparent",
	},
	typeBusinessClassText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0.2,
	},
	tires26x15Text: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0.2,
	},
	breakDoubleDiscText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0.2,
		backgroundColor: "transparent",
	},
	gasIncludedYes1Text: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0.2,
	},
	mpgYes22Text: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0.2,
	},
	usbInputYesText: {
		color: "rgb(74, 74, 74)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0.2,
		backgroundColor: "transparent",
	},
	group3View: {
		backgroundColor: "transparent",
		borderWidth: 1,
		borderColor: "rgba(120, 121, 147, 0.1)",
		borderStyle: "solid",
		height: 189,
		marginBottom: 30,
		alignItems: "flex-start",
	},
	postByText: {
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		marginLeft: 16,
		marginTop: 28,
	},
	group5View: {
		backgroundColor: "white",
		borderRadius: 10,
		shadowColor: "rgba(120, 121, 147, 0.09)",
		shadowRadius: 20,
		shadowOpacity: 1,
		alignSelf: "stretch",
		height: 82,
		marginLeft: 16,
		marginRight: 16,
		marginTop: 18,
		flexDirection: "row",
		alignItems: "center",
	},
	maskImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 49,
		height: 49,
		marginLeft: 11,
	},
	abdullahBinAzharText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
		letterSpacing: 0.2,
		alignSelf: "flex-start",
		marginLeft: 10,
		marginTop: 18,
	},
	group2View: {
		backgroundColor: "rgb(0, 103, 165)",
		borderRadius: 15,
		shadowColor: "rgba(44, 196, 249, 0.26)",
		shadowRadius: 15,
		shadowOpacity: 1,
		width: 52,
		height: 52,
		marginRight: 16,
		justifyContent: "center",
	},
	iconImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 22,
		marginLeft: 15,
		marginRight: 15,
	},
	group3CopyView: {
		backgroundColor: "transparent",
		height: 261,
		marginLeft: 16,
		marginBottom: 41,
	},
	similarCarsText: {
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
	},
	group12View: {
		backgroundColor: "transparent",
		width: 165,
		height: 222,
	},
	backgroundView: {
		backgroundColor: "white",
		borderRadius: 6,
		shadowColor: "rgba(120, 120, 147, 0.09)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 218,
	},
	imgImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "stretch",
		width: null,
		height: 124,
	},
	itemText: {
		backgroundColor: "transparent",
		color: "rgb(51, 64, 71)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		letterSpacing: 0.16,
		marginLeft: 11,
		marginTop: 20,
	},
	group8View: {
		backgroundColor: "transparent",
		width: 105,
		height: 23,
		marginLeft: 12,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	aed152Text: {
		backgroundColor: "transparent",
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		alignSelf: "flex-end",
		width: 53,
	},
	perDayText: {
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		marginRight: 3,
	},
	group7TwoView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 10,
		right: 39,
		top: 128,
		height: 22,
		flexDirection: "row",
		alignItems: "center",
	},
	starsTwoView: {
		backgroundColor: "transparent",
		width: 64,
		height: 11,
	},
	star1TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 11,
	},
	star1CopyTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 12,
		height: 11,
		marginLeft: 1,
	},
	star1Copy3TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 11,
		marginRight: 11,
	},
	star1Copy4TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 11,
	},
	star1Copy2TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 11,
	},
	tripsTwoText: {
		color: "rgb(155, 155, 155)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
	},
	group12Copy2View: {
		backgroundColor: "transparent",
		width: 165,
		height: 222,
	},
	backgroundThreeView: {
		backgroundColor: "white",
		borderRadius: 6,
		shadowColor: "rgba(120, 120, 147, 0.09)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 218,
	},
	imgThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "stretch",
		width: null,
		height: 124,
	},
	itemThreeText: {
		color: "rgb(51, 64, 71)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		letterSpacing: 0.16,
		backgroundColor: "transparent",
		marginLeft: 11,
		marginTop: 20,
	},
	group8ThreeView: {
		backgroundColor: "transparent",
		width: 105,
		height: 23,
		marginLeft: 12,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	aed152ThreeText: {
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
	perDayThreeText: {
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		marginRight: 3,
	},
	group7FourView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 10,
		right: 39,
		top: 128,
		height: 22,
		flexDirection: "row",
		alignItems: "center",
	},
	starsFourView: {
		backgroundColor: "transparent",
		width: 64,
		height: 11,
	},
	star1FourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 12,
		height: 11,
	},
	star1CopyFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 11,
		marginLeft: 1,
	},
	star1Copy3FourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 11,
		marginRight: 11,
	},
	star1Copy4FourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 12,
		height: 11,
	},
	star1Copy2FourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 12,
		height: 11,
	},
	tripsFourText: {
		color: "rgb(155, 155, 155)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
	},
	group12CopyView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 165,
		top: 39,
		height: 222,
	},
	backgroundTwoView: {
		backgroundColor: "white",
		borderRadius: 6,
		shadowColor: "rgba(120, 120, 147, 0.09)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 218,
	},
	imgTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "stretch",
		width: null,
		height: 124,
	},
	itemTwoText: {
		backgroundColor: "transparent",
		color: "rgb(51, 64, 71)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		letterSpacing: 0.16,
		marginLeft: 11,
		marginTop: 20,
	},
	group8TwoView: {
		backgroundColor: "transparent",
		width: 105,
		height: 23,
		marginLeft: 12,
		flexDirection: "row",
		alignItems: "flex-end",
	},
	aed152TwoText: {
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		width: 53,
	},
	perDayTwoText: {
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginRight: 3,
	},
	group7ThreeView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 10,
		right: 39,
		top: 128,
		height: 22,
		flexDirection: "row",
		alignItems: "center",
	},
	starsThreeView: {
		backgroundColor: "transparent",
		width: 64,
		height: 11,
	},
	star1ThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 11,
	},
	star1CopyThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 11,
		marginLeft: 1,
	},
	star1Copy3ThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 11,
		marginRight: 11,
	},
	star1Copy4ThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 11,
	},
	star1Copy2ThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 11,
	},
	tripsThreeText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		alignSelf: "flex-start",
	},
	group6View: {
		backgroundColor: "transparent",
		height: 60,
	},
	rectangleView: {
		backgroundColor: "rgb(254, 254, 254)",
		shadowColor: "rgba(0, 0, 0, 0.07)",
		shadowRadius: 28,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		right: 0,
		top: 9,
		height: 51,
	},
	rectangleImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 188,
		height: 60,
	},
	bookingRateText: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.05,
	},
	group8FourView: {
		backgroundColor: "transparent",
		width: 115,
		height: 24,
		marginTop: 2,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	aed152FourText: {
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		alignSelf: "center",
	},
	perDayFourText: {
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		marginRight: 3,
	},
	bookNowText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.09,
		marginLeft: 237,
		marginRight: 49,
	},
})
