export const posts = [
  {
    id: "1-first-post",
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
    id: "2-second-post",
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
    id: "3-going-live",
    title: "Going Live: Publishing my blog on GitHub Pages",
    timestamp: "2022-08-28",
    content: (
      <>
        <p>
          I needed to have a break in my programming exercises because of
          getting ill and starting at a new job. Luckily my new job is related
          to programming, so I didn't forget everything I had learned before the
          break.
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
          styles of the website. Another note about structure. The usage of
          &lt;div&gt; element is still a bit blurry for me, but I came up with
          one clear way of using it: I added some structure to my blog by
          defining each of the posts as a separate{" "}
          <em>"content division element"</em>.
        </p>
      </>
    ),
  },
  {
    id: "4-learn-theory",
    title: "Learn programming theory",
    timestamp: "2022-09-04",
    content: (
      <>
        <figure className="image">
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
  {
    id: "5-create-react-app",
    title: "Create React App",
    timestamp: "2022-10-23",
    content: (
      <>
        <p>
          During the past month I've been learning JSX and React on top of JS,
          HTML and CSS. As learning materials I have used{" "}
          <a href="https://beta.reactjs.org/learn">React Docs Beta</a> and the
          Codecademy course{" "}
          <a href="https://www.codecademy.com/learn/react-101">"Learn React"</a>
          . I started creating function components, so I mostly skipped the
          parts concerning class components. There is still a lot to learn,
          especially about hooks and props.
        </p>
        <p>
          To get some hands-on practice of React, I have started building two
          React apps utilizing create-react-app. One project is this blog: I
          converted my HTML page into a React app and re-created the blog using
          components. I also added some interactive elements like a searchbar
          and a button for submitting the search text. Just today I moved the
          blog posts into a separate data file.
        </p>
        <p>
          The other project is a simple webpage where you choose your favourite
          colour of six options, and the colour of a text changes accordingly.
          Furthermore, there is a timer calculating how many seconds you use to
          choose the colour. I built the app to practise event handlers,
          useState and useEffect. The project started when I was playing with an
          example on W3schools, which I was checking because of the course I'm
          currently running.
        </p>
        <p>
          Maybe the most exciting moment this week was when I deployed my
          project! Yesterday I and my co-trainer tested deployment to GitHub
          Pages. It took quite some time to study the process and put together
          the yaml file for build and deployment. But it paid off and now you
          can see my first React app in action{" "}
          <a href="https://kaisitah.github.io/favorite-color-app/">here</a>! \o/
        </p>
      </>
    ),
  },
];
