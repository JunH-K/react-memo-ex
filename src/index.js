import React, {memo, useCallback} from 'react'
import ReactDOM from 'react-dom'
//react memo - props 변경시에만 rerender
const Button = memo(({increment, count}) => {
  console.log('Button')
  return <button onClick={increment}>The count is {count}</button>
})

const Button2 = memo(({increment, count}) => {
  console.log('Button 2')
  return <button onClick={increment}>The count is {count}</button>
})

const App = () => {
  return <Counter />
}

function Counter() {
  const [count, setCount] = React.useState(0)
  const [count2, setCount2] = React.useState(0)

  const increment = useCallback(() => setCount((c) => c + 1), [])
  const increment2 = useCallback(() => setCount2((c) => c + 1), [])

  return (
    <div>
      <Button increment={increment} count={count} />
      <Button2 increment={increment2} count={count2} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
