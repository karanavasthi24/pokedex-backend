import * as Joi from 'joi';

export const schemaName = Joi.object({
  name: Joi.string()
});

export const schemaId = Joi.object({
  id: Joi.string()
});
