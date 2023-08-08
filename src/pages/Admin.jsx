import React, { useEffect, useContext } from 'react'
import { AuthContext } from "/src/context/AuthContext.jsx";
import { useQuery, useMutation } from '@tanstack/react-query'
import { getCourses, deleteCourse } from '../helpers/courseApi.js'
import { Icon } from '@iconify/react';
import { Link, useNavigate } from "react-router-dom"
import { useFormik } from 'formik';
import axios from "axios"

function Admin() {
    const navigate = useNavigate()
    const { authState } = useContext(AuthContext)
    const uploadFileMutation = useMutation(async (formData) => {

        await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}/Course/uploadCourse`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    });

    const initialValues = {
        name: '',
        subject: '',
        section: "",
        file: null,
    };

    const onSubmit = async (values) => {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('subject', values.subject);
        formData.append('section', values.section);
        formData.append('file', values.file);

        try {
            await uploadFileMutation.mutateAsync(formData);
            alert("file uploded")
        } catch (error) {
            alert(e)
            console.log(e)
        }
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
    });
    const { isLoading, isError, data, error } = useQuery({ queryKey: ['coursesadmin'], queryFn: getCourses })
    const mutation = useMutation((id) => { deleteCourse(id) },
        {
            onSuccess: () => {
                alert('course deleted')
            },
        }
    );
    useEffect(() => {
        if (!authState.isAuthenticated) {
            navigate('/login');
        }
    }, [navigate])
    return (<>
        <div className="h-24 navbar w-full flex justify-center bg-blue-900">
            <h1 className="text-white text-3xl w-full justify-center rounded-md px-3 py-2 font-bold">Admin</h1>
            <div className='flex flex-end float-right'>
                <Link
                    to="/logout"
                    className='btn border-none bg-gray-100 hover:bg-gray-300 text-gray-700 hover:text-gray-700 mr-20 rounded-md px-6 font-medium'
                >Logout <Icon icon="solar:logout-2-bold" /></Link>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <div className="flex flex-col justify-center items-end">
                <div className=''>
                    <button className="btn my-10 bg-blue-900 text-white" onClick={() => window.my_modal_1.showModal()}>Ajouter un cours</button>
                    <dialog id="my_modal_1" className="modal">
                        <form method="dialog" onSubmit={formik.handleSubmit} className="modal-box flex flex-col justify-center items-center bg-gray-100">
                            <h2 className="flex justify center text-gray-500 font-bold text-3xl mb-8">Ajouter un cours</h2>
                            <div className="flex flex-col">
                                <label className='pb-4 mr-5 text-lg'>Nom du cours</label>
                                <input type="text" placeholder="" className="input bg-gray-300 input-bordered w-full max-w-xs text-black" name="name" value={formik.values.name} onChange={formik.handleChange} />
                                <label className='py-4 mr-5 text-lg'>Filière</label>
                                <input type="text" placeholder="" className="input bg-gray-300 input-bordered w-full max-w-xs text-black" name='section' value={formik.values.section} onChange={formik.handleChange} />
                                <label className='py-4 mr-5 text-lg'>Module</label>
                                <input type="text" placeholder="" className="input bg-gray-300 input-bordered w-full max-w-xs text-black" name="subject" value={formik.values.subject} onChange={formik.handleChange} />
                                <label className='py-4 mr-5 text-lg'>Cours</label>
                                <input type="file" className="file-input file-input-bordered bg-gray-300 w-full max-w-xs text-black" name="file" onChange={(event) => {
                                    formik.setFieldValue('file', event.currentTarget.files[0]);
                                }} />
                            </div>
                            <button type="submit" className="btn flex justify-center items-center border-none text-white m-10 py-4 px-10 bg-blue-900" >Ajouter</button>
                        </form>
                    </dialog >
                </div>
                <table className="table overflow-x-auto bg-gray-100 shadow-xl rounded">
                    <thead >
                        <tr className='text-lg text-gray-600'>
                            <th>Nom</th>
                            <th>Filières</th>
                            <th>Modules</th>
                            <th>Cours</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.courses.map((course, i) => {
                                return (<tr key={course._id} className='text-black'>
                                    <th>{course.name}</th>
                                    <td>{course.section}</td>
                                    <td>{course.subject}</td>
                                    <td>{course.file.filename}</td>
                                    <td><button onClick={() => { mutation.mutate(course._id) }}><Icon icon="mdi:trash" className='text-blue-900' width="30" height="30" /></button></td>
                                </tr>)
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div >
    </>
    )
}

export default Admin
