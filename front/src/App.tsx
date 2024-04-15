import { useState } from 'react'

import Router from '@/router'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className='p-4 h-screen flex items-center justify-center'>
                <Router />
            </div>
        </>
    )
}

export default App
