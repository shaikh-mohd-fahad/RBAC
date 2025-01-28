import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  try {
    // Define the absolute path to the db.json file
    const filePath = path.resolve('./api/db.json');

    // Read the db.json file
    const data = await fs.readFile(filePath, 'utf-8');

    // Parse and send the JSON data
    res.status(200).json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading db.json:', error);
    res.status(500).json({ error: 'Failed to load database file.' });
  }
}
