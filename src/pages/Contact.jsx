import React, { useState } from 'react'
import { useFormik } from 'formik';
import { sendEmail } from '../helpers/courseApi.js'
import { useMutation } from '@tanstack/react-query'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const vector = new URL('../assets/man-talking-on-phone.png', import.meta.url).href
const icon = new URL('../assets/contact-icon.png', import.meta.url).href

function Contact() {
    const createPostMutation = useMutation(sendEmail)
    const formik = useFormik({
        initialValues: {
            prenom: '',
            nom: '',
            filiere: '',
            email: '',
            numtel: '',
            message: ''
        },
        onSubmit: async (values) => {
            try {
                await createPostMutation.mutateAsync(values);
                formik.resetForm();
            } catch (error) {
                console.error('Error submitting the form:', error);
            }
        },
    })
    return (
        <>
            <Navbar />
            <div className='flex justify-center align-center w-11/12 mt-10'>
                <div className='w-1/2 m-5'>
                    <img src={vector} alt="vector" />
                </div>
                <div className="px-6 py-24  sm:py-32 lg:px-8 w-3/6 rounded h-84 shadow-xl">
                    <div className="mx-auto text-center max-w-xl">
                        <h1 className="flex justify-center font-bold tracking-tight text-gray-900 sm:text-4xl">Contact <img src={icon} height={"1em"} width={"40em"} alt="icon" className='ml-3' /></h1>
                        <p className="mt-5 font-semibold text-lg leading-8 text-gray-600">
                            Pour toute aide concernant le cours, n'hésitez pas à me contacter. Je suis disponible pour vous aider et répondre à vos questions.
                        </p>
                    </div>
                    <form method="POST" onSubmit={formik.handleSubmit} className="mx-auto text-start mt-10 ">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Prénom
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="prenom"
                                        id="prenom"
                                        autoComplete="given-name"
                                        className="block w-full bg-gray-300 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={formik.handleChange}
                                        value={formik.values.prenom}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Nom
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="nom"
                                        id="nom"
                                        autoComplete="family-name"
                                        className="block w-full bg-gray-300 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={formik.handleChange}
                                        value={formik.values.nom}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="filiere" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Filière
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="filiere"
                                        id="filiere"
                                        className="block w-full bg-gray-300 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={formik.handleChange}
                                        value={formik.values.filiere}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Adresse Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="block w-full bg-gray-300 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Numéro de Téléphone
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="tel"
                                        name="numtel"
                                        id="numtel"
                                        autoComplete="email"
                                        className="block w-full bg-gray-300 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={formik.handleChange}
                                        value={formik.values.numtel}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        className="block w-full bg-gray-300 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={formik.handleChange}
                                        value={formik.values.message}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="block w-full justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact
