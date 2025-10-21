import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Star,
  Instagram,
  Facebook,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Zabiegi na twarz",
      description: "Kompleksowe zabiegi odmładzające i nawilżające",
      price: "od 150 zł",
      duration: "60-90 min",
    },
    {
      title: "Manicure i Pedicure",
      description: "Profesjonalna pielęgnacja dłoni i stóp",
      price: "od 80 zł",
      duration: "45-60 min",
    },
    {
      title: "Modelowanie ust",
      description: "Bezpieczne i naturalne efekty",
      price: "od 800 zł",
      duration: "45-60 min",
    },
    {
      title: "Henna i Geometria Brwi",
      description: "Perfekcyjny kształt i kolor",
      price: "od 60 zł",
      duration: "30-45 min",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-3xl font-playfair font-bold text-beige">
                NANI
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-charcoal hover:text-beige transition"
              >
                Strona główna
              </a>
              <a
                href="#about"
                className="text-charcoal hover:text-beige transition"
              >
                O nas
              </a>
              <a
                href="#services"
                className="text-charcoal hover:text-beige transition"
              >
                Usługi
              </a>
              <a
                href="#gallery"
                className="text-charcoal hover:text-beige transition"
              >
                Galeria
              </a>
              <a
                href="#contact"
                className="text-charcoal hover:text-beige transition"
              >
                Kontakt
              </a>
              <a
                href="https://naniewajacynoesthetic.booksy.com/a/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-beige text-white px-6 py-2 rounded-full hover:bg-beige-dark transition"
              >
                Zarezerwuj wizytę
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-charcoal hover:text-beige"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-charcoal hover:text-beige"
              >
                Strona główna
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-charcoal hover:text-beige"
              >
                O nas
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-charcoal hover:text-beige"
              >
                Usługi
              </a>
              <a
                href="#gallery"
                className="block px-3 py-2 text-charcoal hover:text-beige"
              >
                Galeria
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-charcoal hover:text-beige"
              >
                Kontakt
              </a>
              <a
                href="https://naniewajacynoesthetic.booksy.com/a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-4 bg-beige text-white px-6 py-2 rounded-full hover:bg-beige-dark block text-center"
              >
                Zarezerwuj wizytę
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-16">
        <div className="absolute inset-0 hero-pattern"></div>
        <div
          className="relative h-screen bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/IMG_8493.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
                Piękno i młodość na wyciągnięcie ręki
              </h1>
              <p className="text-xl md:text-2xl mb-8 font-light">
                ZAUFAJ EKSPERTOM - efekty mówią same za siebie
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://naniewajacynoesthetic.booksy.com/a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-beige hover:bg-beige-dark text-white px-8 py-3 rounded-full text-lg font-semibold transition text-center"
                >
                  Zarezerwuj wizytę
                </a>
                <a
                  href="#services"
                  className="border-2 border-white hover:bg-white/20 text-white px-8 py-3 rounded-full text-lg font-semibold transition text-center"
                >
                  Poznaj nasze usługi
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80"
                alt="Ewa Jacyno"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-playfair font-bold text-charcoal mb-6">
                O mnie
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Witaj! Nazywam się Ewa Jacyno i prowadzę Salon Kosmetyczny NANI.
                Stworzyłam miejsce, gdzie PROFESJONALIZM spotyka się z PASJĄ do
                piękna.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Jestem w branży beauty od 2013 roku. Nieustannie podnoszę swoje
                kwalifikacje, podążam za nową technologią, jak również posiadam
                wykształcenie medyczne. To wszystko, aby wykonywać dla Was
                usługi na najwyższym poziomie.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Wykonałam już setki zabiegów, a do każdego klienta podchodzę
                indywidualnie. Dostosuję procedurę do Twoich potrzeb, aby
                uzyskać najlepszy efekt.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Stawiam na ZAUFANIE i miłą atmosferę. Tworzę przestrzeń, w
                której poczujesz się swobodnie i komfortowo.
              </p>
              <p className="text-lg text-beige italic mb-8">
                Dziękuję, że tu jesteś 🤍
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-center text-charcoal mb-16">
            Nasze Usługi
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-charcoal mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-beige mb-2">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{service.duration}</span>
                </div>
                <div className="flex items-center text-beige">
                  <span className="font-semibold">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-center text-charcoal mb-16">
            Kontakt
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-playfair font-bold mb-4">
                  Dane kontaktowe
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-beige mr-3" />
                    <p>Jana III Sobieskiego 20A, Rybnik</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-beige mr-3" />
                    <p>+48 530 610 050</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-beige mr-3" />
                    <p>kontakt@nani.pl</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-beige mr-3" />
                    <p>Pon-Pt: 9:00-20:00, Sob: 9:00-15:00</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-beige hover:text-beige-dark transition"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-beige hover:text-beige-dark transition"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Imię i nazwisko"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-beige"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-beige"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Wiadomość"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-beige"
                  ></textarea>
                </div>
                <button className="w-full bg-beige hover:bg-beige-dark text-white py-3 rounded-lg transition">
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-playfair font-bold mb-4">NANI</h3>
              <p className="text-gray-400">
                Profesjonalny salon kosmetyczny w Rybniku. Zapraszamy do świata
                piękna i relaksu.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Szybkie linki</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-beige transition"
                  >
                    Strona główna
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-beige transition"
                  >
                    O nas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-beige transition"
                  >
                    Usługi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-beige transition"
                  >
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Godziny otwarcia</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Poniedziałek - Piątek: 9:00 - 20:00</li>
                <li>Sobota: 9:00 - 15:00</li>
                <li>Niedziela: Zamknięte</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 NANI. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
