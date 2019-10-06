//
//  Homescreen
//  Project
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import React from "react"
import LinearGradient from "react-native-linear-gradient"
import { StyleSheet, Image, View, Text } from "react-native"


export default class Homescreen extends React.Component {

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
				style={styles.homescreenView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: -85,
						top: 0,
						bottom: -584,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							height: 143,
							marginRight: 85,
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
								style={styles.snazzyImageView}/>
						</LinearGradient>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 16,
								right: 16,
								top: 46,
								height: 81,
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/menu.png")}
								style={styles.menuImage}/>
							<View
								style={styles.searchView}>
								<Image
									source={require("./../../assets/images/icon-4.png")}
									style={styles.iconImage}/>
								<Text
									style={styles.searchACarOrCityText}>Search a car or city</Text>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 274,
							marginLeft: 15,
							marginTop: 19,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								height: 274,
							}}>
							<Text
								style={styles.featuredText}>FEATURED</Text>
							<View
								style={styles.group9View}>
								<View
									pointerEvents="box-none"
									style={{
										flex: 1,
										marginBottom: 1,
										flexDirection: "row",
									}}>
									<View
										pointerEvents="box-none"
										style={{
											flex: 1,
											marginRight: 14,
										}}>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 0,
												width: 199,
												top: 61,
												bottom: 0,
												alignItems: "flex-start",
											}}>
											<View
												style={styles.maskCopyView}/>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.fordMustang2016Text}>Ford Mustang 2016</Text>
										</View>
										<Image
											source={require("./../../assets/images/mask-copy-3.png")}
											style={styles.maskCopy3Image}/>
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
																	source={require("./../../assets/images/star-1.png")}
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
									</View>
									<View
										pointerEvents="box-none"
										style={{
											flex: 1,
											marginLeft: 14,
										}}>
										<Text
											style={styles.ferrariF12SuperText}>Ferrari F12 Super</Text>
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
																	source={require("./../../assets/images/star-1.png")}
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
												style={styles.tripsTwoText}>86 trips</Text>
										</View>
										<View
											style={styles.maskCopy2View}/>
										<Image
											source={require("./../../assets/images/mask-12.png")}
											style={styles.maskImage}/>
									</View>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										height: 23,
										marginRight: 101,
										flexDirection: "row",
										alignItems: "flex-end",
									}}>
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
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.group8CopyView}>
										<Text
											style={styles.aed85Text}>AED 85</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.perDayTwoText}>per day</Text>
									</View>
								</View>
							</View>
						</View>
						<View
							style={styles.group11View}>
							<Text
								style={styles.showAllTwoText}>Show All</Text>
							<Image
								source={require("./../../assets/images/icon-9.png")}
								style={styles.iconThreeImage}/>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.group10View}>
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
											style={styles.maskTwoViewLinearGradient}>
											<View
												style={styles.maskTwoView}/>
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
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								height: 129,
							}}>
							<View
								pointerEvents="box-none"
								style={{
									height: 22,
									marginRight: 86,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.topEmiratesText}>TOP EMIRATES</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.group11CopyTwoView}>
									<Text
										style={styles.showAllThreeText}>Show All</Text>
									<Image
										source={require("./../../assets/images/icon-9.png")}
										style={styles.iconFourImage}/>
								</View>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									height: 88,
									marginTop: 19,
									flexDirection: "row",
									alignItems: "flex-start",
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
													style={styles.maskViewLinearGradient}>
													<View
														style={styles.maskView}/>
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
													style={styles.maskFourImage}/>
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
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 22,
							marginLeft: 15,
							marginRight: 101,
							marginBottom: 19,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<Text
							style={styles.trendingText}>TRENDING</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.group11CopyView}>
							<Text
								style={styles.showAllText}>Show All</Text>
							<Image
								source={require("./../../assets/images/icon-9.png")}
								style={styles.iconTwoImage}/>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 222,
							marginLeft: 15,
							marginRight: 101,
							marginBottom: 15,
							flexDirection: "row",
							alignItems: "flex-end",
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
									style={styles.group8TwoView}>
									<Text
										style={styles.aed152TwoText}>AED 152</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.perDayThreeText}>per day</Text>
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
						<View
							style={{
								flex: 1,
							}}/>
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
									source={require("./../../assets/images/img-2.png")}
									style={styles.imgThreeImage}/>
								<Text
									style={styles.itemThreeText}>Chevrolet Volt v2{"\n"}Hydra 2018 </Text>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.group8FourView}>
									<Text
										style={styles.aed381Text}>AED 381</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.perDayFiveText}>per day</Text>
								</View>
							</View>
							<View
								style={styles.group7FiveView}>
								<View
									style={styles.starsFiveView}>
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
												style={styles.star1FiveImage}/>
											<Image
												source={require("./../../assets/images/star-1.png")}
												style={styles.star1CopyFiveImage}/>
											<View
												style={{
													flex: 1,
												}}/>
											<Image
												source={require("./../../assets/images/star-1-copy-3.png")}
												style={styles.star1Copy4FiveImage}/>
										</View>
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
										<View
											pointerEvents="box-none"
											style={{
												width: 24,
												height: 11,
												marginRight: 13,
												flexDirection: "row",
												alignItems: "center",
											}}>
											<Image
												source={require("./../../assets/images/star-1.png")}
												style={styles.star1Copy2FiveImage}/>
											<View
												style={{
													flex: 1,
												}}/>
											<Image
												source={require("./../../assets/images/star-1-copy-3.png")}
												style={styles.star1Copy3FiveImage}/>
										</View>
									</View>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.tripsFiveText}>22trips</Text>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 222,
							marginLeft: 15,
							marginRight: 101,
							marginBottom: 21,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
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
									source={require("./../../assets/images/img-4.png")}
									style={styles.imgTwoImage}/>
								<Text
									style={styles.itemTwoText}>Ford Mustang{"\n"}Roadster</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.group8ThreeView}>
									<Text
										style={styles.aed89Text}>AED 89</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.perDayFourText}>per day</Text>
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
														source={require("./../../assets/images/star-1.png")}
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
									style={styles.tripsFourText}>82 trips</Text>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.group12Copy3View}>
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
									style={styles.backgroundFourView}/>
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
									source={require("./../../assets/images/img.png")}
									style={styles.imgFourImage}/>
								<Text
									style={styles.itemFourText}>Chevrolet Volt v2{"\n"}Hydra 2018 </Text>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.group8FiveView}>
									<Text
										style={styles.aed122Text}>AED 122</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.perDaySixText}>per day</Text>
								</View>
							</View>
							<View
								style={styles.group7SixView}>
								<View
									style={styles.starsSixView}>
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
												style={styles.star1SixImage}/>
											<Image
												source={require("./../../assets/images/star-1.png")}
												style={styles.star1CopySixImage}/>
											<View
												style={{
													flex: 1,
												}}/>
											<Image
												source={require("./../../assets/images/star-1-copy-3.png")}
												style={styles.star1Copy3SixImage}/>
											<Image
												source={require("./../../assets/images/star-1-copy-3.png")}
												style={styles.star1Copy4SixImage}/>
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
											source={require("./../../assets/images/star-1-copy-3.png")}
											style={styles.star1Copy2SixImage}/>
									</View>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.tripsSixText}>116 trips</Text>
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
				<Text
					style={styles.zartnerRentalText}>Zartner Rental</Text>
			</View>
	}
}

