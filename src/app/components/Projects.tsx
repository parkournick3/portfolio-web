const Projects = () => {
  return (
    <section className="mt-10" id="projects">
      <div className="divider">
        <h3 className="text-2xl font-bold text-center ">
          Meus projetos recentes 🚀
        </h3>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-8 p-8">
        <div className="mockup-browser border bg-base-300">
          <div className="mockup-browser-toolbar">
            <div className="input">https://daisyui.com</div>
          </div>
          <div className="flex justify-center px-4 py-16 bg-base-200">
            Hello!
          </div>
        </div>

        <div className="mockup-browser border bg-base-300">
          <div className="mockup-browser-toolbar">
            <div className="input">https://daisyui.com</div>
          </div>
          <div className="flex justify-center px-4 py-16 bg-base-200">
            Hello!
          </div>
        </div>

        <div className="mockup-browser border bg-base-300">
          <div className="mockup-browser-toolbar">
            <div className="input">https://daisyui.com</div>
          </div>
          <div className="flex justify-center px-4 py-16 bg-base-200">
            Hello!
          </div>
        </div>

        <div className="mockup-browser border bg-base-300">
          <div className="mockup-browser-toolbar">
            <div className="input">https://daisyui.com</div>
          </div>
          <div className="flex justify-center px-4 py-16 bg-base-200">
            Hello!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
