import {useState, useEffect } from 'react';

export const useOnScreen = (ref, rootMargin = "0px", threshold = 1.0) => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // update the state when observer callback is fired
                // console.log('updated callback');
                    setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
                threshold
            }
        );
        if (ref.current) {
            observer.observe(ref.current)
        }
        return () => {
            // console.log('unmounted')
            if(ref.current) {
                observer.unobserve(ref.current)
            }
        };
    }, []) // Empty array ensures that the effect is only run on mount and unmount

    return isIntersecting;
}