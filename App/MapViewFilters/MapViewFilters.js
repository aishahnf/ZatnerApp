//
//  MapViewFilters
//  Project
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { Image, View, Text, StyleSheet } from "react-native"
import React from "react"


export default class MapViewFilters extends React.Component {

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
				style={styles.mapViewFiltersView}>
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
					<Image
						source={require("./../../assets/images/rectangle-4.png")}
						style={styles.rectangle4Image}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 20,
						right: -238,
						top: 46,
						bottom: 18,
					}}>
					<Image
						source={require("./../../assets/images/icon-8.png")}
						style={styles.iconImage}/>
					<View
						style={styles.pinStreetCopy8View}>
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
								source={require("./../../assets/images/container-2.png")}
								style={styles.containerNineImage}/>
						</View>
						<Text
							style={styles.aed63Text}>AED 63</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 99,
							marginLeft: 54,
							marginRight: 223,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							style={styles.pinStreetCopy3View}>
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
									source={require("./../../assets/images/container-2.png")}
									style={styles.containerFourImage}/>
							</View>
							<Text
								style={styles.aed95Text}>AED 95</Text>
						</View>
						<View
							style={styles.pinStreetCopy9View}>
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
									source={require("./../../assets/images/container-2.png")}
									style={styles.containerTenImage}/>
							</View>
							<Text
								style={styles.aed55Text}>AED 55</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.pinStreetCopy6View}>
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
									source={require("./../../assets/images/container-2.png")}
									style={styles.containerSevenImage}/>
							</View>
							<Text
								style={styles.aed48Text}>AED 48</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								width: 89,
								height: 99,
								alignItems: "flex-end",
							}}>
							<View
								style={styles.pinStreetCopy7View}>
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
										source={require("./../../assets/images/container-2.png")}
										style={styles.containerEightImage}/>
								</View>
								<Text
									style={styles.aed24Text}>AED 24</Text>
							</View>
							<View
								style={styles.pinStreetCopy5View}>
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
										source={require("./../../assets/images/container-2.png")}
										style={styles.containerSixImage}/>
								</View>
								<Text
									style={styles.aed71Text}>AED 71</Text>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 59,
							marginLeft: 33,
							marginRight: 332,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							style={styles.pinStreetCopy2View}>
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
									source={require("./../../assets/images/container-2.png")}
									style={styles.containerThreeImage}/>
							</View>
							<Text
								style={styles.aed50Text}>AED 50</Text>
						</View>
						<Image
							source={require("./../../assets/images/user-pulse.png")}
							style={styles.userPulseImage}/>
						<View
							style={styles.pinStreetCopy4View}>
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
									source={require("./../../assets/images/container.png")}
									style={styles.containerFiveImage}/>
							</View>
							<Text
								style={styles.aed52Text}>AED 52</Text>
						</View>
					</View>
					<View
						style={styles.pinStreetCopyView}>
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
								source={require("./../../assets/images/container-2.png")}
								style={styles.containerTwoImage}/>
						</View>
						<Text
							style={styles.aed68TwoText}>AED 68</Text>
					</View>
					<View
						style={styles.pinStreetView}>
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
								source={require("./../../assets/images/container-2.png")}
								style={styles.containerImage}/>
						</View>
						<Text
							style={styles.aed49Text}>AED 49</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "flex-end",
							width: 131,
							height: 32,
							marginRight: 258,
							marginBottom: 13,
							flexDirection: "row",
							justifyContent: "flex-end",
							alignItems: "flex-end",
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
									alignItems: "flex-start",
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
						pointerEvents="box-none"
						style={{
							height: 111,
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
									source={require("./../../assets/images/rectangle-6.png")}
									style={styles.rectangleImage}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 31,
									right: 46,
									top: 25,
									height: 80,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Image
									source={require("./../../assets/images/shadow.png")}
									style={styles.shadowImage}/>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.fordMustang2009Text}>Ford Mustang{"\n"}200</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<Image
									source={require("./../../assets/images/image-2.png")}
									style={styles.imageImage}/>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.group2CopyView}>
							<View
								pointerEvents="box-none"
								style={{
									width: 117,
									height: 99,
									marginLeft: 13,
									marginTop: 12,
								}}>
								<Image
									source={require("./../../assets/images/image-copy-2.png")}
									style={styles.imageCopyImage}/>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										top: 0,
										bottom: 0,
										justifyContent: "center",
									}}>
									<Image
										source={require("./../../assets/images/image-3.png")}
										style={styles.imageTwoImage}/>
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
									width: 142,
									marginRight: 7,
									marginTop: 12,
									marginBottom: 10,
									alignItems: "flex-end",
								}}>
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
												source={require("./../../assets/images/star-1-copy-4-3.png")}
												style={styles.star1Copy4Image}/>
										</View>
									</View>
								</View>
								<Text
									style={styles.mercedesBenzSlkClText}>Mercedes-Benz Slk-Class 2016</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.groupView}>
									<Text
										style={styles.aed68Text}>AED 68</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.dayText}>/da</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 161,
						right: 98,
						bottom: 29,
						height: 94,
						justifyContent: "flex-end",
					}}>
					<View
						style={styles.group7View}>
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
							style={styles.tripsText}>116 trips</Text>
					</View>
					<View
						style={styles.group8View}>
						<Text
							style={styles.aed152Text}>AED 15</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.perDayText}>per day</Text>
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
						style={styles.rectangle5View}/>
				</View>
				<View
					style={styles.group4View}>
					<View
						style={styles.rectangle3View}/>
					<View
						style={styles.searchView}>
						<Image
							source={require("./../../assets/images/icon-4.png")}
							style={styles.iconFourImage}/>
						<Text
							style={styles.alMuraqqabatDubaiText}>Al Muraqqabat, Dubai</Text>
					</View>
					<View
						style={styles.group5View}>
						<View
							pointerEvents="box-none"
							style={{
								height: 45,
								marginLeft: 20,
								marginRight: 17,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									width: 79,
									height: 45,
								}}>
								<Text
									style={styles.sortText}>SORT</Text>
								<Text
									style={styles.relevanceText}>Relevance</Text>
							</View>
							<Image
								source={require("./../../assets/images/icon-5.png")}
								style={styles.iconThreeImage}/>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.rectangle7View}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 101,
							marginTop: 15,
						}}>
						<View
							style={styles.group5CopyView}>
							<Text
								style={styles.priceText}>PRICE</Text>
							<Text
								style={styles.aed20Aed200DText}>AED 20  -  AED 200 / day</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.rectangle7TwoView}/>
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
								<View
									pointerEvents="box-none"
									style={{
										height: 18,
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Image
										source={require("./../../assets/images/combined-shape-2.png")}
										style={styles.combinedShapeImage}/>
									<View
										style={styles.rectangle9View}/>
								</View>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<View
									style={styles.rectangle9TwoView}/>
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
									source={require("./../../assets/images/combined-shape-2.png")}
									style={styles.combinedShapeCopy2Image}/>
							</View>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.searchCopy2View}>
						<Text
							style={styles.applyFiltersText}>APPLY FILTERS</Text>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	mapViewFiltersView: {
		backgroundColor: "rgb(216, 216, 216)",
		flex: 1,
	},
	screenshotWwwGoogleCom20190502134116Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 667,
	},
	rectangle4Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 667,
	},
	iconImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 16,
		marginLeft: 2,
		marginRight: 575,
	},
	pinStreetCopy8View: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 69,
		height: 34,
		marginLeft: 105,
		marginTop: 17,
	},
	containerNineImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(10, 36, 99, 0.24)",
		shadowRadius: 2,
		shadowOpacity: 1,
		width: null,
		height: 37,
	},
	aed63Text: {
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 11,
		right: 11,
		top: 4,
	},
	pinStreetCopy3View: {
		backgroundColor: "transparent",
		width: 69,
		height: 34,
		marginTop: 44,
	},
	containerFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(10, 36, 99, 0.24)",
		shadowRadius: 2,
		shadowOpacity: 1,
		width: null,
		height: 37,
	},
	aed95Text: {
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 11,
		right: 11,
		top: 4,
	},
	pinStreetCopy9View: {
		backgroundColor: "transparent",
		width: 69,
		height: 34,
		marginLeft: 4,
		marginTop: 13,
	},
	containerTenImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(10, 36, 99, 0.24)",
		shadowRadius: 2,
		shadowOpacity: 1,
		resizeMode: "center",
		width: null,
		height: 37,
	},
	aed55Text: {
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 11,
		right: 11,
		top: 4,
	},
	pinStreetCopy6View: {
		backgroundColor: "transparent",
		width: 69,
		height: 34,
		marginRight: 5,
		marginTop: 34,
	},
	containerSevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(10, 36, 99, 0.24)",
		shadowRadius: 2,
		shadowOpacity: 1,
		width: null,
		height: 37,
	},
	aed48Text: {
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 11,
		right: 11,
		top: 4,
	},
	pinStreetCopy7View: {
		backgroundColor: "transparent",
		width: 69,
		height: 34,
		marginRight: 20,
	},
	containerEightImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(10, 36, 99, 0.24)",
		shadowRadius: 2,
		shadowOpacity: 1,
		resizeMode: "center",
		width: null,
		height: 37,
	},
	aed24Text: {
		backgroundColor: "transparent",
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		left: 11,
		right: 11,
		top: 4,
	},
	pinStreetCopy5View: {
		backgroundColor: "transparent",
		width: 69,
		height: 34,
		marginTop: 31,
	},
	containerSixImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(10, 36, 99, 0.24)",
		shadowRadius: 2,
		shadowOpacity: 1,
		resizeMode: "center",
		width: null,
		height: 37,
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
		left: 12,
		right: 12,
		top: 4,
	},
	pinStreetCopy2View: {
		backgroundColor: "transparent",
		width: 69,
		height: 34,
		marginTop: 9,
	},
	containerThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(10, 36, 99, 0.24)",
		shadowRadius: 2,
		shadowOpacity: 1,
		width: null,
		height: 37,
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
		left: 11,
		right: 11,
		top: 4,
	},
	userPulseImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		flex: 1,
		height: 50,
		marginLeft: 38,
		marginRight: 2,
		marginTop: 9,
	},
	pinStreetCopy4View: {
		backgroundColor: "transparent",
		width: 69,
		height: 34,
	},
	containerFiveImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(10, 36, 99, 0.24)",
		shadowRadius: 2,
		shadowOpacity: 1,
		resizeMode: "center",
		width: null,
		height: 37,
	},
	aed52Text: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		left: 11,
		right: 11,
		top: 4,
	},
	pinStreetCopyView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 69,
		height: 34,
		marginLeft: 124,
		marginTop: 7,
	},
	containerTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(10, 36, 99, 0.24)",
		shadowRadius: 2,
		shadowOpacity: 1,
		width: null,
		height: 37,
	},
	aed68TwoText: {
		backgroundColor: "transparent",
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		left: 11,
		right: 11,
		top: 4,
	},
	pinStreetView: {
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 69,
		height: 34,
		marginRight: 337,
		marginTop: 24,
	},
	containerImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(10, 36, 99, 0.24)",
		shadowRadius: 2,
		shadowOpacity: 1,
		width: null,
		height: 37,
	},
	aed49Text: {
		color: "rgb(0, 103, 165)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 11,
		right: 11,
		top: 4,
	},
	group3CopyView: {
		backgroundColor: "transparent",
		width: 86,
		height: 32,
		marginRight: 13,
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
		borderRadius: 3,
		shadowColor: "rgba(0, 0, 0, 0.08)",
		shadowRadius: 8,
		shadowOpacity: 1,
		height: 32,
	},
	group3TwoView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 14,
		height: 17,
		flexDirection: "row",
		alignItems: "center",
	},
	group2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		flex: 1,
		height: 18,
		marginRight: 1,
	},
	group2TwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
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
		width: 42,
	},
	group3View: {
		backgroundColor: "white",
		borderRadius: 3,
		shadowColor: "rgba(0, 0, 0, 0.08)",
		shadowRadius: 8,
		shadowOpacity: 1,
		width: 32,
		height: 32,
		justifyContent: "center",
	},
	iconTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 16,
		marginLeft: 8,
		marginRight: 8,
	},
	group2View: {
		backgroundColor: "transparent",
		width: 290,
		height: 111,
	},
	rectangleImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 111,
	},
	shadowImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.72,
		width: 83,
		height: 62,
		marginTop: 18,
	},
	fordMustang2009Text: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 17,
		letterSpacing: 0.18,
		paddingTop: 2,
		backgroundColor: "transparent",
	},
	imageImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 117,
		height: 88,
		marginLeft: 13,
	},
	group2CopyView: {
		backgroundColor: "white",
		borderRadius: 5,
		shadowColor: "rgba(0, 0, 0, 0.06)",
		shadowRadius: 10,
		shadowOpacity: 1,
		width: 290,
		height: 111,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	imageCopyImage: {
		backgroundColor: "transparent",
		opacity: 0.72,
		resizeMode: "center",
		position: "absolute",
		left: 11,
		width: 95,
		top: 28,
		height: 71,
	},
	imageTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 117,
		height: 88,
	},
	starsView: {
		backgroundColor: "transparent",
		width: 58,
		height: 10,
		marginRight: 84,
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
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 11,
		height: 10,
		marginRight: 2,
	},
	star1Copy3Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
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
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 17,
		letterSpacing: 0.16,
		backgroundColor: "transparent",
		width: 142,
		marginTop: 1,
	},
	groupView: {
		backgroundColor: "transparent",
		width: 75,
		height: 18,
		marginRight: 67,
		flexDirection: "row",
		alignItems: "center",
	},
	aed68Text: {
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 17,
		backgroundColor: "transparent",
	},
	dayText: {
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
	group7View: {
		backgroundColor: "transparent",
		height: 22,
		marginBottom: 49,
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
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 12,
		height: 11,
	},
	star1CopyTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
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
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 12,
		height: 11,
	},
	star1Copy2TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 11,
	},
	tripsText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
	},
	group8View: {
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 109,
		height: 23,
		marginRight: 7,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	aed152Text: {
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
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
	rectangle5View: {
		backgroundColor: "rgba(8, 29, 41, 0.7)",
		height: 667,
	},
	group4View: {
		backgroundColor: "white",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 13,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		right: 0,
		top: 301,
		height: 366,
	},
	rectangle3View: {
		backgroundColor: "rgb(216, 216, 216)",
		borderRadius: 3,
		alignSelf: "center",
		width: 64,
		height: 6,
		marginTop: 11,
	},
	searchView: {
		backgroundColor: "white",
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "rgb(224, 224, 224)",
		borderStyle: "solid",
		height: 44,
		marginLeft: 16,
		marginRight: 16,
		marginTop: 22,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	iconFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		flex: 1,
		alignSelf: "center",
		height: 17,
		marginLeft: 17,
		marginRight: 11,
	},
	alMuraqqabatDubaiText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		marginLeft: 11,
		marginTop: 7,
	},
	group5View: {
		backgroundColor: "transparent",
		height: 60,
		marginTop: 19,
	},
	sortText: {
		color: "rgb(137, 137, 137)",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 33,
		top: 0,
	},
	relevanceText: {
		color: "rgb(51, 51, 51)",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		top: 25,
	},
	iconThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		flex: 1,
		height: 13,
		marginLeft: 238,
		marginTop: 32,
	},
	rectangle7View: {
		backgroundColor: "rgb(235, 235, 235)",
		height: 1,
	},
	group5CopyView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 101,
		alignItems: "flex-start",
	},
	priceText: {
		color: "rgb(137, 137, 137)",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 20,
	},
	aed20Aed200DText: {
		backgroundColor: "transparent",
		color: "rgb(51, 51, 51)",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 20,
		marginTop: 9,
	},
	rectangle7TwoView: {
		backgroundColor: "rgb(235, 235, 235)",
		alignSelf: "stretch",
		height: 1,
	},
	group6View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 20,
		right: 20,
		top: 65,
		height: 18,
	},
	combinedShapeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 14,
		height: 18,
	},
	rectangle9View: {
		backgroundColor: "rgb(222, 222, 222)",
		flex: 1,
		height: 2,
	},
	rectangle9TwoView: {
		backgroundColor: "rgb(216, 35, 42)",
		width: 251,
		height: 2,
		marginLeft: 14,
	},
	combinedShapeCopy2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 14,
		height: 18,
		marginRight: 65,
	},
	searchCopy2View: {
		backgroundColor: "rgb(0, 103, 165)",
		borderRadius: 25,
		height: 50,
		marginLeft: 16,
		marginRight: 16,
		marginBottom: 19,
		alignItems: "center",
	},
	applyFiltersText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 22,
		width: 102,
		marginTop: 10,
	},
})
