import React from "react";
import logoDC from "../assets/logo/logoDC.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";
import img8 from "../assets/images/img8.png";
import img9 from "../assets/images/img9.png";
import img10 from "../assets/images/img10.png";
import img12 from "../assets/images/img12.png";
// import img15 from "../assets/images/img15.png";
import polygon from "../assets/icones/Polygon.png";
import polygon1 from "../assets/icones/Polygon-1.png";
import guillemet_1 from "../assets/icones/guillemet_1.png";
import guillemet_2 from "../assets/icones/guillemet_2.png";
import "../styles/home.scss";

function Home() {
  return (
    <main id="home">
      <section id="hero">
        <div class="container">
          <div class="content">
            <p class="texte">
              <img src={logoDC} alt="logoDC" />
              <h1>SUPERMAN</h1>
              <span class="titre">L'HOMME D'ACIER</span>
            </p>
          </div>
        </div>
      </section>

      <section id="batman-cinema">
        <div class="container">
          <h1 class="titre">SUPERMAN AU CINÉMA</h1>
          <p class="description">
            Dans la version actuelle de son histoire, Superman est né sur la
            planète Krypton sous le nom de « Kal-El ». Encore bébé, il fut placé
            dans un vaisseau spatial par son père, le scientifique Jor-El, et sa
            mère, Lara, car la planète était sous la menace d'une destruction
            totale.Le vaisseau quitta Krypton juste avant l'explosion
            fatidique... Au terme d'un très long voyage, il atterrit sur la
            planète Terre. Kal-El est trouvé par un couple de fermiers de
            Smallville, (Kansas). Jonathan et Martha Kent, qui n'ont pas
            d'enfant, décident alors de l'adopter et de garder le secret sur son
            origine. Kal-El est rebaptisé « Clark Joseph Kent » et grandit
            entouré de ses amis Lana Lang (son premier amour) et Pete Ross
            jusqu'à ce que ses pouvoirs se révèlent à lui au moment de son
            adolescence.Jeune adulte, Clark décide de s'installer à Metropolis
            pour devenir journaliste. Il y est engagé par Perry White, le
            rédacteur en chef du Daily Planet. Pour sauver les personnes qui lui
            sont chers ainsi que les habitants de la Terre, Clark revêt son
            costume et devient Superman, l’homme d’acier aux yeux du monde.
          </p>
          <div class="batman-personnage">
            <div class="batman-item">
              <img src={img8} alt="bat_robert" />
            </div>
            <div class="batman-item">
              <img src={img9} alt="bat_christian" />
            </div>
            <div class="batman-item">
              <img src={img10} alt="bat_ben" />
            </div>
          </div>
        </div>
      </section>

      <section id="batman-cinema">
        <div class="container">
          <h1 class="titre">NÉMÉSIS</h1>
          <p class="description">
            Superman mène une lutte sans fin contre de nombreux adversaires, son
            adversaire le plus connu étant le milliardaire Lex Luthor, fils de
            Lionel Luthor, qui déteste tout ce qu'incarne Superman et finira
            notamment par devenir président des États-Unis, ce qui participera à
            faire de lui le pire ennemi de Clark. Doomsday, une abomination
            génétique qui souhaite tout détruire sur son passage, sera celui qui
            réussira à tuer Superman. Zod est un kryptonien qui fut condamné à
            l'emprisonnement dans la Zone Fantôme pour s'être insurgé contre les
            autorités. Il est libéré et vient sur Terre pour la conquérir mais
            est arrêté par Superman. Étant kryptonien, Zod possède les mêmes
            pouvoirs que Superman, et constitue donc l'un de ses plus dangereux
            adversaires.
          </p>
          <div class="batman-personnage">
            <div class="batman-item">
              <img src={img5} alt="bat_robert" />
            </div>
            <div class="batman-item">
              <img src={img6} alt="bat_christian" />
            </div>
            <div class="batman-item">
              <img src={img7} alt="bat_ben" />
            </div>
          </div>
        </div>
      </section>

      <section id="batman-cinema">
        <div class="container">
          <h1 class="titre">ALLIES</h1>
          <p class="description">
            Jor-El était le père biologique de Kal-El, ainsi que le savant le
            plus célèbre de Krypton et un membre influent du Conseil des
            Sciences. Lorsque Krypton s’effondre il place une version
            impuissante de lui même dans le vaisseau emportant Kal-El vers la
            Terre afin de lui apporter les réponses à ses questions quand il
            grandira. Sur Terre Clark est pris en charge par Jonathan et Martha
            Kent qui l’élèvent comme leur propre fils. Lorsque John sera mort,
            Clark pourra compter sur le soutien indéféctible de sa mère. Une
            fois engagé au Daily Planet, il rencontrera Loïs Lane qui deviendra
            sa partenaire et son seul “véritable amour”
          </p>
          <div class="batman-personnage">
            <div class="batman-item">
              <img src={img2} alt="bat_robert" />
            </div>
            <div class="batman-item">
              <img src={img3} alt="bat_christian" />
            </div>
            <div class="batman-item">
              <img src={img4} alt="bat_ben" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- JUSTICE LEAGUE --> */}
      <section id="league">
        <div className="container">
          <h2>BATMAN V SUPERMAN</h2>
          <p>
            Le monde n’est pas assez grand pour deux super héros. Alors que
            Superman se battait contre Zod, l’affrontement fait des dégats et
            détruit partiellement la ville de Métropolis. Bruce Wayne alors
            présent dans la ville assiste, impuissant, à l’effondrement de la
            ville qui fait beaucoup de victimes. Wayne est alors persuadé que
            Superman causera un jour la perte de l'Humanité et qu'il est
            inévitable de se préparer à l'éliminer. Devenu méfiant il se demande
            si l'homme de fer, cet extraterrestre de Krypton, qui peut à lui
            seul détruire le monde d'une simple pichenette, décidera un jour de
            ne plus défendre la Terre, voire même de causer sa perte. De son
            côté Superman d’une part cherche à se défendre mais retourne
            l’offensive contre Batman. Ce dernier n'est plus que l'ombre de
            lui-même. Devenu un justicier impitoyable, mégalomane et cruel à la
            suite du meurtre de son ancien partenaire Robin par le Joker, il
            n'hésite plus à violer son code moral en éliminant et marquant au
            fer les criminels. Superman souhaite simplement lui rappeler le code
            moral des “justicier” en usant de la force s’il le faut pour que
            Batman cesse son comportement abusif.
          </p>
        </div>
      </section>

      {/* <!-- MULTIMEDIA --> */}
      <section id="multimedia">
        <div className="container">
          <h2>MULTIMEDIA</h2>
          <img src={polygon1} alt="fleche_gauche" />
          <div className="annonce">
            <img src={img12} alt="begins_bat" />
            <div>
              <p>ACTION, ADVENTURE</p>
              <p>Superman Man of Steel</p>
              <p>
                IMDB : <span>7.1</span>
              </p>
              <p>
                Clark Kent, malgré son apparence humaine normale, est l'un des
                derniers membres d'une race éteinte. Il se retrouve forcé de
                révéler son identité lorsque la Terre est envahie par une armée
                de survivants qui menacent détruire la planète.
              </p>
            </div>
          </div>
          <img src={polygon} alt="fleche_droite" />
        </div>
        <div className="container mt-4 text-center">
          <iframe
            width="900"
            height="500"
            src="https://www.youtube.com/embed/yP7J0rlFkrg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      {/* <!-- CONTACT --> */}
      <section id="contact">
        <div className="container">
          <h2>PRENONS CONTACT</h2>
          <form action="" method="post">
            <p>
              <label>ADRESSE EMAIL</label>
            </p>
            <p>
              <input
                type="mail"
                name="email"
                placeholder="Adresse email"
                required
                className="saisi"
              />
            </p>
            <p>
              <label>NEWSLETTER</label>
            </p>
            <p>
              <label for="newsletter">
                En cochant cette case vous accepter de recevoir l'actualite
                concernant les avantures de Batman :{" "}
              </label>
              <input
                type="checkbox"
                name="newsletter"
                id="newsletter"
                required
              />
            </p>
            <p>
              <select className="saisi" required>
                <option>
                  Choisissez la frequence à laquelle vous souhaitez recevoir
                  votre newsletter
                </option>
                <option>Une fois par semaine</option>
                <option>
                  Une fois toutes les deux semaines (2 fois par semaine)
                </option>
                <option>Une fois par mois</option>
                <option>Une fois tous les trois mois</option>
                <option>Une fois tous les six mois</option>
              </select>
            </p>
            {/* tyle="border-bottom: 2px solid #BCBBBD;" */}
            <p>
              <label>souhaitez vous recevoir des news</label>
            </p>
            <p className="cent">
              <input type="radio" name="new" id="film" />
              <label for="film">Des films</label>
              <input type="radio" name="new" id="comic" />
              <label for="comic">Des comics</label>
              <input type="radio" name="new" id="tout" />
              <label for="tout">De tout</label>
            </p>
            <p>
              <label>MESSAGE</label>
            </p>
            <p>
              <textarea
                placeholder="Laisser un commentaire pour la communaute"
                className="saisi"
              ></textarea>
            </p>
            <p className="cent">
              <input type="submit" name="valid" value="CONFIRMER" />
            </p>
          </form>
        </div>
      </section>

      {/* <!-- CITATION --> */}
      <section id="citation">
        <div className="container">
          <img src={guillemet_1} alt="guillement-gauche" />
          <div>
            <p>
              Il y eu des temps célestes, les temps d’avant, emplit de
              merveilles : des diamants de la plus belle eau. Plus dure est la
              chute, la chute sur Terre, et ce qui chute est déchu. Dans mon
              rêve, elles m’emportaient vers la lumière. Sublime mensonge !
            </p>
            <p className="auteur">
              Batman v Superman : l’Aube de la Justice, Batman.
            </p>
          </div>
          <img src={guillemet_2} alt="guillement-droite" />
        </div>
      </section>
    </main>
  );
}

export default Home;
