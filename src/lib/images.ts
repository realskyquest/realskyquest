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

import src_images_banner_jpg from '/src/images/banner.jpg';
import src_images_banner_jpg_jpeg from '/src/images/banner.jpg?w=333;500;1000&format=jpeg&as=srcset';
import src_images_banner_jpg_webp from '/src/images/banner.jpg?w=333;500;1000&format=webp&as=srcset';
import src_images_banner_jpg_avif from '/src/images/banner.jpg?w=333;500;1000&format=avif&as=srcset';

export const imagesJSON: ImagesJSONType = {
	'/src/images/banner.jpg': {
		name: 'banner.jpg',
		path: '/src/images/banner.jpg',
		width: 1000,
		height: 500,
		src: src_images_banner_jpg,
		jpeg: src_images_banner_jpg_jpeg,
		webp: src_images_banner_jpg_webp,
		avif: src_images_banner_jpg_avif,
		blurhash:
			'data:image/bmp;base64,Qk32BAAAAAAAADYAAAAoAAAACAAAAAgAAAABABgAAAAAAMAAAAATCwAAEwsAAAAAAAAAAAAANQQXOAUdPRQqQic3QzY+QTo9PC4yNg0gOSEVQigeVTsuZVI7bGJCZ2NAV1A0QCYhPDMeTTwmalQ1gm9Ei4FNhYJLbWo+SjgnPz0qVEcvdmA8kX1MnJBYlJBYeXdKUEMvQTsvVEUzdV0+j3lPmYxckY1dd3RPUUIxQSwoTjUsZ0o5emRKgnVWfHZXaGFJSzMrQQkWRRMeUCkvWkBAXlBKW1JKUUE7RBIfQAAEQQAUQgUqRSU7RzdDRzpBRCozQAAX'
	}
};
