import Button from "../../Components/Button";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto relative min-h-screen" data-aos="fade-up">
      <div className="w-full space-y-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="space-y-2">
          <p className="text-xl text-primary">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl font-bold">
            Achmad Musyaffa Taufiqi
          </h1>
          <h2 className="text2xl md:text-4xl font-bold text-gray-400">
            A self-taught developer. I Build things for the web
          </h2>
        </div>
        <div>
          <p className="text-base md:text-xl">
            🚀 Exploring opportunities and side projects.
          </p>
          <p className="text-base md:text-xl">
            🎓 Currently an Informatics Student at Narotama University.
          </p>
        </div>
        <div className="flex flex-row items-center justify-between md:justify-start space-x-4">
          <Button
            tooltip="Visit my Github"
            onClick={() => window.open("https://github.com/amusfq", "_blank")}
          >
            <i className="fab fa-github"></i>
            <span>Github</span>
          </Button>
          <Button
            tooltip="Visit my LinkedIn"
            onClick={() =>
              window.open("https://linkedin.com/in/amusfq", "_blank")
            }
          >
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </Button>
          <Button
            tooltip="Get In Touch"
            onClick={() => window.open("mailto:amusfq@gmail.com", "_blank")}
          >
            <i className="fas fa-envelope"></i>
            <span>Email</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
