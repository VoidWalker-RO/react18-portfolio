export default function AboutMe() {
  return (
    <div className="container">
      <h1>Про мене</h1>

      <div className="grid">
        <div className="card">
          <h3>Frontend Developer</h3>
          <p>Вивчаю React, JavaScript і створюю SPA додатки.</p>
        </div>

        <div className="card">
          <h3>Цінності</h3>
          <p>Дисципліна, практика, розвиток</p>
        </div>

        <div className="card">
          <h3>GitHub</h3>
          <a className="btn" href="https://github.com/VoidWalker-RO" target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
        </div>
      </div>

      <h2>Проєкти</h2>

      <div className="grid">
        <div className="card">
          <h4>HTML/CSS</h4>
          <a className="btn" href="https://github.com/VoidWalker-RO/html-basic.git" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>

        <div className="card">
          <h4>JavaScript</h4>
          <a className="btn" href="https://github.com/VoidWalker-RO/js-DOM-modules.git" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>

        <div className="card">
          <h4>React</h4>
          <a className="btn" href="https://github.com/VoidWalker-RO/react17-gallery.git" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}