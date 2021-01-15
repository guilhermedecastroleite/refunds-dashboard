import BasePage from './components/Layout/BasePage';

const { default: Dashboard } = require('./pages/Dashboard');

const App = () => (
  <div>
    <BasePage>
      <Dashboard />
    </BasePage>
  </div>
);

export default App;
