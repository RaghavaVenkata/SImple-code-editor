import React from 'react';
import CodeEditor from './components/CodeEditor';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Simple Code Editor</h1>
      <CodeEditor language="javascript" />
    </div>
  );
};

export default App;
