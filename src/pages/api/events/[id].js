import { getEvenementById, updateEvenement, deleteEvenement } from '../../../services/evenementService';

export default async function handler(req, res) {
  const { id } = req.query;
  
  if (req.method === 'GET') {
    const evenement = await getEvenementById(Number(id));
    res.status(200).json(evenement);
  } else if (req.method === 'PUT') {
    const evenement = await updateEvenement(Number(id), req.body);
    res.status(200).json(evenement);
  } else if (req.method === 'DELETE') {
    await deleteEvenement(Number(id));
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
