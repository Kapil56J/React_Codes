import React, { useRef, useState, useEffect } from "react";
import {  ScrollView, Image, Dimensions, StyleSheet } from "react-native";

const images = [
    "https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/295/653/112/digital-art-asian-architecture-fantasy-art-town-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/249/614/474/anime-asian-architecture-digital-art-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/685/769/272/artwork-painting-digital-art-asian-architecture-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/900/381/100/digital-art-pixel-art-pixelated-pixels-wallpaper-preview.jpg",
];

const { width } = Dimensions.get("window");

const AutometicCarouselScreen = () => {
    const scrollViewRef = useRef<ScrollView | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % images.length;
            setCurrentIndex(nextIndex);
            scrollViewRef.current?.scrollTo({ x: nextIndex * width, animated: true });
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);
    return (
        <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
        >
            {images.map((img, index) => (
                <Image key={index} source={{ uri: img }} style={styles.image} />
            ))}
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    image: {
        borderRadius:15,
        width,
        height: 150,
        resizeMode: "cover",
    },
});

export default AutometicCarouselScreen;
