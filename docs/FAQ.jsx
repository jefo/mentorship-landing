import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, ArrowRight } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Сколько времени нужно уделять обучению?",
      answer: "Минимум 4-6 часов в неделю для достижения результата за 2-3 месяца. Это включает: менторские сессии (1 час), выполнение практических заданий (2-3 часа), работу над pet-проектом (1-2 часа). График гибкий и адаптируется под вашу занятость."
    },
    {
      question: "Какие гарантии успеха?",
      answer: "Мы предоставляем 100% возврат оплаты, если вы не получите оффер уровня Middle+ после прохождения программы. Гарантия действует при условии выполнения всех рекомендаций ментора и прохождения программы полностью."
    },
    {
      question: "Подойдёт ли мне программа?",
      answer: "Программа идеально подходит для разработчиков с опытом работы от 1 года, которые хотят выйти на уровень Middle+. Важно иметь реальный коммерческий опыт работы с React и желание развиваться. Перед стартом мы проводим бесплатную консультацию, чтобы убедиться в готовности к программе."
    },
    {
      question: "Как проходят занятия?",
      answer: "Занятия проходят онлайн через Zoom с возможностью видеосвязи. Каждая сессия включает: разбор вашего кода, обсуждение архитектурных решений, практику прохождения интервью. Все сессии записываются и доступны для повторного просмотра."
    },
    {
      question: "Что если не получится уделять много времени?",
      answer: "Мы адаптируем программу под ваш график. Главное - регулярность занятий. Даже 4 часа в неделю при системном подходе дадут результат. При необходимости можно взять паузу и возобновить обучение позже."
    },
    {
      question: "Нужно ли быть трудоустроенным?",
      answer: "Да, программа рассчитана на практикующих разработчиков. Это важно для отработки новых навыков на реальных задачах и получения быстрого результата. Если вы сейчас в поиске работы, сначала рекомендуем найти позицию Junior/Junior+."
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-slate-600 text-lg">
            Ответы на популярные вопросы о программе менторства
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-slate-200 rounded-lg overflow-hidden hover:border-slate-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-slate-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="pt-2 text-slate-600">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions block */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-blue-500" />
          </div>
          <h3 className="text-2xl font-bold mb-2">
            Остались вопросы?
          </h3>
          <p className="text-slate-600 mb-6">
            Задайте их на бесплатной консультации
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2 transition-colors">
            Записаться на консультацию
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;