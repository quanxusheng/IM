import { useState } from "react";


function useSignUp() {
    const [loading, setloading] = useState(false)

    const signUp = (form: any) => {
        console.log('=>form', form)
    }

    return {
        loading,
        signUp
    }

}

export default useSignUp