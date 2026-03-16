import React, { useState } from 'react';
import './App.css';

function App() {

  const [isRed, setIsRed] = useState(false);
  const [isItalic, setIsItalic] = useState(false);


  const handleShowText = () => {

    setIsRed(false);
    setIsItalic(false);
  };

  const handleToggleRed = () => setIsRed(!isRed);
  const handleToggleItalic = () => setIsItalic(!isItalic);

  return (
    <div className="container">
      <div className="text-display">
        <h1 className={`${isRed ? 'red' : ''} ${isItalic ? 'italic' : ''}`}>
          Salam Mən Sənan
        </h1>
      </div>
      <br/>
      <div className="buttons">
        <button onClick={handleShowText}>Yazını Göstər</button>
        <button onClick={handleToggleRed}>Stili Dəyiş (Qırmızı)</button>
        <button onClick={handleToggleItalic}>Stili Dəyiş (Kursiv)</button>
      </div>
    </div>
  );
}

export default App;