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
  Target,
  ArrowUpRight,
  Users
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
    // ... остальные истории успеха остаются без изменений
  ];

  const metrics = [
    {
      value: "+70%",
      label: "Средний рост зарплаты",
      description: "после прохождения программы",
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      bgGradient: "from-green-50 to-white",
      valueColor: "text-green-600"
    },
    {
      value: "83%",
      label: "Успешных собеседований",
      description: "с первых трёх попыток",
      icon: <Target className="w-6 h-6 text-blue-500" />,
      bgGradient: "from-blue-50 to-white",
      valueColor: "text-blue-600"
    },
    {
      value: "90%",
      label: "Приглашений на интервью",
      description: "после обновления резюме",
      icon: <Users className="w-6 h-6 text-purple-500" />,
      bgGradient: "from-purple-50 to-white",
      valueColor: "text-purple-600"
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6">Реальные результаты наших менти</h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto mb-12">
            Истории разработчиков, которые успешно выросли до уровня Middle+ с нашей поддержкой
          </p>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {metrics.map((metric, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${metric.bgGradient} p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  {metric.icon}
                  <span className={`text-3xl font-bold ${metric.valueColor}`}>
                    {metric.value}
                  </span>
                </div>
                <div className="font-medium mb-2">{metric.label}</div>
                <div className="text-sm text-slate-600">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories остаются без изменений */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* ... код историй успеха ... */}
        </div>

        {/* CTA остается без изменений */}
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12">
          {/* ... код CTA ... */}
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;