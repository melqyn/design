// components/ReadingProgress.js

import { useEffect, useState } from 'react';
import { ClientOnly } from 'next/client'; // Import ClientOnly wrapper

const ReadingProgress = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const calculateScrollDistance = () => {
            const scrollY = window.pageYOffset || document.documentElement.scrollTop;
            const winHeight = window.innerHeight || document.documentElement.clientHeight;
            const docHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
            const calculatedScrollPercent = (scrollY / (docHeight - winHeight)) * 100;
            setScrollPercent(calculatedScrollPercent);
        };

        // Add event listener to calculate scroll distance on scroll
        window.addEventListener('scroll', calculateScrollDistance);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', calculateScrollDistance);
        };
    }, []);

    return (
        <ClientOnly>
            <div className="fixed top-0 left-0 right-0 h-1 bg-purple-600">
                <div
                    id="readingProgress"
                    className="h-full bg-purple-800"
                    style={{ width: `${scrollPercent}%` }}
                ></div>
            </div>
        </ClientOnly>
    );
};

export default ReadingProgress;
