const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold  text-left">Portofolio</h1>
      <div className="flex items-center gap-7">
        <a href="#beranda">Beranda</a>
        <a href="#tentang">Tentang</a>
        <a href="#project">Project</a>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="ri-github-fill ri-2x hover:text-cyan-700 transition-colors"
        ></a>
        <a
          href="https://vercel.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="ri-vercel-fill ri-2x hover:text-cyan-700 transition-colors"
        ></a>
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="ri-instagram-fill ri-2x hover:text-cyan-700 transition-colors"
        ></a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="ri-linkedin-fill ri-2x hover:text-cyan-700 transition-colors"
        ></a>
      </div>
    </div>
  );
};
export default Footer;
