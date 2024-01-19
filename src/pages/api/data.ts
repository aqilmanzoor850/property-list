import type { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Read the current data store
    const filePath = path.resolve('./', 'data.json');
    let dataStore;
    try {
      const data = await fs.readFile(filePath, 'utf-8');
      dataStore = JSON.parse(data);
    } catch (error) {
      dataStore = [];
    }

    // Return all submitted form data.
    res.status(200).json(dataStore);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
