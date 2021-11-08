import { useRef, useState, useEffect } from "react";

export default function useNearScreen({ distance = "100px" } = {}) {
	const [isNearScreen, setShow] = useState(false);
	const elementRef = useRef();

	useEffect(function () {
		const onChange = (entries, observer) => {
			const element = entries[0];
			if (element.isIntersecting) {
				setShow(true);
				observer.disconnect();
			}
		};
		//el callback onChange recibe como parametro las entries del oberver

		const observer = new IntersectionObserver(onChange, {
			rootMargin: distance,
		});

		observer.observe(elementRef.current);

		return () => observer.disconnect();
	});

	return { isNearScreen, elementRef };
}
