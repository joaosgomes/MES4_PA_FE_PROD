//ImageController.js

import {
  getImages,
  postImage,
  deleteImage,
  getImage,
} from "../services/ImageService";

export const fetchImages = async () => {
  try {
    const Images = await getImages();
    return Images;
  } catch (error) {
    console.log(error);
  }
};

export const addNewImage = async (ImageData) => {
  try {
    const newImage = await postImage(ImageData);
    return newImage;
  } catch (error) {
    console.log(error);
  }
};

export const removeImage = async (ImageId) => {
  try {
    await deleteImage(ImageId);
  } catch (error) {
    console.log(error);
  }
};

export const getImageById = async (ImageId) => {
  try {
    const Image = await getImage(ImageId);
    return Image;
  } catch (error) {
    console.log(error);
  }
};
