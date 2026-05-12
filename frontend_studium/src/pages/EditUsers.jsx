import { useState, useMemo } from 'react'

function AskModal ({ onClose }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-9999 bg-black/50">
            <div className="w-[30%] absolute top-[50%] left-[50%] translate-[-50%]">
                <div className="p-6.25 flex bg-white flex-col gap-6.25">
                    <div className="text-lg font-bold self-center text-red-700">
                        Удаление участника
                    </div>
                    <div className="text-center">
                        Вы уверены, что хотите удалить <span className='font-bold'>[Имя пользователя]</span>?
                    </div>
                    <div className="text-gray-500 text-sm text-center">
                        После удаления участнику больше не будет доступен общий чат проекта
                    </div>
                    <div className="flex justify-between mx-10">
                        <div className="cursor-pointer self-center rounded-md outline-2 outline-green-700 outline:bg-green-800 active:outline-green-900 px-6 py-1.5" onClick={onClose}>
                            Отмена
                        </div>
                        <div className="cursor-pointer self-center rounded-md text-white bg-red-700 hover:bg-red-800 active:bg-red-900 px-6 py-1.5" onClick={onClose}>
                            Удалить
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}

function SuccessModal ({ onClose }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-9999 bg-black/50">
            <div className="w-[30%] absolute top-[50%] left-[50%] translate-[-50%]">
                <div className="p-6.25 flex bg-white flex-col gap-6.25">
                    <div className="text-lg font-bold self-center">
                        Успешно!
                    </div>
                    <div className="text-center">
                        Состав участников проекта Разработка программного приложения был изменен.
                    </div>
                    <div className="cursor-pointer self-center rounded-md text-white bg-green-700 hover:bg-green-800 active:bg-green-900 px-6 py-1.5" onClick={onClose}>
                        Понятно
                    </div>
                </div>
            </div>
        </div>
    )
}

