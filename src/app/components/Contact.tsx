const Contact = () => {
  return (
    <section id="contact" className="mt-10">
      <div className="divider">
        <h3 className="text-2xl font-bold text-center">
          Me mande uma mensagem 👉👈
        </h3>
      </div>

      <div className="flex items-center justify-center">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Your bio</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </div>
      </div>
    </section>
  );
};

export default Contact;
