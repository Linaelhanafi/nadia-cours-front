import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getCourses } from '../helpers/courseApi.js'
import Course from '../components/Course'


function Courses() {
  const { isLoading, isError, data, error } = useQuery({ queryKey: ['courses'], queryFn: getCourses })

  const [courses, setCourses] = useState()
  const [section, setSection] = useState("TOUS")
  const [search, setSearch] = useState("")


  const filterCourses = () => {
    return data?.courses.filter((course) => {
      const sectionMatch = section === "TOUS" || course.section.toLowerCase() === section.toLowerCase();
      const searchMatch = search === "" || course.name.toLowerCase().includes(search.toLowerCase());

      return sectionMatch && searchMatch;
    })
  }

  useEffect(() => {
    setCourses(filterCourses())
  }, [section, search, data])

  return (
    <div className='flex m-10 items-center'>
      <div className='h-72 w-72 mx-20 my-20  self-start rounded shadow-2xl'>
        <h2 className='bg-blue-900 text-white text-center shadow rounded p-2 mb-2 text-lg font-black'>Filière</h2>
        <div className='my-5 mx-5'>
          <div className='flex flex-col items-center'>
            <div className=" form-control w-48">
              <label className="label">
                <span className="text-black text-start rounded p-2 mr-5 text-lg font-semibold">Tous</span>
                <input type="radio" name="section" value="TOUS" defaultChecked className="radio cursor-pointer checked:bg-blue-900 border-blue-900" onChange={(e) => { setSection(e.target.value) }} />
              </label>
            </div>
            <div className=" form-control w-48">
              <label className="label ">
                <span className="text-black text-start rounded p-2 mr-5 text-lg font-semibold">Dut</span>
                <input type="radio" name="section" value="DUT" className="radio cursor-pointer border checked:bg-blue-900 border-blue-900" onChange={(e) => { setSection(e.target.value) }} />
              </label>
            </div>
            <div className="form-control w-48">
              <label className="label">
                <span className="text-black text-start rounded p-2  mr-5 text-lg font-semibold">Licence</span>
                <input type="radio" name="section" value="LICENCE" className="radio cursor-pointer border checked:bg-blue-900 border-blue-900" onChange={(e) => { setSection(e.target.value) }} />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='flex flex-col items-center justify-center'>
          <div className="flex flex-row items-center w-11/12 mb-8 ">
            <div className='flex-none'>
              <p className='text-xl'><span className='font-bold text-xl'>{courses?.length || 0}</span> Cours Trouvés</p>
            </div>
            <div className='flex-grow'></div>
            <div className="flex-none form-control items-center">
              <div className="input-group">
                <input type="text" placeholder="Search…" value={search} className="input input-bordered bg-gray-200 ml-10" onChange={(e) => { setSearch(e.target.value) }} />
                <button className="btn btn-square bg-gray-200 border-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="btn btn-square border-none h-6 w-6 bg-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
              </div>
            </div>
          </div>
          <div>
            {isLoading ?
              (<center><span className="w-20 h-20  loading loading-spinner"></span></center>) :
              <div className='grid grid-cols-3 gap-10 h-full'>
                {courses?.map((course) => {
                  return (
                    <Course key={course._id} {...course} />
                  )
                })
                }
              </div>}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Courses
