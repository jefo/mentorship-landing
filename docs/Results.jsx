import React from 'react';
import { 
  TrendingUp, 
  Calendar, 
  Building2, 
  DollarSign,
  Star,
  Quote,
  ChevronRight,
  Briefcase,
  Target
} from 'lucide-react';

const ResultsSection = () => {
  const successStories = [
    {
      name: "Александр",
      photo: "/api/placeholder/80/80",
      role: "Frontend Developer",
      company: "Крупный финтех",
      before: {
        position: "Junior",
        salary: "$1200"
      },
      after: {
        position: "Middle",
        salary: "$2800",
        duration: "2.5 месяца"
      },
      quote: "После 1.5 лет на позиции Junior я застрял в развитии. Программа помогла не только вырасти технически, но и научиться уверенно проходить собеседования. Получил три оффера и выбрал лучший.",
      keyLearnings: [
        "System Design",
        "Архитектурные паттерны",
        "Оптимизация производительности"
      ]
    },
    {
      name: "Мария",
      photo: "/api/placeholder/80/80",
      role: "React Developer",
      company: "Международный проект",
      before: {
        position: "Junior+",
        salary: "$1500"
      },
      after: {
        position: "Middle+",
        salary: "$3000",
        duration: "2 месяца"
      },
      quote: "Имела хорошие технические навыки, но постоянно проваливала собеседования. На программе научилась структурировано доносить свои мысли и уверенно презентовать решения. Результат - оффер мечты!",
      keyLearnings: [
        "Проектирование компонентов",
        "Стейт-менеджмент",
        "Микрофронтенды"
      ]
    },
    {
      name: "Дмитрий",
      photo: "/api/placeholder/80/80",
      role: "Frontend Developer",
      company: "E-commerce платформа",
      before: {
        position: "Junior",
        salary: "$1300"
      },
      after: {
        position: "Middle",
        salary: "$2600",
        duration: "3 месяца"
      },
      quote: "Программа дала четкое понимание, какие навыки нужно подтянуть. Особенно помогла практика решения архитектурных задач и код-ревью реальных проектов. Теперь уверенно решаю сложные задачи в новой роли.",
      keyLearnings: [
        "Архитектура приложений",
        "Работа с legacy",
        "Тестирование"
      ]
    }
  ];

  const stats = [
    {
      value: "30+",
      label: "успешных переходов",
      icon: <Target className="w-6 h-6 text-blue-500" />
    },
    {
      value: "92%",
      label: "получают оффер",
      icon: <Briefcase className="w-6 h-6 text-green-500" />
    },
    {
      value: "2-3",
      label: "месяца подготовки",
      icon: <Calendar className="w-6 h-6 text-purple-500" />
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with stats */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6">Реальные результаты наших менти</h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto mb-12">
            Истории разработчиков, которые успешно выросли до уровня Middle+ с нашей поддержкой
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl">
                <div className="flex items-center justify-center gap-3 mb-2">
                  {stat.icon}
                  <span className="text-3xl font-bold">{stat.value}</span>
                </div>
                <p className="text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {successStories.map((story, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 relative group hover:bg-white hover:shadow-xl transition-all">
              {/* Profile */}
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={story.photo} 
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                />
                <div>
                  <h3 className="font-semibold text-lg">{story.name}</h3>
                  <p className="text-slate-600">{story.role}</p>
                  <p className="text-sm text-blue-600">{story.company}</p>
                </div>
              </div>

              {/* Results Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Было</div>
                    <div className="font-medium">{story.before.position}</div>
                    <div className="text-slate-600">{story.before.salary}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Стало</div>
                    <div className="font-medium text-blue-600">{story.after.position}</div>
                    <div className="text-blue-600">{story.after.salary}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Calendar className="w-4 h-4" />
                  <span>Срок: {story.after.duration}</span>
                </div>
              </div>

              {/* Quote */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-blue-200 mb-2" />
                <p className="text-slate-600 italic">{story.quote}</p>
              </div>

              {/* Key Learnings */}
              <div>
                <div className="text-sm font-medium mb-2">Ключевые улучшения:</div>
                <ul className="space-y-2">
                  {story.keyLearnings.map((learning, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600">
                      <ChevronRight className="w-4 h-4 text-blue-500" />
                      {learning}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover effect decoration */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform rounded-b-2xl" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12">
          <Star className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
          <h3 className="text-white text-2xl font-bold mb-4">Хотите похожий результат?</h3>
          <p className="text-slate-300 mb-8">
            Запишитесь на бесплатную консультацию и узнайте, как достичь такого же роста в карьере
          </p>
          <button className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2 transition-colors">
            Получить план развития
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;