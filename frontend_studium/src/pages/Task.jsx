import { useState } from "react"
import { useParams, useNavigate } from 'react-router-dom'

import { useUser } from '../userContext';

function ConfirmationModal ({task, onClose}) {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-9999 bg-black/50">
            <div className="w-[35%] absolute top-[50%] left-[50%] translate-[-50%]">
                <div className="p-6.25 flex bg-white flex-col gap-6.25">
                    <div className="text-lg self-center">
                        Отлично!
                    </div>
                    <div className="">
                        Вы откликнулись на задачу {task}
                    </div>
                    <div className="text-gray-500 text-sm">
                        Отследить статус задачи можно в профиле
                    </div>
                    <div className="cursor-pointer self-center text-white bg-green-700 hover:bg-green-800 active:bg-green-900 px-6 py-1.5" onClick={onClose}>
                        Понятно
                    </div>
                </div>
            </div>
            
        </div>
    )   
}

function Task() {
  const { user } = useUser()

    const tasks = [
      {
        id: 1,
        title: "Разработка дашборда аналитики продаж",
        description: "Разработать адаптивный веб-интерфейс для отображения ключевых метрик (KPI) отдела продаж. Необходимо реализовать динамические графики на основе библиотеки Chart.js, получающие данные через REST API. Бэкенд должен предоставлять эндпоинты для фильтрации данных по дате (сегодня, неделя, месяц) и категориям товаров. Обязательно наличие авторизации через JWT-токены и ролевой модели (администратор видит всё, менеджер — только свой отдел).",
        author: "Алексей Иванов",
        technologies: ["React", "Chart.js", "Node.js", "PostgreSQL", "JWT"],
        category: "Веб-программирование",
        date_of_publication: "2024-03-15",
        points_reward: 500,
        money_reward: 0
      },
      {
        id: 2,
        title: "Создание лендинга для IT-конференции с формой обратной связи",
        description: "Сверстать промо-страницу конференции 'DevMeet 2024' по методологии Pixel Perfect. Реализовать валидацию формы регистрации участников на чистом JavaScript (проверка email, маска телефона) без перезагрузки страницы. Настроить отправку данных в БД (PostgreSQL) через PHP-скрипт с защитой от SQL-инъекций. Добавить административную панель для просмотра списка зарегистрированных участников с возможностью экспорта в CSV.",
        author: "Мария Петрова",
        technologies: ["HTML/CSS", "JavaScript", "PHP", "PostgreSQL", "CSV"],
        category: "Веб-программирование",
        date_of_publication: "2024-03-18",
        points_reward: 300,
        money_reward: 8000
      },
      {
        id: 3,
        title: "Мобильное приложение 'Трекер привычек'",
        description: "Создать кроссплатформенное приложение (React Native) для отслеживания ежедневных привычек. Архитектура: MVVM. Пользователь должен иметь возможность создавать привычки с установкой периодичности (ежедневно, по будням, раз в неделю), отмечать их выполнение через календарь и просматривать статистику успеваемости в виде графика 'Стрик' (непрерывная серия). Локальное хранение данных организовать через SQLite, синхронизацию с облаком (Firebase) — для бэкапа.",
        author: "Дмитрий Соколов",
        technologies: ["React Native", "SQLite", "Firebase", "MVVM"],
        category: "Мобильная разработка",
        date_of_publication: "2024-03-20",
        points_reward: 600,
        money_reward: 20000
      },
      {
        id: 4,
        title: "Разработка нативного приложения для сканирования чеков",
        description: "Реализовать приложение под Android (Kotlin) с использованием камеры для сканирования QR-кодов и штрихкодов товаров. При распознавании кода необходимо отправлять запрос к внешнему API (Open Food Facts) и отображать детальную информацию о продукте (состав, калорийность). Вести историю сканирований в Room Database с возможностью добавления ручных заметок к каждому отсканированному товару.",
        author: "Елена Волкова",
        technologies: ["Kotlin", "CameraX", "Room Database", "REST API", "Open Food Facts"],
        category: "Мобильная разработка",
        date_of_publication: "2024-03-22",
        points_reward: 550,
        money_reward: 18000
      },
      {
        id: 5,
        title: "Проектирование схемы БД для онлайн-кинотеатра",
        description: "Спроектировать реляционную базу данных для сервиса потокового видео. Написать скрипты создания таблиц (пользователи, подписки, фильмы, актеры, история просмотров) с учетом нормализации до 3НФ. Создать индексы для ускорения поиска по названию и жанру. Реализовать сложные хранимые процедуры: `sp_get_recommendations` (подбор фильмов по истории просмотров) и триггер для автоматического списания оплаты за подписку в последний день месяца.",
        author: "Сергей Михайлов",
        technologies: ["PostgreSQL", "SQL", "PL/pgSQL"],
        category: "Создание и администрирование БД",
        date_of_publication: "2024-03-25",
        points_reward: 450,
        money_reward: 12000
      },
      {
        id: 6,
        title: "Миграция данных и оптимизация запросов (NoSQL)",
        description: "Разработать структуру документов для MongoDB в логистической системе. Необходимо хранить информацию о заказах (вложенные массивы товаров), статусах доставки и геолокации курьеров. Написать скрипт миграции (ETL) для переноса 100k+ записей из старой MySQL-базы в новую коллекцию MongoDB с преобразованием схемы. Составить сложные агрегационные запросы (aggregation pipeline) для расчета средней скорости доставки по районам города за последний квартал.",
        author: "Андрей Козлов",
        technologies: ["MongoDB", "MySQL", "Python", "ETL", "Aggregation Pipeline"],
        category: "Создание и администрирование БД",
        date_of_publication: "2024-03-27",
        points_reward: 500,
        money_reward: 16000
      },
      {
        id: 7,
        title: "Разработка АРМ менеджера по работе с клиентами",
        description: "Разработать автоматизированное рабочее место для менеджера отдела продаж, работающего с базой клиентов компании. АРМ должен представлять собой десктопное веб-приложение (SPA) с ролевой моделью, обеспечивающее полный цикл работы с клиентской базой: просмотр, поиск, фильтрацию, редактирование карточек клиентов, добавление комментариев и задач. Включает дашборд руководителя с графиками по конверсии воронки продаж, план/факт по заключенным сделкам за месяц.",
        author: "Ольга Новикова",
        technologies: ["React/Vue.js", "Django REST Framework", "PostgreSQL", "JWT", "Redux/Pinia"],
        category: "Веб-программирование",
        date_of_publication: "2024-03-29",
        points_reward: 700,
        money_reward: 25000
      },
      {
        id: 8,
        title: "Разработка АРМ администратора технической поддержки (Service Desk)",
        description: "Разработать автоматизированное рабочее место для сотрудников технической поддержки IT-компании. Система должна обеспечить полный цикл обработки заявок (инцидентов и запросов) от пользователей: регистрацию обращения, назначение ответственного, отслеживание статусов, эскалацию, фиксацию решения и опрос удовлетворенности. Включает модуль SLA и эскалации, базу знаний, дашборд с аналитикой и опрос удовлетворенности.",
        author: "Максим Дмитриев",
        technologies: ["Vue 3", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Celery", "WebSockets"],
        category: "Веб-программирование",
        date_of_publication: "2024-04-01",
        points_reward: 800,
        money_reward: 30000
      }
    ];

    const { taskId } = useParams();

    const currentTask = tasks.find(task => task.id === Number(taskId))

    const [isModalOpen, setIsModalOpen] = useState(false)
    const navigate = useNavigate()

    const closeModal = () => {
        setIsModalOpen(false)
        navigate('/tasks')
    }

    return (
      <>
        <div className="mx-5 md:mx-62.5 min-h-[85vh]">
          {/* кнопка назад */}
          {/* <div className="pb-7.5">
            <a className="text-base text-gray-800 flex gap-2.5" href='/tasks'>
              <div className="rounded-full px-1.25">
                ⬅
              </div>
              <div className="self-end">
                Назад
              </div>
            </a>
          </div> */}
          {/* кнопка назад */}
          <div className="flex flex-col md:flex-row gap-7.5">
            <div className="flex basis-264.5 flex-col gap-10">
              <div className="">
                
                <div className="flex justify-between">
                  <div className="text-xl md:text-2xl font-semibold">
                    {currentTask.title}
                  </div>
                  {user.role !== 'student' &&
                    <div className="flex flex-nowrap mt-1.25">
                      <div className="self-center pr-1.25">
                        🗎
                      </div>
                      <a href={`/tasks/${currentTask.id}/edit`} className="flex-start underline text-nowrap text-base">
                        Редактировать задачу
                      </a>
                    </div>
                  }
                </div>
                <div className="flex gap-3.75 md:gap-7.5 text-sm md:text-sm pt-1.25 md:pt-2.5 font-normal">
                  <p>
                    Автор: {currentTask.author}
                  </p>
                  <p>
                    ДатаПубликации
                  </p>
                </div>
              </div>
              <div className="text-lg md:text-xl font-semibold">
                Описание задачи
                <div className="text-base pt-1.25 md:pt-2.5 pb-6.5 font-normal">
                  {currentTask.description}
                </div>
                <div className="advantages">

                </div>
              </div>
              <div className="text-lg md:text-xl font-semibold">
                Стек технологий
                <div className="text-sm pt-1.25 md:pt-2.5 font-normal">
                  Список технологий, которые будут полезны при выполнении данной задачи!
                </div>
                <div className="flex gap-1.25 md:gap-2 flex-wrap pt-3.25 md:pt-5.25">
                  {currentTask.technologies.map((technology) => (
                      <div className="bg-gray-200 px-3 py-1.5 rounded-[50px] text-sm font-normal">
                          {technology}
                      </div>
                    ))}
                </div>
              </div>
              <div className={`text-lg md:text-xl font-semibold ${user.role === 'moderator' ? 'hidden' : '' }`}>
                Количество откликов на задачу
                <div className="text-base pt-1.25 md:pt-2.5 font-normal">
                  На данный момент на задачу откликнулись <span className='font-bold'>xxx</span> исполнителей
                </div>
              </div>
              <div className="text-lg md:text-xl font-semibold">
                Другие задачи от автора
                <div className="text-base pt-5 font-normal text-gray-500">
                  Если будет такое API, то в этом блоке можно будет показать 2-3 задачки от автора текущей задачи или схожие по категории задачи. Если такого API не будет, то этот блок будет просто удален
                </div>
              </div>
            </div>

            <div className="flex basis-1/4">
            {user.role === 'student' &&
              <div className="bg-gray-100 rounded-md flex flex-col p-5 items-center text-center gap-2.5 self-start">
                <div className="font-bold text-xl">
                  Готовы приступить к выполнению задачи?
                </div>
                <div className="text-gray-700 text-sm">
                  Вы можете добавить небольшой текст к своему отклику, который увидит заказчик, или продолжить без него
                </div>
                <textarea rows='7' placeholder='Место для отклика...' className='bg-white w-full resize-none p-1.25 rounded-md outline outline-gray-300 focus:outline-green-700'/>
                <div className=' text-white bg-green-700 hover:bg-green-800 active:bg-green-900 w-full py-3.25 md:mt-3.75 font-bold text-base cursor-pointer' onClick={() => setIsModalOpen(true)}>
                  Откликнуться
                </div>
              </div>
            }
            {user.role === 'moderator' &&
              <div className="bg-gray-100 rounded-md flex flex-col p-5 items-center text-center gap-3.75 self-start">
                <div className="text-xl">
                  Количество откликнувшихся
                </div>
                <div className="font-bold text-2xl">
                  XXX
                </div>
                <a href={`${taskId}/responses`} className='w-full'>
                  <div className="text-white bg-green-700 hover:bg-green-800 active:bg-green-900 w-full py-3.25 mt-3.75">
                    Посмотреть откликнувшихся
                  </div>
                </a>
              </div>
            }
            </div>
          </div>
        </div>

        {isModalOpen && <ConfirmationModal task={currentTask.title} onClose={closeModal}/>}

      </>
    )
}

export default Task