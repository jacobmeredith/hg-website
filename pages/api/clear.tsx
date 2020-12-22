// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cache from 'memory-cache';

export default (req, res) => {
  cache.clear();
  res.statusCode = 200;
  res.end();
}
