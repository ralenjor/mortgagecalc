import { useState } from 'react'
import './App.css'

function App() {

const [balance, setBalance] = useState(0);
const [rate, setRate] = useState(0);
const [term, setTerm] = useState(30);

const [monthlyPayment, setMonthlyPayment] = useState(0);

const calculatePayment = () => {
  if (!balance || !rate) return 0;

  const monthlyRate = (rate / 100) / 12;
  const numberOfPayments = term * 12;

  const numerator = balance * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments);
  const denominator = Math.pow(1 + monthlyRate, numberOfPayments) - 1;

  const result = (numerator / denominator)

  setMonthlyPayment(result);

}

  return (
      <div className="calculator-card">
    <h1>Mortgage Calculator</h1>
      <div className="input-group">
        <label>Loan Balance: </label>
        <input type="number" 
         value={balance}
         data-testid="balance"
         onChange={(e) => setBalance(Number(e.target.value))} />
      </div>
        
      <div className="input-group">
        <label>Annual Percentage Rate: </label>
        <input type="number"
         value={rate}
         data-testid="rate"
         step="0.01"
         onChange={(e) => setRate(Number(e.target.value))} />
      </div>
      <div className="input-group">
      <label>Loan Term: </label>
      <select
      value={term}
      onChange={(e) => setTerm(Number(e.target.value))}
      data-testid="term"
    >
      <option value={15}>15 Year</option>
      <option value={30}>30 Year</option>
      </select>
    </div>
    <button
      onClick={calculatePayment}
      style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}
      data-testid="submit"
    >
      Calculate Payment
      </button>
    <div id="output" data-testid="output" style={{ marginTop: '30px', fontWeight: 'bold' }}>
    <span>${monthlyPayment.toFixed(2)} is your payment</span>
    </div>
    </div>
  );
  }

export default App
