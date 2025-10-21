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
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info with Logo */}
          <div className="col-span-1">
            <div className="mb-4">
              <div className="text-xl font-bold bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent mb-3 anton-font">
                SRays Solutions
              </div>
              <p className="text-gray-300 text-sm anton-font leading-tight">
                Transforming businesses through innovative HR solutions,
                cutting-edge IT services, and creative design expertise.
              </p>
            </div>
            {/* <div className="flex justify-start">
              <img src={logoheader} alt="SRays Solutions Logo" className="h-10" />
            </div> */}
          </div>


          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white anton-font text-center">Quick Links</h4>
            <ul className="space-y-2 flex flex-col items-center">
              <li>
                <p
                  onClick={() => scrollToSection("home")}
                  className="text-white hover:text-lime-400 transition-colors anton-font cursor-pointer m-0"
                >
                  Home
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollToSection("services")}
                  className="text-white hover:text-lime-400 transition-colors anton-font cursor-pointer m-0"
                >
                  Services
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollToSection("about")}
                  className="text-white hover:text-lime-400 transition-colors anton-font cursor-pointer m-0"
                >
                  About
                </p>
              </li>
              <li>
                <p
                  onClick={() => scrollToSection("contact")}
                  className="text-white hover:text-lime-400 transition-colors anton-font cursor-pointer m-0"
                >
                  Contact
                </p>
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