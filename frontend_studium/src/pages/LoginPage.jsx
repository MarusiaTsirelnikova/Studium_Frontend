function LoginPage () {
    return (
        <div className="mx-62">
            <div className="flex justify-center h-[85vh] pt-45">
                <div className="outline outline-gray-300 w-[35%] h-fit p-5 rounded-md">
                    <div className="flex flex-col items-center">
                        <div className="text-xl pb-10">
                            Войти в систему
                        </div>
                        <form action="" className="flex flex-col gap-5 pb-15 w-[80%]">
                            <input type="email" placeholder="Электронная почта" className="p-1.25 rounded-md outline outline-gray-400 focus:outline-green-600" required />
                            <input type="password" placeholder="Пароль" className="p-1.25 rounded-md outline outline-gray-400 focus:outline-green-600" required />
                        </form>
                        <div className="text-xl">
                            <button className="px-10 py-2 text-white bg-green-700 hover:bg-green-800 active:bg-green-900 rounded-md cursor-pointer">
                                Войти
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage