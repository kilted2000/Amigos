import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { query as q, Client, Paginate } from 'faunadb';
export default withApiAuthRequired(async function shows(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res);
    const client = new Client({ secret: accessToken });
    const {Paginate, Documents, Collection, Get, Lambda, Var} = q;

const data = await client.query(
q.Map(Paginate(Documents(Collection('stores'))), Lambda(['storeRef'], Get(Var('storeRef'))))
);


    res.status(200).json(data);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
}); 