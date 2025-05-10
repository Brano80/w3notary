// w3notary-api/server.js
const fastify = require('fastify')({ logger: true });
require('dotenv').config();
const notary = require('./contract');

// --- Manual CORS handling ---
fastify.addHook('onRequest', (req, reply, done) => {
  reply.header('Access-Control-Allow-Origin', '*');
  reply.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  reply.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.raw.method === 'OPTIONS') {
    reply.send();
  } else {
    done();
  }
});

// Health check
fastify.get('/health', async (req, reply) => {
  return { status: 'ok' };
});

// Notarize a document hash
fastify.post('/notarize', async (req, reply) => {
  const { hash } = req.body;
  if (!hash) {
    return reply.status(400).send({ error: 'Missing hash' });
  }
  try {
    const tx = await notary.recordHash(hash);
    await tx.wait();
    return { txHash: tx.hash };
  } catch (err) {
    req.log.error(err);
    return reply.status(500).send({ error: err.message });
  }
});

// Lookup timestamp
fastify.get('/notarize/:hash', async (req, reply) => {
  const { hash } = req.params;
  if (!hash) {
    return reply.status(400).send({ error: 'Missing hash parameter' });
  }
  try {
    const ts = await notary.getTimestamp(hash);
    return { timestamp: ts.toString() };
  } catch (err) {
    req.log.error(err);
    if (err.reason === 'Notary: hash not found') {
      return reply.status(404).send({ error: 'Hash not found' });
    }
    return reply.status(500).send({ error: err.message });
  }
});

// Start server
const PORT = Number(process.env.PORT) || 3001;
fastify.listen({ port: PORT }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server listening at ${address}`);
});
