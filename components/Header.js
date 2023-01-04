import {Fragment, useState} from 'react'
import Link from 'next/link'
import {Dialog, Transition} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const navList = [
        {
            name: "About",
            href: "/about"
        },
    ]

return(
    <div className="flex bg-slate-900 shadow-md shadow-slate-700 items-center justify-between p-6">
        <Link href="/#" className="text-slate-200">hangboard timer</Link>
        <section id="desktop-menu" className='hidden md:block'>
            {navList.map((item)=> (
                <Link key={item.name} href={item.href} className="px-3 hover:underline underline-offset-8">{item.name}</Link>
            ))}
        </section>
        <section id="mobile-sidebar" className="md:hidden">
                <button onClick={()=> setSidebarOpen(true)}>
                    <Bars3Icon className='w-5 h-5'/>
                </button>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 " onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>
                        <div className="fixed top-20 inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex w-full max-w-[85%] flex-1 flex-col overflow-y-auto overflow-y-auto bg-slate-800 pt-5 pb-4">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 pt-2">
                                            <button
                                                type="button"
                                                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() => setSidebarOpen(false)}
                                            >
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="pl-6 text-slate-200">
                                        { navList.map((item)=> (
                                                <Link key={item.name} href={item.href} onClick={()=> setSidebarOpen(false)} className="block p-3">{item.name}</Link>
                                        ))}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
            </section>
        </div>
)
}