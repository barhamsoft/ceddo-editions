import { getLivreById, updateLivre, deleteLivre } from '@/services/livreService';

export default async function handler(req, res) {
     const { id } = req.query;

     if (req.method === 'GET') {
          const livre = await getLivreById(Number(id));
          res.status(200).json(livre);
     } else if (req.method === 'PUT') {
          const livre = await updateLivre(Number(id), req.body);
          res.status(200).json(livre);
     } else if (req.method === 'DELETE') {
          await deleteLivre(Number(id));
          res.status(204).end();
     } else {
          res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
          res.status(405).end(`Method ${req.method} Not Allowed`);
     }
}
