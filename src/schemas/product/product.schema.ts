import { z } from 'zod';

export const ProductSchema = z.object({
  name:
    z.string()
      .trim()
      .min(1, { message: 'El nombre del producto es obligatorio.' }),
  price:
    z.string()
      .trim()
      .transform((value) => parseFloat(value))
      .refine((value) => value > 0, { message: 'Precio no válido.' })
      .or(z.number().min(1, { message: 'El precio es obligatorio.' })),
  categoryId:
    z.string()
      .trim()
      .transform((value) => parseInt(value))
      .refine((value) => value > 0, { message: 'La categoría es obligatoria.' })
      .or(z.number().min(1, { message: 'La categoría es obligatoria.' })),
  image:
    z.string()
      .min(1, { message: 'La imagen es obligatoria.' }),
})

export const SearchProductsSchema = z.object({
  search: z.string()
    .trim()
    .min(1, { message: 'El campo de búsqueda no puede ir vacío.' })
})