"use client";

import type { FormEvent } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import {
  CONTACT_EMPLOYEE_OPTIONS,
  CONTACT_SERVICE_OPTIONS,
  SCHEMA_NAP,
  SITE,
} from "@/lib/constants";

type QuoteFormElements = HTMLFormControlsCollection & {
  empresa: HTMLInputElement;
  responsavel: HTMLInputElement;
  telefone: HTMLInputElement;
  cidade: HTMLInputElement;
  funcionarios: HTMLSelectElement;
  servico: HTMLSelectElement;
  mensagem: HTMLTextAreaElement;
};

type QuoteForm = HTMLFormElement & {
  elements: QuoteFormElements;
};

export function ContactCTA() {
  function handleSubmit(event: FormEvent<QuoteForm>) {
    event.preventDefault();

    const { elements } = event.currentTarget;
    const message = [
      "Olá, GNAVIDA. Quero solicitar um orçamento gratuito.",
      `Empresa: ${elements.empresa.value}`,
      `Responsável: ${elements.responsavel.value}`,
      `Telefone / WhatsApp: ${elements.telefone.value}`,
      `Cidade: ${elements.cidade.value}`,
      `Número de funcionários: ${elements.funcionarios.value}`,
      `Serviço de interesse: ${elements.servico.value}`,
      `Mensagem: ${elements.mensagem.value || "Não informada"}`,
    ].join("\n");

    window.open(`${SITE.whatsappLink}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <SectionWrapper background="navy" className="relative overflow-hidden" id="contato">
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/images/equipe-atendimento.jpg')] bg-cover bg-center"
      />
      <span aria-hidden="true" className="absolute inset-0 bg-navy/85" />
      <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:items-start">
        <article className="lg:col-span-5">
          <h2 className="text-white">Solicite um Orçamento Gratuito</h2>
          <p className="mt-6 text-lg font-medium text-white/70">
            Fale com nossa equipe e descubra como regularizar a documentação SST da sua empresa com agilidade e sem complicação.
          </p>

          <address className="mt-10 space-y-5 not-italic text-white">
            <p className="flex gap-3">
              <Phone aria-hidden="true" className="mt-1 text-green" size={22} />
              <span>{SITE.phone} / {SITE.phone2}</span>
            </p>
            <p className="flex gap-3">
              <MessageCircle aria-hidden="true" className="mt-1 text-green" size={22} />
              <span>WhatsApp {SITE.whatsappDisplay}</span>
            </p>
            <p className="flex gap-3">
              <Mail aria-hidden="true" className="mt-1 text-green" size={22} />
              <span>{SITE.email}</span>
            </p>
            <p className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-1 text-green" size={22} />
              <span>
                {SCHEMA_NAP.streetAddress}, {SCHEMA_NAP.addressLocality}/{SCHEMA_NAP.addressRegion}, {SCHEMA_NAP.postalCode}
              </span>
            </p>
          </address>

          <div className="mt-8 space-y-2 text-sm font-medium text-white/60">
            <p>Exames: Seg a Sex {SITE.hours.exams.weekdays} | Sáb {SITE.hours.exams.saturday}</p>
            <p>Administrativo: Seg a Sex {SITE.hours.admin.weekdays} | Sáb {SITE.hours.admin.saturday}</p>
          </div>
        </article>

        <form
          className="rounded-2xl bg-white p-6 shadow-navy-lg md:p-8 lg:col-span-7"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block font-bold text-navy" htmlFor="empresa">
              Nome da empresa*
              <input
                className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 font-medium text-gray-text outline-none transition focus:border-green focus:ring-4 focus:ring-green/20"
                id="empresa"
                name="empresa"
                required
                type="text"
              />
            </label>

            <label className="block font-bold text-navy" htmlFor="responsavel">
              Nome do responsável*
              <input
                className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 font-medium text-gray-text outline-none transition focus:border-green focus:ring-4 focus:ring-green/20"
                id="responsavel"
                name="responsavel"
                required
                type="text"
              />
            </label>

            <label className="block font-bold text-navy" htmlFor="telefone">
              Telefone / WhatsApp*
              <input
                className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 font-medium text-gray-text outline-none transition focus:border-green focus:ring-4 focus:ring-green/20"
                id="telefone"
                name="telefone"
                required
                type="tel"
              />
            </label>

            <label className="block font-bold text-navy" htmlFor="cidade">
              Cidade*
              <input
                className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 font-medium text-gray-text outline-none transition focus:border-green focus:ring-4 focus:ring-green/20"
                id="cidade"
                name="cidade"
                placeholder="Ex: Camaçari, Salvador..."
                required
                type="text"
              />
            </label>

            <label className="block font-bold text-navy" htmlFor="funcionarios">
              Número de funcionários*
              <select
                className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 font-medium text-gray-text outline-none transition focus:border-green focus:ring-4 focus:ring-green/20"
                id="funcionarios"
                name="funcionarios"
                required
              >
                <option value="">Selecione</option>
                {CONTACT_EMPLOYEE_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="block font-bold text-navy" htmlFor="servico">
              Serviço de interesse
              <select
                className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 font-medium text-gray-text outline-none transition focus:border-green focus:ring-4 focus:ring-green/20"
                id="servico"
                name="servico"
              >
                <option value="">Selecione</option>
                {CONTACT_SERVICE_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="mt-5 block font-bold text-navy" htmlFor="mensagem">
            Mensagem
            <textarea
              className="mt-2 min-h-32 w-full rounded-2xl border border-gray-200 px-4 py-3 font-medium text-gray-text outline-none transition focus:border-green focus:ring-4 focus:ring-green/20"
              id="mensagem"
              name="mensagem"
            />
          </label>

          <Button className="mt-6 w-full" type="submit">
            Solicitar Orçamento via WhatsApp
          </Button>
          <p className="mt-4 text-center text-sm font-medium text-gray-text/60">
            Ao enviar, você será redirecionado ao WhatsApp da GNAVIDA.
          </p>
        </form>
      </div>
    </SectionWrapper>
  );
}
