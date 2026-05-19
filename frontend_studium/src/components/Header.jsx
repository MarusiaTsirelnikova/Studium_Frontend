import { useState } from 'react'

import RoleSwitcher from './RoleSwitcher'
import { useUser } from '../userContext'

function Header () {
    const { user } = useUser()

    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="h-12.5 md:px-26 px-5 flex mb-12.5 sticky top-0 z-1000 bg-white outline outline-gray-300">
            <nav className="flex w-full justify-between items-center">
                <div className="text-2xl font-bold">
                    Studium
                </div>

                   
                <div className="hidden md:flex space-x-6">
                    <a href="/profile" className="hover:text-green-700">Профиль</a>
                    <a href="/tasks" className="hover:text-green-700">Проекты</a>
                    <a href="/chats" className='hover:text-green-700'>Чаты</a>
                    {user.role === 'student' &&
                        <a href="/studium-store" className='hover:text-green-700'>Магазин</a>
                    }
                </div>

                    
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden  focus:outline-none"
                    >
                    {isOpen ? '✕' : '☰'}
                </button>

                <div className="">
                    $ 0
                </div>

                
                {isOpen && (
                    <div className="md:hidden pt-25 space-y-2 flex flex-col text-white bg-gray-800">
                        <a href="/profile" className="hover:text-gray-400">Профиль</a>
                        <a href="/tasks" className="hover:text-gray-400">Проекты</a>
                        {user.role === 'moderator' &&
                            <a href="/users" className="hover:bg-gray-700">Пользователи</a>
                        }
                    </div>
                )}
            </nav>

            <RoleSwitcher />
        </header>
    )
}

export default Header