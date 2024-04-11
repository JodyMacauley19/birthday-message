import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const STARS_CONFIG = [
    { size: 5, color: '#fff', opacity: 0.3 },
    { size: 7, color: '#ffd700', opacity: 0.5 },
    { size: 3, color: '#f08080', opacity: 0.7 },
    { size: 8, color: '#fff', opacity: 0.2 },
];

const Star = ({ size, color, opacity }) => (
    <div
        style={{
            width: `${size}px`,
            height: `${size}px`,
            background: color,
            opacity,
            position: 'absolute',
            borderRadius: '50%',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: 'twinkle 2s infinite ease-in-out alternate',
            '@keyframes twinkle': {
                from: { opacity: 1 },
                to: { opacity: 0.5 },
            },
        }}
    />
);

const Stars = () => {
    const [isConfettiActive, setIsConfettiActive] = useState(false);

    useEffect(() => {
        setIsConfettiActive(true);

        setTimeout(() => setIsConfettiActive(false), 3000);
    }, []);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
            {STARS_CONFIG.map((starConfig) => (
                <Star key={starConfig.size + starConfig.color} {...starConfig} />
            ))}
            <Confetti isConfettiActive={isConfettiActive} tweenDurationMillis={3000} />
        </div>
    );
};

export default Stars;