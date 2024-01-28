import "../style/About.css";
export const About = () => {
  return (
    <>
      <div>
        <h1 className="title-about">
          How I have been living for the last six months
        </h1>
      </div>
      <div className="info-container-about">
        <div className="info-list">
          <div className="info-item">
            <h2 className="title-info">I go to work:</h2>
            <p className="text-info-about">
              I have been actively working at my job for the last six months. On
              a daily basis, I I leave my home, I go to the office and I put as
              much effort as I can into my professional activities. in my
              professional life. I enjoy my work. I enjoy it, and I try to do my
              best to contribute to the team and to the overall goals. I try to
              do my best to contribute to the team and the achievement of common
              goals.
            </p>
          </div>
          <div>
            <img
              className="about-img"
              src="https://www.gov.kz/uploads/2020/6/10/59ddfd0db178b9db4649c81043f41414_original.79524.jpg"
              alt="work"
            />
          </div>
        </div>
        <div className="info-list">
          <div className="info-item">
            <h2 className="title-info">I'm taking a programming course:</h2>
            <p className="text-info-about">
              I have been actively developing my programming skills over the
              last six months, so I take regular courses. In these classes I
              learn modern frameworks and expand my knowledge of software
              development. This helps me keep up to date with the latest trends
              in the IT industry and become a more competent programmer.
            </p>
          </div>
          <div>
            <img
              className="about-img"
              src="https://kartinkin.net/uploads/posts/2022-02/thumbs/1645195895_43-kartinkin-net-p-kartinki-programmirovanie-53.jpg"
              alt="programming"
            />
          </div>
        </div>

        <div className="info-list">
          <div className="info-item">
            <h2 className="title-info">Watching anime:</h2>
            <p className="text-info-about">
              In my spare time, I'm passionate about watching anime. Animated
              series and films allow me to immerse myself in amazing worlds and
              stories that often inspire me and develop my creativity. I enjoy
              the art of animation and the unique style of Japanese culture that
              is the foundation of anime. It's a great way to relax and get an
              emotional boost after busy work and study days.
            </p>
          </div>
          <div>
            <img
              className="about-img"
              src="https://opis-cdn.tinkoffjournal.ru/ip/SJmBy3R1xb9upSPH8tN3dpcyLwiGZtGJ_JBBdGxBSxc/w:1200/aHR0cHM6Ly9pbWct/Y2RuLnRpbmtvZmZq/b3VybmFsLnJ1Ly0v/b3NoaS1uby1rby1p/bi5pdXo0bHR0cGVo/dnguLmpwZw"
              alt="anime"
            />
          </div>
        </div>
      </div>
    </>
  );
};
