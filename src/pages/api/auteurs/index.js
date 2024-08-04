import { createAuteur, getAuteurs } from '../../../services/auteurService';
import { withMiddleware } from '@/lib/middleware';
import { apiKeyMiddleware } from '@/middleware/apiKeyMiddleware';

async function handler(req, res) {
     if (req.method === 'POST') {
          const auteur = await createAuteur(req.body);
          res.status(201).json(auteur);
     } else if (req.method === 'GET') {
          const auteurs = await getAuteurs();
          res.status(200).json(auteurs);
     } else {
          res.setHeader('Allow', ['GET', 'POST']);
          res.status(405).end(`Method ${req.method} Not Allowed`);
     }
}

export default withMiddleware(handler, apiKeyMiddleware);