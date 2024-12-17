import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footerr/Footer';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';

const WelcomePage = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-br from-blue-400 via-blue-300 to-blue-200 text-white' : 'bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400'} flex flex-col`}>
        
        {/* Превключвател за тъмна/светла тема */}
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>

        {/* Хедър с логото и навигация */}
        <header className="w-full py-6 bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">ТийнБюджет</h1>
            <nav className="flex space-x-8">
              <button 
                onClick={() => navigate('/signup')}
                className="text-white hover:text-teal-500 transition-colors duration-300"
              >
                Създай Акаунт
              </button>
              <button 
                onClick={() => navigate('/login')}
                className="text-white hover:text-teal-500 transition-colors duration-300"
              >
                Вход
              </button>
            </nav>
          </div>
        </header>

        {/* Основен контейнер за съдържание */}
        <div className="flex-grow flex items-center justify-center p-8">
          <div className={`max-w-5xl mx-auto text-center ${isDarkMode ? 'bg-blue-800/80' : 'bg-white/90'} rounded-3xl p-14 shadow-lg backdrop-blur-lg`}>

            {/* Основен заглавен блок */}
            <header className="mb-12">
              <h1 className={`text-4xl font-extrabold mb-4 ${isDarkMode ? 'text-white' : 'text-teal-900'} hover:text-teal-500 transition-all duration-300`}>
                Добре дошли в ТийнБюджет!
              </h1>
              <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-teal-900'} max-w-3xl mx-auto`}>
                Управлявай бюджета си с лекота и започни да вземаш умни финансови решения още от сега! <strong>Това е правилният избор за твоето финансово бъдеще!</strong>
              </p>
            </header>
            
            {/* Какво представлява? */}
            <section className="mb-16">
              <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-teal-900'} mb-4`}>
                Какво представлява ТийнБюджет?
              </h2>
              <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-teal-900'} max-w-2xl mx-auto`}>
                ТийнБюджет е платформа за управление на лични финанси, създадена специално за млади хора, които искат да поемат контрол върху своите финанси.
              </p>
            </section>
            
            {/* Основни предимства */}
            <section className="mb-16">
              <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-teal-900'} mb-4`}>
                Защо е правилният избор?
              </h2>
              <ul className={`list-disc pl-6 text-xl ${isDarkMode ? 'text-gray-300' : 'text-teal-900'} max-w-2xl mx-auto text-left`}>
                <li><strong>Автоматично категоризиране на разходите:</strong> Спести време и усилия, като платформата автоматично разпознава твоите разходи и ги групира по категории.</li>
                <li><strong>Интелигентни препоръки:</strong> Нашият алгоритъм предлага финансови съвети и стратегии.</li>
                <li><strong>Цели за спестявания:</strong> Задавай цели и следи напредъка си.</li>
                <li><strong>Прогнози за бъдещето:</strong> Планирай финансовото си бъдеще с точни прогнози.</li>
                <li><strong>Лесен за използване интерфейс:</strong> Интуитивен и лесен за използване.</li>
              </ul>
            </section>

            {/* Призив за действие */}
            <section className="mb-12">
              <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-teal-900'} mb-4`}>
                Готов ли си да започнеш?
              </h2>
              <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-teal-900'} max-w-2xl mx-auto`}>
                Започни сега и постигни финансовото си бъдеще с ТийнБюджет!
              </p>
            </section>

            {/* Бутоните за регистрация и вход */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => navigate('/signup')}
                className={`px-10 py-5 ${isDarkMode ? 'bg-teal-600 hover:bg-teal-800' : 'bg-teal-500 hover:bg-teal-600'} text-white rounded-xl font-bold transition-all transform hover:scale-110 shadow-xl hover:shadow-2xl`}
              >
                Създай Акаунт
              </button>
              
              <button 
                onClick={() => navigate('/login')}
                className={`px-10 py-5 ${isDarkMode ? 'border-3 border-gray-500 text-white hover:bg-gray-700' : 'border-3 border-teal-500 text-teal-900 hover:bg-teal-400'} rounded-xl font-bold transition-all transform hover:scale-110 shadow-xl hover:shadow-2xl`}
              >
                Вход
              </button>
            </div>
          </div>
        </div>

        {/* Footer секция */}
        <Footer />
      </div>
    </div>
  );
};

export default WelcomePage;
