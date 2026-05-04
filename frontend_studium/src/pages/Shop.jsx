import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

function ConfirmationModal ({onClose}) {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-9999 bg-black/50">
            <div className="w-[30%] absolute top-[50%] left-[50%] translate-[-50%]">
                <div className="p-6.25 flex bg-white flex-col gap-6.25">
                    <div className="text-lg self-center font-bold">
                        Корзина
                    </div>
                    <div className="">
                        <div className="flex border-b justify-between border-gray-300 py-5 items-center">
                            <div className="flex gap-2.5 items-center">
                                <div className="bg-gray-200 rounded-full px-2.5 py-5.5">
                                    photo
                                </div>
                                <div className="">
                                    Наименование товара
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="cursor-pointer px-2.25 py-1 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded-full">
                                    –
                                </div>
                                <div className="text-xl">
                                    1
                                </div>
                                <div className="cursor-pointer px-2.25 py-1 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded-full">
                                    +
                                </div>
                            </div>
                            <div className="">
                                $ 0
                            </div>
                        </div>
                        <div className="flex border-b justify-between border-gray-300 py-5 items-center">
                            <div className="flex gap-2.5 items-center">
                                <div className="bg-gray-200 rounded-full px-2.5 py-5.5">
                                    photo
                                </div>
                                <div className="">
                                    Наименование товара
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="cursor-pointer px-2.25 py-1 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded-full">
                                    –
                                </div>
                                <div className="text-xl">
                                    1
                                </div>
                                <div className="cursor-pointer px-2.25 py-1 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded-full">
                                    +
                                </div>
                            </div>
                            <div className="">
                                $ 0
                            </div>
                        </div>
                        <div className="flex border-b justify-between border-gray-300 py-5 items-center">
                            <div className="flex gap-2.5 items-center">
                                <div className="bg-gray-200 rounded-full px-2.5 py-5.5">
                                    photo
                                </div>
                                <div className="">
                                    Наименование товара
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="cursor-pointer px-2.25 py-1 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded-full">
                                    –
                                </div>
                                <div className="text-xl">
                                    1
                                </div>
                                <div className="cursor-pointer px-2.25 py-1 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded-full">
                                    +
                                </div>
                            </div>
                            <div className="">
                                $ 0
                            </div>
                        </div>
                    </div>
                    <div className="py-2.5 font-bold">
                        Итоговая стоимость заказа: $ 0
                    </div>
                    <div className="cursor-pointer text-lg self-center text-white bg-green-700 hover:bg-green-800 active:bg-green-900 px-7 py-1.5 rounded-md" onClick={onClose}>
                        Оформить заказ
                    </div>
                </div>
            </div>
            
        </div>
    )   
}

function Shop() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    // const closeModal = () => setIsModalOpen(false)

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <div className="mx-62.5 mb-5">
                <div className="flex justify-between items-center pb-10">
                    <div className="flex gap-7.5 items-center">
                        <div className="font-bold text-3xl">
                            Обмен внутренней валюты
                        </div>
                        <div className="text-2xl">
                            $ 0
                        </div>
                    </div>
                    <div 
                        onClick={() => setIsModalOpen(true)}
                        className="cursor-pointer px-7 py-1.5 text-lg rounded-md text-center text-white bg-green-700 hover:bg-green-800 active:bg-green-900"
                    >
                        Корзина
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-5">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>

            {isModalOpen && <ConfirmationModal onClose={closeModal}/>}

        </>
    )
}

export default Shop