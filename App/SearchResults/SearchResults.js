//
//  SearchResults
//  Project
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { Image, View, Text, StyleSheet } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import React from "react"


export default class SearchResults extends React.Component {

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
				style={styles.searchResultsView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 9,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							height: 149,
						}}>
						<LinearGradient
							start={{
								x: 0.07,
								y: 0.49,
							}}
							end={{
								x: 1.06,
								y: 0.64,
							}}
							locations={[0, 1]}
							colors={["rgb(13, 143, 197)", "rgb(0, 103, 165)"]}
							style={styles.snazzyImageViewLinearGradient}>
							<View
								style={styles.snazzyImageView}/>
						</LinearGradient>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 16,
								right: 16,
								top: 46,
								height: 87,
							}}>
							<Image
								source={require("./../../assets/images/arrow-3.png")}
								style={styles.arrowTwoImage}/>
							<View
								style={styles.searchView}>
								<View
									pointerEvents="box-none"
									style={{
										width: 206,
										marginLeft: 14,
										marginTop: 2,
									}}>
									<Text
										style={styles.rasAlKhaimahText}>Ras Al Khaimah</Text>
									<Text
										style={styles.mar201000AmMText}>Mar 20, 10:00 AM - Mar 27, 10:00 AM</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("./../../assets/images/arrow-4.png")}
									style={styles.arrowImage}/>
							</View>
						</View>
					</View>
					<View
						style={styles.group12View}>
						<Image
							source={require("./../../assets/images/mask-copy-2.png")}
							style={styles.maskCopy2Image}/>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								marginLeft: 10,
								marginRight: 9,
								marginTop: 2,
								marginBottom: 8,
							}}>
							<View
								pointerEvents="box-none"
								style={{
									height: 76,
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
								<View
									style={styles.group8View}>
									<Text
										style={styles.aedText}>152 AED </Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.perDayText}>per day</Text>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "flex-end",
									width: 129,
									height: 18,
									marginRight: 46,
									flexDirection: "row",
									justifyContent: "flex-end",
									alignItems: "flex-end",
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
							</View>
						</View>
					</View>
					<View
						style={styles.group12CopyView}>
						<Image
							source={require("./../../assets/images/mask-copy-2-3.png")}
							style={styles.maskCopy2TwoImage}/>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								alignSelf: "stretch",
								marginLeft: 10,
								marginRight: 68,
								marginTop: 2,
								marginBottom: 8,
							}}>
							<View
								pointerEvents="box-none"
								style={{
									height: 76,
								}}>
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
								<Text
									style={styles.itemCopyTwoText}>Chevrolet Volt v2{"\n"}Hydra 2018 </Text>
								<View
									style={styles.group8TwoView}>
									<Text
										style={styles.aedTwoText}>381 AED</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.perDayTwoText}>per day</Text>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.bitmapCopyTwoView}>
								<Text
									style={styles.businessTwoText}>Business</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.group12Copy2View}>
						<Image
							source={require("./../../assets/images/mask-4.png")}
							style={styles.maskImage}/>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								alignSelf: "stretch",
								marginLeft: 10,
								marginRight: 9,
								marginTop: 2,
								marginBottom: 8,
								alignItems: "flex-end",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									height: 76,
								}}>
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
								<Text
									style={styles.itemCopyThreeText}>Mercedes-Benz Slk-Class 201</Text>
								<View
									style={styles.group8ThreeView}>
									<Text
										style={styles.aedThreeText}>152 AED</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.perDayThreeText}>per day</Text>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.bitmapCopyThreeView}>
								<Text
									style={styles.luxuryText}>Luxury</Text>
							</View>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						pointerEvents="box-none"
						style={{
							height: 112,
							marginLeft: 16,
							marginRight: 16,
						}}>
						<View
							style={styles.group12Copy3View}>
							<Image
								source={require("./../../assets/images/mask-copy-2.png")}
								style={styles.maskCopy2ThreeImage}/>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									alignSelf: "stretch",
									marginLeft: 10,
									marginRight: 9,
									marginTop: 2,
									marginBottom: 8,
								}}>
								<View
									pointerEvents="box-none"
									style={{
										height: 76,
									}}>
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
									<Text
										style={styles.itemCopyFourText}>Mercedes-Benz Slk-Class 201</Text>
									<View
										style={styles.group8FourView}>
										<Text
											style={styles.aed152Text}>AED 152</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.perDayFourText}>per day</Text>
									</View>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										alignSelf: "flex-end",
										width: 129,
										height: 18,
										marginRight: 46,
										flexDirection: "row",
										justifyContent: "flex-end",
										alignItems: "flex-end",
									}}>
									<View
										style={styles.bitmapCopyFourView}>
										<Text
											style={styles.businessThreeText}>Business</Text>
									</View>
									<View
										style={styles.bitmapCopy2TwoView}>
										<Text
											style={styles.instantTwoText}>Instant</Text>
									</View>
								</View>
							</View>
						</View>
						<View
							style={styles.group10View}>
							<View
								style={styles.group3CopyView}>
								<View
									style={styles.group3View}>
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
											source={require("./../../assets/images/group-2-2.png")}
											style={styles.group2Image}/>
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
										<Image
											source={require("./../../assets/images/group-2.png")}
											style={styles.group2TwoImage}/>
									</View>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.filtersText}>FILTERS</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.group3Copy2View}>
								<View
									style={styles.group9View}>
									<Image
										source={require("./../../assets/images/icon-6.png")}
										style={styles.iconImage}/>
									<Text
										style={styles.mapText}>MAP</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
				<Text
					style={styles.searchResultsText}>Search Results</Text>
			</View>
	}
}

