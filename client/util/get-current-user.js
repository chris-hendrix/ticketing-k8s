import buildClient from './build-client';

export default async () => {
  const client = buildClient();
  const { data } = await client.get('/api/users/currentuser');
  return data.currentUser;
};