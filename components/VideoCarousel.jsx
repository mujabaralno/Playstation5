'use client'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";

import { hightlightsSlides } from "../constants";

const replayImg = "/assets/replay.svg"
const pauseImg = "/assets/pause.svg"
const playImg = "/assets/play.svg"

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  // video and indicator
  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);
  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  useGSAP(() => {
    // slider animation to move the video out of the screen and bring the next video in
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut", 
    });

    // video animation to play the video when it is in the view
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      // animation to move the indicator
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          // get the progress of the video
          const progress = Math.ceil(anim.progress() * 100);

          if (progress != currentProgress) {
            currentProgress = progress;

            // set the width of the progress bar
            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw" // mobile
                  : window.innerWidth < 1200
                  ? "10vw" // tablet
                  : "4vw", // laptop
            });

            // set the background color of the progress bar
            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },

        // when the video is ended, replace the progress bar with the indicator and change the background color
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });

      if (videoId == 0) {
        anim.restart();
      }

      // update the progress bar
      const animUpdate = () => {
        const currentVideo = videoRef.current[videoId];
        if (currentVideo && currentVideo.currentTime) {
          anim.progress(
            currentVideo.currentTime /
              hightlightsSlides[videoId].videoDuration
          );
        }
      };

      if (isPlaying) {
        // ticker to update the progress bar
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay]);

  useEffect(() => {
    if (loadedData.length > 0) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  // vd id is the id for every video until id becomes number 3
  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        if (i < hightlightsSlides.length - 1) {
          setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
        } else {
          setVideo((pre) => ({ ...pre, isEnd: true, videoId: 0 }));
        }
        break;
  
        case "video-last":
            setVideo((pre) => ({ ...pre, isLastVideo: true }));
            setVideo((pre) => ({ ...pre, videoId: 0 }));
            break;
  
      case "video-reset":
        setVideo((pre) => ({ ...pre, videoId: 0, isLastVideo: false }));
        break;
  
      case "pause":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;
  
      case "play":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;
  
      default:
        return video;
    }
  };

  const handleLoadedMetaData = (i, e) => setLoadedData((pre) => [...pre, e]);

  return (
    <>
    <section className="p-7">
    
        <ul className="flex items-center wrapper-hero  ">
        {hightlightsSlides.map((list, i) => (
            <li key={list.id}>
                <div id="slider" className="sm:pr-20 pr-10">
                <div className="video-carousel_container">
                    <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black shadow-xl shadow-black/25 ">
                    <video
                        id="video"
                        playsInline={true}
                        className={`${
                        list.id === 2 && "translate-x"
                        } pointer-events-none`}
                        preload="auto"
                        muted
                        ref={(el) => (videoRef.current[i] = el)}
                        onEnded={() =>
                        i !== 3
                            ? handleProcess("video-end", i)
                            : handleProcess("video-last")
                        }
                        onPlay={() =>
                        setVideo((pre) => ({ ...pre, isPlaying: true }))
                        }
                        onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                    >
                        <source src={list.video} type="video/mp4" />
                    </video>
                    </div>
                </div>
                </div>
            </li>
        ))}
        </ul>
    </section>
    </>
  );
};

export default VideoCarousel;