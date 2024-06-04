import { z } from 'zod';

export const SearchProductsSchema = z.object({
  search: z.string()
    .trim()
    .min(1, { message: 'El campo de búsqueda no puede ir vacío.' })
})