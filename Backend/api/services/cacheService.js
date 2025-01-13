const NodeCache = require('node-cache');
const cache = new NodeCache();

exports.getFromCache = (key) => {
  return cache.get(key);
};

exports.setToCache = (key, value, ttl = 3600) => {
  cache.set(key, value, ttl);
};
