import dva from 'dva';
import { wrapStore } from 'react-chrome-redux';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
// app.router(require('./routes').default);

// 5. Start
app.start('#root');

wrapStore(app._store, {
  portName: 'natasha',
});

