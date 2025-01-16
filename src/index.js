import express from 'express';
import dotenv from 'dotenv';
import initMongoConnection from './db/initMongoConnection.js';
import server from './server.js';

dotenv.config(); 
const startApp = () => {
  try {
    initMongoConnection(); 
    server(); 
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

startApp();
