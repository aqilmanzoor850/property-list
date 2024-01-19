import type { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      // Read the current data store
      const filePath = path.resolve('./', 'data.json');
      let dataStore;
      try {
        const data = await fs.readFile(filePath, 'utf-8');
        dataStore = JSON.parse(data);
      } catch (error) {
        dataStore = [];
      }
  
      // Add the new form data to the data store
      dataStore.push(req.body);
  
      // Write the updated data store back to the file
      await fs.writeFile(filePath, JSON.stringify(dataStore, null, 2), 'utf-8');
  
      res.status(200).json({ message: 'Form data submitted successfully!' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
