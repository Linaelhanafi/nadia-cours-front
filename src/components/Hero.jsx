import React from 'react'
import { Link as RouterLink } from "react-router-dom"
import { Link as ScrollLink } from 'react-scroll';
import { Icon } from '@iconify/react';
const background = new URL('../assets/background.jpg', import.meta.url)

function Hero() {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8 bg-local "
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '1000px',
                position: 'relative'
            }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.5)'
            }}>
                <div className="mx-auto max-w-5xl py-48 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-4xl font-black text-gray-900 sm:text-6xl">
                            Cours de communication, de méthodologie et de psychologie des organisations
                        </h1>
                        <p className="font-medium mt-6 text-lg leading-8 text-gray-600">
                            Par <span className="font-black">Mme Nadia El Ouesdadi</span> Professeur de l’enseignement supérieur à l’université Mohammed 1er d’Oujda
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <RouterLink
                                to="/cours"
                                className="rounded-md cursor-pointer px-4 py-2.5 bg-blue-900 hover:bg-blue-800 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            ><div className='flex justify-center items-center'>Cours<Icon icon="mdi:learn-outline" className='ml-2' /></div></RouterLink>
                            <ScrollLink activeClass="active"
                                to="Bio"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="text-sm font-semibold leading-6 cursor-pointer text-gray-900">
                                Savoir Plus <span aria-hidden="true">→</span>
                            </ScrollLink>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Hero
