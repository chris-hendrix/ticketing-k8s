import axios from 'axios';
import { headers } from 'next/headers';


export default () => {
  if (typeof window === 'undefined') {
    // We are on the server
    return axios.create({
      baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: Object.fromEntries(headers().entries())
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseURL: '/'
    });
  }
};