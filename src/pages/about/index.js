import styles from './index.module.scss';
import logo from 'p/img/logo.png';
const Index = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>
            MANGA<span>PÉDIE</span>, c'est quoi ?
          </h1>
          <h2>
            MANGAPÉDIE s’est créé sur un sujet et une problématique qui nous
            touche tous entre membres de l’équipe.
          </h2>
          <p>
            Étant fans de Manga (Papier ou animation 2D), nous nous sommes
            rendus compte d’une chose, au delà de lire ou regarder un manga et
            d’apprécier son histoire, beaucoup de détails sont délaissés ou
            s’oublient facilement.
          </p>
          <p>
            Nous savons que les auteurs n’écrivent pas une histoire par pur
            hasard, beaucoup de manga ont des significations profondes et
            détails cachés ou très peu visibles qu’on devrait prendre en compte.
            Nous pouvons citer par exemple les personnages secondaires qui
            peuvent être beaucoup plus approfondis car ils sont souvent laissés
            de côté, et pourtant ils ont tout de même un bon développement.
          </p>
        </div>
        <div className={styles.right}>
          <h1>NOTRE ÉQUIPAGE</h1>
          <img className={styles.image} src={logo.src} alt="Mangapedia logo" />
          <p>
            C’est pour cela qu’en tant que m’est venu l’idée principale, qui est
            de permettre aux lecteurs et visionneurs de mangas/animés de pouvoir
            avoir accès facilement à l’intégralité des informations qu’ils
            souhaitent, donc un panel complet d’informations sur une sélection
            de mangas (exemples : résumés, biographie des personnages et pas
            seulement principales, lieux importants, arcs, Galeries d’images,
            etc...).
          </p>
        </div>
      </div>
    </>
  );
};

export default Index;
