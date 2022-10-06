import logo from './logo.svg';
import './App.css';
import Menubar from './components/Menubar';
import Button from './components/Button';
import Searchbar from './components/Searchbar';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Menubar>
        <Button />
        <Searchbar />
      </Menubar> 
      <p>This is a blog about my journey of learning to code</p>
      <Post title='First post' timestamp='2022-08-05'>
        <p>
          For the first time I started a blog for which I'm writing the HTML and CSS code myself!
        </p>
        <p>
          I am self-studying the use of web development tools such as HTML, CSS and JavaScript. I use several web resources 
          such as <a href="https://www.khanacademy.org">Khan Academy</a> courses, <a href="https://code.org/learn">Hour of Code</a> challenges,{' '} 
          <a href="https://developer.mozilla.org">Mozilla Developer Network</a>, and more, for my studies.
        </p>
        <p>
          In <em>Khan Academy</em>, I started with the course "Intro to HTML/CSS: Making webpages". I have learned the basics of HTML and CSS styling. 
          My projects include simple webpages such as travel page, recipe book and now this blog. There is still a lot to learn about styling the sites 
          so they are not in their prettiest shape yet :-D.
        </p>
      </Post> 
      <Post title='Second post' timestamp='2022-08-08'>
      <p>
          After a day off, refilling my energy in the nature, I got back to learning to code. Today I explored a few learning platforms or materials 
          in JavaScript.
      </p>
      <p>
          <a href="https://learnprogramming.online/">LearnProgramming.online</a> is a great platform to learn the basics of JavaScript. 
            It presents the key concepts in a consice and precise way, along with matching exercises to practice my new skills. 
            I learned to define and call functions!
      </p>
      <p>
          I also had fun with playing games that test your understanding of code. You may want to check <a href="http://www.toxicode.fr/learn">these Toxicode games</a> out, too! :-)
      </p>
      </Post>
    </div>
  );
}

export default App;
