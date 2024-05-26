import { FastifyInstance } from "fastify";
import { knex } from "../database/connection";
import { randomUUID } from 'node:crypto';
import { z } from 'zod';

export default async function transactionRoutes(app: FastifyInstance){
  app.get('/', async(req, res) => {
    const transactions = await knex('transactions').select('*')

    return res.code(200).send({transactions});
  });

  app.post('/', async (req, res) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit'])
    });

    const { title, amount , type } = createTransactionBodySchema.parse(req.body);

    await knex('transactions').insert({
      id: randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1
    });

    res.code(201).send();

  });

}