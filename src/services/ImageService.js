// ImageService.js
import {axiosInstance , DEVMODE} from "../config/Config.js";
import * as errorMessages from "../constants/ErrorMessages";
import { mockImages } from "./db/MockData"; // Import your mock data module

const endpoint = "/image";

export const getImages = async () => {
  try {
    if (DEVMODE === true) {
      return mockImages;
    } else {
      const response = await axiosInstance.get(endpoint);
      return response.data;
    }
  } catch (error) {
    console.error(errorMessages.ERROR_IMAGE, error);
    throw error;
  }
};

export const getImage = async (imageId) => {
  try {
    if (DEVMODE === true) {
      const image = mockImages.find((img) => img.Id === imageId);
      return image;
    } else {
      const response = await axiosInstance.get(`${endpoint}/${imageId}`);
      return response.data;
    }
  } catch (error) {
    console.error(errorMessages.ERROR_IMAGE, error);
    //throw error;
  }
};

export const postImage = async (imageData) => {
  try {
    if (DEVMODE === true) {
      mockImages.push(imageData);
      return imageData;
    } else {
      const response = await axiosInstance.post(endpoint, imageData);
      return response.data;
    }
  } catch (error) {
    console.error(errorMessages.ERROR_IMAGE, error);
    //throw error;
  }
};

export const deleteImage = async (imageId) => {
  try {
    await axiosInstance.delete(`${endpoint}/${imageId}`);
  } catch (error) {
    console.error(errorMessages.ERROR_IMAGE, error);
    //throw error;
  }
};
