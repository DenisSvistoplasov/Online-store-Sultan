const {App} = require("./App");
import ReactDOM from 'react-dom/client';
import favicon from './assets/img/favicon.svg';

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.createRoot(root).render(<App/>);