import { useEffect, useState } from "react";
import Button from "../../Components/Button";

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrollPos, setScrollPos] = useState(window.pageYOffset);
  const [navbarVisibility, setNavbarVisibility] = useState(true);

  const toggleNavbar = () => {
    const body = document.querySelector("body");
    body.classList.toggle("overflow-hidden");
    setShowNavbar(!showNavbar);
  };

  const scrollTo = (id) => () => {
    const location = window.location;
    if (location.pathname === "/archive") {
      return (window.location = "/#" + id);
    }
    const target = document.getElementById(id);
    target.scrollIntoView({ behavior: "smooth" });
    if (showNavbar) toggleNavbar();
  };

  const hideNavbar = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = scrollPos > currentScrollPos;
    setScrollPos(currentScrollPos);
    setNavbarVisibility(visible);
  };

  const downloadResume = () => {
    window.open("/Resume - Achmad Musyaffa Taufiqi.pdf");
  };

  useEffect(() => {
    window.addEventListener("scroll", hideNavbar);
    return () => {
      window.removeEventListener("scroll", hideNavbar);
    };
  });

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-[40] transition-all ease-in-out duration-300 ${
          !navbarVisibility ? "-top-24" : "top-0"
        }`}
      >
        <div className="px-4 md:px-12 py-4 md:py-8 flex flex-row justify-between items-center bg-[#0a192f]">
          <div>
            <a
              className="p-2 font-bold text-3xl text-primary hover:bg-[#64ffda1a] hover:rounded-full"
              href="/"
            >
              {"{A}"}
            </a>
          </div>
          <div className="hidden md:flex flex-row items-center space-x-4">
            <Button outline={false} onClick={scrollTo("about")}>
              About
            </Button>
            <Button outline={false} onClick={scrollTo("experience")}>
              Experience
            </Button>
            <Button outline={false} onClick={scrollTo("work")}>
              Work
            </Button>
            <Button outline={false} onClick={scrollTo("contact")}>
              Contact
            </Button>
            <Button onClick={downloadResume}>Resume</Button>
          </div>
          <Button className="md:hidden" outline={false} onClick={toggleNavbar}>
            <i className="fas fa-bars fa-2x text-primary"></i>
          </Button>
        </div>
      </header>
      <div
        className={`fixed bg-black/50 inset-0 z-50 ${
          !showNavbar && "invisible opacity-0"
        } transition-all duration-300 ease-in-out `}
      >
        <div className="relative flex justify-end">
          <div className="absolute top-3 right-2 z-50">
            <Button outline={false} onClick={toggleNavbar}>
              <i className="fas fa-times fa-2x text-primary"></i>
            </Button>
          </div>
          <div
            className={`w-3/4 bg-[#0a192f] h-screen relative transform ${
              showNavbar ? "translate-x-0" : "translate-x-72"
            }`}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center">
              <Button outline={false} onClick={scrollTo("about")}>
                About
              </Button>
              <Button outline={false} onClick={scrollTo("experience")}>
                Experience
              </Button>
              <Button outline={false} onClick={scrollTo("work")}>
                Work
              </Button>
              <Button outline={false} onClick={scrollTo("contact")}>
                Contact
              </Button>
              <Button onClick={downloadResume}>Resume</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
