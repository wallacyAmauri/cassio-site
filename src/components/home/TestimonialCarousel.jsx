import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

export default function TestimonialCarousel({ testimonials }) {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const visibleCount = 4;

  // Duplicate testimonials to create infinite loop effect
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [startIndex]);

  const handleNext = () => {
    setDirection(1);
    setStartIndex((prev) => {
      const next = prev + 1;
      // Reset to beginning when reaching near the end
      if (next >= testimonials.length * 2) {
        return testimonials.length;
      }
      return next;
    });
  };

  const handlePrev = () => {
    setDirection(-1);
    setStartIndex((prev) => {
      const next = prev - 1;
      // Reset to end when reaching the beginning
      if (next < testimonials.length) {
        return testimonials.length * 2 - 1;
      }
      return next;
    });
  };

  const getVisibleTestimonials = () => {
    return extendedTestimonials.slice(startIndex, startIndex + visibleCount);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 400 : -400,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 400 : -400,
      opacity: 0,
      scale: 0.8
    })
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 lg:-translate-x-16 z-20 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-slate-700 hover:text-emerald-600 transition-all hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 lg:translate-x-16 z-20 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-slate-700 hover:text-emerald-600 transition-all hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${startIndex}-${index}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                delay: index * 0.05
              }}
              layout
            >
              {/* WhatsApp Chat Card */}
            <div className="bg-[#111b21] rounded-2xl overflow-hidden shadow-2xl">
              {/* WhatsApp Header */}
              <div className="bg-[#202c33] px-4 py-2.5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-slate-200 font-medium text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-white text-[15px] truncate">
                    {testimonial.name}
                  </div>
                  <div className="text-slate-400 text-[13px] truncate">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* WhatsApp Messages Background */}
              <div 
                className="p-3 space-y-1.5 min-h-[280px] bg-[#0b141a] relative"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '350px'
                }}
              >
                {testimonial.messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="flex"
                  >
                    <div className="relative max-w-[85%] bg-[#005c4b] rounded-[7.5px] rounded-tl-sm px-2.5 py-1.5 shadow-sm">
                      {/* Tail */}
                      <div className="absolute -left-[8px] top-0 w-0 h-0 border-t-[13px] border-t-[#005c4b] border-r-[8px] border-r-transparent" />
                      
                      <p className="text-white text-[14.2px] leading-[19px] mb-0.5 font-normal" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                        {msg.text}
                      </p>
                      <div className="flex items-center justify-end gap-1 -mb-0.5">
                        <span className="text-[11px] text-slate-400 font-normal">
                          {msg.time}
                        </span>
                        <svg viewBox="0 0 16 15" width="15" height="14" className="text-[#53bdeb]">
                          <path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path>
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp Footer Badge */}
              <div className="bg-[#202c33] px-4 py-2 flex items-center justify-center gap-1.5">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 rounded-full">
                  <svg viewBox="0 0 24 24" width="12" height="12" className="text-emerald-400">
                    <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                  <span className="text-emerald-400 text-[11px] font-medium">Cliente Verificado</span>
                </div>
              </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const newStart = testimonials.length + index;
              setDirection(newStart > startIndex ? 1 : -1);
              setStartIndex(newStart);
            }}
            className={`transition-all ${
              (startIndex % testimonials.length) === index
                ? 'w-8 h-2 bg-emerald-600'
                : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
            } rounded-full`}
          />
        ))}
      </div>
    </div>
  );
}