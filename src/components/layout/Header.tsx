"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "/cursos", label: "Cursos" },
    { href: "/portfolio-alunos", label: "Portfólio Alunos" },
    { href: "/projetos", label: "Projetos" },
    { href: "/area-do-candidato", label: "Processo Seletivo" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header className="bg-blue-900 text-white shadow-md relative">
      <nav className="container mx-auto flex items-center justify-between container-responsive py-4 md:py-6">
        {/* Logo */}
        <Link href="/" className="block transition-transform duration-300 ease-in-out hover:scale-105 z-20 relative">
          <Image
            src="/images/Logo-CAV_branco_2020_sm0.png"
            alt="Logo CAV"
            width={140}
            height={35}
            className="md:w-[160px] md:h-[40px] lg:w-[180px] lg:h-[45px]"
            priority
          />
        </Link>

        {/* Menu Desktop - Oculto no mobile */}
        <ul className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="group relative block px-4 py-3 text-base tracking-wider font-medium overflow-hidden h-[3rem] flex items-center">
                <span className="block transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                  {link.label}
                </span>
                <span className="absolute inset-0 flex items-center justify-center text-orange-400 transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Botão Menu Mobile - Visível apenas no mobile/tablet */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden z-20 relative p-2 rounded-md hover:bg-blue-800 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Menu Mobile Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-10 bg-blue-900">
          <div className="flex flex-col pt-20 h-full">
            <nav className="flex-1">
              <ul className="space-y-2 px-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="mobile-menu-item"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Footer do menu mobile */}
            <div className="p-4 border-t border-blue-800">
              <p className="text-center text-sm text-gray-300">
                Centro de Audiovisual - São Bernardo do Campo
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 