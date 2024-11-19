import React from 'react';
import { 
  MessageCircle, 
  Mail, 
  ArrowUp, 
  Shield, 
  FileText, 
  CreditCard
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* Scroll to top button */}
      <div className="bg-slate-50 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-end">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
          >
            <span>Наверх</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main footer content */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Column 1 - Contact */}
            <div>
              <div className="text-2xl font-bold mb-6">Middle+ Mentor</div>
              <div className="space-y-4">
                <a 
                  href="#contact" 
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Telegram: @middlementor</span>
                </a>
                <a 
                  href="mailto:contact@middlementor.com" 
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>contact@middlementor.com</span>
                </a>
              </div>
            </div>

            {/* Column 2 - Legal */}
            <div>
              <div className="font-semibold mb-6">Документы</div>
              <div className="space-y-4">
                <a 
                  href="#privacy" 
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Shield className="w-5 h-5" />
                  <span>Политика конфиденциальности</span>
                </a>
                <a 
                  href="#terms" 
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  <span>Условия использования</span>
                </a>
                <a 
                  href="#payment" 
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Безопасная оплата</span>
                </a>
              </div>
            </div>

            {/* Column 3 - CTA */}
            <div>
              <div className="font-semibold mb-6">Остались вопросы?</div>
              <p className="text-slate-300 mb-6">
                Запишитесь на бесплатную консультацию и получите план развития до уровня Middle+
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition-colors">
                Записаться на консультацию
                <ArrowUp className="w-4 h-4 rotate-45" />
              </button>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="mt-16 pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-slate-400">
                © {currentYear} Middle+ Mentor. Все права защищены
              </div>
              <div className="flex items-center gap-6">
                <a 
                  href="#blog" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Блог
                </a>
                <a 
                  href="#about" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  О менторе
                </a>
                <a 
                  href="#reviews" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Отзывы
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;