import React, { useEffect, useRef } from 'react';
import { NeatGradient, NeatConfig } from '@firecms/neat';

const neatConfig: NeatConfig = {
    colors: [
        { color: '#11FD56', enabled: true },
        { color: '#90FFB3', enabled: true },
        { color: '#58FFC5', enabled: true },
        { color: '#3BFFDB', enabled: true },
        { color: '#E1F5F4', enabled: false }
    ],
    speed: 2,
    horizontalPressure: 5,
    verticalPressure: 6,
    waveFrequencyX: 1,
    waveFrequencyY: 2,
    waveAmplitude: 10,
    shadows: 0,
    highlights: 7,
    colorBrightness: 1.05,
    colorSaturation: 0,
    wireframe: false,
    colorBlending: 9,
    backgroundColor: '#003FFF',
    backgroundAlpha: 1,
    grainScale: 0,
    grainIntensity: 0,
    grainSpeed: 0,
    resolution: 1,
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
