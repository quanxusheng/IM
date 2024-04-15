import { useState } from 'react'
import { useNavigate } from 'react-router-dom'




const Login = () => {
    const to = useNavigate()
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const submitForm = () => {
        console.log('=>form', form)
        to('/chat', {
            state: '123'
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                value={form.email}
                                onChange={e => setForm({ ...form, email: e.target.value })}
                                type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                value={form.password}
                                onChange={e => setForm({ ...form, password: e.target.value })}
                                type="password" placeholder="password" className="input input-bordered" />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={() => submitForm()} className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;
