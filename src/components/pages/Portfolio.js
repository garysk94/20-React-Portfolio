import React from "react";
import movieRandomizer from "../../images/movieRandomizer.png";
import noteTaker from "../../images/noteTaker.png";
import bookEnds from "../../images/bookEnds.png";
import passwordGenerator from "../../images/movieRandomizer.png";
import weatherDashboard from "../../images/weatherDashboard.png";
import workDayScheduler from "../../images/workDayScheduler.png";

export default function Blog() {
  return (
    <section id="Projects">
      <section class="projects">
        <section class="card">
          <header>Movie Randomizer </header>

          <img src={movieRandomizer} alt="Tech Blog" />
          <p>
          We Decided to create this app because we want to watch a new movie 
          but don't know which one specifically so we let the app pick it for us from the popular list.
          </p>
          <div class="text-center">
            <button id="gitLink">
              <a
                href="https://github.com/cmp75/Movie-Randomizer"
                target="_blank" rel="noreferrer"
              >
                <i class="fab fa-github"></i> Github
              </a>
            </button>
            <button id="gitLink">
              <a href="https://cmp75.github.io/Movie-Randomizer/" target="_blank" rel="noreferrer">
                <i class="fas fa-laptop-code"></i> Live
              </a>
            </button>
          </div>
        </section>
        <section class="card">
          <header>Bookends</header>
          <img src={bookEnds} alt="Good Gaming" />
          <p>
          Bookends is an application for reviewing and sharing banned books with other Bookends users. 
          Scroll through our library of recently banned books, review the ones you have read, or check out reviews from other user!
           Compile your own library of banned books through your very own profile page!
          </p>
          <div class="text-center">
            <button id="gitLink">
              <a
                href="https://github.com/oscalenghe/bookends"
                target="_blank" rel="noreferrer"
              >
                <i class="fab fa-github"></i> Github
              </a>
            </button>
            <button id="gitLink">
              <a href="https://autumn-bird-7789.herokuapp.com/" target="_blank" rel="noreferrer">
                <i class="fas fa-laptop-code"></i> Live
              </a>
            </button>
          </div>
        </section>
        <section class="card">
          <header>Weather Dashboard</header>
          <img src={weatherDashboard} alt="Weather Dashboard" />
          <p>
            A Weather Dashboard, that fetches the data from API(OpenWeather) and
            displays weather conditions, the temperature, the humidity, the wind
            speed, and the UV index of current day and next five days
            dynamically.
          </p>
          <div class="text-center">
            <button id="gitLink">
              <a
                href="https://github.com/garysk94/Server-APIs-Weather-Dashboard"
                target="_blank" rel="noreferrer"
              >
                <i class="fab fa-github"></i> Github
              </a>
            </button>
            <button id="gitLink">
              <a
                href="https://garysk94.github.io/Server-APIs-Weather-Dashboard"
                target="_blank" rel="noreferrer"
              >
                <i class="fas fa-laptop-code"></i> Live
              </a>
            </button>
          </div>
        </section>
        <section class="card">
          <header>Work-Day-Scheduler</header>
          <img src={workDayScheduler} alt="Work-Day-Scheduler" />
          <p>
            An application that allows a user to save events for each hour of
            the day by modifying starter code. This app features dynamically
            updated HTML and CSS powered by jQuery.
          </p>
          <div class="text-center">
            <button id="gitLink">
              <a
                href="https://github.com/garysk94/Workday-Schedule"
                target="_blank" rel="noreferrer"
              >
                <i class="fab fa-github"></i> Github
              </a>
            </button>
            <button id="gitLink">
              <a
                href="https://garysk94.github.io/Workday-Schedule/"
                target="_blank" rel="noreferrer"
              >
                <i class="fas fa-laptop-code"></i> Live
              </a>
            </button>
          </div>
        </section>
        <section class="card">
          <header>Password Generator</header>
          <img src={passwordGenerator} alt="Password Generator" />
          <p>
            An application that enables employees to generate random passwords
            based on criteria that they’ve selected. This app features
            dynamically updated HTML and CSS.
          </p>
          <div class="text-center">
            <button id="gitLink">
              <a
                href="https://github.com/garysk94/Password-Generator"
                target="_blank" rel="noreferrer"
              >
                <i class="fab fa-github"></i> Github
              </a>
            </button>
            <button id="gitLink">
              <a
                href="https://garysk94.github.io/Password-Generator/"
                target="_blank" rel="noreferrer"
              >
                <i class="fas fa-laptop-code"></i> Live
              </a>
            </button>
          </div>
        </section>
        <section class="card">
          <header>Note Taker</header>
          <img src={noteTaker} alt="Note Taker" />
          <p>
            Note Taker that can be used to write, save and delete notes. This
            application uses an Express.js back end and saves and retrieves note
            data from a JSON file.
          </p>
          <div class="text-center">
            <button id="gitLink">
              <a
                href="https://github.com/garysk94/11-Notes-Express.js"
                target="_blank" rel="noreferrer"
              >
                <i class="fab fa-github"></i> Github
              </a>
            </button>
            <button id="gitLink">
              <a href="https://git.heroku.com/obscure-castle-04719.git" target="_blank" rel="noreferrer">
                <i class="fas fa-laptop-code"></i> Live
              </a>
            </button>
          </div>
        </section>
      </section>
    </section>
  );
}