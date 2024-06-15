import axios from 'axios';

const fetchCurrentUser = async () => {
  if (typeof window === 'undefined') {
    // server side request
    const { data } = await axios.get(
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser', {
      headers: {
        Host: 'ticketing.dev'
      }
    });
    return data;
  } else {
    // client side request
    const { data } = await axios.get('/api/users/currentuser');
    return data;
  }

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