function PaginatedTable ({ type }) {
    const [selectedIds, setSelectedIds] = useState(new Set())
    const [searchName, setSearchName] = useState('')
  
    const [testData, setTestData] = useState([
        { id: 1, name: 'Someone A', faculty: 'ЭФ', speciality: 'Software Developer', group: 'ПИ-22' },
        { id: 2, name: 'Someone B', faculty: 'ФФКиС', speciality: 'Product Manager', group: 'ПИ-23' },
        { id: 3, name: 'Someone C', faculty: 'ЭФ', speciality: 'UI/UX Designer', group: 'ПИ-24' },
        { id: 4, name: 'Someone D', faculty: 'ГФ', speciality: 'Project Manager', group: 'ПИ-25' },
        { id: 5, name: 'Someone E', faculty: 'ГФ', speciality: 'Engineer', group: 'ПИ-22' },
        { id: 6, name: 'Someone F', faculty: 'ИФФ', speciality: 'Data Scientist', group: 'ПИ-27' },
        { id: 7, name: 'Someone G', faculty: 'МФПиБ', speciality: 'Scientist', group: 'ПИ-16' },
        { id: 8, name: 'Someone H', faculty: 'МФПиБ', speciality: 'Architect', group: 'ПИ-45' },
        { id: 9, name: 'Someone I', faculty: 'ИФФ', speciality: 'Manager', group: 'ПИ-34' },
        { id: 10, name: 'Someone J', faculty: 'ГФ', speciality: 'HR Specialist', group: 'ПИ-34' },
        { id: 11, name: 'Someone K', faculty: 'МФПиБ', speciality: 'Data Scientist', group: 'ПИ-78' },
        { id: 12, name: 'Someone L', faculty: 'ГФ', speciality: 'Scientist', group: 'ПИ-22' },
        { id: 13, name: 'Someone M', faculty: 'ИФФ', speciality: 'Architect', group: 'ПИ-33' },
        { id: 14, name: 'Someone N', faculty: 'МФПиБ', speciality: 'Manager', group: 'ПИ-55' },
        { id: 15, name: 'Someone O', faculty: 'ИФФ', speciality: 'HR Specialist', group: 'ПИ-77' },
    ])

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' });

    const sortedData = [...testData].sort((a, b) => {
        if (sortConfig !== null) {
            const { key, direction } = sortConfig;
            if (a[key] < b[key]) {
                return direction === 'ascending' ? -1 : 1;
            }
            if (a[key] > b[key]) {
                return direction === 'ascending' ? 1 : -1;
            }
        }
        return 0;
    });

    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    console.log(testData.slice(indexOfFirstItem, indexOfLastItem))

    const isAllSelected = testData.length > 0 && selectedIds.size === testData.length

    const handleSelectAll = () => {
        if (isAllSelected) {
            setSelectedIds(new Set());
        } else {
            setSelectedIds(new Set(testData.map(item => item.id)));
        }
    }

    const handleSelectOne = (id) => {
        const newSelected = new Set(selectedIds);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelectedIds(newSelected);
    }
 
    return (
        <div className="flex flex-col min-h-[70vh]">
            <table className="table-fixed w-full mt-5 text-left border-collapse border border-gray-300">
                <thead className="bg-green-700">
                    {type === 'exec' && 
                        <tr>
                            <th className="w-7.5 px-6 py-3 font-medium text-gray-700 cursor-pointer">
                            <input 
                                type="checkbox" 
                                checked={isAllSelected}
                                onChange={handleSelectAll}
                                className='cursor-pointer'
                            />
                            </th>
                            <th onClick={() => handleSort('name')} className="text-white px-6 py-3 font-medium cursor-pointer">Имя {sortConfig.key === 'name' && (sortConfig.direction === 'ascending' ? '🔼' : '🔽')}</th>
                            <th onClick={() => handleSort('faculty')} className="text-white px-6 py-3 font-medium cursor-pointer">Факультет {sortConfig.key === 'faculty' && (sortConfig.direction === 'ascending' ? '🔼' : '🔽')}</th>
                            <th onClick={() => handleSort('speciality')} className="text-white px-6 py-3 font-medium cursor-pointer">Специальность {sortConfig.key === 'speciality' && (sortConfig.direction === 'ascending' ? '🔼' : '🔽')}</th>
                            <th onClick={() => handleSort('group')} className="text-white px-6 py-3 font-medium cursor-pointer">Группа {sortConfig.key === 'group' && (sortConfig.direction === 'ascending' ? '🔼' : '🔽')}</th>
                        </tr>
                    }
                    {type === 'moder' && 
                        <tr>
                            <th className="w-7.5 text-white px-6 py-3 font-medium cursor-pointer">
                            №
                            </th>
                            <th onClick={() => handleSort('name')} className="w-[70%] text-white px-6 py-3 font-medium cursor-pointer">Имя {sortConfig.key === 'name' && (sortConfig.direction === 'ascending' ? '🔼' : '🔽')}</th>
                            <th className="text-white px-6 py-3 font-medium cursor-pointer">Действие</th>
                        </tr>
                    }
                </thead>
                {type === 'exec' && 
                    <tbody>
                        {currentItems.map((person) => (
                            <tr key={person.id} className="border-b hover:bg-gray-50 text-sm">
                                <td className="px-6 py-3">
                                    <input 
                                    type="checkbox" 
                                    checked={selectedIds.has(person.id)}
                                    onChange={() => handleSelectOne(person.id)}
                                    />
                                </td>
                                <td className="px-6 py-3">{person.name}</td>
                                <td className="px-6 py-3">{person.faculty}</td>
                                <td className="px-6 py-3">{person.speciality}</td>
                                <td className="px-6 py-3">{person.group}</td>
                            </tr>
                        ))}
                    </tbody>
                }
                {type === 'moder' && 
                    <tbody>
                        {currentItems.map((person, index) => (
                            <tr key={person.id} className="border-b hover:bg-gray-50 text-sm">
                                <td className="px-6 py-3">{index + 1}</td>
                                <td className="px-6 py-3">{person.name}</td>
                                <td className="px-6 py-3">
                                    <button className='cursor-pointer px-3 py-1.5 rounded-md text-white bg-green-700 hover:bg-green-800'>
                                        Добавить в проект
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                }    
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-auto">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-green-700 text-white rounded-lg shadow hover:bg-green-800 disabled:opacity-50 cursor-pointer"
                >
                    Назад
                </button>
                <div className="text-gray-700">
                    Страница {currentPage} из {Math.ceil(testData.length / itemsPerPage)}
                </div>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === Math.ceil(testData.length / itemsPerPage)}
                    className="px-4 py-2 bg-green-700 text-white rounded-lg shadow hover:bg-green-800 disabled:opacity-50 cursor-pointer"
                >
                    Далее
                </button>
            </div>
        </div>
    );
}

function EditUsers () {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isModal2Open, setIsModal2Open] = useState(false)

    const closeModal = () => {
        setIsModalOpen(false)
        setIsModal2Open(false)
    }

    const [activeTab, setActiveTab] = useState('tab1')

    const tabs = [
        {id: 'tab1', label: 'Исполнители'},
        {id: 'tab2', label: 'Модераторы'},
    ]

    const tabContent = {
        tab1: (
            <PaginatedTable type={'exec'} />
        ),
        tab2: (
            <PaginatedTable type={'moder'} />
        )
    }

    return (
        <>
            <div className="mx-62 min-h-[85vh]">
                <div className="text-3xl font-semibold pb-10">
                    Изменить состав участников проекта Разработка программного приложения
                </div>
                <div className="flex gap-10">
                    <div className="basis-3/4">
                        <div className="flex justify-between border-b border-gray-300 w-full">
                            <div className="">
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
                            <div className="mb-2">
                                <input type="text" placeholder='Искать по имени...' className='bg-white outline outline-gray-400 rounded-md focus:outline-green-600 p-1.25' onChange={(e) => testData.filter(data => data.name.toLowerCase().includes(e.target.value.toLowerCase()))} />
                            </div>
                        </div>
                        <div class="overflow-x-auto">
                            {tabContent[activeTab]}
                        </div>
                    </div>
                    <div className="basis-1/4">
                        <div className="flex flex-col min-h-[70vh]">
                            <div className="text-lg font-bold self-center pb-5">
                                Текущие участники проекта:
                            </div>
                            <div className="flex flex-col">
                                <div className="border-b border-gray-400 pb-2.5">
                                    Заказчик:
                                    <div className="pl-2.5 py-4 text-sm">
                                        [Наименование организации]
                                    </div>
                                </div>
                                <div className="border-b border-gray-400 pt-5 pb-2.5">
                                    Модераторы:
                                    <ul className='pl-2.5 text-sm'>
                                        <li className='flex justify-between py-4'>
                                            <div className="">
                                                Модератор Модераторов
                                            </div>
                                            <div onClick={() => setIsModalOpen(true)} className="cursor-pointer">
                                                ❌
                                            </div>
                                        </li>
                                        <li className='flex justify-between py-4'>
                                            <div className="">
                                                Модератор Модераторов
                                            </div>
                                            <div onClick={() => setIsModalOpen(true)} className="cursor-pointer">
                                                ❌
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pt-5 pb-2.5">
                                    Исполнители:
                                    <ul className='pl-2.5 text-sm'>
                                        <li className='flex justify-between py-4'>
                                            <div className="">
                                                Исполнитель Исполнителов
                                            </div>
                                            <div onClick={() => setIsModalOpen(true)} className="cursor-pointer">
                                                ❌
                                            </div>
                                        </li>
                                        <li className='flex justify-between py-4'>
                                            <div className="">
                                                Исполнитель Исполнителов
                                            </div>
                                            <div onClick={() => setIsModalOpen(true)} className="cursor-pointer">
                                                ❌
                                            </div>
                                        </li>
                                        <li className='flex justify-between py-4'>
                                            <div className="">
                                                Исполнитель Исполнителов
                                            </div>
                                            <div onClick={() => setIsModalOpen(true)} className="cursor-pointer">
                                                ❌
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="self-center mt-auto">
                                <button onClick={() => setIsModal2Open(true)} className='px-9 py-3 cursor-pointer rounded-md text-white text-lg font-bold bg-green-700 hover:bg-green-800 active:bg-green-900'>
                                    Утвердить участников
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && <AskModal onClose={closeModal} />}

            {isModal2Open && <SuccessModal onClose={closeModal} />}

        </>
    )
}

export default EditUsers