import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const serverClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: process.env.SANITY_SERVER_API_TOKEN,
});
