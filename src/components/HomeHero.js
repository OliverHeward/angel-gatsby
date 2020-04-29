import React from "react";

const HomeHero = (slide_content) => {
    // Destruct from object
    const {slide_video, lower_subtitle, svg_headline_video} = slide_content;

    return (
        <div className="hero-container">
            <video className="hero-video video-container-overlay" autoPlay={true} loop={true} muted={true}>
                <source type="video/mp4" src={slide_video.source_url} />
            </video>
            <div className="text-container">
                <img src={svg_headline_video.source_url} alt="Hello!" className="hero-svg" />
                <h1 className="small-text-lower">{lower_subtitle}</h1>
            </div>
        </div>
    )
}

export default HomeHero;