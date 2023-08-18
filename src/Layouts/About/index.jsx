const About = () => {
  return (
    <div
      id="about"
      className="max-w-7xl mx-auto relative py-28"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="whitespace-nowrap text-xl md:text-3xl font-bold flex flex-row items-center after:ml-4 after:block after:w-1/2 after:h-[1px] after:bg-[#233554]">
          About Me
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <div className="space-y-4 col-span-2">
            <p>
              Hello! My name is Musyaffa and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2013 when I decided to try make my own website taught me a lot
              about HTML & CSS!
            </p>
            <div>
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
              <ul className="grid grid-cols-2 pt-4">
                <li className="arrow text-gray-400">JavaScript (ES6+)</li>
                <li className="arrow text-gray-400">ReactJS</li>
                <li className="arrow text-gray-400">Node.js</li>
                <li className="arrow text-gray-400">TypeScript</li>
                <li className="arrow text-gray-400">Angular</li>
                <li className="arrow text-gray-400">Python</li>
                <li className="arrow text-gray-400">PHP</li>
                <li className="arrow text-gray-400">Laravel</li>
              </ul>
            </div>
          </div>
          <div className="w-64 relative after:block after:rounded-md after:w-64 after:h-64 after:border-2 after:border-[#ffa358] after:absolute after:top-4 after:left-4 after:z-[-1]">
            <img
              src="assets/images/me.jpg"
              className="rounded-md h-64 w-64 object-cover object-center z-10"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
