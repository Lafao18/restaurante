import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  ChefHat, 
  Users, 
  Award,
  Facebook,
  Instagram,
  Twitter,
  Youtube
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import './App.css';

// Importar imágenes
import heroImage from './assets/3cYJ7hwnyG2Y.jpg';
import dishImage1 from './assets/VKswivtXT2NQ.jpg';
import dishImage2 from './assets/QZcNsVEPWf12.jpg';
import dishImage3 from './assets/Xe6S1DjgjbOj.jpg';
import restaurantAmbient1 from './assets/Z9x08t5p98aP.jpg';
import restaurantAmbient2 from './assets/55kAH2laH1zY.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const menuItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-nosotros', label: 'Sobre Nosotros' },
    { id: 'nuestras-delicias', label: 'Nuestras Delicias' },
    { id: 'por-que-elegirnos', label: 'Por Qué Elegirnos' },
    { id: 'ubicacion', label: 'Ubicación' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const deliciasMenu = [
    {
      name: "Paella Valenciana",
      description: "Auténtica paella con mariscos frescos, pollo y verduras de temporada",
      price: "$28.99",
      image: dishImage1
    },
    {
      name: "Salmón a la Plancha",
      description: "Salmón fresco con salsa de limón y hierbas, acompañado de vegetales",
      price: "$24.99",
      image: dishImage2
    },
    {
      name: "Risotto de Hongos",
      description: "Cremoso risotto con hongos porcini y trufa, terminado con parmesano",
      price: "$22.99",
      image: dishImage3
    }
  ];

  const razones = [
    {
      icon: <ChefHat className="w-12 h-12 text-primary" />,
      title: "Chefs Expertos",
      description: "Nuestros chefs tienen más de 15 años de experiencia en alta cocina internacional"
    },
    {
      icon: <Star className="w-12 h-12 text-primary" />,
      title: "Ingredientes Premium",
      description: "Seleccionamos los mejores ingredientes frescos y de temporada para cada plato"
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Servicio Excepcional",
      description: "Nuestro equipo está dedicado a brindar una experiencia gastronómica inolvidable"
    },
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: "Reconocimientos",
      description: "Galardonados como el mejor restaurante de la zona por tres años consecutivos"
    }
  ];

  return (
    <div className="min-h-screen smooth-scroll">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">Mi Vecino</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-primary bg-secondary'
                        : 'text-gray-700 hover:text-primary hover:bg-secondary/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                      activeSection === item.id
                        ? 'text-primary bg-secondary'
                        : 'text-gray-700 hover:text-primary hover:bg-secondary/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-section" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Mi Vecino
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Donde cada plato cuenta una historia y cada visita se convierte en un recuerdo especial
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
              onClick={() => scrollToSection('nuestras-delicias')}
            >
              Ver Nuestro Menú
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section id="sobre-nosotros" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <p className="text-lg text-gray-700 mb-6">
                Mi Vecino nació del sueño de crear un espacio donde la tradición culinaria se encuentra 
                con la innovación moderna. Desde 2010, hemos sido el corazón gastronómico de nuestra 
                comunidad, sirviendo platos que despiertan los sentidos y crean momentos inolvidables.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Nuestro compromiso va más allá de la comida excepcional. Creemos en la importancia de 
                crear conexiones auténticas con nuestros huéspedes, ofreciendo no solo una comida, 
                sino una experiencia completa que refleje la calidez y hospitalidad de nuestro hogar.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">13+</div>
                  <div className="text-gray-600">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-gray-600">Clientes Satisfechos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-gray-600">Platos Únicos</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={restaurantAmbient1} 
                alt="Interior del restaurante" 
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nuestras Delicias */}
      <section id="nuestras-delicias" className="section-padding bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestras Delicias</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Cada plato es una obra maestra culinaria, preparada con ingredientes frescos y 
              técnicas refinadas que han sido perfeccionadas a lo largo de los años.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliciasMenu.map((dish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover overflow-hidden">
                  <div className="relative h-64">
                    <img 
                      src={dish.image} 
                      alt={dish.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{dish.name}</h3>
                      <span className="text-2xl font-bold text-primary">{dish.price}</span>
                    </div>
                    <p className="text-gray-700">{dish.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
              onClick={() => scrollToSection('contacto')}
            >
              Ver Menú Completo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Por Qué Elegirnos */}
      <section id="por-que-elegirnos" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Por Qué Elegirnos</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Nos distinguimos por nuestro compromiso inquebrantable con la excelencia, 
              la calidad y la satisfacción de nuestros huéspedes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {razones.map((razon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="card-hover p-6 h-full">
                  <CardContent className="flex flex-col items-center text-center space-y-4">
                    <div className="mb-4">{razon.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">{razon.title}</h3>
                    <p className="text-gray-700">{razon.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section id="ubicacion" className="section-padding bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestra Ubicación</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Nos encontramos en el corazón de la ciudad, en un ambiente acogedor 
              que te hará sentir como en casa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Dirección</h3>
                      <p className="text-gray-700">
                        Calle Principal 123<br />
                        Centro Histórico<br />
                        Ciudad, CP 12345
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Horarios</h3>
                      <div className="text-gray-700 space-y-1">
                        <p>Lunes - Jueves: 12:00 PM - 10:00 PM</p>
                        <p>Viernes - Sábado: 12:00 PM - 11:00 PM</p>
                        <p>Domingo: 12:00 PM - 9:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Reservaciones</h3>
                      <p className="text-gray-700">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={restaurantAmbient2} 
                  alt="Ambiente del restaurante" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-semibold">Ven y disfruta de nuestro ambiente único</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Estamos aquí para hacer de tu experiencia algo extraordinario. 
              No dudes en contactarnos para reservaciones o cualquier consulta.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <CardContent className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
                  
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold">Teléfono</p>
                      <p className="text-gray-700">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-700">info@mivecino.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold">Dirección</p>
                      <p className="text-gray-700">Calle Principal 123, Centro Histórico</p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <h4 className="font-bold text-lg mb-4">Síguenos en Redes Sociales</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="social-icon text-gray-600 hover:text-primary">
                        <Facebook className="w-8 h-8" />
                      </a>
                      <a href="#" className="social-icon text-gray-600 hover:text-primary">
                        <Instagram className="w-8 h-8" />
                      </a>
                      <a href="#" className="social-icon text-gray-600 hover:text-primary">
                        <Twitter className="w-8 h-8" />
                      </a>
                      <a href="#" className="social-icon text-gray-600 hover:text-primary">
                        <Youtube className="w-8 h-8" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <CardContent>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h3>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Tu número de teléfono"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mensaje
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white py-3"
                    >
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Mi Vecino</h3>
              <p className="text-gray-400 mb-4">
                Donde cada plato cuenta una historia y cada visita se convierte en un recuerdo especial.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="social-icon text-gray-400 hover:text-white">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="social-icon text-gray-400 hover:text-white">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="social-icon text-gray-400 hover:text-white">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="social-icon text-gray-400 hover:text-white">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Calle Principal 123, Centro Histórico
                </p>
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@mivecino.com
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Mi Vecino. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

