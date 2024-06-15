import buildClient from '../util/build-client';

const fetchCurrentUser = async () => {
  const client = buildClient();
  const { data } = await client.get('/api/users/currentuser');
  return data;
};

const LandingPage = async () => {
  const currentUser = await fetchCurrentUser();
  console.log({ currentUser });
  return (
    <div>
      <h1>Landing2</h1>
    </div>
  );
};

export default LandingPage;