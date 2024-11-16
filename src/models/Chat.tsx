import { Message } from "./Message"; // Import the Message interface

export interface Chat {
  _id: string; // MongoDB ObjectId as a string
  participants: {
    _id: string;
    name: string;
    email: string;
  }[];
  messages: Message[];
  createdAt: string;
  updatedAt: string;
}
