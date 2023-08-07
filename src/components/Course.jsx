import React from 'react'
import { Icon } from '@iconify/react';


function Course({ name, section, subject, file }) {
    return (
        <div className="card w-80 flex flex-col shadow-xl">
            <div className='h-36 align-items'>
                <figure className="h-36 bg-white">
                    <Icon icon="bxs:file-pdf" width="100" height="100" />
                </figure>
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title ">{name}</h2>
                <div className='flex flex-col space-y-4 aljustify-center'>
                    <div className="bg-blue-900 shadow rounded p-2 w-64 text-lg font-black">{section}</div>
                    <div className="bg-gray-500 shadow rounded p-2 text-sm text-white font-base">{subject}</div>
                </div>
                < div className="card-actions mt-5" >
                    <a href={`${import.meta.env.VITE_APP_API_BASE_URL}/Course/getCourse/${file._id}`} className="btn text-white border-none bg-blue-900 hover:bg-blue-800" download target='blank'>Télécharger <Icon icon="solar:download-outline" /></a>
                </div >
            </div >
        </div >
    )
}

export default Course
