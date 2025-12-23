
import React, { useState } from 'react';
import { ChevronRight, Instagram, CheckCircle2, Star, Quote } from 'lucide-react';
import { 
  EXPERT_NAME, 
  INSTAGRAM_URL, 
  IMAGES, 
  BEFORE_AFTER_PAIRS, 
  FEATURES, 
  STEPS 
} from './constants';
import { PrimaryButton } from './components/Button';
import { Lightbox } from './components/Lightbox';

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (url: string) => setSelectedImage(url);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <div className="min-h-screen">
      <Lightbox 
        isOpen={!!selectedImage} 
        imageUrl={selectedImage || ''} 
        onClose={closeLightbox} 
      />

      {/* HERO SECTION - Side by side layout */}
      <section className="relative pt-12 lg:pt-24 pb-24 overflow-hidden bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Left Content Column */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-full">
                Odontologia Baseada em Evidências
              </span>
              
              <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-serif font-black leading-tight text-slate-900">
                Eu sou Klaus Steyllon, <br/>
                <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">seu dentista em Araraquara.</span>
              </h1>
              
              <p className="max-w-xl mb-10 text-lg md:text-xl text-slate-600 font-medium mx-auto lg:mx-0 leading-relaxed">
                Há 10 anos transformando sorrisos e cuidando da saúde bucal da sua família com excelência acadêmica e toque humano.
              </p>
              
              <div className="flex flex-col items-center lg:items-start gap-4 w-full">
                <PrimaryButton className="w-full md:w-auto px-10 text-lg py-6 shadow-indigo-100">
                  Agenda consulta gratuita no Instagram
                </PrimaryButton>
                <p className="text-sm text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Resposta rápida • Sem compromisso
                </p>
              </div>
            </div>

            {/* Right Photo Column */}
            <div className="flex-1 relative order-1 lg:order-2 w-full max-w-md lg:max-w-none">
              <div className="relative group">
                {/* Decorative background shape */}
                <div className="absolute -inset-4 bg-indigo-50 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                <img 
                  src={IMAGES.hero} 
                  alt={EXPERT_NAME} 
                  className="relative z-10 w-full h-auto object-cover rounded-[3rem] shadow-2xl shadow-indigo-100 border-8 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Am I Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src={IMAGES.backstage[0]} 
                alt="Dr. Klaus Atuando" 
                className="rounded-3xl shadow-2xl w-full aspect-[4/5] object-cover cursor-pointer"
                onClick={() => openLightbox(IMAGES.backstage[0])}
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden lg:block max-w-xs border border-slate-100">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                  ))}
                </div>
                <p className="text-sm font-semibold text-slate-800 italic">"Referência em odontopediatria e atendimento humanizado."</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 text-slate-900">Muito prazer, sou o Klaus.</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Acredito que um sorriso saudável começa com uma relação de confiança. Com mais de uma década de experiência clínica, dedico minha carreira a oferecer o que há de mais moderno na odontologia.
                </p>
                <p>
                  Não vejo apenas dentes, vejo pessoas. Seja cuidando do primeiro dente de uma criança ou devolvendo a autoestima de um adulto, meu compromisso é com a sua saúde e conforto.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Mestre (MsC) em Odontopediatria",
                    "Presidente da Comissão de Educação do CRO-RN",
                    "Especialista com 10 anos de prática clínica",
                    "Gestor Acadêmico no Ensino Superior"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-indigo-600 shrink-0 mt-1" size={22} />
                      <span className="font-semibold text-slate-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Results Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4 text-slate-900">Resultados Reais</h2>
            <p className="text-slate-500">Transformações que devolvem a alegria de sorrir.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {BEFORE_AFTER_PAIRS.map((pair, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-3xl group">
                <div className="flex gap-2 mb-4 h-64 md:h-80">
                  <div className="relative flex-1 overflow-hidden rounded-2xl cursor-pointer" onClick={() => openLightbox(pair.before)}>
                    <img src={pair.before} alt="Antes" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                    <span className="absolute top-3 left-3 bg-black/50 text-white text-[10px] px-2 py-1 rounded font-bold uppercase backdrop-blur-md">Antes</span>
                  </div>
                  <div className="relative flex-1 overflow-hidden rounded-2xl cursor-pointer" onClick={() => openLightbox(pair.after)}>
                    <img src={pair.after} alt="Depois" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                    <span className="absolute top-3 left-3 bg-indigo-600 text-white text-[10px] px-2 py-1 rounded font-bold uppercase shadow-lg">Depois</span>
                  </div>
                </div>
                <h4 className="text-center font-bold text-slate-800">{pair.title}</h4>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {IMAGES.socialProof.map((url, i) => (
              <img 
                key={i} 
                src={url} 
                alt="Prova Social" 
                className="w-full aspect-square object-cover rounded-2xl shadow-sm hover:shadow-xl transition-all cursor-pointer border border-slate-100"
                onClick={() => openLightbox(url)}
              />
            ))}
            {IMAGES.kids.slice(0, 3).map((url, i) => (
              <img 
                key={`kid-${i}`} 
                src={url} 
                alt="Atendimento Infantil" 
                className="w-full aspect-square object-cover rounded-2xl shadow-sm hover:shadow-xl transition-all cursor-pointer border border-slate-100"
                onClick={() => openLightbox(url)}
              />
            ))}
          </div>
          <p className="text-center text-slate-400 text-xs mt-8 italic">
            *Resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </section>

      {/* Why Trust Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4 text-slate-900">Por que confiar em mim?</h2>
            <p className="text-slate-500">Diferenciais de um atendimento focado em você.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <div className="mb-6 p-4 bg-indigo-50 inline-block rounded-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intermediate CTA */}
      <section className="py-20 bg-indigo-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-[120px] opacity-20 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400 rounded-full blur-[120px] opacity-20 -ml-32 -mb-32"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 leading-tight">
              Sua saúde bucal não pode esperar. Vamos começar essa jornada juntos?
            </h2>
            <PrimaryButton className="bg-white !text-indigo-900 hover:bg-slate-100 shadow-none px-12">
              Agenda consulta gratuita no Instagram
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4 text-slate-900">Como funciona a sua primeira consulta</h2>
            <p className="text-slate-500">Um processo simples, transparente e acolhedor.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {STEPS.map((step, idx) => (
              <div key={idx} className="relative text-center group">
                <div className="text-6xl font-black text-slate-50 mb-[-1.5rem] select-none transition-colors group-hover:text-indigo-50">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-slate-900">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
                {idx < 2 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-8 text-indigo-100" size={32} />
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-slate-50 rounded-3xl text-center max-w-2xl mx-auto border border-slate-100">
            <p className="text-indigo-600 font-bold text-lg mb-2">Reforçando:</p>
            <p className="text-slate-700 font-medium">
              A primeira consulta é 100% gratuita e sem qualquer compromisso. O objetivo é avaliar sua saúde e apresentar as melhores soluções.
            </p>
          </div>
        </div>
      </section>

      {/* Expert in Action - FIXING HEAD CROP */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4 text-slate-900">Expert em Ação</h2>
            <p className="text-slate-500">Bastidores do atendimento e cuidado personalizado.</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="relative group overflow-hidden rounded-[2rem] shadow-xl bg-white p-1">
                {/* Fixed Head Crop: Removing restricted aspect ratio and using object-contain to ensure the whole image is visible */}
                <img 
                  src={IMAGES.backstage[1]} 
                  alt="Equipe Dr. Klaus" 
                  className="w-full h-auto object-contain rounded-[1.8rem] transition-transform group-hover:scale-[1.01] cursor-pointer"
                  onClick={() => openLightbox(IMAGES.backstage[1])}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8 pt-20 rounded-b-[1.8rem]">
                  <span className="text-white text-xl font-bold">Atendimento personalizado com nossa equipe</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 flex flex-col gap-6">
              <div className="relative group overflow-hidden rounded-[2rem] shadow-lg flex-1 min-h-[250px]">
                <img 
                  src={IMAGES.backstage[2]} 
                  alt="Consultório Premium" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 cursor-pointer" 
                  onClick={() => openLightbox(IMAGES.backstage[2])} 
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <span className="text-white font-semibold">Tecnologia e Cuidado</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {IMAGES.kids.slice(3, 5).map((url, i) => (
                  <img key={`back-${i}`} src={url} alt="Crianças" className="w-full aspect-square object-cover rounded-3xl shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => openLightbox(url)} />
                ))}
              </div>

              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-center flex-1">
                <Quote className="text-indigo-100 mb-4" size={40} />
                <p className="text-slate-600 italic leading-relaxed">"Minha missão é tornar a ida ao dentista um momento de prazer e saúde para toda a família."</p>
                <p className="text-indigo-600 font-bold mt-4 text-right">— Dr. Klaus Steyllon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-indigo-50 rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-indigo-600"></div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-8 text-slate-900 leading-tight">
              Dê o primeiro passo para o <br/>
              <span className="text-indigo-600">sorriso dos seus sonhos.</span>
            </h2>
            
            <p className="max-w-2xl mb-12 text-lg text-slate-600 leading-relaxed">
              Garanta sua primeira consulta gratuita. Estou à disposição para ouvir suas necessidades e planejar o melhor caminho para sua saúde bucal.
            </p>
            
            <div className="w-full md:w-auto">
              <PrimaryButton className="w-full md:w-auto scale-110 hover:scale-115 text-lg">
                Agenda consulta gratuita no Instagram
              </PrimaryButton>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-indigo-800 font-semibold text-sm">
                <CheckCircle2 size={18} />
                <span>100% Gratuito</span>
              </div>
              <div className="flex items-center gap-2 text-indigo-800 font-semibold text-sm">
                <CheckCircle2 size={18} />
                <span>Sem Compromisso</span>
              </div>
              <div className="flex items-center gap-2 text-indigo-800 font-semibold text-sm">
                <CheckCircle2 size={18} />
                <span>Atendimento pelo Expert</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-serif font-bold text-slate-900">{EXPERT_NAME}</h3>
              <p className="text-slate-500 text-sm mt-1">Dentista • Prof. Esp. & MsC em Odontopediatria</p>
              <p className="text-slate-400 text-xs mt-1">Natal - Rio Grande do Norte</p>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-sm text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-400 text-xs">
            <p>© {new Date().getFullYear()} {EXPERT_NAME}. Todos os direitos reservados.</p>
            <p className="mt-2 font-medium italic">Design Premium focado em Alta Conversão</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
