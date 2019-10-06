//
//  MapViewTwo
//  Project
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { StyleSheet, Text, View, Image } from "react-native"
import React from "react"
import LinearGradient from "react-native-linear-gradient"


export default class MapViewTwo extends React.Component {

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
				style={styles.mapViewView}>
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
						source={require("./../../assets/images/screenshot-wwwgooglecom-20190502-13-41-16.png")}
						style={styles.screenshotWwwGoogleCom20190502134116Image}/>
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
							y: 1,
						}}
						locations={[0, 0.64, 1]}
						colors={["transparent", "transparent", "rgba(0, 0, 0, 0.09)"]}
						style={styles.rectangle4ViewLinearGradient}>
						<View
							style={styles.rectangle4View}/>
					</LinearGradient>
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
							y: 1,
						}}
						locations={[0, 0.78, 1]}
						colors={["rgba(255, 255, 255, 0.4)", "rgba(255, 255, 255, 0.4)", "rgba(225, 225, 225, 0.45)"]}
						style={styles.rectangle4TwoViewLinearGradient}>
						<View
							style={styles.rectangle4TwoView}/>
					</LinearGradient>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 18,
						right: -91,
						top: 26,
						bottom: 18,
						alignItems: "flex-end",
					}}>
					<Image
						source={require("./../../assets/images/icon.png")}
						style={styles.iconImage}/>
					<View
						style={styles.group4Copy4View}>
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
								source={require("./../../assets/images/combined-shape-4.png")}
								style={styles.combinedShapeFiveImage}/>
						</View>
						<Text
							style={styles.aed63Text}>AED 63</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							width: 190,
							height: 39,
							marginRight: 116,
							marginTop: 14,
							flexDirection: "row",
							justifyContent: "flex-end",
							alignItems: "flex-start",
						}}>
						<View
							style={styles.group4Copy5View}>
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
									source={require("./../../assets/images/combined-shape-4.png")}
									style={styles.combinedShapeSixImage}/>
							</View>
							<Text
								style={styles.aed55Text}>AED 55</Text>
						</View>
						<View
							style={styles.group4Copy3View}>
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
									source={require("./../../assets/images/combined-shape-4.png")}
									style={styles.combinedShapeFourImage}/>
							</View>
							<Text
								style={styles.aed24Text}>AED 24</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 104,
							marginLeft: 62,
							marginRight: 99,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 61,
								height: 90,
								marginTop: 14,
								alignItems: "flex-start",
							}}>
							<View
								style={styles.group4Copy6View}>
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
										source={require("./../../assets/images/combined-shape-4.png")}
										style={styles.combinedShapeSevenImage}/>
								</View>
								<Text
									style={styles.aed95Text}>AED 95</Text>
							</View>
							<View
								style={styles.group4Copy8View}>
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
										source={require("./../../assets/images/combined-shape-4.png")}
										style={styles.combinedShapeNineImage}/>
								</View>
								<Text
									style={styles.aed50Text}>AED 50</Text>
							</View>
						</View>
						<Image
							source={require("./../../assets/images/user-pulse.png")}
							style={styles.userPulseImage}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 88,
								height: 81,
								marginRight: 15,
								alignItems: "flex-end",
							}}>
							<View
								style={styles.group4Copy9View}>
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
										source={require("./../../assets/images/combined-shape-4.png")}
										style={styles.combinedShapeTenImage}/>
								</View>
								<Text
									style={styles.aed48Text}>AED 48</Text>
							</View>
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
										justifyContent: "center",
									}}>
									<Image
										source={require("./../../assets/images/combined-shape.png")}
										style={styles.combinedShapeImage}/>
								</View>
								<Text
									style={styles.aed52Text}>AED 52</Text>
							</View>
						</View>
						<View
							style={styles.group4Copy7View}>
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
									source={require("./../../assets/images/combined-shape-4.png")}
									style={styles.combinedShapeEightImage}/>
							</View>
							<Text
								style={styles.aed71Text}>AED 71</Text>
						</View>
					</View>
					<View
						style={styles.group4CopyView}>
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
								source={require("./../../assets/images/combined-shape-4.png")}
								style={styles.combinedShapeTwoImage}/>
						</View>
						<Text
							style={styles.aed68TwoText}>AED 68</Text>
					</View>
					<View
						style={styles.group4Copy2View}>
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
								source={require("./../../assets/images/combined-shape-4.png")}
								style={styles.combinedShapeThreeImage}/>
						</View>
						<Text
							style={styles.aed49TwoText}>AED 49</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							width: 126,
							height: 32,
							marginRight: 115,
							marginTop: 76,
							flexDirection: "row",
							justifyContent: "flex-end",
							alignItems: "flex-start",
						}}>
						<View
							style={styles.group3CopyView}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<View
									style={styles.ovalView}/>
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
									style={styles.rectangle2View}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 13,
									right: 13,
									top: 7,
									height: 30,
									flexDirection: "row",
									alignItems: "center",
								}}>
								<View
									style={styles.group3TwoView}>
									<Image
										source={require("./../../assets/images/group-2-4.png")}
										style={styles.group2Image}/>
									<Image
										source={require("./../../assets/images/group-2-3.png")}
										style={styles.group2TwoImage}/>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.filtersText}>FILTERS</Text>
							</View>
						</View>
						<View
							style={styles.group3View}>
							<Image
								source={require("./../../assets/images/icon-2.png")}
								style={styles.iconTwoImage}/>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 183,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<View
							style={styles.group2View}>
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
									source={require("./../../assets/images/rectangle-3.png")}
									style={styles.rectangleImage}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 7,
									right: 7,
									top: 7,
									bottom: 6,
									alignItems: "flex-start",
								}}>
								<Image
									source={require("./../../assets/images/mask-9.png")}
									style={styles.maskThreeImage}/>
								<View
									style={styles.starsThreeView}>
									<Image
										source={require("./../../assets/images/star-1-2.png")}
										style={styles.star1ThreeImage}/>
									<Image
										source={require("./../../assets/images/star-1-2.png")}
										style={styles.star1CopyThreeImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<Image
										source={require("./../../assets/images/star-1-2.png")}
										style={styles.star1Copy2ThreeImage}/>
									<View
										pointerEvents="box-none"
										style={{
											width: 18,
											height: 10,
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
												source={require("./../../assets/images/star-1-2.png")}
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
												source={require("./../../assets/images/star-1-2.png")}
												style={styles.star1Copy4ThreeImage}/>
										</View>
									</View>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.fordMustang2009Text}>Ford Mustang{"\n"}2009</Text>
								<View
									style={styles.groupThreeView}>
									<Text
										style={styles.aed52TwoText}>AED 5</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.dayThreeText}>/da</Text>
								</View>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.group2CopyView}>
							<Image
								source={require("./../../assets/images/mask-8.png")}
								style={styles.maskImage}/>
							<View
								style={styles.starsView}>
								<Image
									source={require("./../../assets/images/star-1-2.png")}
									style={styles.star1Image}/>
								<Image
									source={require("./../../assets/images/star-1-2.png")}
									style={styles.star1CopyImage}/>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("./../../assets/images/star-1-2.png")}
									style={styles.star1Copy2Image}/>
								<View
									pointerEvents="box-none"
									style={{
										width: 18,
										height: 10,
										marginRight: 1,
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
											source={require("./../../assets/images/star-1-2.png")}
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
											source={require("./../../assets/images/star-1-copy-4.png")}
											style={styles.star1Copy4Image}/>
									</View>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.mercedesBenzSlkClText}>Mercedes-Benz Slk-Class 2016</Text>
							<View
								style={styles.groupView}>
								<Text
									style={styles.aed68Text}>AED 6</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.dayText}>/da</Text>
							</View>
						</View>
						<View
							style={styles.group11View}>
							<Image
								source={require("./../../assets/images/mask.png")}
								style={styles.maskTwoImage}/>
							<View
								style={styles.starsTwoView}>
								<Image
									source={require("./../../assets/images/star-1-2.png")}
									style={styles.star1TwoImage}/>
								<Image
									source={require("./../../assets/images/star-1-2.png")}
									style={styles.star1CopyTwoImage}/>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("./../../assets/images/star-1-2.png")}
									style={styles.star1Copy2TwoImage}/>
								<View
									pointerEvents="box-none"
									style={{
										width: 18,
										height: 10,
										marginRight: 1,
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
											source={require("./../../assets/images/star-1-2.png")}
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
											source={require("./../../assets/images/star-1-copy-4.png")}
											style={styles.star1Copy4TwoImage}/>
									</View>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.volkswagenGolfGtiText}>Volkswagen Golf GTI 2017</Text>
							<View
								style={styles.groupTwoView}>
								<Text
									style={styles.aed49Text}>AED 49</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.dayTwoText}>/da</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	mapViewView: {
		backgroundColor: "rgb(216, 216, 216)",
		flex: 1,
	},
	screenshotWwwGoogleCom20190502134116Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 667,
	},
	rectangle4ViewLinearGradient: {
		height: 667,
	},
	rectangle4View: {
		width: "100%",
		height: "100%",
	},
	rectangle4TwoViewLinearGradient: {
		height: 667,
	},
	rectangle4TwoView: {
		width: "100%",
		height: "100%",
	},
	iconImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "stretch",
		width: null,
		height: 32,
		marginLeft: 2,
		marginRight: 414,
	},
	group4Copy4View: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 61,
		height: 30,
		marginLeft: 118,
		marginTop: 17,
	},
	combinedShapeFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 32,
	},
	aed63Text: {
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 7,
		right: 7,
		top: 3,
	},
	group4Copy5View: {
		backgroundColor: "transparent",
		width: 61,
		height: 30,
		marginRight: 68,
		marginTop: 9,
	},
	combinedShapeSixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 32,
	},
	aed55Text: {
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 7,
		right: 8,
		top: 3,
	},
	group4Copy3View: {
		backgroundColor: "transparent",
		width: 61,
		height: 30,
	},
	combinedShapeFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 32,
	},
	aed24Text: {
		backgroundColor: "transparent",
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 7,
		right: 8,
		top: 3,
	},
	group4Copy6View: {
		backgroundColor: "transparent",
		width: 61,
		height: 30,
	},
	combinedShapeSevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 32,
	},
	aed95Text: {
		backgroundColor: "transparent",
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 7,
		right: 7,
		top: 3,
	},
	group4Copy8View: {
		backgroundColor: "transparent",
		width: 60,
		height: 30,
		marginTop: 30,
	},
	combinedShapeNineImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 32,
	},
	aed50Text: {
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 6,
		right: 6,
		top: 3,
	},
	userPulseImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		flex: 1,
		height: 50,
		marginLeft: 13,
		marginTop: 35,
	},
	group4Copy9View: {
		backgroundColor: "transparent",
		width: 60,
		height: 30,
	},
	combinedShapeTenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 32,
	},
	aed48Text: {
		backgroundColor: "transparent",
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		left: 6,
		right: 6,
		top: 3,
	},
	group4View: {
		backgroundColor: "transparent",
		width: 61,
		height: 30,
		marginRight: 27,
		marginTop: 21,
	},
	combinedShapeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 30,
		marginRight: 1,
	},
	aed52Text: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 7,
		right: 8,
		top: 3,
	},
	group4Copy7View: {
		backgroundColor: "transparent",
		width: 60,
		height: 30,
		marginTop: 29,
	},
	combinedShapeEightImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 32,
	},
	aed71Text: {
		backgroundColor: "transparent",
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		left: 9,
		right: 9,
		top: 3,
	},
	group4CopyView: {
		backgroundColor: "transparent",
		width: 61,
		height: 30,
		marginRight: 244,
		marginTop: 12,
	},
	combinedShapeTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 32,
	},
	aed68TwoText: {
		backgroundColor: "transparent",
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 7,
		right: 7,
		top: 3,
	},
	group4Copy2View: {
		backgroundColor: "transparent",
		width: 61,
		height: 30,
		marginRight: 157,
		marginTop: 7,
	},
	combinedShapeThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 32,
	},
	aed49TwoText: {
		backgroundColor: "transparent",
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 7,
		right: 7,
		top: 3,
	},
	group3CopyView: {
		backgroundColor: "transparent",
		width: 86,
		height: 32,
		marginRight: 8,
	},
	ovalView: {
		backgroundColor: "white",
		borderRadius: 16,
		shadowColor: "rgba(0, 0, 0, 0.2)",
		shadowRadius: 5,
		shadowOpacity: 1,
		width: 32,
		height: 32,
	},
	rectangle2View: {
		backgroundColor: "white",
		borderRadius: 16,
		shadowColor: "rgba(0, 0, 0, 0.08)",
		shadowRadius: 8,
		shadowOpacity: 1,
		height: 32,
	},
	group3TwoView: {
		backgroundColor: "transparent",
		width: 14,
		height: 17,
		flexDirection: "row",
		alignItems: "center",
	},
	group2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		flex: 1,
		height: 18,
		marginRight: 1,
	},
	group2TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		flex: 1,
		height: 18,
		marginLeft: 1,
	},
	filtersText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-start",
		width: 42,
	},
	group3View: {
		backgroundColor: "white",
		borderRadius: 16,
		shadowColor: "rgba(0, 0, 0, 0.08)",
		shadowRadius: 8,
		shadowOpacity: 1,
		width: 32,
		height: 32,
		justifyContent: "center",
	},
	iconTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 16,
		marginLeft: 8,
		marginRight: 8,
	},
	group2View: {
		backgroundColor: "transparent",
		width: 144,
		height: 183,
	},
	rectangleImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 183,
	},
	maskThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "stretch",
		width: null,
		height: 97,
	},
	starsThreeView: {
		backgroundColor: "transparent",
		width: 57,
		height: 10,
		marginLeft: 2,
		marginTop: 5,
		flexDirection: "row",
		alignItems: "center",
	},
	star1ThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 11,
		height: 10,
	},
	star1CopyThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 11,
		height: 10,
		marginLeft: 2,
	},
	star1Copy2ThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 11,
		height: 10,
		marginRight: 2,
	},
	star1Copy3ThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 11,
		height: 10,
		marginRight: 7,
	},
	star1Copy4ThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 11,
		height: 10,
	},
	fordMustang2009Text: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 17,
		letterSpacing: 0.16,
		marginLeft: 2,
		marginBottom: 4,
	},
	groupThreeView: {
		backgroundColor: "transparent",
		width: 75,
		height: 18,
		marginLeft: 2,
		flexDirection: "row",
		alignItems: "center",
	},
	aed52TwoText: {
		backgroundColor: "transparent",
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 17,
	},
	dayThreeText: {
		backgroundColor: "transparent",
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 17,
		marginRight: 4,
	},
	group2CopyView: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.06)",
		shadowRadius: 10,
		shadowOpacity: 1,
		width: 144,
		height: 183,
		marginRight: 8,
	},
	maskImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 97,
		marginLeft: 7,
		marginRight: 7,
		marginTop: 7,
	},
	starsView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 58,
		height: 10,
		marginLeft: 9,
		marginTop: 5,
		flexDirection: "row",
		alignItems: "center",
	},
	star1Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 11,
		height: 10,
	},
	star1CopyImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 11,
		height: 10,
		marginLeft: 2,
	},
	star1Copy2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 11,
		height: 10,
		marginRight: 2,
	},
	star1Copy3Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 11,
		height: 10,
		marginRight: 7,
	},
	star1Copy4Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 11,
		height: 10,
	},
	mercedesBenzSlkClText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 17,
		letterSpacing: 0.16,
		marginLeft: 9,
		marginRight: 9,
		marginBottom: 4,
	},
	groupView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 75,
		height: 18,
		marginLeft: 9,
		marginBottom: 6,
		flexDirection: "row",
		alignItems: "center",
	},
	aed68Text: {
		backgroundColor: "transparent",
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 17,
	},
	dayText: {
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 17,
		backgroundColor: "transparent",
		marginRight: 4,
	},
	group11View: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.06)",
		shadowRadius: 10,
		shadowOpacity: 1,
		width: 144,
		height: 183,
		alignItems: "flex-start",
	},
	maskTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "stretch",
		width: null,
		height: 97,
		marginLeft: 7,
		marginRight: 7,
		marginTop: 7,
	},
	starsTwoView: {
		backgroundColor: "transparent",
		width: 58,
		height: 10,
		marginLeft: 9,
		marginTop: 5,
		flexDirection: "row",
		alignItems: "center",
	},
	star1TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 11,
		height: 10,
	},
	star1CopyTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 11,
		height: 10,
		marginLeft: 2,
	},
	star1Copy2TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 11,
		height: 10,
		marginRight: 2,
	},
	star1Copy3TwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 11,
		height: 10,
		marginRight: 7,
	},
	star1Copy4TwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 11,
		height: 10,
	},
	volkswagenGolfGtiText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 17,
		letterSpacing: 0.16,
		alignSelf: "stretch",
		marginLeft: 9,
		marginRight: 9,
		marginBottom: 4,
	},
	groupTwoView: {
		backgroundColor: "transparent",
		width: 75,
		height: 18,
		marginLeft: 9,
		marginBottom: 6,
		flexDirection: "row",
		alignItems: "center",
	},
	aed49Text: {
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 17,
		backgroundColor: "transparent",
	},
	dayTwoText: {
		backgroundColor: "transparent",
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 17,
		marginRight: 4,
	},
})
