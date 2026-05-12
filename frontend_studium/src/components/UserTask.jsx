import { useNavigate } from 'react-router-dom'
import mobile from '../assets/mobile.png'
import web from '../assets/web.png'
import database from '../assets/database.png'
import points from '../assets/points-reward.png'
import money from '../assets/money-reward.png'

function UserTaskCategory ({ category }) {
    switch (category) {
        case 'Веб-программирование':
            return <img className='size-8 md:size-10' src={web} alt="" />;
        case 'Мобильная разработка':
            return <img className='size-8 md:size-10' src={mobile} alt="" />;
        case 'Создание и администрирование БД':
            return <img className='size-8 md:size-10' src={database} alt="" />;
    }
}

function UserTaskButton ({ activeTab, task }) {
    const navigate = useNavigate()

    switch(activeTab) {
        case 'current-projects':
            return (
                <div className="flex gap-3.75 text-sm">
                    <div className="px-3.5 py-1.25 text-white bg-green-700 hover:bg-green-800 cursor-pointer text-nowrap" onClick={() => navigate(`/chats`)}>
                        Перейти к чату
                    </div>
                    <div className="underline px-3.5 py-1.25 hover:font-medium cursor-pointer" onClick={() => navigate(`/tasks/${task}`)}>
                        Посмотреть подробности задачи
                    </div>
                </div>
            )

        case 'my-responses':
            return (
                <div className="flex gap-3.75">
                    <div className="px-3.5 py-1.25 text-white bg-green-700 hover:bg-green-800 cursor-pointer text-sm" onClick={() => navigate(`/tasks/${task}`)}>
                        Посмотреть подробности задачи
                    </div>
                </div>
            )

        case 'looking-for-executor':
            return (
                <div className="flex gap-3.75 text-sm">
                    <div className="px-3.5 py-1.25 text-white bg-green-700 hover:bg-green-800 cursor-pointer text-sm" onClick={() => navigate(`/tasks/1/responses`)}>
                        Посмотреть откликнувшихся
                    </div>
                    <div className="underline px-3.5 py-1.25 hover:font-medium cursor-pointer" onClick={() => navigate(`/tasks/${task}`)}>
                        Посмотреть подробности задачи
                    </div>
                </div>
            )

        case 'under-inspection':
            return (
                <div className="flex gap-3.75">
                    <div className="px-3.5 py-1.25 text-white bg-green-700 hover:bg-green-800 cursor-pointer text-sm" onClick={() => navigate(`/tasks/${task}`)}>
                        Посмотреть подробности задачи
                    </div>
                </div>
            )

        case 'wait-for-inspection':
            return (
                <div className="flex gap-3.75">
                    <div className="px-3.5 py-1.25 text-white bg-green-700 hover:bg-green-800 cursor-pointer text-sm" onClick={() => navigate(`/moderate-task/${task}`)}>
                        Перейти к задаче
                    </div>
                </div>
            )

        case 'cancelled-projects':
            return (
                <div className="flex gap-3.75 text-sm">
                    <div className="px-3.5 py-1.25 text-white bg-green-700 hover:bg-green-800 cursor-pointer text-nowrap" onClick={() => navigate(`/chats`)}>
                        Посмотреть подробности задачи
                    </div>
                </div>
            )
            
        case 'archived-projects':
            return (
                <div className="flex gap-3.75 text-sm">
                    <div className="">
                        <div className="flex justify-between pb-2.5">
                            <div className="font-bold">
                                Комментарий от заказчика
                            </div>
                            <div className="">
                                ⭐⭐⭐⭐⭐
                            </div>
                        </div>
                            
                        <div className="pl-2.5">
                            Исполнитель выполнил задачу оперативно. Работать с ним было приятно: исполнитель предлагал варианты решения, вносил правки. Реализованный проект находится в эксплуатации.
                        </div>
                    </div>
                </div>
            )
        }
}

function UserTask ({ task, activeTab }) {
    const navigate = useNavigate()
    
    return (
        <div className='bg-white outline outline-gray-200 rounded-md max-w-173.5 p-2.5 md:p-5 text-base flex flex-col'>
            <div className="font-semibold text-base md:text-lg pb-1 md:pb-2 cursor-pointer" onClick={() => navigate(`/tasks/${task.id}`)}> 
                {task.title}
            </div>
            <div className="text-sm pb-3 md:pb-6">
                {task.author}
            </div>
            <div className="grid grid-cols-3 gap-5.5 pb-3 md:pb-6">
                <div className="flex text-sm">
                    <UserTaskCategory category={task.category} />
                    {task.category}
                </div>
                
                <div className="flex gap-5.5">
                    <img className='size-8 md:size-10' src={points} alt="" />
                    <div className="points-reward text-sm">
                        Награда
                        <div className="points-amount">
                            {task.points_reward}
                        </div>
                    </div>
                </div>
                {task.money_reward !== 0 && (
                    <div className="flex gap-5.5">
                        <img className='size-8 md:size-10' src={money} alt="" />
                        <div className="money-reward">
                            Денежное вознаграждение
                            <div className="money-amount">
                                {task.money_reward}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="line-clamp-4 md:line-clamp-3 mb-2 md:mb-6">
                {task.description}
            </div>
            <div className="flex gap-1.25 flex-wrap pb-3 md:pb-6">
                {task.technologies.map((technology) => (
                    <div className="bg-gray-200 px-2.5 py-1.5 rounded-[50px] text-xs">
                        {technology}
                    </div>
                ))}
            </div>

            <UserTaskButton activeTab={activeTab} task={task.id}/>

            {activeTab === 'tab1' && 
                <div className="flex gap-3.75 text-sm">
                    <div className="px-3.5 py-1.25 bg-blue-200 hover:bg-blue-300 cursor-pointer text-nowrap" onClick={() => navigate(`/chats`)}>
                        Перейти к чату
                    </div>
                    <div className="underline px-3.5 py-1.25 hover:font-medium cursor-pointer" onClick={() => navigate(`/tasks/${task.id}`)}>
                        Посмотреть подробности задачи
                    </div>
                </div>
            }
            {activeTab === 'tab2' &&
                <div className="flex gap-3.75">
                    <div className="px-3.5 py-1.25 bg-blue-200 hover:bg-blue-300 cursor-pointer text-sm" onClick={() => navigate(`/chats`)}>
                        Посмотреть подробности задачи
                    </div>
                </div>
            }
            {activeTab === 'tab3' &&
                <div className="flex gap-3.75">
                    <div className="px-3.5 py-1.25 bg-blue-200 hover:bg-blue-300 cursor-pointer text-sm" onClick={() => navigate(`/chats`)}>
                        Посмотреть решение
                    </div>
                </div>
            }
            
        </div>
    )
}

export default UserTask