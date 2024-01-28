import "../style/Home.css";
export const Home = () => {
  return (
    <>
      <div className="container-home">
        <div className="photo-container">
          <img
            src="https://sun9-3.userapi.com/impf/c845123/v845123485/169f47/BryU2P_KeWc.jpg?size=1080x1080&quality=96&sign=911e70f8d92a2cb73a6ba7ab20880e2f&type=album"
            alt="my-photo"
          />
        </div>
        <div className="home-info">
          <h1 className="text-hello">Hello</h1>
          <h3 className="about-me">A Bit About Me</h3>
          <p className="about-info">
            I believe that a programmer is also a cook, an artist, a nuclear
            physicist, a dancer and a videographer. After all, how many websites
            have been created, do you really think they were written simply by
            programmers? For every soul invested, it's very difficult to write a
            website "cakes with their own hands", having never baked a cake with
            their own hands, or at least having a little understanding of what
            it's all about. When you write a programme or a website, you start
            to understand. And this is not just my opinion.
          </p>
        </div>
      </div>
    </>
  );
};
