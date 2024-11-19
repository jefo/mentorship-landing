import React from 'react';
import { 
  ArrowRight, 
  CalendarCheck, 
  Clock, 
  MessageSquare,
  ShieldCheck,
  Lock,
  CheckCircle
} from 'lucide-react';

const ConsultationForm = () => {
  const benefits = [
    {
      icon: <CalendarCheck className="w-5 h-5 text-blue-500" />,
      title: "30-минутная консультация",
      description: "Разберем ваш текущий уровень и цели"
    },
    {
      icon: <Clock className="w-5 h-5 text-green-500" />,
      title: "План развития",
      description: "Составим пошаговый план роста"
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-purple-500" />,
      title: "Оценка перспектив",
      description: "Определим сроки и потенциальный рост дохода"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4">
                Забронируйте бесплатную консультацию
              </h2>
              <p className="text-slate-300 text-lg">
                Обсудим ваши цели и составим план развития до уровня Middle+
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <input 
                  type="text" 
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Telegram/WhatsApp</label>
                <input 
                  type="text" 
                  placeholder="@username или +7"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Текущая позиция</label>
                <select className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="" className="text-slate-400">Выберите текущий уровень</option>
                  <option value="junior">Junior (1-2 года опыта)</option>
                  <option value="junior+">Junior+ (2+ года опыта)</option>
                  <option value="middle">Middle (ищу следующий шаг)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Опыт с React</label>
                <select className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="" className="text-slate-400">Выберите опыт работы</option>
                  <option value="1-2">1-2 года</option>
                  <option value="2-3">2-3 года</option>
                  <option value="3+">3+ года</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Целевая зарплата</label>
                <input 
                  type="text" 
                  placeholder="Желаемый уровень дохода"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Главная сложность на собеседованиях</label>
                <textarea 
                  rows={3}
                  placeholder="Опишите ваши основные сложности"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-2 transition-colors">
                Получить план развития
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Lock className="w-4 h-4" />
                <span>Ваши данные защищены и используются только для связи</span>
              </div>
            </form>
          </div>

          {/* Right Column - Benefits */}
          <div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 sticky top-8">
              <h3 className="text-2xl font-bold mb-8">
                Что вы получите на консультации:
              </h3>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-slate-300">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Guarantees */}
              <div className="mt-8 pt-8 border-t border-slate-600">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                  Гарантии
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    <span>Бесплатная консультация</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    <span>Персональный план развития</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    <span>Конфиденциальность данных</span>
                  </li>
                </ul>
              </div>

              {/* Social Proof */}
              <div className="mt-8 pt-8 border-t border-slate-600">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    <img src="/api/placeholder/40/40" alt="User" className="w-10 h-10 rounded-full border-2 border-slate-800" />
                    <img src="/api/placeholder/40/40" alt="User" className="w-10 h-10 rounded-full border-2 border-slate-800" />
                    <img src="/api/placeholder/40/40" alt="User" className="w-10 h-10 rounded-full border-2 border-slate-800" />
                  </div>
                  <p className="text-sm text-slate-300">
                    30+ разработчиков уже получили план развития на консультации
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;