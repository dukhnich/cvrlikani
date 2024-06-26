import { useState } from 'react';
import kiviLogo from './assets/icons/kiwi.svg';
import house from './assets/icons/house.svg';
import bookmark from './assets/icons/bookmark.svg';
import heart from './assets/icons/heart.svg';
import './App.css';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <aside className="sidebar">
        <nav className="menu">
          <div className="menu__item menu__logo">
            <a href="#" className="menu__link">
              <img className="menu__icon" src={kiviLogo} />
            </a>
          </div>
          <div className="menu__item">
            <a href="#" className="menu__link">
              <img className="menu__icon" src={house} alt="Domů" />
              <span className="menu__text">Domů</span>
            </a>
          </div>
          <div className="menu__item">
            <a href="#" className="menu__link">
              <img className="menu__icon" src={bookmark} alt="Záložky" />
              <span className="menu__text">Záložky</span>
            </a>
          </div>
          <div className="menu__item">
            <a href="#" className="menu__link">
              <img className="menu__icon" src={heart} alt="Lajky" />
              <span className="menu__text">Lajky</span>
            </a>
          </div>
        </nav>
      </aside>

      <main className="main">
        <h1 className="page-title">Cvrlikání</h1>

        <div className="post">
          <form className="post__form">
            <textarea
              name="post-message"
              id="post-message"
              rows={4}
              className="post__message"
              placeholder="Řekni, co se děje?"
            ></textarea>
          </form>
          <div className="post__actions">
            <button className="button">Zacvrlikej to</button>
          </div>
        </div>

        <div className="timeline">
          <article className="message">
            <div className="message__avatar">
              <img src="assets/avatars/woman1.jpg" alt="" />
            </div>
            <div className="message__content">
              <header className="message__header">
                <span className="message__name">Alena Nováková</span>
                <span className="message__handle">@novalena</span>
                <span className="message__time">2h</span>
              </header>
              <div className="message__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus illum temporibus sit nemo, impedit
                maxime ipsum numquam laboriosam accusamus eius.
              </div>
              <footer className="message__footer">
                <button className="icon-button icon-button--red">
                  <span className="icon-button__icon">
                    <img src="assets/icons/heart.svg" alt="Miluju to" />
                  </span>
                  123
                </button>
                <button className="icon-button icon-button--blue">
                  <span className="icon-button__icon">
                    <img src="assets/icons/bookmark.svg" alt="Uložit do záložek" />
                  </span>
                  Přidat do záložek
                </button>
                <button className="icon-button icon-button--red">
                  <span className="icon-button__icon">
                    <img src="assets/icons/trash.svg" alt="Smazat zprávu" />
                  </span>
                  Smazat zprávu
                </button>
              </footer>
            </div>
          </article>

          <article className="message">
            <div className="message__avatar">
              <img src="assets/avatars/woman2.jpg" alt="" />
            </div>
            <div className="message__content">
              <header className="message__header">
                <span className="message__name">Jana Novotná</span>
                <span className="message__handle">@janicka</span>
                <span className="message__time">1d</span>
              </header>
              <div className="message__text">
                Tenhle příspěvek je uložený v záložkách. Temporibus ad nihil molestiae eaque officiis ipsum omnis
                incidunt voluptas nemo esse saepe cum repellendus.
              </div>
              <footer className="message__footer">
                <button className="icon-button icon-button--red">
                  <span className="icon-button__icon">
                    <img src="assets/icons/heart.svg" alt="Miluju to" />
                  </span>
                  123
                </button>
                <button className="icon-button icon-button--blue">
                  <span className="icon-button__icon">
                    <img src="assets/icons/bookmark.svg" alt="Uložit do záložek" />
                  </span>
                  Přidat do záložek
                </button>
                <button className="icon-button icon-button--red">
                  <span className="icon-button__icon">
                    <img src="assets/icons/trash.svg" alt="Smazat zprávu" />
                  </span>
                  Smazat zprávu
                </button>
              </footer>
            </div>
          </article>

          <article className="message">
            <div className="message__avatar">
              <img src="assets/avatars/woman3.jpg" alt="" />
            </div>
            <div className="message__content">
              <header className="message__header">
                <span className="message__name">Lenka Skočdopole</span>
                <span className="message__handle">@fieldhop</span>
                <span className="message__time">1d</span>
              </header>
              <div className="message__text">
                Voluptas dolorem quis beatae doloribus nobis eligendi aperiam. Voluptates, deleniti eaque dolore, vitae
                consequatur, aspernatur reiciendis odio necessitatibus at natus labore.
              </div>
              <footer className="message__footer">
                <button className="icon-button icon-button--red">
                  <span className="icon-button__icon">
                    <img src="assets/icons/heart.svg" alt="Miluju to" />
                  </span>
                  123
                </button>
                <button className="icon-button icon-button--blue">
                  <span className="icon-button__icon">
                    <img src="assets/icons/bookmark.svg" alt="Uložit do záložek" />
                  </span>
                  Přidat do záložek
                </button>
                <button className="icon-button icon-button--red">
                  <span className="icon-button__icon">
                    <img src="assets/icons/trash.svg" alt="Smazat zprávu" />
                  </span>
                  Smazat zprávu
                </button>
              </footer>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default App;
