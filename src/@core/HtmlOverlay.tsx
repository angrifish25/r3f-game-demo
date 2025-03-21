import React, { useEffect, useRef } from 'react';
import { Html } from '@react-three/drei';
import useGame from './useGame';
import type { HtmlProps } from '@react-three/drei/web/Html';

export default function HtmlOverlay({ children, ...props }: HtmlProps) {
    const { paused } = useGame();
    const node = useRef<HTMLDivElement>();

    useEffect(() => {
        if (node.current?.parentElement) {
            node.current.parentElement.style.pointerEvents = 'none';
            node.current.parentElement.style.whiteSpace = 'nowrap';
        }
    });

    if (paused) return null;

    return (
        <Html ref={node} zIndexRange={[0, 0]} eps={0.1} {...props}>
            {children}
        </Html>
    );
}
