import logoheader from '../assets/logoheader.png';

const Footer = () => {
  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
        .anton-font {
          font-family: 'Anton', sans-serif;
        }
      `}</style>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info with Logo */}
          <div className="col-span-2">
            <div className="text-center mb-6">
              <div className="text-2xl font-bold bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent mb-4 anton-font">
                SRays Solutions
              </div>
              <p className="text-gray-300 anton-font">
                Transforming businesses through innovative HR solutions,
                cutting-edge IT services, and creative design expertise.
              </p>
            </div>
            <div className="flex justify-center">
              <img src={logoheader} alt="SRays Solutions Logo" className="h-12" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white anton-font">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-lime-400 transition-colors anton-font bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-lime-400 transition-colors anton-font bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-lime-400 transition-colors anton-font bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-lime-400 transition-colors anton-font bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white anton-font">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 anton-font">HR Solutions</li>
              <li className="text-gray-300 anton-font">IT Services</li>
              <li className="text-gray-300 anton-font">Designing</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-300 anton-font">
          <p>
            &copy; {new Date().getFullYear()} SRays Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;