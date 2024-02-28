//EventController.js

import {
  getEvents,
  postEvent,
  putEvent,
  deleteEvent,
  getEvent,
  getEventHtml,
  getEventsHtml,
} from "../services/EventService";
import WebSocketService from "../services/WebSocketService";

export const fetchEvents = async () => {
  try {
    const events = await getEvents();
    return events;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const addNewEvent = async (eventData) => {
  try {
    const newEvent = await postEvent(eventData);
    return newEvent;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateEvent = async (eventId, eventData) => {
  try {
    const updatedEvent = await putEvent(eventId, eventData); // Pass eventId to putEvent
    return updatedEvent;
  } catch (error) {
    console.log(error);
  }
};

export const removeEvent = async (eventId) => {
  try {
    await deleteEvent(eventId);
  } catch (error) {
    console.log(error);
  }
};

export const getEventById = async (eventId) => {
  try {
    const event = await getEvent(eventId);
    return event;
  } catch (error) {
    console.log(error);
  }
};

export const getEventHTMLById = async (eventId) => {
  try {
    const eventHtml = await getEventHtml(eventId);
    //const newWindow = window.open('', '_blank');
    //newWindow.document.write(eventHtml);
    window.open(eventHtml, "_blank");

    //return eventHtml;
  } catch (error) {
    console.error("Error fetching event HTML:", error);
  }
};

export const getEventsHTML = async (eventId) => {
  try {
    const eventHtml = await getEventsHtml();
    window.open(eventHtml, "_blank");
  } catch (error) {
    console.error("Error fetching event HTML:", error);
  }
};

export const getEventRemainTime = async (eventId, onUpdate) => {
  try {
    const webSocketService = new WebSocketService(eventId, onUpdate);

    // Connect to the WebSocket server with the specified eventId
    webSocketService.connect();

    // Return the WebSocketService instance
    return webSocketService;
  } catch (error) {
    console.error("Error connecting to WebSocket:", error);
    return null;
  }
};
