import React from 'react';
import { 
  Code2, 
  Users, 
  Building2, 
  BookOpen,
  CheckCircle,
  ArrowRight,
  Star,
  GraduationCap,
  Briefcase,
  Award,
  Quote
} from 'lucide-react';

const MentorSection = () => {
  const expertise = [
    {
      icon: <Code2 className="w-5 h-5 text-blue-500" />,
      title: "8+ лет в разработке",
      description: "Опыт создания и масштабирования крупных проектов"
    },
    {
      icon: <Building2 className="w-5 h-5 text-purple-500" />,
      title: "Senior Engineer",
      description: "Ведущие компании России и зарубежья"
    },
    {
      icon: <Users className="w-5 h-5 text-green-500" />,
      title: "Опыт менторства",
      description: "Помог 30+ разработчикам вырасти до уровня Middle+"
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-yellow-500" />,
      title: "Технический эксперт",
      description: "Регулярно провожу собеседования и оцениваю кандидатов"
    }
  ];

  const responsibilities = [
    {
      icon: <Briefcase className="w-6 h-6 text-blue-500" />,
      title: "Team Lead",
      items: [
        "Развитие команды из 10+ человек",
        "Проведение код-ревью и интервью",
        "Архитектурные решения"
      ]
    },
    {
      icon: <Award className="w-6 h-6 text-purple-500" />,
      title: "Достижения",
      items: [
        "Создание системы онбординга",
        "Внедрение современных практик",
        "Оптимизация процессов разработки"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Photo & Main Info */}
          <div>
            <div className="mb-8 relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="/api/placeholder/600/600" 
                  alt="Ментор" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Experience badges */}
              <div className="absolute -right-4 top-4 bg-white shadow-lg rounded-lg p-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-500" />
                <span className="font-medium">8+ лет опыта</span>
              </div>
              <div className="absolute -right-4 bottom-4 bg-white shadow-lg rounded-lg p-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-green-500" />
                <span className="font-medium">30+ менти</span>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="grid sm:grid-cols-2 gap-6">
              {responsibilities.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    {item.icon}
                    <h4 className="font-semibold">{item.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {item.items.map((responsibility, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Ваш ментор в пути к новому уровню
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Помогаю разработчикам структурировать знания, усилить технические навыки и уверенно проходить собеседования на позиции уровня Middle+
            </p>

            {/* Expertise Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {expertise.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    {item.icon}
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-8">
              <Quote className="w-8 h-8 text-blue-300 mb-4" />
              <p className="text-slate-700 italic mb-4">
                "Мой подход - не просто дать знания, а научить применять их на практике. 
                Каждый разработчик уникален, поэтому мы создаем персональный план роста, 
                основанный на ваших сильных сторонах и целях."
              </p>
            </div>

            {/* CTA */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2 transition-colors">
              Познакомиться на консультации
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorSection;
