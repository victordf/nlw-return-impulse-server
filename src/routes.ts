import express from 'express';
import { submitFeedbackAction } from './controllers/feedback-controller';

export const routes = express.Router();

routes.post('/feedbacks', submitFeedbackAction);