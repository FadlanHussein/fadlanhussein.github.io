import { useState } from "react";
import { projectCategory, listProject } from "../data";

const ProjectCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter projects berdasarkan kategori yang dipilih
  const filteredProjects = selectedCategory
    ? listProject.filter((project) => project.category === selectedCategory)
    : [];

  return (
    <div className="mt-32 py-10" id="project">
      <h1
        className="text-center text-4xl font-bold mb-2"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        Project
      </h1>

      {!selectedCategory ? (
        // Tampilan Folder Grid
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 px-4 mt-14">
          {projectCategory.map((category) => (
            <div
              key={category.id}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer group"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              onClick={() => setSelectedCategory(category.slug)}
            >
              <div className="flex items-center gap-4">
                <i className="ri-folder-3-line text-4xl text-cyan-700 group-hover:text-cyan-800"></i>
                <div>
                  <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-gray-600 text-sm">
                    Lihat semua project {category.name.toLowerCase()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Tampilan Projects dari kategori yang dipilih
        <div className="px-4">
          <button
            onClick={() => setSelectedCategory(null)}
            className="mb-8 flex items-center gap-2 text-cyan-700 hover:text-cyan-800"
          >
            <i className="ri-arrow-left-line"></i>
            Kembali ke Kategori
          </button>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-100 p-6 rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <img
                  src={project.gambar}
                  alt={project.nama}
                  className="w-full rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{project.nama}</h3>
                <p className="text-gray-600 mb-4">{project.desk}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                {project.demourl && (
                  <a
                    href={project.demourl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-cyan-700 text-white rounded-lg hover:bg-cyan-800"
                  >
                    Lihat Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCategory;
