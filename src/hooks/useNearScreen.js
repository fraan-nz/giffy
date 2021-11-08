import { useRef, useState, useEffect } from "react";

export default function useNearScreen({
	distance = "100px",
	externalRef,
	once = true,
} = {}) {
	const [isNearScreen, setShow] = useState(false);
	const elementRef = useRef();

	useEffect(() => {
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
		//el callback onChange recibe como parametro las entries del oberver

		const observer = new IntersectionObserver(onChange, {
			rootMargin: distance,
		});

		if (elementToObserve) observer.observe(elementToObserve);

		return () => observer && observer.disconnect();
	});

	return { isNearScreen, elementRef };
}
