import { createLivre, getLivres } from '@/services/livreService';

export default async function handler(req, res) {
     if (req.method === 'POST') {
          const livre = await createLivre(req.body);
          res.status(201).json(livre);
     } else if (req.method === 'GET') {
          const livres = await getLivres();
          res.status(200).json(livres);
     } else {
          res.setHeader('Allow', ['GET', 'POST']);
          res.status(405).end(`Method ${req.method} Not Allowed`);
     }
}
