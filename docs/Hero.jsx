import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Clock, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-bold">MentorShip</div>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg flex items-center gap-2">
          Записаться на консультацию
          <ArrowRight className="w-4 h-4" />
        </button>
      </nav>

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Помогу получить оффер уровня Middle+ за 2-3 месяца
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Пошаговая система подготовки + поддержка до результата с гарантией возврата денег
          </p>
          
          {/* Quick Stats */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 text-blue-400" />
                <div>
                  <div className="text-2xl font-bold mb-2">30+</div>
                  <div className="text-slate-300">успешных переходов с Junior на Middle</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-blue-400" />
                <div>
                  <div className="text-2xl font-bold mb-2">2-3 месяца</div>
                  <div className="text-slate-300">средний срок подготовки</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 text-green-400" />
                <div>
                  <div className="text-2xl font-bold mb-2">$1500+</div>
                  <div className="text-slate-300">средний рост зарплаты</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-green-400" />
                <div>
                  <div className="text-2xl font-bold mb-2">100%</div>
                  <div className="text-slate-300">гарантия возврата</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2">
              Получить план развития
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-slate-700 hover:bg-slate-600 px-8 py-4 rounded-lg text-lg font-semibold">
              Посмотреть программу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
