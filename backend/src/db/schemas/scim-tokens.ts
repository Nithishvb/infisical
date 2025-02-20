// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const ScimTokensSchema = z.object({
  id: z.string(),
  ttlDays: z.coerce.number().default(365),
  description: z.string(),
  orgId: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type TScimTokens = z.infer<typeof ScimTokensSchema>;
export type TScimTokensInsert = Omit<TScimTokens, TImmutableDBKeys>;
export type TScimTokensUpdate = Partial<Omit<TScimTokens, TImmutableDBKeys>>;
