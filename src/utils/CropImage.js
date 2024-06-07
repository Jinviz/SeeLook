const createImage = (url) =>
	new Promise((resolve, reject) => {
		const image = new Image();
		image.addEventListener("load", () => resolve(image));
		image.addEventListener("error", (error) => reject(error));
		image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox
		image.src = url;
	});

function getRadianAngle(degreeValue) {
	return (degreeValue * Math.PI) / 180;
}

export const getCroppedImg = async(imageSrc, pixelCrop, rotation = 0) => {
	const image = await createImage(imageSrc);
	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d");

	const maxSize = Math.max(image.width, image.height);
	const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

	// set each dimensions to double largest dimension to allow for a safe area for the
	// image to rotate in without being clipped by canvas context
	canvas.width = safeArea;
	canvas.height = safeArea;

	// translate canvas context to a central location on image to allow rotating around the center.
	ctx.translate(safeArea / 2, safeArea / 2);
	ctx.rotate(getRadianAngle(rotation));
	ctx.translate(-safeArea / 2, -safeArea / 2);

	// draw rotated image and store data.
	ctx.drawImage(
		image,
		safeArea / 2 - image.width * 0.5,
		safeArea / 2 - image.height * 0.5
	);

	const data = ctx.getImageData(0, 0, safeArea, safeArea);

	// set canvas width to final desired crop size - this will clear existing context
	canvas.width = pixelCrop.width;
	canvas.height = pixelCrop.height;

	// paste generated rotate image with correct offsets for x,y crop values.
	ctx.putImageData(
		data,
		0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x,
		0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y
	);

	// As Base64 string
	// return canvas.toDataURL("image/jpeg");
	return canvas;
}


export const generateDownload = async (imageSrc, crop, setImage) => {
	if (!crop || !imageSrc) {
		return;
	}

	const canvas = await getCroppedImg(imageSrc, crop);
	const imageDataUrl = canvas.toDataURL("image/png", 0.95);
	setImage(imageDataUrl);

	// Convert to Blob data
	
	// canvas.toBlob(
	// 	(blob) => {
	// 		const previewUrl = window.URL.createObjectURL(blob); // create URL
	// 		setImage(previewUrl); // save cropped image url 
	// 		// window.URL.revokeObjectURL(previewUrl); //  url
	// 	},
	// 	"image/png",
	// 	0.95
	// );
};
    