const styles = StyleSheet.create({
	homescreenView: {
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
	menuImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 18,
		height: 12,
		marginLeft: 3,
	},
	searchView: {
		backgroundColor: "white",
		borderRadius: 5,
		alignSelf: "stretch",
		height: 44,
		marginTop: 25,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	iconImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		flex: 1,
		alignSelf: "center",
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
		marginLeft: 11,
		marginTop: 7,
	},
	featuredText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 85,
		top: 0,
	},
	group9View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 1,
		right: 0,
		top: 39,
		height: 235,
	},
	maskCopyView: {
		backgroundColor: "rgb(218, 34, 53)",
		opacity: 0.22,
		borderRadius: 5,
		width: 183,
		height: 119,
		marginLeft: 16,
	},
	fordMustang2016Text: {
		backgroundColor: "transparent",
		color: "rgb(51, 64, 71)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		letterSpacing: 0.19,
	},
	maskCopy3Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 215,
		top: 0,
		height: 162,
	},
	group7View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 99,
		bottom: 20,
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
	ferrariF12SuperText: {
		backgroundColor: "transparent",
		color: "rgb(51, 64, 71)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		letterSpacing: 0.19,
		position: "absolute",
		right: 73,
		bottom: 0,
	},
	group7TwoView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 100,
		bottom: 20,
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
		backgroundColor: "transparent",
		resizeMode: "center",
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
		alignSelf: "flex-start",
		marginRight: 1,
	},
	maskCopy2View: {
		backgroundColor: "rgb(250, 201, 23)",
		opacity: 0.23,
		borderRadius: 5,
		position: "absolute",
		right: 16,
		width: 183,
		top: 61,
		height: 119,
	},
	maskImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		right: 0,
		width: 215,
		top: 0,
		height: 162,
	},
	group8View: {
		backgroundColor: "transparent",
		width: 119,
		height: 23,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	aed152Text: {
		backgroundColor: "transparent",
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
	},
	perDayText: {
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		marginRight: 5,
	},
	group8CopyView: {
		backgroundColor: "transparent",
		width: 114,
		height: 23,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	aed85Text: {
		backgroundColor: "transparent",
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
	},
	perDayTwoText: {
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		marginRight: 5,
	},
	group11View: {
		backgroundColor: "transparent",
		position: "absolute",
		right: 101,
		width: 73,
		top: 5,
		height: 19,
		flexDirection: "row",
		alignItems: "center",
	},
	showAllTwoText: {
		color: "rgb(0, 103, 165)",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		flex: 1,
		marginRight: 6,
	},
	iconThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		flex: 1,
		height: 8,
		marginLeft: 6,
	},
	group10View: {
		backgroundColor: "transparent",
		height: 129,
		marginLeft: 17,
		marginRight: 15,
		marginBottom: 42,
	},
	bitmapCopy2View: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 136,
		top: 41,
		height: 88,
	},
	bitmapThreeView: {
		backgroundColor: "transparent",
		height: 88,
	},
	maskThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 88,
	},
	maskTwoViewLinearGradient: {
		borderRadius: 10,
		height: 88,
	},
	maskTwoView: {
		width: "100%",
		height: "100%",
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
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 22,
		backgroundColor: "transparent",
	},
	carsTwoText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 22,
		position: "absolute",
		alignSelf: "center",
		top: 14,
	},
	topEmiratesText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	group11CopyTwoView: {
		backgroundColor: "transparent",
		width: 73,
		height: 19,
		marginTop: 3,
		flexDirection: "row",
		alignItems: "center",
	},
	showAllThreeText: {
		color: "rgb(0, 103, 165)",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		flex: 1,
		marginRight: 6,
	},
	iconFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		flex: 1,
		height: 8,
		marginLeft: 6,
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
	maskTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 88,
	},
	maskView: {
		width: "100%",
		height: "100%",
	},
	maskViewLinearGradient: {
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
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 22,
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
	maskFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
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
	textThreeView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 78,
		top: 28,
		height: 40,
	},
	sharjahText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 22,
		backgroundColor: "transparent",
	},
	carsThreeText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 22,
		position: "absolute",
		left: 18,
		right: 17,
		top: 14,
	},
	trendingText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginBottom: 1,
	},
	group11CopyView: {
		backgroundColor: "transparent",
		width: 73,
		height: 19,
		flexDirection: "row",
		alignItems: "center",
	},
	showAllText: {
		backgroundColor: "transparent",
		color: "rgb(0, 103, 165)",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		flex: 1,
		marginRight: 6,
	},
	iconTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		flex: 1,
		height: 8,
		marginLeft: 6,
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
	perDayThreeText: {
		backgroundColor: "transparent",
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
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
		alignItems: "flex-start",
	},
	starsThreeView: {
		backgroundColor: "transparent",
		alignSelf: "center",
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
		backgroundColor: "transparent",
		resizeMode: "center",
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
		color: "rgb(155, 155, 155)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
	},
	group12CopyView: {
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
		backgroundColor: "transparent",
		color: "rgb(51, 64, 71)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 18,
		letterSpacing: 0.16,
		marginLeft: 11,
		marginTop: 22,
	},
	group8FourView: {
		backgroundColor: "transparent",
		width: 105,
		height: 23,
		marginLeft: 12,
		flexDirection: "row",
		alignItems: "flex-end",
	},
	aed381Text: {
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
	perDayFiveText: {
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
	group7FiveView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 10,
		right: 45,
		top: 128,
		height: 22,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	starsFiveView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 64,
		height: 11,
	},
	star1FiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 11,
	},
	star1CopyFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 12,
		height: 11,
		marginLeft: 1,
	},
	star1Copy4FiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 12,
		height: 11,
	},
	star1Copy2FiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 11,
	},
	star1Copy3FiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 11,
	},
	tripsFiveText: {
		color: "rgb(155, 155, 155)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		marginRight: 1,
	},
	group12Copy2View: {
		backgroundColor: "transparent",
		width: 165,
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
		color: "rgb(51, 64, 71)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 18,
		letterSpacing: 0.16,
		backgroundColor: "transparent",
		marginLeft: 11,
		marginTop: 22,
	},
	group8ThreeView: {
		backgroundColor: "transparent",
		width: 99,
		height: 23,
		marginLeft: 12,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	aed89Text: {
		backgroundColor: "transparent",
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
	},
	perDayFourText: {
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
	group7FourView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 10,
		right: 41,
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
		backgroundColor: "transparent",
		resizeMode: "center",
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
		backgroundColor: "transparent",
		resizeMode: "center",
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
		alignSelf: "flex-start",
		marginRight: 1,
	},
	group12Copy3View: {
		backgroundColor: "transparent",
		width: 165,
		height: 222,
	},
	backgroundFourView: {
		backgroundColor: "white",
		borderRadius: 6,
		shadowColor: "rgba(120, 120, 147, 0.09)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 218,
	},
	imgFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "stretch",
		width: null,
		height: 124,
	},
	itemFourText: {
		backgroundColor: "transparent",
		color: "rgb(51, 64, 71)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 18,
		letterSpacing: 0.16,
		marginLeft: 11,
		marginTop: 22,
	},
	group8FiveView: {
		backgroundColor: "transparent",
		width: 104,
		height: 23,
		marginLeft: 12,
		flexDirection: "row",
		alignItems: "flex-end",
	},
	aed122Text: {
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		backgroundColor: "transparent",
		width: 52,
	},
	perDaySixText: {
		backgroundColor: "transparent",
		color: "rgb(216, 35, 42)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		alignSelf: "flex-start",
		marginRight: 4,
	},
	group7SixView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 10,
		right: 39,
		top: 128,
		height: 22,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	starsSixView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 64,
		height: 11,
	},
	star1SixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 11,
	},
	star1CopySixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 12,
		height: 11,
		marginLeft: 1,
	},
	star1Copy3SixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 12,
		height: 11,
		marginRight: 1,
	},
	star1Copy4SixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 11,
	},
	star1Copy2SixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 12,
		height: 11,
	},
	tripsSixText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
	},
	group13View: {
		backgroundColor: "transparent",
		height: 85,
		marginRight: 85,
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
		backgroundColor: "transparent",
		resizeMode: "center",
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
		color: "rgb(0, 103, 165)",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
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
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 24,
		marginLeft: 7,
		marginRight: 7,
	},
	profileText: {
		backgroundColor: "transparent",
		color: "rgb(160, 160, 160)",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
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
	zartnerRentalText: {
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
