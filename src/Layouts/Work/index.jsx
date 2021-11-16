const Work = () => {
  const data = [
    {
      title: "Essay Test Scoring System",
      description:
        "A web application for scoring essay test using cosine similarity algorithms",
      tech_stack: ["ReactJS", "Python"],
      image: "/assets/images/etess.jpeg",
      start_date: "November 2021",
      end_date: "November 2021",
      external_link: "https://etess.amusfq.my.id",
      github_link: "",
    },
    {
      title: "English Expression Identifier",
      description:
        "A web application for identify and count english word from documents",
      tech_stack: ["ReactJS", "Python"],
      image: "/assets/images/eei.jpeg",
      start_date: "October 2021",
      end_date: "October 2021",
      external_link: "https://english-expression-identifier.amusfq.my.id",
      github_link: "",
    },
    {
      title: "Dyslexia",
      description: "A web application for screening test to find out dyslexia",
      tech_stack: ["ReactJS", "Python"],
      image: "/assets/images/dyslexia.jpeg",
      start_date: "September 2021",
      end_date: "September 2021",
      external_link: "http://dyslexia-screen-test.amusfq.my.id/",
      github_link: "",
    },
    {
      title: "KEBI.id",
      description:
        "KEBI stands for Kesalahan Ejaan Bahasa Indonesia (Indonesian Spelling Mistakes). The presence of KEBI is expected to provide convenience for teachers, lecturers, students, students, writers, editors, and all those who are involved in the field of writing. The convenience is in the form of good and correct writing according to the Indonesian spelling, either according to PUEBI or KBBI. KEBI can be used to check Indonesian spelling errors in writing without having to do any editing individually.",
      tech_stack: ["ReactJS", "Python"],
      image: "/assets/images/kebi.jpg",
      start_date: "August 2021",
      end_date: "August 2021",
      external_link: "http://kebi.id",
      github_link: "",
    },
    {
      title: "Sistem Informasi Kandang",
      description:
        "Chicken coop web application to manage buying, selling and stock",
      tech_stack: ["ReactJS", "Laravel"],
      image: "/assets/images/anugrah_farm.jpg",
      start_date: "November 2020",
      end_date: "Januari 2021",
      external_link: "",
      github_link: "",
    },
    {
      title: "SISPEG - Yayasan Pupuk Kaltim",
      description:
        "Information system applications for managing staff, teachers, salaries, permits and holidays",
      tech_stack: ["ReactJS", "Laravel"],
      image: "/assets/images/sispeg.jpg",
      start_date: "October 2020",
      end_date: "November 2021",
      external_link: "",
      github_link: "",
    },
    {
      title: "BEOMATRIX",
      description:
        "A web application to analyze the sentiment of users tweets from twitter",
      tech_stack: ["ReactJS", "Python"],
      image: "/assets/images/beomatrix.jpg",
      start_date: "Februari 2020",
      end_date: "Present",
      external_link: "",
      github_link: "",
    },
  ];

  return (
    <div id="work" className="max-w-7xl mx-auto flex justify-center py-28">
      <div className="px-0 md:px-32 space-y-6">
        <h1
          className="whitespace-nowrap text-xl md:text-3xl font-bold flex flex-row items-center after:ml-4 after:block after:w-1/2 after:h-[1px] after:bg-[#233554]"
          data-aos="fade-up"
        >
          Some Things I’ve Built
        </h1>
        <ul>
          {data.map((work, index) => (
            <li key={index} className="project-container" data-aos="fade-up">
              <div className="project-content z-10">
                <p className="text-primary mb-2">Featured Project</p>
                <h1 className="font-bold text-3xl mb-1">{work.title}</h1>
                <p className="mb-4 text-gray-400">
                  {work.start_date === work.end_date
                    ? work.start_date
                    : `${work.start_date} - ${work.end_date}`}
                </p>
                <div className="bg-[#ffa358] p-4 rounded mb-4">
                  {work.description}
                </div>
                <div className="project-techstack flex flex-row space-x-4 text-gray-400 mb-4">
                  {work.tech_stack.map((item, idx) => (
                    <span key={idx}>{item}</span>
                  ))}
                </div>
                <div className="project-link flex flex-row items-center space-x-4">
                  {work.external_link && (
                    <a
                      class="hover:text-[#ffa358] text-xl"
                      href={work.external_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                  {work.github_link && (
                    <a
                      class="hover:text-[#ffa358] text-xl"
                      href={work.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                </div>
              </div>
              <div className="project-image">
                <a href="#" className="w-full h-full align-middle relative">
                  <div className="w-full align-middle inline-block relative overflow-hidden">
                    <img
                      className="h-full w-full object-cover object-center rounded"
                      src={work.image}
                      alt=""
                    />
                  </div>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Work;
