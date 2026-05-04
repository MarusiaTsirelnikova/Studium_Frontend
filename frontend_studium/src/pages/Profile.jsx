import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserTask from '../components/UserTask'

import { useUser } from '../userContext'


function Profile () {
    const { user } = useUser()

    const navigate = useNavigate()

    const task = {
      id: 1,
      title: "Разработка дашборда аналитики продаж",
      description: "Разработать адаптивный веб-интерфейс для отображения ключевых метрик (KPI) отдела продаж. Необходимо реализовать динамические графики на основе библиотеки Chart.js, получающие данные через REST API. Бэкенд должен предоставлять эндпоинты для фильтрации данных по дате (сегодня, неделя, месяц) и категориям товаров. Обязательно наличие авторизации через JWT-токены и ролевой модели (администратор видит всё, менеджер — только свой отдел).",
      author: "Алексей Иванов",
      technologies: ["React", "Chart.js", "Node.js", "PostgreSQL", "JWT"],
      category: "Веб-программирование",
      date_of_publication: "2024-03-15",
      points_reward: 500,
      money_reward: 0
    }

    const [activeTab, setActiveTab] = useState('tab1')

    const getTabs = (group) => {
        const tabsMap = {
            student: [
                {id: 'current-projects', label: 'Текущие проекты'},
                {id: 'my-responses', label: 'Мои отклики'},
                {id: 'archived-projects', label: 'Архивные проекты'},
            ],
            customer: [
                {id: 'current-projects', label: 'Текущие проекты'},
                {id: 'looking-for-executor', label: 'Поиск исполнителя'},
                {id: 'under-inspection', label: 'На модерации'},
                {id: 'archived-projects', label: 'Завершенные проекты'},
                {id: 'cancelled-projects', label: 'Отмененные проекты'},
            ],
            moderator: [
                {id: 'current-projects', label: 'Текущие проекты'},
                {id: 'looking-for-executor', label: 'Поиск исполнителя'},
                {id: 'wait-for-inspection', label: 'Проекты для модерации'},
                {id: 'archived-projects', label: 'Завершенные проекты'},
                {id: 'cancelled-projects', label: 'Отмененные проекты'},
            ],
        }
        return tabsMap[group]
    }

    // const tabs = [
    //     {id: 'tab1', label: 'Текущие проекты'},
    //     {id: 'tab2', label: 'Отклики'},
    //     {id: 'tab3', label: 'Архивные проекты'},
    // ]

    const tabs = getTabs(user.role)

    const tabContent = {
        tab1: (
            <div className="text-gray-400">
                
            </div>
        ),
        tab2: (
            <div className="text-gray-400">
                
            </div>
        ),
        tab3: (
            <div className="text-gray-400">
                
            </div>
        )
    }

    useEffect(() => {
        window.scrollTo(0, 0)

        setActiveTab('current-projects');
    }, [])

    return (
        <div className="mx-5 md:mx-62.5">
            <div className="flex gap-7.5 mb-12.5">
                <div className="bg-gray-200 w-18.75 h-18.75 md:w-37.5 md:h-37.5 rounded-full content-center text-center">
                    фото
                </div>
                <div className="flex justify-between basis-7/8">
                    <div className="flex flex-col mt-2.5 md:mt-5">
                        <div className="font-bold text-xl md:text-2xl mb-2.5 md:mb-5">
                            Имя пользователя
                        </div>
                        {user.role === 'student' &&
                            <div className="text-sm md:text-lg">
                                Группа пользователя, рейтинг пользователя ⭐
                            </div>
                        }
                        {user.role === 'customer' &&
                            <div className="px-4 py-2 cursor-pointer text-sm md:text-lg bg-green-700 hover:bg-green-800 active:bg-green-900 text-center text-white mt-5"
                                onClick={() => navigate('/create-new-task')}>
                                Создать новую задачу
                            </div>
                        }
                        
                    </div>
                    <div className="text-gray-400">
                        Последний логин: dd.mm.YYYY
                    </div>
                </div>
                
                
            </div>
            <div className="">
                <div className="flex border-b border-gray-300 w-full">
                    {tabs.map((tab) => (
                        <button key={tab.id}
                            className={`px-4 py-2 hover:text-green-600 font-medium cursor-pointer ${
                                activeTab === tab.id ? "border-b-2 border-green-700 " : 'text-gray-500'
                            }`}
                            onClick={() => setActiveTab(tab.id)}>
                            {tab.label}
                        </button>
                    ))}
                </div>
                

                <div className="p-4">
                    {tabContent[activeTab]}
                    <div className="grid 2xl:grid-cols-2 gap-7.5 xl:grid-cols-1">
                        <UserTask task={task} activeTab={activeTab} />
                        <UserTask task={task} activeTab={activeTab} />
                        <UserTask task={task} activeTab={activeTab} />
                    </div>
                </div>

            </div>

            
        </div>
    )
}

export default Profile