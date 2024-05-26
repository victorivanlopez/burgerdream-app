import { z } from 'zod';

export const OrderSchema = z.object({
  name: z.string()
    .min(1, 'El nombre es obligatorio'),
  total: z.number()
    .min(1, 'Error en el total de la orden'),
  order: z.array(z.object({
    id: z.number(),
    name: z.string(),
    price: z.number(),
    qty: z.number(),
    subtotal: z.number(),
  })),
});

export const OrderIdSchema = z.object({
  orderId: z.string()
    .transform(value => Number(value))
    .refine(value => value > 0, { message: 'El valor proporcionado no es válido' }),
})