export const withMiddleware = (handler, ...middlewares) => {
     return async (req, res) => {
          for (const middleware of middlewares) {
               const result = await new Promise((resolve) =>
                    middleware(req, res, (result) => resolve(result))
               );
               if (result === false) {
                    return;
               }
          }
          return handler(req, res);
     };
};
