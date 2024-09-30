import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { Circle, Path, Svg } from "react-native-svg";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
// import { BlurView } from "@react-native-community/blur";
import * as Haptics from "expo-haptics";
const PortfolioCard = () => {
  let { height, width } = useWindowDimensions();
  return (
    <View
      style={{
        height: Platform.OS == "android" ? height * 0.4 : height * 0.35,
        backgroundColor: "#270685",
        padding: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 5,
        }}
      >
        <View style={{ flexDirection: "row", gap: 5 }}>
          <TouchableOpacity>
            <Image
              source={{
                uri: `https://xsgames.co/randomusers/avatar.php?g=male`,
              }}
              style={{
                height: 40,
                width: 40,
                borderRadius: 1000,
                backgroundColor: "grey",
                resizeMode: "cover",
                //   borderWidth: user?.profilePic ? 0 : 2,
              }}
            />
          </TouchableOpacity>
          <View style={{ columnGap: 0 }}>
            <Text style={{ color: "white", fontSize: 16, fontFamily: "Garet" }}>
              Hello,
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontFamily: "Garet",
                marginTop: -8,
              }}
            >
              Christopher!
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
        >
          <Svg width={25} height={25} viewBox="0 0 24 24" fill="none">
            <Circle cx="12" cy="12" r="3" stroke="#fff" stroke-width="1.5" />
            <Path
              d="M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z"
              stroke="#fff"
              stroke-width="1.5"
            />
          </Svg>
        </TouchableOpacity>
      </View>
      <View
        // intensity={30}
        style={[
          {
            height: 180,
            width: "92.5%",
            alignSelf: "center",
            marginTop: 25,
          },
          {
            borderRadius: 15,
            // backgroundColor: "rgba(255, 255, 255, 0.2)", // Translucent background
            borderWidth: 1,
            borderColor: "rgba(255, 255, 255, 0.3)",
            alignItems: "center",
            // justifyContent: "center",
            padding: 15,
            backgroundColor: "#46279e",
          },
        ]}
      >
        <Text style={{ color: "#fff", fontSize: 13, fontFamily: "Garet" }}>
          Main Balance
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 35,
            fontFamily: "Rubik",
            marginBottom: 5,
          }}
        >
          $250,000
        </Text>
        <View style={{ flexDirection: "row", gap: 15 }}>
          <TouchableOpacity
            onPress={() =>
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
            }
            style={{
              flexDirection: "column",
              alignContent: "center",
              // backgroundColor: "green",
              // padding: 15,
              justifyContent: "center",
              width: 75,
              gap: 10,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
              }
              style={{ alignSelf: "center" }}
            >
              <Svg
                width={28}
                height={28}
                viewBox="0 0 24 24"
                fill="none"
                // xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  opacity="0.5"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 14.25C3.41421 14.25 3.75 14.5858 3.75 15C3.75 16.4354 3.75159 17.4365 3.85315 18.1919C3.9518 18.9257 4.13225 19.3142 4.40901 19.591C4.68577 19.8678 5.07435 20.0482 5.80812 20.1469C6.56347 20.2484 7.56459 20.25 9 20.25H15C16.4354 20.25 17.4365 20.2484 18.1919 20.1469C18.9257 20.0482 19.3142 19.8678 19.591 19.591C19.8678 19.3142 20.0482 18.9257 20.1469 18.1919C20.2484 17.4365 20.25 16.4354 20.25 15C20.25 14.5858 20.5858 14.25 21 14.25C21.4142 14.25 21.75 14.5858 21.75 15V15.0549C21.75 16.4225 21.75 17.5248 21.6335 18.3918C21.5125 19.2919 21.2536 20.0497 20.6517 20.6516C20.0497 21.2536 19.2919 21.5125 18.3918 21.6335C17.5248 21.75 16.4225 21.75 15.0549 21.75H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549C2.25 15.0366 2.25 15.0183 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25Z"
                  fill="#fff"
                />
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2.25C12.2106 2.25 12.4114 2.33852 12.5535 2.49392L16.5535 6.86892C16.833 7.17462 16.8118 7.64902 16.5061 7.92852C16.2004 8.20802 15.726 8.18678 15.4465 7.88108L12.75 4.9318V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V4.9318L8.55353 7.88108C8.27403 8.18678 7.79963 8.20802 7.49393 7.92852C7.18823 7.64902 7.16698 7.17462 7.44648 6.86892L11.4465 2.49392C11.5886 2.33852 11.7894 2.25 12 2.25Z"
                  fill="#fff"
                />
              </Svg>
            </TouchableOpacity>
            <Text
              style={{
                textAlign: "center",
                alignSelf: "center",
                color: "white",
                fontFamily: "Garet",
              }}
            >
              Top Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
            }
            style={{
              flexDirection: "column",
              alignContent: "center",
              // backgroundColor: "green",
              // padding: 15,
              justifyContent: "center",
              width: 75,
              gap: 10,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
              }
              style={{ alignSelf: "center" }}
            >
              <Svg
                width={28}
                height={28}
                viewBox="0 0 24 24"
                fill="none"
                // xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  opacity="0.5"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 14.25C3.41421 14.25 3.75 14.5858 3.75 15C3.75 16.4354 3.75159 17.4365 3.85315 18.1919C3.9518 18.9257 4.13225 19.3142 4.40901 19.591C4.68577 19.8678 5.07435 20.0482 5.80812 20.1469C6.56347 20.2484 7.56459 20.25 9 20.25H15C16.4354 20.25 17.4365 20.2484 18.1919 20.1469C18.9257 20.0482 19.3142 19.8678 19.591 19.591C19.8678 19.3142 20.0482 18.9257 20.1469 18.1919C20.2484 17.4365 20.25 16.4354 20.25 15C20.25 14.5858 20.5858 14.25 21 14.25C21.4142 14.25 21.75 14.5858 21.75 15V15.0549C21.75 16.4225 21.75 17.5248 21.6335 18.3918C21.5125 19.2919 21.2536 20.0497 20.6517 20.6516C20.0497 21.2536 19.2919 21.5125 18.3918 21.6335C17.5248 21.75 16.4225 21.75 15.0549 21.75H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549C2.25 15.0366 2.25 15.0183 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25Z"
                  fill="#fff"
                />
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 16.75C12.2106 16.75 12.4114 16.6615 12.5535 16.5061L16.5535 12.1311C16.833 11.8254 16.8118 11.351 16.5061 11.0715C16.2004 10.792 15.726 10.8132 15.4465 11.1189L12.75 14.0682V3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3V14.0682L8.55353 11.1189C8.27403 10.8132 7.79963 10.792 7.49393 11.0715C7.18823 11.351 7.16698 11.8254 7.44648 12.1311L11.4465 16.5061C11.5886 16.6615 11.7894 16.75 12 16.75Z"
                  fill="#fff"
                />
              </Svg>
            </TouchableOpacity>
            <Text
              style={{
                textAlign: "center",
                alignSelf: "center",
                color: "white",
                fontFamily: "Garet",
                fontSize: 14,
              }}
            >
              Withdraw
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
            }
            style={{
              flexDirection: "column",
              alignContent: "center",
              // backgroundColor: "green",
              // padding: 15,
              justifyContent: "center",
              width: 75,
              gap: 10,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
              }
              style={{ alignSelf: "center" }}
            >
              <Svg
                width={28}
                height={28}
                viewBox="0 0 24 24"
                fill="none"
                // xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  opacity="0.4"
                  d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  opacity="0.4"
                  d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M13.6992 4.4502L17.6792 6.75018L21.6192 4.46021"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M17.6797 10.8203V6.74023"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M16.7396 2.21L14.3396 3.53996C13.7996 3.83996 13.3496 4.59995 13.3496 5.21995V7.75999C13.3496 8.37999 13.7896 9.13998 14.3396 9.43998L16.7396 10.77C17.2496 11.06 18.0896 11.06 18.6096 10.77L21.0096 9.43998C21.5496 9.13998 21.9996 8.37999 21.9996 7.75999V5.21995C21.9996 4.59995 21.5596 3.83996 21.0096 3.53996L18.6096 2.21C18.0996 1.93 17.2596 1.93 16.7396 2.21Z"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M2.34961 15.4502L6.31961 17.7502L10.2696 15.4602"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M6.32031 21.8203V17.7402"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M5.39 13.21L2.99001 14.54C2.45001 14.84 2 15.5999 2 16.2199V18.76C2 19.38 2.44001 20.14 2.99001 20.44L5.39 21.77C5.9 22.06 6.73999 22.06 7.25999 21.77L9.66 20.44C10.2 20.14 10.65 19.38 10.65 18.76V16.2199C10.65 15.5999 10.21 14.84 9.66 14.54L7.25999 13.21C6.73999 12.93 5.9 12.93 5.39 13.21Z"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Svg>
            </TouchableOpacity>
            <Text
              style={{
                textAlign: "center",
                alignSelf: "center",
                color: "white",
                fontFamily: "Garet",
                fontSize: 14,
              }}
            >
              Transfer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PortfolioCard;

const styles = StyleSheet.create({});
