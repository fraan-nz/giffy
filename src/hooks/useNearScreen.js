import { useRef, useState, useEffect } from "react";

export default function useNearScreen({
	distance = "100px",
	externalRef,
	once = true,
} = {}) {
	const [isNearScreen, setShow] = useState(false);
	const elementRef = useRef();

	useEffect(() => {
		let observer;
		//externalRef se utiliza en caso de un renderizado condicional
		const elementToObserve = externalRef
			? externalRef.current
			: elementRef.current;

		const onChange = (entries, observer) => {
			const element = entries[0];
			if (element.isIntersecting) {
				setShow(true);
				once && observer.disconnect();
			} else {
				!once && setShow(false);
			}
		};

		//envuelvo el valor en un promise.resolve porque necesito que se resuelva si o si
		Promise.resolve(
			typeof IntersectionObserver !== undefined
				? IntersectionObserver
				: import("intersection-observer")
		).then(() => {
			observer = new IntersectionObserver(onChange, {
				rootMargin: distance,
			});

			if (elementToObserve) observer.observe(elementToObserve);
		});

		return () => observer && observer.disconnect();
	});

	return { isNearScreen, elementRef };
}
