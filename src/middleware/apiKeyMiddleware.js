const API_KEY = process.env.API_KEY;

export const apiKeyMiddleware = (req, res, next) => {
     const apiKey = req.headers['x-api-key'];

     if (!apiKey || apiKey !== API_KEY) {
          return res.status(403).json({ error: 'Forbidden - Invalid API Key' });
     }

     next();
};
