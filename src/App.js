import {BrowserRouter as Router} from 'react-router-dom';

import {AppRouter} from './components/app-router.js';
import {Layout} from './components/layout.js';

function App() {
  return (
    <Router>
      <Layout>
        <AppRouter />
      </Layout>
    </Router>
  );
}

export default App;
