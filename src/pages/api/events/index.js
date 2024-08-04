import { createEvenement, getEvenements } from '../../../services/evenementService';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const evenement = await createEvenement(req.body);
    res.status(201).json(evenement);
  } else if (req.method === 'GET') {
    const evenements = await getEvenements();
    res.status(200).json(evenements);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
