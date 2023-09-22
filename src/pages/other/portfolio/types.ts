export type ImageType = {
    src: string;
    caption: string;
}

export type GalleryItem = {
    id?: number;
    image: ImageType;
    title?: string;
    description?: string;
    category?: Array<string>;
}

export type WorkImages = {
    icon: string;
    title: string;
}
