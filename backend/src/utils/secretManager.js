const fs = require('fs');
const path = require('path');

function getJwtSecret() {
  const secretPath = '/run/secrets/jwt_secret';

  try {
    if (fs.existsSync(secretPath)) {
      const secret = fs.readFileSync(secretPath, 'utf-8').trim();
      if (secret) {
        return secret;
      }
    }
  } catch (error) {
    const envSecret = process.env.JWT_SECRET;
    if (!envSecret) {
      throw new Error(
        'JWT_SECRET not found. Provide either /run/secrets/jwt_secret (Docker) or JWT_SECRET environment variable.'
      );
    }

    return envSecret;
  }
}

module.exports = { getJwtSecret };
