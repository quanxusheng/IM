import { useState } from "react";

import axios from 'axios'


function useSignUp() {
    const [loading, setloading] = useState(false)

    const signUp = async (form: any) => {
        console.log('=>form', form)
        setloading(true)
        const data = await axios.post('/api/signUp', form)
        console.log('=>data', data)
        // setTimeout(() => {
        //     setloading(false)
        // }, 2000)
    }

    return {
        loading,
        signUp
    }

}

export default useSignUp