import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenQuiz: () => void;
  onSelectPlan: (planId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuiz, onSelectPlan }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Countdown timer for next bi-monthly edition
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 18,
    minutes: 42,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return { days: 5, hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0D0507]/95 backdrop-blur-md border-b border-[#D3AF37]/30 text-[#FCFCFC]">
      {/* Top Countdown Bar */}
      <div className="bg-[#240C11] text-[#FCFCFC] py-2 px-4 text-xs font-desc border-b border-[#D3AF37]/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D3AF37]" />
            <span className="font-medium tracking-wide">
              Próxima Edição Bimestral: <strong className="font-semibold text-[#D3AF37]">Rouge & Veludo</strong>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#E3BC9A] hidden sm:inline flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> Encerramento das inscrições do ciclo:
            </span>
            <div className="flex items-center gap-1.5 font-mono text-[11px] tabular-nums font-semibold tracking-wider bg-black/60 px-2.5 py-0.5 rounded-sm border border-[#D3AF37]/40 text-[#FCFCFC]">
              <span>{String(timeLeft.days).padStart(2, '0')}d</span>:
              <span>{String(timeLeft.hours).padStart(2, '0')}h</span>:
              <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>:
              <span className="text-[#D3AF37]">{String(timeLeft.seconds).padStart(2, '0')}s</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation: 3-Zone Contract */}
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="text-xl md:text-2xl font-serif tracking-[0.2em] font-semibold text-[#D3AF37] whitespace-nowrap shrink-0 hover:text-white transition-colors"
        >
          AMOR & MISTÉRIO
        </a>

        {/* Zone 2: Single-line Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[12px] font-desc uppercase tracking-[0.1em] text-[#FCFCFC]/80">
          <a href="#como-funciona" className="hover:text-[#D3AF37] transition-colors whitespace-nowrap shrink-0">
            Como Funciona
          </a>
          <a href="#curadoria" className="hover:text-[#D3AF37] transition-colors whitespace-nowrap shrink-0">
            A Curadoria
          </a>
          <a href="#experiencia" className="hover:text-[#D3AF37] transition-colors whitespace-nowrap shrink-0">
            Experiência
          </a>
          <a href="#planos" className="hover:text-[#D3AF37] transition-colors whitespace-nowrap shrink-0">
            Planos
          </a>
          <a href="#pagamento" className="hover:text-[#D3AF37] transition-colors whitespace-nowrap shrink-0">
            Pagamento
          </a>
          <a href="#indique" className="hover:text-[#D3AF37] transition-colors whitespace-nowrap shrink-0">
            Indique Amigas
          </a>
        </nav>

        {/* Zone 3: Primary Action Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onSelectPlan()}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-[#722F37] hover:bg-[#5b242b] text-[#FCFCFC] font-btn rounded-sm shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 border border-[#D3AF37]/50"
          >
            Descubra seu plano
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#D3AF37] hover:text-white focus:outline-none cursor-pointer"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#14080A] border-t border-[#D3AF37]/30 px-6 py-5 flex flex-col gap-4 text-xs font-desc uppercase tracking-widest text-[#FCFCFC]">
          <a
            href="#como-funciona"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-[#D3AF37]"
          >
            Como Funciona
          </a>
          <a
            href="#curadoria"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-[#D3AF37]"
          >
            A Curadoria
          </a>
          <a
            href="#experiencia"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-[#D3AF37]"
          >
            Experiência & Filme
          </a>
          <a
            href="#planos"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-[#D3AF37]"
          >
            Planos de Assinatura
          </a>
          <a
            href="#pagamento"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-[#D3AF37]"
          >
            Formas de Pagamento
          </a>
          <a
            href="#indique"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-[#D3AF37]"
          >
            Indique Amigas (Ganhe R$ 30)
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onSelectPlan();
            }}
            className="w-full mt-2 py-3 bg-[#722F37] text-[#FCFCFC] font-btn rounded-sm text-center border border-[#D3AF37]/50"
          >
            Descubra seu plano
          </button>
        </div>
      )}
    </header>
  );
};
