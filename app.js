// Importing animal data from the 'animals' file
import { animals } from './animals';

// Importing React and createRoot for rendering
import React from 'react';
import { createRoot } from 'react-dom/client';

// Selecting the HTML element where the app will be mounted
const container = document.getElementById('app');
const root = createRoot(container);

// Defining the title of the app, currently empty
const title = '';

// Setting whether the background image should be displayed
const showBackground = true;

// JSX element for the background image
const background = (
  <div>
    <img
      className="background"
      alt="ocean" 
      src="/images/ocean.jpg" 
    />
  </div>
);

// Creating an array to store animal images
const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal} 
      className="animal" 
      alt={animal} 
      src={animals[animal].image} 
      aria-label={animal} 
      role="button" 
      onClick={displayFact} 
    />
  );
}

// Composing the main interface with JSX
const animalFacts = (
  <div>
    {showBackground && background} {/* Shows background if showBackground is true */}
    <div className="animals">
      {images} {/* Displays the list of animal images */}
    </div>
    <h1>{title || 'Click an animal for a fun fact'}</h1> {/* Shows title or a default message */}
    <p id="fact"></p> {/* Element to display a fun fact */}
  </div>
);

// Rendering the interface into the 'app' element in the DOM
root.render(animalFacts);

// Function to display a random fun fact about the clicked animal
function displayFact(e) {
  // Gets the selected animal using the alt attribute of the clicked element
  const selectedAnimal = animals[e.target.alt];

  // Generates a random index to access a fact about the animal
  const factIndex = Math.floor(Math.random() * selectedAnimal.facts.length);

  // Retrieves the fun fact using the generated index
  const fact = selectedAnimal.facts[factIndex];

  // Displays the fact in the HTML element with id 'fact'
  document.getElementById('fact').innerHTML = fact;
}
