import { useEffect } from "react";
import DataImage from "./data";
import { listTools, listProject } from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectCategory from "./components/ProjectCategory";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  const handleDownload = () => {
    console.log("CV Downloaded");
    // Tambahkan analytics tracking disini jika diperlukan
  };
  return (
    <>
      <div
        id="beranda"
        className="hero grid md:grid-cols-2 px-3 py-16 gap-10 xl:gap-70 text-left grid-cols-1 "
      >
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-cyan-700 w-fit p-2 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q className="text-white">
              Hanya mewujudkan imajinasi CV kedalam coding
            </q>
          </div>
          <h1 className="text-5xl-leading-tight font-bold mb-2">
            <span className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
              Hi, Saya Fadlan
              <br />
              Hussein Al Utsman
            </span>
          </h1>
          <p className="text-base leading-tight mb-6 opacity-50 text-left">
            Saya percaya bahwa penerapan pada kemajuan teknologi digital dapat
            memberikan dampak positif dan effisien pada bidang Human Resources.
            Saya tertarik dalam bidang asessment, recruitment, dan pengembangan
            sumber daya manusia berbasis digitalisasi. Saya juga memiliki
            ketertarikan dalam bidang pengembangan aplikasi web yang berfokus
            pada user experience dan user interface. Saya sedang meningkatkan
            skill dalam menggunakan berbagai teknologi web seperti HTML, CSS,
            JavaScript, dan ReactJS. Sedangkan ui/ux saya cukup mahir
            menggunakan Corel DrawX7, Figma dan Canva.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="assets/CV/CV-Fadlan Hussein Al Utsman.pdf"
              download="CV-Fadlan Hussein Al Utsman.pdf"
              className="bg-cyan-700 text-white p-2 rounded-2xl font-normal hover:bg-cyan-800 transition duration-300 flex items-center gap-2"
              onClick={handleDownload}
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#project"
              className="bg-cyan-700 text-white p-2 rounded-2xl font-normal hover:bg-cyan-800 transition duration-300 flex items-center gap-2"
            >
              Lihat Project <i className="ri-arrow-down-fill ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Fadlan Image"
          className="w-[600px] rounded-lg mt-20 md:mt-0 md:self-center mx-auto animate__animated animate__fadeInUp animate__delay-4s"
          loading="lazy"
        />
      </div>

      {/* ini berisi tentang */}
      <div className="tentang mt-16 py-5" id="tentang">
        <div
          className="w-full md:w-2/3 lg:w-3/4 mx-auto p-7 bg-gray-200 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-16 rounded-md mb-5 sm:hidden"
            loading="lazy"
          />
          <p className="text-base-loose mb-5">
            Saya mengkombinasikan psikologi industri dengan teknologi SDM untuk
            merampingkan rekrutmen dan memastikan keputusan perekrutan yang
            didukung oleh data. Dengan keahlian dalam penilaian psikometri IST,
            Kraeplin, Pauli dan alat bantu seperti Excel VBA dan Power BI, saya
            telah mengoptimalkan proses-pemangkasan waktu penyaringan hingga 50%
            dan meningkatkan kualitas kandidat. Pengalaman saya mencakup
            perekrutan dalam jumlah besar 6.000+ kandidat dan perekrutan
            berbasis kompetensi, memastikan kecocokan yang tepat untuk berbagai
            posisi mulai dari operator hingga FGD. Dengan semangat yang tinggi
            dalam akuisisi talenta yang tidak bias dan efisien, saya membantu
            perusahaan membangun tim yang berkinerja tinggi melalui strategi
            yang terukur. Mari terhubung untuk mendiskusikan bagaimana saya
            dapat mendukung tujuan perekrutan Anda!
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-16 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1 font-bold">
                  15<span className="text-cyan-700">+</span>
                </h1>
                <p> Proyect Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1 font-bold">
                  2<span className="text-cyan-700">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
        {/* ini berisi tools hardskill */}
        <div className="tools mt-32">
          <h1
            className="text-4xl font-bold mb-4 px-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools yang dipakai
          </h1>
          <p
            className="mb-4 opacity-50 px-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Tools yang saya gunakan untuk pengembangan program:
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 px-3">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                className="flex items-center gap-2 p-3 border border-cyan-700 rounded-md hover:bg-cyan-800 group w-full"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.delay}
                data-aos-once="true"
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-10 sm:w-14 bg-gray-200 p-1 group-hover:bg-cyan-700 border border-cyan-800 rounded-lg"
                  loading="lazy"
                />
                <div className="flex flex-col">
                  <h4 className="font-bold text-sm text-lg">{tool.nama}</h4>
                  <p className="text-sm text-lg text-cyan-700 group-hover:text-white">
                    {tool.ket}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ini berisi project */}
        <ProjectCategory />
        {/* ini berisi kontak */}
        <div className="kontak mt-32 py-10" id="kontak">
          <h1
            className="text-center text-4xl font-bold mb-2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
            data-aos-once="true"
          >
            Kontak
          </h1>
          <p
            className="text-base-loose text-center opacity-70"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
          >
            Jika ada yang ingin ditanyakan, silahkan hubungi saya melalui kontak
            berikut:
          </p>
          <form
            action="https://formsubmit.co/husseinfadlan16@gmail.com"
            method="POST"
            className="bg-white p-8 w-fit md:w-[600px] mx-auto rounded-md border-2 border-cyan-700 mt-10 shadow-md"
            autoComplete="off"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-3 w-full">
                <label
                  htmlFor="nama"
                  className="block text-left mb-2 text-xl font-semibold"
                >
                  Nama Lengkap
                </label>
                <input
                  id="nama"
                  type="text"
                  name="Name"
                  autoComplete="Name"
                  placeholder="Masukkan nama lengkap "
                  className="w-full border-2 border-cyan-700 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 transition duration-300"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="block text-left mb-2 text-lg font-semibold"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="Email"
                  autoComplete="email"
                  placeholder="Masukkan Email Anda"
                  className="w-full border-2 border-cyan-700 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 transition duration-300"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="pesan"
                  className="block text-left mb-2 text-lg font-semibold"
                >
                  Pesan
                </label>
                <textarea
                  id="pesan"
                  name="Pesan"
                  autoComplete="off"
                  cols="30"
                  rows="10"
                  placeholder="Masukkan pesan Anda"
                  className="w-full border-2 border-cyan-700 rounded-lg p-2 text-base  focus:outline-none focus:ring-2 focus:ring-cyan-700 transition duration-300 sm:p-4 sm:text-lg md:p-6 md:text-xl lg:w-3/4 lg:mx-auto lg:text-2xl focus:outline-none focus:ring-2 focus:ring-cyan-700 transition duration-300"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center bg-cyan-700 text-white p-4 rounded-lg font-semibold hover:bg-cyan-800 transition duration-300"
              >
                Kirim Pesan
                <i className="ri-send-plane-fill ri-lg ml-2"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
