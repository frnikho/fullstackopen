import { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'

const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} name="good"/>
      <Button onClick={() => setNeutral(neutral + 1)} name="neutral"/>
      <Button  onClick={() => setBad(bad + 1)} name="bad"/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App