import { useEffect, useState } from "react";

function useFetchImage({ url }) {
	const [image, setImage] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`${url}`)
			.then((response) => response.blob())
			.then((blob) => {
				setImage(URL.createObjectURL(blob));
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [url]);

	return { image, loading };
}

export default useFetchImage;
