import {
    NavLink,
    Outlet,
} from 'react-router-dom'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { LogoutIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { classNames } from './utils'
import Wallet from './providers/Wallet'
import Footer from './components/Footer'
import Mark from './components/Mark'

const navigation = [
    { name: 'Token', href: '/token' },
    { name: 'Products', href: '/products' },
    { name: '<Operator />', href: '/operator' },
  ]

const App = () => {
    return (
        <Wallet.Consumer>
            {({ isConnected, disconnect, chain: walletChain, walletAddr }) => (
                <>
                    <div className="flex flex-col bg-gray-50 overflow-hidden min-h-[95vh]">
                        <Popover>
                            <div className="w-full pt-6 px-4 sm:px-6">
                                <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
                                    <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                                        <div className="flex items-center justify-between w-full md:w-auto">
                                            <NavLink to="/">
                                                <Mark className="h-8 w-auto sm:h-10 text-black" />
                                            </NavLink>
                                            <div className="-mr-2 flex items-center md:hidden">
                                                <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex md:space-x-10">
                                        {navigation.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                to={item.href}
                                                className={({isActive}) => {
                                                    return classNames(
                                                        isActive
                                                            ? 'text-gray-900'
                                                            : 'text-gray-400 hover:text-gray-900 transition-colors ease-in-out duration-300',
                                                        'font-bold',
                                                    )
                                                }}
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                    {isConnected && (
                                        <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                                            <span className="inline-flex rounded-md shadow">
                                                <span
                                                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-bold rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                                                >
                                                    <div className="inline-flex items-center space-x-1 text-sm">
                                                        {walletChain && (
                                                            <span className="">{walletChain}</span>
                                                        )}
                                                        {walletAddr && (
                                                            <span className="truncate w-36">{walletAddr}</span>
                                                        )}
                                                        <LogoutIcon className="flex shrink-0 w-4 h-4 cursor-pointer" onClick={disconnect} />
                                                    </div>
                                                </span>
                                            </span>
                                        </div>
                                    )}
                                </nav>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="duration-150 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Popover.Panel
                                    focus
                                    className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                                >
                                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="px-5 pt-4 flex items-center justify-between">
                                            <div>
                                                <img
                                                    className="h-8 w-auto"
                                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                />
                                            </div>
                                            <div className="-mr-2">
                                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className="px-2 pt-2 pb-3">
                                            {navigation.map((item) => (
                                                <NavLink
                                                    key={item.name}
                                                    to={item.href}
                                                    className="block px-3 py-2 rounded-md text-base font-bold text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                                >
                                                    {item.name}
                                                </NavLink>
                                            ))}
                                        </div>
                                        <span
                                            className="block w-full px-5 py-3 text-center font-bold text-indigo-600 bg-gray-50 hover:bg-gray-100"
                                        >
                                            Connect
                                        </span>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                        <main className="px-4">
                            <Outlet />
                        </main>
                    </div>
                    <Footer />
                </>
            )}
        </Wallet.Consumer>
    )
}

export default App
