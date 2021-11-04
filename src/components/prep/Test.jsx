
import { useState, useEffect } from 'react';


const Test = () => {
    
const [count, setCount] = useState(0)

useEffect(() => {
    // This can be seen as componentDidMount componentWillUnmount componentDidUpdate
    document.title = `you have punched ${count} times`
})

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click here</button>
        </div>
    )

}

export default Test