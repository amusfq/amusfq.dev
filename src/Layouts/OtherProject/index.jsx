import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OtherProject = () => {
  const [data, setData] = useState([]);
  const loadGithub = () => {
    fetch(
      "https://api.github.com/users/amusfq/repos?sort=updated&direction=desc&per_page=6&type=owner"
    )
      .then((resp) => resp.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    loadGithub();
  }, []);

  return (
    <div
      className="max-w-7xl mx-auto flex justify-center py-28"
      data-aos="fade-up"
    >
      <div className="px-0 md:px-28 space-y-6 w-full">
        <div className="space-y-4">
          <h1 className="whitespace-nowrap text-xl md:text-3xl font-bold text-center">
            Some Things I’ve Built
          </h1>
          <h3 className="text-center text-[#ffa358] hover:underline">
            <Link to="/archive">view the archive</Link>
          </h3>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
          {data?.map((repo, index) => (
            <div
              key={index}
              className="bg-[#112240] rounded p-8 space-y-4 cursor-pointer transition-all transform hover:-translate-y-2"
            >
              <div className="flex flex-row items-center justify-between">
                <i className="far fa-folder fa-2x text-[#ffa358]"></i>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github text-xl text-gray-500 hover:text-[#ffa358]"></i>
                </a>
              </div>
              <h3 className="text-xl font-bold capitalize">
                {repo.name.replaceAll("-", " ").replaceAll("_", " ")}
              </h3>
              <p className="text-gray-400">{repo.description}</p>
              <div className="flex flex-row items-center space-x-2 text-gray-400">
                {repo.language}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherProject;
