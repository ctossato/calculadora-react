import { Conteiner, Content, Row } from './styles';
import Button from './components/Button'
import Input from './components/Input'
import { useCallback, useState } from 'react';



function App() {
  const [currentNumber, setcurrentNumber] = useState(0);
  const [firstOperator, setfirstOperator] = useState(null);
  const [operation, setOperation] = useState(null);
  const [displayingResult, setdisplayingResult] = useState(false);

  const handleAddNumber = (number) => {
    if (displayingResult){
      setcurrentNumber(prev => `${number}`)
      setdisplayingResult(false)
    } else {
      setcurrentNumber(prev => `${prev == '0' ? '' : prev}${number}`)
      
    }
  }

  const handleOnClear = () => {
    setcurrentNumber(0)
    setfirstOperator(null);
    setdisplayingResult(false)
  }

  // const handleDisplayChange = useCallback(() => {




  // }, [result, currentNumber, displayingResult])

  const handleSumOperation = () => {
    if (firstOperator == null) {
      setfirstOperator(currentNumber);
      setcurrentNumber(0);
      setOperation('+');
    } else {
      setcurrentNumber(prev => Number(currentNumber)+Number(firstOperator))
      setfirstOperator(null);
      setOperation('');
      setdisplayingResult(true)
    }
  }

  const handleMinusOperation = () => {
    if (firstOperator == null) {
      setfirstOperator(currentNumber);
      setcurrentNumber(0);
      setOperation('-');
    } else {
      setcurrentNumber(prev => Number(firstOperator)-Number(prev))
      setfirstOperator(null);
      setOperation('');
      setdisplayingResult(true)
    }
  }

  const handleMultiplicationOperation = () => {
    if (firstOperator == null) {
      setfirstOperator(currentNumber);
      setcurrentNumber(0);
      setOperation('*');
    } else {
      setcurrentNumber(prev => Number(firstOperator)*Number(prev))
      setfirstOperator(null);
      setOperation('');
      setdisplayingResult(true)
    }
  }

  const handleDivisionOperation = () => {
    if (firstOperator == null) {
      setfirstOperator(currentNumber);
      setcurrentNumber(0);
      setOperation('/');
    } else {
      setcurrentNumber(prev => Number(firstOperator)/Number(prev))
      setfirstOperator(null);
      setOperation('');
      setdisplayingResult(true)
    }
  }

  const handleOnEqual = () => {
    switch (operation) {
      case '+':
        handleSumOperation();
        break;
      case '-':
        handleMinusOperation();
        break;
      case '*':
        handleMultiplicationOperation();
        break;
      case '/':
        handleDivisionOperation();
        break;
      default:
        break;
    }

  }

  


  return (
    <Conteiner>
        <Content>
          <Input value={currentNumber}/>
          <Row>
              <Button label="1" onClick={() => handleAddNumber('1')} />
              <Button label="2" onClick={() => handleAddNumber('2')} />
              <Button label="3" onClick={() => handleAddNumber('3')} />
              <Button label="+" onClick={() => handleSumOperation()}/>
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')} />
            <Button label="5" onClick={() => handleAddNumber('5')} />
            <Button label="6" onClick={() => handleAddNumber('6')} />
            <Button label="-" onClick={() => handleMinusOperation()}/>
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')} />
            <Button label="8" onClick={() => handleAddNumber('8')} />
            <Button label="9" onClick={() => handleAddNumber('9')} />
            <Button label="*" onClick={() => handleMultiplicationOperation()}/>
          </Row>
          <Row>
            <Button label="0" onClick={() => handleAddNumber('0')} />
            <Button label="C" onClick={() => handleOnClear()} />
            <Button label="=" onClick={() => handleOnEqual()} />
            <Button label="/" onClick={() => handleDivisionOperation()}/>
          </Row>
        </Content>
    </Conteiner>
  );
}

export default App;
