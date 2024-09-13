import React, { useEffect, useRef } from 'react';

const LaserPointer = () => {
    const laserRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            if (laserRef.current) {
                laserRef.current.style.left = `${mouseX}px`;
                laserRef.current.style.top = `${mouseY}px`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={laserRef}
            style={{
                position: 'fixed', // changed from 'absolute' to 'fixed'
                width: '10px',
                height: '10px',
                backgroundColor: 'red',
                borderRadius: '50%',
                boxShadow: '0 0 20px red',
                pointerEvents: 'none',
                transform: 'translate(-50%, -50%)',
                zIndex: 1000 // ensures it's on top of other elements
            }}
        ></div>
    );
};

export default LaserPointer;
