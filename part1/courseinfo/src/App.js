import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const App = () => {

  const course = 'Half Stack application development'
  const parts = [{name: 'Fundamentals of React', exercice: 10}, {name: 'Using props to pass data', exercice: 7}, {name: 'State of a component', exercice: 14}]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total total={parts.reduce((a, b) => a + b.exercice, 0)}/>
    </div>
  )
}

export default App