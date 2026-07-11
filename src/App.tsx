import { useEffect, useState } from "react";

import type { Puppy } from "./types/puppy";
import { PUPPIES } from "./data/puppies";

import logo from "../src/assets/photos/logo.jpg";

import photoHero from "../src/assets/photos/photo_hero.jpg";
import photoDog1 from "../src/assets/photos/photo_dog_1.jpg";
import photoMedals from "../src/assets/photos/photo_medals.jpg";

import photoRanch from "../src/assets/photos/photo_ranch.jpg";
import photoFamily from "../src/assets/photos/photo_family.jpg";

// Configure o número de WhatsApp do criador aqui.
const WHATSAPP_NUMBER = "5511956397507";
const WHATSAPP_MESSAGE = "Olá! Vi o site do Brazilian Pomsky e gostaria de saber mais sobre os filhotes disponíveis.";
const INSTAGRAM_URL = "https://www.instagram.com/brazilianpomsky";

function whatsappHref(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}


export default function App() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Puppies />
      <Farm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 px-6 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logotipo Brazilian Pomsky"
            className="h-10 w-auto rounded-md"
            width={160}
            height={40}
          />
          <span className="font-display text-xl font-bold italic tracking-tight">
            Brazilian Pomsky
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium tracking-wide md:flex">
          <a href="#filhotes" className="transition-colors hover:text-primary">
            Filhotes
          </a>
          <a href="#historia" className="transition-colors hover:text-primary">
            Nossa História
          </a>
          <a href="#sitio" className="transition-colors hover:text-primary">
            O Sítio
          </a>
          <a href="#contato" className="transition-colors hover:text-primary">
            Contato
          </a>
        </div>
        <div className="size-2 animate-pulse rounded-full bg-primary" aria-hidden="true" />
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative px-6 py-12 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="animate-reveal">
          <h1 className="font-display text-5xl leading-[1.1] text-balance md:text-7xl">
            Excelência que se vê. Amor que se sente.
          </h1>
          <p className="mb-8 mt-6 max-w-[45ch] text-lg text-muted-foreground text-pretty">
            Criamos Husky Siberiano Wolly, Pomsky, Spitz Alemão e Cavalier King com excelência genética. Onde são criados em um ambiente livre, cercado por natureza, carinho e amor, sempre priorizando saúde, equilíbrio e bem-estar.
          </p>
          <a
            href="#filhotes"
            className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 font-medium text-background transition-all hover:bg-primary"
          >
            Ver filhotes disponíveis
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
        <div className="animate-reveal" style={{ animationDelay: "150ms" }}>
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] outline outline-1 -outline-offset-1 outline-foreground/10">
            <img
              src={photoHero}
              alt="Husky siberiano majestoso em um campo ao pôr do sol no sítio Brazilian Pomsky"
              className="h-full w-full object-cover"
              width={1200}
              height={1504}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="historia" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <span className="mb-4 block text-[10px] font-medium uppercase tracking-widest text-primary">
              Nossa História
            </span>
            <h2 className="font-display mb-6 text-4xl leading-tight">
              Uma família apaixonada pela criação.
            </h2>
            <div className="max-w-[40ch] space-y-6 leading-relaxed text-muted-foreground text-pretty">
              <p>
                O Brazilian Pomsky nasceu do sonho de criar cães saudáveis, equilibrados e verdadeiramente felizes. 
                O que começou como uma paixão, se tornou uma missão: oferecer aos filhotes o melhor início de vida do mundo e estar como o melhor canil do Brasil.
              </p>
              <p>
                Criamos em ambiente familiar, com socialização constante, genética selecionada, acompanhamento veterinário rigoroso e muito espaço para brincar.
                Acreditamos que um cão bem cuidado se torna um companheiro extraordinário.
              </p>
            </div>
            <div className="mt-10 flex gap-4">
              <div className="flex flex-col">
                <span className="font-display text-3xl italic text-primary">10+</span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Anos de dedicação</span>
              </div>
              <div className="mx-4 w-px bg-border" />
              <div className="flex flex-col">
                <span className="font-display text-3xl italic text-primary">300+</span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Famílias felizes</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] overflow-hidden rounded-xl outline outline-1 -outline-offset-1 outline-foreground/10">
                <img
                  src={photoDog1}
                  alt="Cão brasileiro Pomsky em ambiente natural"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={816}
                  height={816}
                />
              </div>
              <div className="mt-8 aspect-[4/5] overflow-hidden rounded-xl outline outline-1 -outline-offset-1 outline-foreground/10">
                <img
                  src={photoMedals}
                  alt="Prêmios recebidos pelo Brazilian Pomsky"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={816}
                  height={816}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Puppies() {
  const [selected, setSelected] = useState<Puppy | null>(null);

  return (
    <section id="filhotes" className="bg-foreground/5 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="font-display text-4xl">Ninhadas Atuais</h2>
            <p className="mt-2 text-muted-foreground">Filhotes de Husky Siberiano disponíveis para reserva</p>
          </div>
          <span className="hidden font-mono text-xs uppercase tracking-widest text-muted-foreground sm:block">
            Disponibilidade: {PUPPIES.length} filhotes
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {PUPPIES.map((puppy, index) => (
            <div
              key={puppy.id}
              className="group animate-reveal"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <button
                type="button"
                onClick={() => setSelected(puppy)}
                className="relative mb-4 block aspect-[4/5] w-full overflow-hidden rounded-2xl outline outline-1 -outline-offset-1 outline-foreground/10 transition-all group-hover:ring-2 group-hover:ring-primary/20"
                aria-label={`Ver galeria e vídeo de ${puppy.name}`}
              >
                <img
                  src={puppy.image}
                  alt={`Filhote de Husky Siberiano ${puppy.name}, ${puppy.description}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={1008}
                />
                 <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-foreground backdrop-blur-sm">
                    {puppy.sex}
                  </span>
                  {puppy.rare ? (
                    <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-primary-foreground shadow-sm">
                      RARO!
                    </span>
                  ) : null}
                </div>
              </button>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-medium">{puppy.name}</h3>
                  <p className="text-sm text-muted-foreground">{puppy.description}</p>
                </div>
              <div className="flex flex-col items-end gap-1.5">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary">
                    Parcelamento em até 12x sem juros no cartão!
                  </span>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  onClick={() => setSelected(puppy)}
                  className="flex-1 rounded-lg border border-foreground/20 bg-background py-2.5 text-center text-sm font-medium text-foreground transition-all hover:bg-foreground/5 active:scale-95"
                >
                  Ver fotos e vídeo
                </button>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-lg bg-foreground py-2.5 text-center text-sm font-medium text-background ring-1 ring-foreground/20 transition-all hover:bg-primary hover:text-primary-foreground active:scale-95"
                >
                  Quero o {puppy.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected ? <PuppyModal puppy={selected} onClose={() => setSelected(null)} /> : null}
    </section>
  );
}

function PuppyModal({ puppy, onClose }: { puppy: Puppy; onClose: () => void }) {
  const [activePhoto, setActivePhoto] = useState(puppy.gallery[0] ?? puppy.image);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalhes do filhote ${puppy.name}`}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-background shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md ring-1 ring-border transition hover:bg-foreground hover:text-background"
          aria-label="Fechar"
        >
          ✕
        </button>

        <div className="p-6 md:p-8">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
            <div>
              <h3 className="font-display text-3xl">{puppy.name}</h3>
              <p className="text-sm text-muted-foreground">{puppy.description}</p>
            </div>
          </div>

          {puppy.youtubeId ? (
            <div className="mb-6 aspect-video overflow-hidden rounded-xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${puppy.youtubeId}?rel=0`}
                title={`Vídeo do filhote ${puppy.name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          ) : (
            <div className="mb-6 flex aspect-video items-center justify-center rounded-xl border border-dashed border-border bg-foreground/5 text-center text-sm text-muted-foreground">
              Vídeo em breve — em instantes disponibilizaremos o vídeo do {puppy.name}.
            </div>
          )}

          <div className="mb-4 aspect-[4/3] overflow-hidden rounded-xl bg-foreground/5">
            <img
              src={activePhoto}
              alt={`Foto do filhote ${puppy.name}`}
              className="h-full w-full object-cover"
            />
          </div>

          {puppy.gallery.length > 1 ? (
            <div className="mb-6 grid grid-cols-4 gap-2 sm:grid-cols-6">
              {puppy.gallery.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActivePhoto(src)}
                  className={`aspect-square overflow-hidden rounded-md ring-1 transition ${
                    activePhoto === src ? "ring-primary ring-2" : "ring-border hover:ring-foreground/40"
                  }`}
                  aria-label={`Ver foto ${i + 1}`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          ) : null}

          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{puppy.detail}</p>

          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-lg bg-primary py-3 text-center font-medium text-primary-foreground transition-all hover:brightness-110 active:scale-95"
          >
            Conversar sobre o {puppy.name} no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

function Farm() {
  return (
    <section id="sitio" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-16 md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-xl outline outline-1 -outline-offset-1 outline-foreground/10">
                <img
                  src={photoRanch}
                  alt="Foto do sítio Brazilian Pomsky"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={816}
                  height={816}
                />
              </div>
              <div className="mt-8 aspect-square overflow-hidden rounded-xl outline outline-1 -outline-offset-1 outline-foreground/10">
                <img
                  src={photoFamily}
                  alt="Família com cães brasileiros Pomsky"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={816}
                  height={816}
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-display mb-6 text-4xl">Liberdade, Natureza e Excelência</h2>
            <p className="mb-6 leading-relaxed text-muted-foreground text-pretty">
              Nosso rancho foi cuidadosamente planejado para oferecer o melhor aos nossos cães. 
              São 13.000 m² de área verde, com cercados amplos, sombra natural, ambientes climatizados e uma estrutura desenvolvida para garantir liberdade, conforto e bem-estar em todas as fases da vida.
            </p>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3">
                <div className="size-1.5 rounded-full bg-primary" />
                Descendentes de campeões Pan-Americanos e Sul-Americanos
              </li>
              <li className="flex items-center gap-3">
                <div className="size-1.5 rounded-full bg-primary" />
                Seleção genética criteriosa e criação responsável
              </li>
              <li className="flex items-center gap-3">
                <div className="size-1.5 rounded-full bg-primary" />
                Socialização diária e acompanhamento veterinário
              </li>
              <li className="flex items-center gap-3">
                <div className="size-1.5 rounded-full bg-primary" />
                Alimentação premium e transporte responsável para todo o Brasil
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="bg-foreground px-6 py-20 text-background/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <h2 className="font-display mb-4 text-3xl text-background">Pronto para um novo amigo?</h2>
        <p className="mb-10 max-w-md opacity-70">
          Entre em contato para tirar dúvidas, agendar uma visita ao sítio ou conhecer nosso processo de reserva.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-primary px-10 py-4 font-bold text-primary-foreground transition-all hover:brightness-110"
          >
            <WhatsAppIcon className="size-5" />
            Chamar no WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-background/20 px-8 py-4 font-mono text-sm transition hover:bg-background hover:text-foreground"
          >
            <InstagramIcon className="size-4" />
            @brazilianpomsky
          </a>
        </div>
        <div className="mt-20 flex w-full flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 text-[10px] uppercase tracking-widest opacity-40 md:flex-row">
          <span>Brazilian Pomsky © 2026</span>
          <span>São Paulo, Brasil</span>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center gap-2 rounded-full bg-[#25D366] p-4 text-white shadow-2xl transition-transform hover:scale-105 md:pr-6"
      aria-label="Conversar no WhatsApp"
    >
      <WhatsAppIcon className="size-6 shrink-0" />
      <span className="hidden font-bold text-sm tracking-tight md:block">Falar com o Criador</span>
    </a>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

