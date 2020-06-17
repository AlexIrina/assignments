import { useState, useEffect, useRef } from 'react';
const useGameLogic = (startingTime = 5) => {
  const [text, setText] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textAreaRef = useRef(null);

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  useEffect(() => {
    if (timeRemaining > 0 && isTimeRunning) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  const calculateNumOfWords = (text) => {
    const wordsArr = text.trim().split(' ');
    return wordsArr.filter((word) => word !== '').length;
  };

  const startGame = () => {
    setIsTimeRunning(true);
    setTimeRemaining(startingTime);
    setText('');
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
  };

  const endGame = () => {
    setIsTimeRunning(false);
    setWordCount(calculateNumOfWords(text));
  };
  return {
    textAreaRef,
    text,
    handleChange,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
  };
};

export default useGameLogic;
/**
 * Challenge:
 *
 * Move the "business logic" into a custom hook, which will provide
 * any parts of state and any functions to this component to use.
 *

**/
