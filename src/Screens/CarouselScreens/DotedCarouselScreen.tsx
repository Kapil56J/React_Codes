import React, { useRef, useState } from "react";
import {
    View,
    ScrollView,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Text,
} from "react-native";

const images = [
    "https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/295/653/112/digital-art-asian-architecture-fantasy-art-town-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/249/614/474/anime-asian-architecture-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/685/769/272/artwork-painting-digital-art-asian-architecture-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/900/381/100/digital-art-pixel-art-pixelated-pixels-wallpaper-preview.jpg",
];

const { width } = Dimensions.get("window");

const DotedCarouselScreen = () => {
    const scrollViewRef = useRef<ScrollView | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = (event: any) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffsetX / width);
        setCurrentIndex(index);
    };

    return (
        <View style={styles.container}>
            {/* Scrollable Image Slider */}
            <Text>Dotted Slider</Text>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                {images.map((img, index) => (
                    <Image key={index} source={{ uri: img }} style={styles.image} />
                ))}
            </ScrollView>

            {/* Dots Indicator */}
            <View style={styles.dotsContainer}>
                {images.map((_, index) => (
                    <TouchableOpacity key={index} style={[styles.dot, currentIndex === index && styles.activeDot]} />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width,
        height: 'auto',
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        padding:2,
        borderRadius: 15,
        width,
        height: 150,
        resizeMode: "cover",
    },
    dotsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#bbb",
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: "blue",
        width: 10,
        height: 10,
    },
});

export default DotedCarouselScreen;

