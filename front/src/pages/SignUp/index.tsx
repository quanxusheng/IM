import { useState } from "react";

import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {

    const [inputs, SetInputs] = useState({
        userName: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const handleCheckboxChange = (gender: any) => {
        console.log('=>', gender)
        SetInputs({
            ...inputs,
            gender
        })
    }

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">ChatApp</h1>
                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">userName</span>
                        </label>
                        <input type="text" placeholder="userName" className="w-full input input-bordered h-10"
                            value={inputs.userName}
                            onChange={e => SetInputs({ ...inputs, userName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">password</span>
                        </label>
                        <input type="text" placeholder="password" className="w-full input input-bordered h-10"
                            value={inputs.password}
                            onChange={e => SetInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">confirmPassword</span>
                        </label>
                        <input type="text" placeholder="confirmPassword" className="w-full input input-bordered h-10"
                            value={inputs.confirmPassword}
                            onChange={e => SetInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>
                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
                </form>
            </div>

        </div>
    )
}

export default SignUp