import React, { useEffect, useRef } from 'react';
import { NeatGradient, NeatConfig } from '@firecms/neat';

const neatConfig: NeatConfig = {
    colors: [
        {
            color: '#FFFFFF',
            enabled: true,
        },
        {
            color: '#A3FBD7',
            enabled: true,
        },
        {
            color: '#E0F3C9',
            enabled: true,
        },
        {
            color: '#FDFDFD',
            enabled: true,
        },
        {
            color: '#9CFFBB',
            enabled: true,
        },
    ],
    speed: 2.5,
    horizontalPressure: 3,
    verticalPressure: 4,
    waveFrequencyX: 1,
    waveFrequencyY: 1,
    waveAmplitude: 0,
    shadows: 1,
    highlights: 3,
    colorBrightness: 1,
    colorSaturation: 6,
    wireframe: false,
    colorBlending: 8,
    backgroundColor: '#003FFF',
    backgroundAlpha: 0.8,
    grainScale: 3,
    grainSparsity: 0.58,
    grainIntensity: 0.025,
    grainSpeed: 0.3,
    resolution: 0.7,
};

const NeatGradientComponent: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const neat = new NeatGradient({
                ref: canvasRef.current,
                ...neatConfig,
            });

            // Optional: Adjust speed dynamically
            neat.speed = 6;

            return () => {
                neat.destroy();
            };
        }
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="gradient"
            style={{
                width: '100%',
                height: '100vh',
                display: 'block',
            }}
        ></canvas>
    );
};

export default NeatGradientComponent;
