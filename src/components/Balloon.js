import React from 'react';
import { useSpring, animated } from 'react-spring'; // Using react-spring for animations

const Balloon = ({ isStatic, color = '#f08080' }) => {
    // Animation configuration for falling balloons
    const fallAnimation = useSpring({
        from: { transform: 'translateY(0px)' },
        to: { transform: 'translateY(100vh)' }, // Adjust for desired fall distance
        config: { duration: 3000, easing: 'ease-in-out' }, // Adjust duration and easing
        delay: Math.random() * 1000, // Add random delay for staggered effect
        loop: !isStatic, // Don't loop if static
    });

    return (
        <animated.div
            style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: color,
                margin: '0 10px',
                ...fallAnimation, // Apply animation styles
            }}
        />
    );
};

export default Balloon;