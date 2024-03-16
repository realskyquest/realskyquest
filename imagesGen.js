import fs from 'fs/promises';

import path from 'node:path';
import { writeFileSync, readdirSync, statSync } from 'fs';

import { encode } from 'blurhash';
import { getPixels } from '@unpic/pixels';
import { blurhashToDataUri } from '@unpic/placeholder';

// Generate's the blurhash using imagepath as parameter
async function handleBlurHash(imagePath) {
	const imageFile = await fs.readFile(imagePath);
	const image = await getPixels(imageFile);
	const data = Uint8ClampedArray.from(image.data);
	const blurhash = encode(data, image.width, image.height, 4, 4);
	const decodedBlurhash = blurhashToDataUri(blurhash);
	return decodedBlurhash;
}

// Gets all images from the folder that is provided from the parameter
function readDirectory(directoryPath) {
	const imageExtensions = ['.jpg', '.jpeg', '.png', '.bmp'];
	const relativePaths = [];

	function readDirectoryRecursive(directoryPath) {
		const files = readdirSync(directoryPath);
		files.forEach((file) => {
			let filePath = path.join(directoryPath, file);
			const stat = statSync(filePath);
			if (stat.isDirectory()) {
				readDirectoryRecursive(filePath);
			} else if (imageExtensions.includes(path.extname(file).toLowerCase())) {
				filePath = `./${filePath.replace(/\\/g, '/')}`;
				relativePaths.push({
					name: filePath.split('/').at(-1),
					path: filePath,
					width: 0,
					height: 0,
					jpeg: '',
					webp: '',
					avif: '',
					blurhash: ''
				});
			}
		});
	}

	readDirectoryRecursive(directoryPath);
	return relativePaths;
}

const imagePaths = readDirectory('./src/images');

// Add in other data for the image
for (const image of imagePaths) {
	const blurhash = await handleBlurHash(image.path);

	const imageFile = await fs.readFile(image.path);
	const { width, height } = await getPixels(imageFile);

	image.path = image.path.slice(1);
	image.width = width;
	image.height = height;
	image.blurhash = blurhash;

	image.src = image.path;
	image.jpeg = `${image.path}?w=${parseInt(width / 3)};${parseInt(width / 2)};${width}&format=jpeg&as=srcset`;
	image.webp = `${image.path}?w=${parseInt(width / 3)};${parseInt(width / 2)};${width}&format=webp&as=srcset`;
	image.avif = `${image.path}?w=${parseInt(width / 3)};${parseInt(width / 2)};${width}&format=avif&as=srcset`;
}

const imageIMPORTS = `${imagePaths
	.map(
		(value) =>
			`
			import ${value.path.replaceAll('/', '_').replaceAll('.', '_').replaceAll('-', '_').slice(1)} from '${value.src}'
			import ${value.path.replaceAll('/', '_').replaceAll('.', '_').replaceAll('-', '_').slice(1)}_jpeg from '${value.jpeg}'
			import ${value.path.replaceAll('/', '_').replaceAll('.', '_').replaceAll('-', '_').slice(1)}_webp from '${value.webp}'
			import ${value.path.replaceAll('/', '_').replaceAll('.', '_').replaceAll('-', '_').slice(1)}_avif from '${value.avif}'
			`
	)
	.join(';')}`;

// Start producing the JSON file
const imageJSON = `{${imagePaths
	.map(
		(value) =>
			`"${value.path}" : {name: "${value.name}", path: "${value.path}", width: ${value.width}, height: ${value.height}, 
			src: ${value.path.replaceAll('/', '_').replaceAll('.', '_').replaceAll('-', '_').slice(1)}, 
			jpeg: ${value.path.replaceAll('/', '_').replaceAll('.', '_').replaceAll('-', '_').slice(1)}_jpeg, 
			webp: ${value.path.replaceAll('/', '_').replaceAll('.', '_').replaceAll('-', '_').slice(1)}_webp,
			avif: ${value.path.replaceAll('/', '_').replaceAll('.', '_').replaceAll('-', '_').slice(1)}_avif,
			blurhash: "${value.blurhash}" }`
	)
	.join(',')}}`;

// Other required code for typescript support
const file = `
interface ImagesArrayType {
	name: string;
	path: string;
	width: number;
	height: number;
	src: string;
	jpeg: typeof import('/src/images/*');
	webp: typeof import('/src/images/*');
	avif: typeof import('/src/images/*');
	blurhash: string;
}

type ImagesJSONType = Record<string, ImagesArrayType>;

${imageIMPORTS}

export const imagesJSON: ImagesJSONType = ${imageJSON};
`;

// Write file to disk
try {
	writeFileSync('./src/lib/images.ts', file, 'utf8');
	console.log('Successfully produced images.ts');
} catch (error) {
	console.log('Failed to produce images.ts', error);
}