import { Request, Response, NextFunction } from "express";
import validate from "../utils/validator";
import * as Sentry from '@sentry/node';


/**
 * A middleware to validate schema against request.
 *
 * @param {Joi.Schema} validationSchema
 * @returns {Middleware}
 */
export const schemaValidation =
  (validationSchema: any) =>
  (...apiHeaders: [Request, Response, NextFunction]) => {
    validate(apiHeaders[0].body, validationSchema)
      .then(() => apiHeaders[2]())
      .catch((err) => {
        Sentry.captureException(err);
        apiHeaders[1].send(err);
      });
  };

/**
 * A middleware to validate schema against request query params.
 *
 * @param {Joi.Schema} validationSchema
 * @returns {Middleware}
 */
export const queryValidation =
  (validationSchema: any) =>
  (...apiHeaders: [Request, Response, NextFunction]) =>
    validate(apiHeaders[0].query, validationSchema)
      .then(() => apiHeaders[2]())
      .catch((err) => {
        Sentry.captureException(err);
        apiHeaders[1].send(err);
      });

/**
 * A middleware to validate schema against request param.
 *
 * @param {Joi.Schema} validationSchema
 * @returns {Middleware}
 */
export const paramsValidation =
  (validationSchema: any) =>
  (...apiHeaders: [Request, Response, NextFunction]) =>
    validate(apiHeaders[0].params, validationSchema)
      .then(() => {
        apiHeaders[2]();
      })
      .catch((err) => {
        Sentry.captureException(err);
        apiHeaders[1].send(err);
      });
