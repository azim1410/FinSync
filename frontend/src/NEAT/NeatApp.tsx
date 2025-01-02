import React, { useEffect, useRef } from 'react';
import { NeatGradient, NeatConfig } from '@firecms/neat';

const neatConfig: NeatConfig = {
    colors: [
        {
            color: '#5BFFB8',
            enabled: true,
        },
        {
            color: '#ABFFC7',
            enabled: true,
        },
        {
            color: '#A9FEDD',
            enabled: true,
        },
        {
            color: '#5BFFBF',
            enabled: true,
        },
        {
            color: '#B8FADD',
            enabled: true,
        },
    ],
    speed: 4,
    horizontalPressure: 4,
    verticalPressure: 3,
    waveFrequencyX: 0,
    waveFrequencyY: 0,
    waveAmplitude: 0,
    shadows: 2,
    highlights: 7,
    colorBrightness: 1,
    colorSaturation: 8,
    wireframe: false,
    colorBlending: 5,
    backgroundColor: '#FF0000',
    backgroundAlpha: 1,
    grainScale: 0,
    grainSparsity: 0,
    grainIntensity: 0,
    grainSpeed: 0,
    resolution: 0.5,
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
