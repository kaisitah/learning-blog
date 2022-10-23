export const posts = [
  {
    id: 0,
    title: "First post",
    timestamp: "2022-08-05",
    content: (
      <>
        <p>
          For the first time I started a blog for which I'm writing the HTML and
          CSS code myself!
        </p>
        <p>
          I am self-studying the use of web development tools such as HTML, CSS
          and JavaScript. I use several web resources such as{" "}
          <a href="https://www.khanacademy.org">Khan Academy</a> courses,{" "}
          <a href="https://code.org/learn">Hour of Code</a> challenges,{" "}
          <a href="https://developer.mozilla.org">Mozilla Developer Network</a>,
          and more, for my studies.
        </p>
        <p>
          In <em>Khan Academy</em>, I started with the course "Intro to
          HTML/CSS: Making webpages". I have learned the basics of HTML and CSS
          styling. My projects include simple webpages such as travel page,
          recipe book and now this blog. There is still a lot to learn about
          styling the sites so they are not in their prettiest shape yet :-D.
        </p>
      </>
    ),
  },
  {
    id: 1,
    title: "Second post",
    timestamp: "2022-08-08",
    content: (
      <>
        <p>
          After a day off, refilling my energy in the nature, I got back to
          learning to code. Today I explored a few learning platforms or
          materials in JavaScript.
        </p>
        <p>
          <a href="https://learnprogramming.online/">LearnProgramming.online</a>{" "}
          is a great platform to learn the basics of JavaScript. It presents the
          key concepts in a consice and precise way, along with matching
          exercises to practice my new skills. I learned to define and call
          functions!
        </p>
        <p>
          I also had fun with playing games that test your understanding of
          code. You may want to check{" "}
          <a href="http://www.toxicode.fr/learn">these Toxicode games</a> out,
          too! :-)
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Going Live: Publishing my blog on GitHub Pages",
    timestamp: "2022-08-28",
    content: (
      <>
        <p>
          I needed to have a break in my programming exercises because of
          getting ill and starting at a new job. Luckily my new job is related
          to programming, so I didn't forget everything I had learned before the
          break!
        </p>
        <p>
          Finally I had time to try something really exciting: publish a webpage
          I had created within Khan Academy <strong>as a public page</strong> on
          GitHub Pages! It was not the first index.html file I ever created but
          maybe the third one or so. I copy-pasted the source code of my
          learning blog webpage from Khan Academy. While I was at it, I decided
          to add some elements to the head of the site as well as add some
          clarity to my code with indentation.
        </p>
        <p>
          I must say that the work I did with indenting the code really paid
          off: Now it's much easier to keep writing the blog and polish the
          style of the website. Another note about structure. The usage of
          &lt;div&gt; element is still a bit blurry for me, but I came up with
          one clear way of using it: I added some structure to my blog by
          defining each of the posts as a separate{" "}
          <em>"content division element"</em>.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Learn programming theory",
    timestamp: "2022-09-04",
    content: (
      <>
        <figure class="image">
          <a href="https://commons.wikimedia.org/wiki/File:Zone_of_proximal_development.svg#/media/File:Zone_of_proximal_development.svg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Zone_of_proximal_development.svg/1200px-Zone_of_proximal_development.svg.png"
              alt="Zone of proximal development.svg"
            />
          </a>
          <br />
          By{" "}
          <a
            href="https://commons.wikimedia.org/wiki/User:Dcoetzee"
            title="User:Dcoetzee"
          >
            Dcoetzee
          </a>
          <a
            href="http://creativecommons.org/publicdomain/zero/1.0/deed.en"
            title="Creative Commons Zero, Public Domain Dedication"
          >
            CC0
          </a>
          ,
          <a href="https://commons.wikimedia.org/w/index.php?curid=20903046">
            Link
          </a>
        </figure>
        <p>
          Yesterday and today I've been learning JavaScript. It's not the first
          programming language I use as I have done a bit of programming with
          Python and R (or S language). However, I have not tried to learn the
          theoretical side of programming before. Now I need to think about that
          side, too, as I am currently working as a trainer for novise software
          developers. My expertise is in learning and pedagogy, and my
          co-trainer is a professional software developer.
        </p>
        <p>
          One classical theory of developmental psychology describes the
          so-called{" "}
          <a href="https://en.wikipedia.org/wiki/Zone_of_proximal_development">
            <em>zone of proximal development</em>
          </a>{" "}
          (see picture). This concept introduced by Lev Vygotsky is very useful
          when thinking about what and how to try and learn next by myself and
          by my students. Revisiting variable definitions, number and string
          values as well as basic operations with them felt like a good next
          step after playing some JavaScript games and learning the basics of
          HTML and CSS. I had good guidance from learning materials and socially
          from my co-trainer if I struggled to understand something or got
          stuck.
        </p>
      </>
    ),
  },
];
