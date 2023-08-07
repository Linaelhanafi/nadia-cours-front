import React, { useState, useContext } from 'react'
import axios from "axios"
import { AuthContext } from '../context/AuthContext'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

const background = new URL('../assets/etudiants-pause-cafe.jpg', import.meta.url)
const logo = new URL('../assets/logo_m1.png', import.meta.url)

function Authentification() {
    const { setAuthState } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = async ({ email, password }) => {
        try {
            console.log({ email, password }, setAuthState, navigate)
            const response = await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}/User/login`, { email, password });
            console.log(response.data)
            localStorage.setItem('token', response.data.token);
            setAuthState(prevState => ({
                ...prevState,
                isAuthenticated: true,
                token: response.data.token
            }));
            navigate('/');
        } catch (error) {
            alert("Email or Password invalid")
            console.log(error)
        }
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            await handleLogin(values)
        }
    })

    return (
        <div className='flex'>
            <div className="bg-local"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100vh'
                }}>
            </div>
            <div className='flex flex-col w-full bg-gray-100'>
                <div className='w-full h-full items-center'>
                    <div className='m-10 flex justify-center'>
                        <img src={logo} alt="vector" height={"450px"} width={"450px"} />
                    </div>
                    <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                        Bienvenu à la platforme de Pr.Ouesdadi Nadia
                    </h2>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={formik.handleSubmit} method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Adresse Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full bg-gray-200 rounded-md border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mot de Passe
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full bg-gray-200 rounded-md border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm bg-blue-900 hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Se connecter
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <footer className="footer footer-center p-4 flex justify-center items-end text-base-content">
                    <div>
                        <p>Copyright © 2023 - All right reserved by <a className='text-gray-500' href='https://www.linkedin.com/in/lina-elhanafi/'>Lina El Hanafi</a></p>
                    </div>
                </footer>
            </div>
        </div>

    )
}

export default Authentification
