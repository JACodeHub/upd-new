import { init, AnalyticsCoreAPI } from '@adobe/aio-lib-analytics';

import jwt from 'jsonwebtoken';
import axios from 'axios';
import { readFile } from 'fs/promises';

export { AnalyticsCoreAPI } from '@adobe/aio-lib-analytics';

export async function getJWT() {
  const privateKey = await readFile('keys/secret.pem');
  const jwtPayload = {
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
    iss: process.env.AW_ORGANIZATION_ID,
    sub: process.env.AW_TECHNICAL_ID,
    'https://ims-na1.adobelogin.com/s/ent_analytics_bulk_ingest_sdk': true,
    aud: `https://ims-na1.adobelogin.com/c/${process.env.AW_CLIENT_ID}`,
  };

  return jwt.sign(jwtPayload, privateKey, { algorithm: 'RS256' });
}

export async function getToken(jwt: string) {
  const url = 'https://ims-na1.adobelogin.com/ims/exchange/jwt';
  const clientId = process.env.AW_CLIENT_ID;
  const clientSecret = process.env.AW_CLIENT_SECRET;

  try {
    return (
      await axios.post(
        url,
        `client_id=${clientId}&client_secret=${clientSecret}&jwt_token=${jwt}`,
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      )
    ).data.access_token;
  } catch (e) {
    // todo: better error handling
    if (e.response) {
      console.log(e.response.data);
      console.log(e.response.status);
      console.log(e.response.headers);
    }
  }
}

export async function getAAClient(): Promise<AnalyticsCoreAPI> {
  const jwt = await getJWT();
  const token = await getToken(jwt);

  return await init(process.env.AW_COMPANY_ID, process.env.AW_CLIENT_ID, token);
}
