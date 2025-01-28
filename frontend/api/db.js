import { promises as fs } from 'fs';

export default async function handler(req, res) {
  try {
    // Read the db.json file from the root directory
    const data = await fs.readFile('./db.json', 'utf-8');

    // Send the data as JSON response
    res.status(200).json(JSON.parse(data));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to load database file.' });
  }
}
