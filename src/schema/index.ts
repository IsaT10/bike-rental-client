import { z } from 'zod';

export const bikeSchema = z.object({
  description: z.string().min(1, 'Desription is required!'),
  brand: z.string().min(1, 'Brand is required!'),
  pricePerHour: z.string().min(1, 'Price is required!'),
  bikeWeight: z.string().min(1, 'Bike weight is required!'),
  horsepower: z.string().min(1, 'Horsepower is required!'),
  highestKmph: z.string().min(1, 'Highest Kmph is required!'),
  cc: z.string().min(1, 'CC is required!'),
  year: z.string().min(1, 'Year is required!'),
  model: z.string().min(1, 'Model is required!'),
  tag: z.string().min(1, 'Tag is required!'),
  gear: z.string().min(1, 'Gear is required!'),
});
