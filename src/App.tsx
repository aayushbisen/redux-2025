import './App.css';
import { Counter } from './features/counter/Counter';
import QueryConsumer from './features/counter/QueryConsumer';
import { Quote } from './features/counter/Quote';

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Counter />
      <p />
      <Quote />
      <p />
      <QueryConsumer />
    </div>
  );
};

export default App;
