const {App} = require("./App");
import ReactDOM from 'react-dom/client';


const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.createRoot(root).render(<App/>);