import React from 'react';
import { 
  ClipboardCheck, 
  Code2, 
  MessagesSquare, 
  GraduationCap,
  Calendar,
  ArrowRight,
  BookOpen,
  PenTool,
  FileCode,
  MessageCircle
} from 'lucide-react';

const ProcessSection = () => {
  const weekSchedule = [
    {
      day: "День 1",
      title: "Менторская сессия",
      icon: <GraduationCap className="w-5 h-5" />,
      items: [
        "Разбор сложных концепций",
        "Анализ рабочих кейсов",
        "Практика интервью"
      ]
    },
    {
      day: "День 2-5",
      title: "Практика",
      icon: <PenTool className="w-5 h-5" />,
      items: [
        "Применение знаний",
        "Работа над проектом",
        "Поддержка в чате"
      ]
    },
    {
      day: "День 6",
      title: "Code Review",
      icon: <FileCode className="w-5 h-5" />,
      items: [
        "Детальный разбор кода",
        "Рекомендации",
        "План на неделю"
      ]
    },
    {
      day: "День 7",
      title: "Самостоятельная работа",
      icon: <BookOpen className="w-5 h-5" />,
      items: [
        "Изучение материалов",
        "Доработка кода",
        "Подготовка вопросов"
      ]
    }
  ];

  const supportTypes = [
    {
      title: "Менторские сессии",
      description: "Еженедельные часовые созвоны с разбором вашего кода и архитектурных решений",
      icon: <GraduationCap className="w-6 h-6 text-purple-500" />,
      details: ["Формат: Zoom с видео", "Длительность: 60 минут", "Запись для повторного просмотра"]
    },
    {
      title: "Code Review",
      description: "Детальный разбор вашего кода с рекомендациями по улучшению",
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      details: ["Через GitHub/GitLab", "Развёрнутые комментарии", "Примеры решений"]
    },
    {
      title: "Чат-поддержка",
      description: "Оперативная помощь с текущими вопросами и блокерами",
      icon: <MessageCircle className="w-6 h-6 text-green-500" />,
      details: ["Ответ в течение 2-3 часов", "Помощь с блокерами", "Ревью небольших изменений"]
    }
  ];

  return (
    <div className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Как построена программа менторства</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Системный подход к развитию с еженедельным циклом обучения и постоянной поддержкой
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-24">
          <div className="absolute top-0 left-1/2 h-full w-0.5 bg-blue-100 -translate-x-1/2 hidden md:block" />
          <div className="grid md:grid-cols-2 gap-8">
            {weekSchedule.map((item, index) => (
              <div key={item.day} className={`${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:translate-y-24'}`}>
                <div className="bg-white p-6 rounded-xl shadow-sm relative">
                  {/* Timeline dot */}
                  <div className="absolute top-6 -right-3 w-6 h-6 bg-blue-500 rounded-full hidden md:block 
                    ${index % 2 === 0 ? '-right-3' : '-left-3'}">
                    <div className="w-4 h-4 bg-white rounded-full m-1" />
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-blue-600">{item.day}</div>
                      <div className="font-semibold">{item.title}</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {item.items.map((task, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600">
                        <div className="w-1 h-1 bg-slate-400 rounded-full" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Types */}
        <div className="mt-32">
          <h3 className="text-2xl font-bold mb-12 text-center">Форматы поддержки</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {supportTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="p-3 bg-slate-50 rounded-xl w-fit mb-4">
                  {type.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{type.title}</h4>
                <p className="text-slate-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600">
                      <ArrowRight className="w-4 h-4 text-blue-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2">
            Начать обучение
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