const styles = StyleSheet.create({
	searchResultsView: {
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
		height: 149,
	},
	arrowTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "flex-start",
		width: 9,
		height: 17,
		marginLeft: 2,
	},
	searchView: {
		backgroundColor: "white",
		borderRadius: 10,
		height: 50,
		marginTop: 20,
		flexDirection: "row",
	},
	rasAlKhaimahText: {
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
	mar201000AmMText: {
		backgroundColor: "transparent",
		color: "rgb(173, 171, 171)",
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
	arrowImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "center",
		width: 13,
		height: 7,
		marginRight: 15,
	},
	group12View: {
		backgroundColor: "white",
		borderRadius: 10,
		shadowColor: "rgba(120, 120, 147, 0.09)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 112,
		marginLeft: 16,
		marginRight: 16,
		marginTop: 16,
		flexDirection: "row",
	},
	maskCopy2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 149,
		height: 112,
	},
	group7View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 59,
		top: 0,
		height: 22,
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
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 12,
		height: 11,
		marginLeft: 1,
	},
	star1Copy3Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
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
		backgroundColor: "transparent",
		resizeMode: "center",
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
		backgroundColor: "transparent",
		color: "rgb(51, 64, 71)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 16,
		letterSpacing: 0.15,
		paddingTop: 1,
		position: "absolute",
		right: 0,
		width: 175,
		top: 21,
	},
	group8View: {
		backgroundColor: "transparent",
		position: "absolute",
		right: 70,
		width: 105,
		top: 53,
		height: 23,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	aedText: {
		backgroundColor: "transparent",
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		width: 57,
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
	bitmapCopyView: {
		backgroundColor: "rgb(235, 235, 235)",
		borderRadius: 9,
		width: 62,
		height: 18,
		marginRight: 5,
		justifyContent: "center",
	},
	businessText: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginLeft: 11,
		marginRight: 11,
	},
	bitmapCopy2View: {
		backgroundColor: "rgb(235, 235, 235)",
		borderRadius: 9,
		width: 62,
		height: 18,
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
	group12CopyView: {
		backgroundColor: "white",
		borderRadius: 10,
		shadowColor: "rgba(120, 120, 147, 0.09)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 112,
		marginLeft: 16,
		marginRight: 16,
		marginTop: 15,
		flexDirection: "row",
		alignItems: "center",
	},
	maskCopy2TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 149,
		height: 112,
	},
	group7TwoView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 22,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	starsTwoView: {
		backgroundColor: "transparent",
		alignSelf: "center",
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
		backgroundColor: "transparent",
		resizeMode: "center",
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
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 12,
		height: 11,
	},
	tripsTwoText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
	},
	itemCopyTwoText: {
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
		right: 2,
		top: 21,
	},
	group8TwoView: {
		backgroundColor: "transparent",
		position: "absolute",
		right: 11,
		width: 105,
		top: 53,
		height: 23,
		flexDirection: "row",
		alignItems: "flex-end",
	},
	aedTwoText: {
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		width: 54,
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
	bitmapCopyTwoView: {
		backgroundColor: "rgb(235, 235, 235)",
		borderRadius: 9,
		alignSelf: "flex-end",
		width: 62,
		height: 18,
		marginRight: 54,
		justifyContent: "center",
	},
	businessTwoText: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginLeft: 11,
		marginRight: 11,
	},
	group12Copy2View: {
		backgroundColor: "white",
		borderRadius: 10,
		shadowColor: "rgba(120, 120, 147, 0.09)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 112,
		marginLeft: 16,
		marginRight: 16,
		marginTop: 15,
		flexDirection: "row",
		alignItems: "center",
	},
	maskImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 149,
		height: 112,
	},
	group7ThreeView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 59,
		top: 0,
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
		backgroundColor: "transparent",
		resizeMode: "center",
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
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 12,
		height: 11,
		marginRight: 11,
	},
	star1Copy4ThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 12,
		height: 11,
	},
	star1Copy2ThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 12,
		height: 11,
	},
	tripsThreeText: {
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
	itemCopyThreeText: {
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
	group8ThreeView: {
		backgroundColor: "transparent",
		position: "absolute",
		right: 70,
		width: 105,
		top: 53,
		height: 23,
		flexDirection: "row",
		alignItems: "flex-end",
	},
	aedThreeText: {
		backgroundColor: "transparent",
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
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
		alignSelf: "flex-start",
		marginRight: 3,
	},
	bitmapCopyThreeView: {
		backgroundColor: "rgb(235, 235, 235)",
		borderRadius: 9,
		width: 62,
		height: 18,
		marginRight: 113,
		justifyContent: "center",
	},
	luxuryText: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginLeft: 16,
		marginRight: 16,
	},
	group12Copy3View: {
		backgroundColor: "white",
		opacity: 0.5,
		borderRadius: 10,
		shadowColor: "rgba(120, 120, 147, 0.09)",
		shadowRadius: 20,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 112,
		flexDirection: "row",
		alignItems: "center",
	},
	maskCopy2ThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 149,
		height: 112,
	},
	group7FourView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 59,
		top: 0,
		height: 22,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	starsFourView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 64,
		height: 11,
	},
	star1FourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
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
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 12,
		height: 11,
		marginRight: 11,
	},
	star1Copy4FourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 11,
	},
	star1Copy2FourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 11,
	},
	tripsFourText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
	},
	itemCopyFourText: {
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
	group8FourView: {
		backgroundColor: "transparent",
		position: "absolute",
		right: 70,
		width: 105,
		top: 53,
		height: 23,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	aed152Text: {
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
	bitmapCopyFourView: {
		backgroundColor: "rgb(235, 235, 235)",
		borderRadius: 9,
		width: 62,
		height: 18,
		marginRight: 5,
		justifyContent: "center",
	},
	businessThreeText: {
		color: "rgb(74, 74, 74)",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 11,
		marginRight: 11,
	},
	bitmapCopy2TwoView: {
		backgroundColor: "rgb(235, 235, 235)",
		borderRadius: 9,
		width: 62,
		height: 18,
		justifyContent: "center",
	},
	instantTwoText: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginLeft: 15,
		marginRight: 15,
	},
	group10View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 82,
		right: 82,
		bottom: 11,
		height: 32,
		flexDirection: "row",
		alignItems: "center",
	},
	group3CopyView: {
		backgroundColor: "white",
		borderRadius: 3,
		shadowColor: "rgba(0, 0, 0, 0.24)",
		shadowRadius: 8,
		shadowOpacity: 1,
		width: 86,
		height: 32,
		flexDirection: "row",
		alignItems: "center",
	},
	group3View: {
		backgroundColor: "transparent",
		width: 14,
		height: 17,
		marginLeft: 13,
	},
	group2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 18,
		marginRight: 7,
	},
	group2TwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 18,
		marginLeft: 7,
	},
	filtersText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 41,
		marginRight: 13,
		marginTop: 7,
	},
	group3Copy2View: {
		backgroundColor: "white",
		borderRadius: 3,
		shadowColor: "rgba(0, 0, 0, 0.24)",
		shadowRadius: 8,
		shadowOpacity: 1,
		width: 86,
		height: 32,
		justifyContent: "center",
	},
	group9View: {
		backgroundColor: "transparent",
		height: 17,
		marginLeft: 19,
		marginRight: 19,
		flexDirection: "row",
		alignItems: "center",
	},
	iconImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		flex: 1,
		height: 15,
		marginRight: 5,
	},
	mapText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	searchResultsText: {
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
