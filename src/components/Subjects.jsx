import React, { useState } from 'react'
const male = new URL('../assets/businessman-signing-contract.png', import.meta.url).href
const female = new URL('../assets/female-teacher.png', import.meta.url).href
function Subjects() {
    const [isExpanded, setExpanded] = useState(false)

    const handleInputChange = (event) => {
        setExpanded(!isExpanded)
    }

    return (
        <div className='flex justify-center'>
            <div className='flex mt-48 justify-center align-center'>
                <div className='flex m-8'>
                    <img src={male} alt="vector" />
                </div>
                <div className='w-5/6 flex flex-col justify-center'>
                    <h2 className="text-5xl mb-20 font-black text-center text-gray-900 sm:text-5xl">Modules Enseignés</h2>
                    <div className='bg-white shadow-2xl rounded-lg'>
                        <div className="collapse collapse-arrow bg-white">
                            <input type="radio" name="my-accordion-1" onClick={handleInputChange} />
                            <div className="collapse-title text-xl font-medium text-gray-900">
                                Filière DUT : Informatique et gestion des entreprises IGE
                            </div>
                            <div className="collapse-content text-gray-700">
                                <p> Module : M1 Français (Semestre 1)</p>
                            </div>

                        </div>
                        <div className="collapse collapse-arrow bg-white">
                            <input type="radio" name="my-accordion-1" onChange={handleInputChange} />
                            <div className="collapse-title text-xl font-medium text-gray-900">
                                Filière DUT : Informatique et gestion des entreprises IGE
                            </div>
                            <div className="collapse-content text-gray-700">
                                <p>Module 5 : TEC (Semestre 2)</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-white">
                            <input type="radio" name="my-accordion-1" onChange={handleInputChange} />
                            <div className="collapse-title text-xl font-medium text-gray-900">
                                Filière : DUT Informatique et gestion des entreprises IGE
                            </div>
                            <div className="collapse-content text-gray-700">
                                <p>Module 11: Communication d’entreprise ( Semestre 3)</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-white">
                            <input type="radio" name="my-accordion-1" onChange={handleInputChange} />
                            <div className="collapse-title text-xl font-medium text-gray-900">
                                Filière : Licence Informatique et Gestion des entreprises
                            </div>
                            <div className="collapse-content text-gray-700">
                                <p>Module 5 Communication en contexte professionnel (Semestre 5)</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-white">
                            <input type="radio" name="my-accordion-1" onChange={handleInputChange} />
                            <div className="collapse-title text-xl font-medium text-gray-900">
                                Filière :DUT  Génie Electrique  et Energies Renouvelables (GEER2 ,  S4)
                            </div>
                            <div className="collapse-content text-gray-700">
                                <p>Module 14  communication professionnelle Semestre 4 </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-white">
                            <input type="radio" name="my-accordion-1" onChange={handleInputChange} />
                            <div className="collapse-title text-xl font-medium text-gray-900">
                                Filière :DUT  Génie Electrique  et Energies Renouvelables (GEER2 ,  S4)
                            </div>
                            <div className="collapse-content text-gray-700">
                                <p>Module 14  communication professionnelle Semestre 4 </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-white">
                            <input type="radio" name="my-accordion-1" onChange={handleInputChange} />
                            <div className="collapse-title text-xl font-medium text-gray-700">
                                Filière : DUT Techniques de vente et service client TVSC
                            </div>
                            <div className="collapse-content text-gray-700">
                                <p> Module 13    : Psychologie d la communication et des organisations Semestre 4</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex mt-20'>
                    <img src={female} alt="vector" />
                </div>
            </div>
        </div >
    )
}

export default Subjects
