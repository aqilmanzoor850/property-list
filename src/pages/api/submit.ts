import type { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

const dataStore: any = [];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // Return all submitted form data.
        res.status(200).json(dataStore);
      } else 
    if (req.method === 'POST') {
      // Read the current data store
      dataStore.push(req.body);
      res.status(200).json({ message: 'Form data submitted successfully!' });
  
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
