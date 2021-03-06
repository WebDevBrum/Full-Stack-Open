import React, { useState } from 'react'

const Button = ({text, value, set}) => {
  return (
    <button onClick={() => set(value + 1)}>{text}</button>
  )    
}

const StatisticLine = ({text, value, symbol}) => {

  return (
    <p>{text} {value} {symbol}</p>
  )
  
}

const Statistics = ({good, bad, neutral}) => {

  const all = good + neutral + bad

  return (
    all ? 
    <div>
      <h1>statistics</h1> 
      <table>
        <tr><StatisticLine text={"good"} value={good} /></tr>
        <tr><StatisticLine text={"neutral"} value={neutral} /></tr>
        <tr><StatisticLine text={"bad"} value={bad} /></tr>
        <tr><StatisticLine text={"all"} value={all} /></tr>
        <tr><StatisticLine text={"average"} value={(good - bad )/ (all)} /></tr>
        <tr><StatisticLine text={"positive"} value={((good / (all)) * 100)} symbol={"%"}/></tr>
      </table>
    </div>
      :
      <p>No feedback given</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button text={"good"} value={good} set={setGood}/>
        <Button text={"neutral"} value={neutral} set={setNeutral}/>
        <Button text={"bad"} value={bad} set={setBad}/>
      </div>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App