/*
  api.js saves the url in axios for our backend server,
  and exports it to be used by instructions.js
  Confused about axios? Check this out:
  https://www.digitalocean.com/community/tutorials/react-axios-react
  */

import axios from 'axios';


export default axios.create({
  baseURL: 'http://18.217.251.4:3000/'
});
