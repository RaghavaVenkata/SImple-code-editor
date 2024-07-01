import React, { useState, ChangeEvent } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { Highlight, themes } from 'prism-react-renderer';

interface CodeEditorProps {
  language: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ language }) => {
  const [code, setCode] = useState<string>('');

  const handleCodeChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
  };

  return (
    <div className="code-editor">
      <textarea
        value={code}
        onChange={handleCodeChange}
        className="code-input"
      />
      <Highlight prism={Prism} code={code} language={language} theme={themes.github}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })} key={i}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} key={key} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeEditor;
