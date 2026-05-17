import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'


function TaskModal ({ onClose, type }) {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [subtext, setSubtext] = useState('')

    useEffect (() => {
        switch (type) {
            case 'create':
                setTitle('Задача была создана!')
                setText('После прохождения модерации, задача станет доступна исполнителям')
                setSubtext('Созданную задачу Вы сможете найти в разделе "На модерации". Задача останется доступной для редактирования')
                break
            case 'moderation':
                setTitle('Задача была опубликована!')
                setText('Теперь задача доступна исполнителям')
                setSubtext('Задачу Вы сможете найти в разделе "Текущие проекты". Задача останется доступной для редактирования')
                break
            case 'edit':
                setTitle('Задача была изменена!')
                setText('Теперь внесенные изменения доступны исполнителям')
                setSubtext('Задачу Вы сможете найти в разделе "Текущие проекты". Задача останется доступной для редактирования')
                break
        }
    }, [])
    

    return (
        <div className="fixed top-0 left-0 w-full h-full z-9999 bg-black/50">
            <div className="w-[90%] md:w-[35%] absolute top-[50%] left-[50%] translate-[-50%]">
                <div className="p-6.25 rounded-md flex text-center bg-white flex-col gap-6.25">
                    <div className="text-lg self-center">
                        { title }
                    </div>
                    <div className="leading-5">
                        { text }
                    </div>
                    <div className="text-gray-500 text-sm">
                        { subtext }
                    </div>
                    <div className="cursor-pointer rounded-md self-center text-white bg-green-700 hover:bg-green-800 active:bg-green-900 px-6 py-1.5" onClick={onClose}>
                        Понятно
                    </div>
                </div>
            </div>
            
        </div>
    )   
}

