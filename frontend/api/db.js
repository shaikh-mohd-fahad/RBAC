import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  try {
    // Resolve the absolute path of db.json
    const filePath = path.resolve('./api/db.json');

    // Read the file
    const data = await fs.readFile(filePath, 'utf-8');

    // Send JSON response
    res.status(200).json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading db.json:', error);
    res.status(500).json({ error: 'Failed to load database file.' });
  }
}
