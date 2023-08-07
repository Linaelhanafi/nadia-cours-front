import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

const profil = new URL('../assets/Nadia_El_Ouesdad.png', import.meta.url).href

function Bio() {
    return (
        <div id="Bio" className='flex flex-col justify-center items-center mt-48'>
            <h2 className="text-9xl mb-20 font-black text-center text-gray-900 sm:text-5xl">Notice biobibliographique</h2>
            <div className='flex shadow-2xl justify-center '>
                <div className='flex justify-center'>
                    <div className="avatar mr-30">
                        <div className="w-96 mask mask-squircle">
                            <img src={profil} />
                        </div>
                    </div>
                    <div className="card w-1/2 my-16 lg:card-side">
                        <div className="card-body">
                            <h2 className="text-2xl font-bold  text-gray-900 sm:text-2xl">Nadia El Ouesdadi</h2>
                            <p className="font-medium mt-6 text-lg leading-8 text-gray-600"> Née à Oujda, Professeur de l’enseignement supérieur à l’université Mohammed 1er d’Oujda - Maroc.
                                Titulaire d’un doctorat en littérature générale et comparée ,
                                Sujet de thèse : Poétique et esthétique de l’objet dans l’écriture de Jean Tardieu.
                                Ses travaux de recherche couvrent un spectre large d’intérêts. Outre la poésie et la critique littéraire,
                                elle oriente actuellement ses travaux vers la didactique du français et les humanités numériques.
                                Enseignante à l’Ecole Supérieure de Technologie où elle assure des cours de communication, de méthodologie et de psychologie des organisations .
                            </p>
                            <div className="card-actions justify-end">
                                <Link to="/contact" className="btn text-white border-none bg-blue-900 hover:bg-blue-800">Contact  <Icon icon="teenyicons:contact-solid" /></Link>
                            </div>
                        </div>
                    </div>
                </ div>
            </div>
        </div>
    )
}

export default Bio
