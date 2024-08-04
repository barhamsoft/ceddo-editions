import { getAuteurById, updateAuteur, deleteAuteur } from '../../../services/auteurService';
import { withMiddleware } from '@/lib/middleware';
import { apiKeyMiddleware } from '@/middleware/apiKeyMiddleware';

async function handler(req, res) {
  const { id } = req.query;
  
  if (req.method === 'GET') {
    const auteur = await getAuteurById(Number(id));
    res.status(200).json(auteur);
  } else if (req.method === 'PUT') {
    const auteur = await updateAuteur(Number(id), req.body);
    res.status(200).json(auteur);
  } else if (req.method === 'DELETE') {
    await deleteAuteur(Number(id));
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default withMiddleware(handler, apiKeyMiddleware);
