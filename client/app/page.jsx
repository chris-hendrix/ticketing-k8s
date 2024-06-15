import getCurrentUser from '../util/get-current-user';

const LandingPage = async () => {
  const currentUser = await getCurrentUser();
  if (currentUser) {
    return <h1>You are signed in</h1>;
  }
  return (
    <div>
      <h1>You are NOT signed in</h1>
    </div>
  );
};

export default LandingPage;