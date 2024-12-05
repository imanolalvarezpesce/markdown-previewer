import React, { useState, useEffect } from 'react';
import './App.css';
import { marked } from 'marked';


function App() {
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    // Texto predeterminado en el editor (Markdown válido)
    setInputText(`# H1 Header\n## H2 Header\n[Google](https://www.google.com)\n\`code\`\n\n\`\`\`js\nconsole.log('Hello, world!');\n\`\`\`\n- List item\n> Blockquote\n![Image](https://via.placeholder.com/150)\n**Bold Text**`);
  }, []);

  // Función para actualizar el texto de la vista previa
  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="App">
      <div className="editor-container">
        <textarea 
          id="editor" 
          value={inputText} 
          onChange={handleTextChange} 
          placeholder="Escribe tu Markdown aquí"
        />
      </div>
      <div 
        id="preview" 
        className="preview-container" 
        dangerouslySetInnerHTML={{ __html: marked(inputText) }} 
      />
    </div>
  );
}

export default App;
