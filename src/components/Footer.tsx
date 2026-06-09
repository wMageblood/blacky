import { LucidePhoneIncoming } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#01767d] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <h3 className="text-2xl font-bold mb-4">Ofis Pet</h3>
            <p className="text-sm leading-relaxed text-white/90">
              Atención veterinaria integral para el cuidado y bienestar de tus
              mascotas. Trabajamos contigo para brindarles una vida saludable,
              feliz y llena de cuidados.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li> <a href="#inicio" className="hover:text-[#FADCDB] transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-[#FADCDB] transition-colors">Servicios</a></li>
              <li><a href="#nosotros" className="hover:text-[#FADCDB] transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-[#FADCDB] transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>📍 Zapopan, Jalisco</li>
              <li>📞 +52 (33) 3808 6856 Whatsapp</li>
              <li>📞 +52 (33) 3805 3497 No Whatsapp</li>
              <li>✉️ contacto@ofispet.com</li>
              <li><a href="https://wa.me/+523338086856" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[#FADCDB] transition-colors"><LucidePhoneIncoming />WhatsApp</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Horarios</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li>Lunes - Viernes</li>
              <li>9:00 AM - 7:00 PM</li>
              <li>Sábado</li>
              <li>9:00 AM - 4:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/80">
          © {new Date().getFullYear()} Ofis Pet. Todos los derechos reservados.
          <p className="text-sm text-white/70 mt-5"> Designed & Developed by{" "} <a href="https://github.com/wMageblood" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-white transition-colors">wMageblood</a></p>
        </div>
      </div>
    </footer>
  )
};