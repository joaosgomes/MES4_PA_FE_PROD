// EventService.js
import { axiosInstance, DEVMODE } from "../config/Config.js";
import * as errorMessages from "../constants/ErrorMessages";
import { mockEvents } from "./db/MockData"; // Import your mock data module
import { v4 as uuidv4 } from "uuid";

const endpoint = "/event";
const templateEndpoint = "events";

export const getEvents = async () => {
  try {
    if (DEVMODE === true) {
      return mockEvents;
    } else {
      const response = await axiosInstance.get(endpoint);
      return response.data;
    }
  } catch (error) {
    console.error(errorMessages.ERROR_FETCHING_EVENTS, error);
    throw error;
  }
};

export const getEvent = async (eventId) => {
  try {
    if (DEVMODE === true) {
      return mockEvents.find((event) => event.id === eventId);
    } else {
      const response = await axiosInstance.get(`${endpoint}/${eventId}`);
      return response.data;
    }
  } catch (error) {
    console.error(errorMessages.ERROR_FETCHING_EVENT, error);
    throw error;
  }
};

export const postEvent = async (eventData) => {
  try {
    if (DEVMODE === true) {
      const newEventId = uuidv4();
      const newEvent = { ...eventData, id: newEventId };
      mockEvents.push(newEvent);
      return newEvent;
    } else {
      const response = await axiosInstance.post(endpoint, eventData);
      return response.data;
    }
  } catch (error) {
    console.error(errorMessages.ERROR_CREATING_EVENT, error);
    throw error;
  }
};

export const putEvent = async (eventId, eventData) => {
  try {
    if (DEVMODE === true) {
      const index = mockEvents.findIndex((event) => event.id === eventId);

      if (index === -1) {
        throw new Error(errorMessages.ERROR_UPDATING_EVENT);
      }

      mockEvents[index] = { ...mockEvents[index], ...eventData };
      return null;
    } else {
      const response = await axiosInstance.put(`/event/${eventId}`, eventData); // Concatenate eventId with URL
      return response.data;
    }
  } catch (error) {
    console.error(errorMessages.ERROR_UPDATING_EVENT, error);
  }
};

export const deleteEvent = async (eventId) => {
  try {
    if (DEVMODE === true) {
      const index = mockEvents.findIndex((event) => event.id === eventId);

      if (index === -1) {
        throw new Error(errorMessages.ERROR_UPDATING_EVENT);
      }

      mockEvents.splice(index, 1);
      return null;
    } else {
      await axiosInstance.delete(`${endpoint}/${eventId}`);
    }
  } catch (error) {
    console.error(errorMessages.ERROR_DELETING_EVENT, error);
    //throw error;
  }
};

export const getEventHtml = async (eventId) => {
  try {
    //const response = await axiosInstance.get(`${templateEndpoint}/${eventId}`);
    //return response.data;
    // Construct the URL using the base URL and event ID
    const url = `${axiosInstance.defaults.baseURL}${templateEndpoint}/${eventId}`;
    return url;
  } catch (error) {
    console.error(errorMessages.ERROR_FETCHING_EVENT, error);
    //throw new error
  }
};

export const getEventsHtml = async () => {
  try {
    //const response = await axiosInstance.get(`${templateEndpoint}/`);
    //return response.data;
    // Construct the URL using the base URL and event ID
    const url = `${axiosInstance.defaults.baseURL}${templateEndpoint}`;
    return url;
  } catch (error) {
    console.error(errorMessages.ERROR_FETCHING_EVENTS, error);
    //throw new error
  }
};
