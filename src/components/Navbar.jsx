import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom"
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Icon } from '@iconify/react';
import { Button } from 'react-scroll';
import { AuthContext } from "/src/context/AuthContext.jsx";

const navigation = [
    { name: 'Acceuil', href: '/' },
    { name: 'Cours', href: '/cours' },
    { name: 'Contact', href: '/contact' }
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]
const logo = new URL('../assets/logo.png', import.meta.url).href

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const { authState } = useContext(AuthContext);
    return (
        <>
            <div className="h-full">
                <Disclosure as="nav" className="h-28 shadow-xl bg-blue-900">
                    {({ open }) => (
                        <>
                            <div className="mx-auto align-center max-w-9xl px-4 sm:px-6 ">
                                <div className="flex pt-3 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 rounded">
                                            <img
                                                className="h-20 w-18"
                                                src={logo}
                                                alt="Your Company"
                                            />
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-5 flex flex-end items-baseline space-x-50">
                                                {navigation.map((item) => (
                                                    <Link
                                                        to={item.href}
                                                        key={item.name}
                                                        className={'text-white hover:text-gray-300 ml-8 rounded-md px-3 py-2 text-lg font-medium'}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-end mr-20">
                                        {!authState.isAuthenticated ?
                                            <Link
                                                to="/login"
                                                className='btn border-none bg-gray-100 hover:bg-gray-300 text-gray-700 hover:text-gray-00 ml-8 rounded-md px-8 font-medium'
                                            >
                                                Login <Icon icon="solar:login-2-bold" />
                                            </Link> :
                                            <Link
                                                to="/logout"
                                                className='btn border-none bg-gray-100 hover:bg-gray-300 text-gray-700 hover:text-gray-00 ml-8 rounded-md px-8 font-medium'
                                            >Logout <Icon icon="solar:logout-2-bold" /></Link>
                                        }
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="space-y-1 px-25 pb-3 pt-2 sm:px-3">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block rounded-md px-3 py-2 text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                                <div className="border-t border-gray-700 pb-3 pt-4">
                                    <div className="mt-3 space-y-1 px-2">
                                        {userNavigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    )
}


