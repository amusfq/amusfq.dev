import { useState } from "react";
const Experiences = () => {
  const [selected, setSelected] = useState(0);

  const data = [
    {
      company: "PT.ITPI Technology",
      position: "Software Engineer",
      start_date: "April 2021",
      end_date: "Present",
      url: "https://itpi.co.id",
      jobdesk: [
        "Create new module for e-Procurement app",
        "Fixing bugs in e-Procurement app",
      ],
    },
    {
      company: "Apple Foundation Ciputra University",
      position: "Software Engineer",
      start_date: "November 2019",
      end_date: "November 2019",
      url: "https://appledeveloperacademy.uc.ac.id",
      jobdesk: [
        "Learning to build apps in apple ecosystem",
        "Built intership finder app",
      ],
    },
    {
      company: "Kreatif Computer",
      position: "Technician",
      start_date: "Juli 2017",
      end_date: "Oktober 2017",
      url: "",
      jobdesk: [
        "Intership as technician repairing software and hardware computer",
      ],
    },
  ];

  const handleChange = (id) => () => {
    setSelected(id);
  };
  return (
    <div
      id="experience"
      className="max-w-7xl mx-auto flex justify-center py-28"
      data-aos="fade-up"
    >
      <div className="px-0 md:px-32 space-y-6">
        <h1 className="whitespace-nowrap text-xl md:text-3xl font-bold flex flex-row items-center after:ml-4 after:block after:w-1/2 after:h-[1px] after:bg-[#233554]">
          Where I've Worked
        </h1>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex">
            <div className="inline-flex md:flex flex-row md:flex-col overflow-x-auto">
              {data?.map((item, index) => (
                <div
                  key={index}
                  className={`text-primary px-3 py-2 border-b-2 md:border-b-0 md:border-l-2 flex-shrink-0 ${
                    selected === index
                      ? "border-b-[#ffa358] md:border-l-[#ffa358] bg-[#ffa3581a]"
                      : "border-b-gray-700 md:border-l-gray-700"
                  } hover:bg-[#ffa3581a] cursor-pointer`}
                  onClick={handleChange(index)}
                >
                  {item.company}
                </div>
              ))}
            </div>
          </div>
          {data?.map((item, index) => (
            <div key={index} className={`${selected !== index && "hidden"}`}>
              <h1 className="font-bold text-xl space-x-1">
                <span>{item.position}</span>
                <span className="text-primary">
                  @{" "}
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.company}
                    </a>
                  ) : (
                    item.company
                  )}
                </span>
              </h1>
              <span className="text-gray-400 text-sm">
                {item.start_date === item.end_date
                  ? item.start_date
                  : `${item.start_date} - ${item.end_date}`}
              </span>
              <ul className="mt-4">
                {item.jobdesk.map((job, idx) => (
                  <li key={idx} className="arrow text-gray-400">
                    {job}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
