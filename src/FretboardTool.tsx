import { Fretboard, Systems } from '@moonwave99/fretboard.js';
import React, { useEffect, useRef } from 'react';

interface ToolsProps {
	foo?: boolean;
}

const FretboardTool: React.FC<ToolsProps> = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const fretboard = new Fretboard({
			el: containerRef.current,
			height: 200,
			stringsWidth: 1.5,
			dotSize: 25,
			fretCount: 16,
			fretsWidth: 1.2,
			font: 'Futura',
		});

		fretboard.renderScale({
			type: 'major',
			root: 'C',
			box: {
				box: 'C',
				system: Systems.CAGED,
			},
		});
	}, [containerRef]);

	return <div id="fretboard" ref={containerRef} />;
};

export default FretboardTool;
