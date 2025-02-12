import Development from './dev';
import Production from './prod';

const env = import.meta.env.NODE_ENV; // 'development' or 'production'

const config = env === 'development' ? Development : Production;
// let config = {};
// if (env === 'development') {
//   config = {
//     apiUrl: 'https://movienew.cybersoft.edu.vn/dev/api/',
//   };
// } else {
//   config = {
//     apiUrl: 'https://movienew.cybersoft.edu.vn/prod/api/',
//   };
// }

export default config;
