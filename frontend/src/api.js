import axios from 'axios';

export default {
  user: {
    login: data =>
      axios.post('/api/auth', { data }).then(res => res.data.user),
    signup: user =>
      axios.post('/api/users', { user }).then(res => res.data.user),
  },
};
