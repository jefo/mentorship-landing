import React from 'react';
import { Code2, Users, Target, ShieldCheck, TrendingUp, MessagesSquare, CheckCircle } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Почему разработчики выбирают нашу программу</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Системный подход к развитию, основанный на опыте успешных переходов с Junior на Middle+
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Cards */}
          <div className="bg-slate-50 p-6 rounded-xl">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Системный подход к росту</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span>Комплексная программа развития</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span>Структурированный план с измеримыми результатами</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span>Проверенная методология</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Фокус на практике</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span>Работа с реальными проектами</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span>Разбор архитектурных решений</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span>Улучшение вашего текущего кода</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Гарантия результата</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span>100% возврат если нет оффера</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span>Поддержка до получения оффера</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span>Юридическое оформление гарантий</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold mb-8 text-center">Сравнение подходов</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-100 p-6 rounded-xl">
              <div className="text-xl font-semibold mb-4 text-slate-400">Стандартный ментор</div>
              <ul className="space-y-4">
                <li className="flex items-center gap-2 text-slate-600">
                  <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center">
                    <span className="text-slate-400">•</span>
                  </div>
                  Только еженедельные созвоны
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center">
                    <span className="text-slate-400">•</span>
                  </div>
                  Общие рекомендации
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center">
                    <span className="text-slate-400">•</span>
                  </div>
                  Нет четкого плана
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
              <div className="text-xl font-semibold mb-4 text-blue-600">Наша программа</div>
              <ul className="space-y-4">
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-6 h-6 text-blue-500" />
                  Комплексная система развития
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-6 h-6 text-blue-500" />
                  Работа с вашими задачами
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-6 h-6 text-blue-500" />
                  Четкий план и измеримые результаты
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;