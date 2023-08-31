import Image from "next/image";

const Hero = () => {
  return (
    <div id="home" className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse m-2">
        <Image
          alt="perfil"
          src="/perfil.png"
          className="max-w-sm"
          width={300}
          height={300}
        />
        <div>
          <h2 className="text-2xl font-bold">Olá 👋 saudações do</h2>
          <h1 className="text-6xl font-bold">Nicolas Alexandre</h1>
          <p className="py-6">
            Neste site você vai encontrar alguns dos meus{" "}
            <strong>trabalhos</strong>, <strong>projetos</strong> e{" "}
            <strong>desafios</strong> pelo qual passei na minha{" "}
            <strong>jornada</strong>, espero que goste.
          </p>
          <a className="btn btn-primary" href="#projects">
            Vamos lá
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