function CreateNewTask ({ type }) {
    const [isChecked, setIsChecked] = useState(false)
    const [text, setText] = useState('')

    const today = new Date().toISOString().split('T')[0]

    const categories = [
        'Автоматизированное рабочее место', 
        'Мобильное приложение',
        'Проектирование базы данных',
        '1С Конфигурация',
        'Десктопное приложение',
        'Модуль 1С',
        'Web-приложение',
        'Чат-бот'
    ]

    const technologies = [
        'Node.js',
        'Django',
        'Python',
        'REST API',
        'Android',
        'HTML5',
        '1C',
        'C#',
        'IOS',
        'CSS',
        'React',
        'Java'
    ]

    useEffect(() => {
        window.scrollTo(0, 0)

        switch (type) {
            case 'create':
                setText('Отправить на проверку модератору')
                break
            case 'moderation':
                setText('Опубликовать задачу')
                break
            case 'edit':
                setText('Опубликовать изменения')
                break
        }
    }, [])

    const [isModalOpen, setIsModalOpen] = useState(false)
    const navigate = useNavigate()

    const closeModal = () => {
        setIsModalOpen(false)
        navigate('/profile')
    }

    return (
        <>
            <div className="mx-5 md:mx-62.5 flex flex-col">
                <div className="text-2xl md:text-3xl font-semibold mb-8.75">
                    {type === 'create' ? 'Создание новой задачи' : 'Редактирование задачи'}
                </div>
                <div className="flex flex-col gap-10 pb-12.5">
                    <div className="flex flex-col md:flex-row gap-2 md:gap-0">
                        <div className="text-base font-semibold md:font-normal md:text-lg basis-1/4">
                            Название задачи
                        </div>
                        <div className="basis-3/4">
                            <input type="text" className="bg-white outline outline-gray-400 rounded-md focus:outline-green-600 p-1.25 w-full" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-0">
                        <div className="text-base font-semibold md:font-normal md:text-lg basis-1/4">
                            Описание задачи
                        </div>
                        <div className="basis-3/4">
                            <textarea name="" id="" rows='15' className="bg-white outline outline-gray-400 focus:outline-green-600 rounded-md w-full p-1.25"></textarea>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-0">
                        <div className="text-base font-semibold md:font-normal md:text-lg basis-1/4">
                            Категория
                        </div>
                        <div className="basis-3/4">
                            <div className="flex gap-2.5 flex-wrap">
                                {categories.map((category, index) => (
                                    <div className=" relative block">
                                        <input type="radio" name="category" id={`category${index}`} className="peer absolute left-0 -z-1 opacity-0 checked:bg-gray-600" />
                                        <label htmlFor={`category${index}`} className="cursor-pointer px-3 md:px-3.5 py-1.5 rounded-[50px] font-normal inline-block relative mb-0 bg-gray-200 hover:bg-gray-300 peer-checked:bg-white peer-checked:outline-2 peer-checked:outline-green-600">
                                            {category}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm text-gray-500 mt-2.5">
                                Укажите, какой продукт хотите получить
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-0">
                        <div className="text-base font-semibold md:font-normal md:text-lg basis-1/4">
                            Технологии
                        </div>
                        <div className="basis-3/4">
                            <div className="flex gap-2.5 flex-wrap">
                                {technologies.map((technology, index) => (
                                    <div className="relative block">
                                        <input type="checkbox" name="technology" id={`technology${index}`} className="peer absolute left-0 -z-1 opacity-0 checked:bg-gray-600" />
                                        <label htmlFor={`technology${index}`} className="cursor-pointer px-3 md:px-3.5 py-1.5 rounded-[50px] font-normal inline-block relative mb-0 bg-gray-200 hover:bg-gray-300 peer-checked:bg-white peer-checked:outline-2 peer-checked:outline-green-600">
                                            {technology}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm text-gray-500 mt-2.5">
                                Выберите пункты, соответствующие задаче
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-0">
                        <div className="text-base font-semibold md:font-normal md:text-lg basis-1/4">
                            Вознаграждение
                        </div>
                        <div className="basis-3/4 flex flex-col">
                            <div className="flex md:gap-15 flex-col md:flex-row">
                                <div className="">
                                    <input type="number" min='1' className="peer w-full bg-white outline outline-gray-400 rounded-md focus:outline-green-600 p-1.25 invalid:outline-red-500" />
                                    <p className="hidden peer-invalid:block text-sm text-red-500">Сумма вознаграждения не может быть равной нулю</p>
                                </div>
                                <div className="flex items-start gap-5 flex-col md:flex-row">
                                    <div className="pt-1.25 flex gap-1.5">
                                        <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} name="" id="" className="h-5 w-5 rounded border-gray-400 accent-green-700 cursor-pointer" />
                                        <label htmlFor="">Денежное вознаграждение</label>
                                    </div>
                                </div>
                            </div>
                            <div className="text-sm text-gray-500 mt-2.5">
                                Укажите сумму вознаграждения во внутренней валюте онлайн-платформы, которое получит исполнитель в случае успешного завершения задачи. Вы также можете указать наличие денежного вознаграждения
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-0">
                        <div className="text-base font-semibold md:font-normal md:text-lg basis-1/4">
                            Срок выполнения
                        </div>
                        <div className="basis-3/4">
                            <input type="date" min={today} className="bg-white w-full md:w-[20%] outline outline-gray-400 rounded-md focus:outline-green-600 p-1.25" />
                            <div className="text-sm text-gray-500 mt-2.5">
                                Укажите дату, до которой необходимо выполнить данную задачу
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-5 text-base md:text-lg self-center">
                    <button className="text-white rounded-md bg-green-700 hover:bg-green-800 active:bg-green-900 cursor-pointer self-center px-8.75 py-3.75 font-bold" onClick={() => setIsModalOpen(true)}>
                        { text }
                    </button>
                </div>
            </div>

            {isModalOpen && <TaskModal onClose={closeModal} type={type} />}

        </>
    )
}

export default CreateNewTask