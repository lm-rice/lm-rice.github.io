import React, { useRef, useEffect } from 'react';
import './ScrollingImages.css';

const images = [
    "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    "https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80",
    "https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80",
    "https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
];

const ScrollingImages: React.FC = () => {
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = "0";
        track.dataset.percentage = "0";

        const handleOnDown = (e: MouseEvent | TouchEvent) => {
            const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
            track.dataset.mouseDownAt = clientX.toString();
        };

        const handleOnUp = () => {
            track.dataset.mouseDownAt = "0";
            track.dataset.prevPercentage = track.dataset.percentage;
        };

        const handleOnMove = (e: MouseEvent | TouchEvent) => {
            if (track.dataset.mouseDownAt === "0") return;

            const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
            const mouseDelta = parseFloat(track.dataset.mouseDownAt || "0") - clientX;
            const maxDelta = window.innerWidth / 2;
            const percentage = (mouseDelta / maxDelta) * -100;
            const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage || "0") + percentage;
            const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
            track.dataset.percentage = nextPercentage.toString();

            track.animate({
                transform: `translate(${nextPercentage}%, -50%)`
            }, { duration: 1200, fill: "forwards" });

            for (const image of track.getElementsByClassName("image")) {
                (image as HTMLElement).animate({
                    objectPosition: `${100 + nextPercentage}% center`
                }, { duration: 1200, fill: "forwards" });
            }
        };

        window.addEventListener("mousedown", handleOnDown);
        window.addEventListener("touchstart", handleOnDown);
        window.addEventListener("mouseup", handleOnUp);
        window.addEventListener("touchend", handleOnUp);
        window.addEventListener("mousemove", handleOnMove);
        window.addEventListener("touchmove", handleOnMove);

        return () => {
            window.removeEventListener("mousedown", handleOnDown);
            window.removeEventListener("touchstart", handleOnDown);
            window.removeEventListener("mouseup", handleOnUp);
            window.removeEventListener("touchend", handleOnUp);
            window.removeEventListener("mousemove", handleOnMove);
            window.removeEventListener("touchmove", handleOnMove);
        };
    }, []);

    return (
        <main>
            <div id="image-track" ref={trackRef}>
                {images.map((src, idx) => (
                    <img key={idx} className="image" src={src} draggable="false" alt={`Image ${idx + 1}`} />
                ))}
            </div>
        </main>
    );
};

export default ScrollingImages;