import './style.css';
import userInfo from 'user-info-logger';

userInfo().then((data) => {
  const appElement = document.querySelector('#app');
  const userDiv = document.createElement('div');
  userDiv.classList.add('user-info');

   const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/IntegerAlex/user-info-logger';
  githubLink.textContent = 'GitHub Repository';
  githubLink.target = '_blank';
  githubLink.classList.add('github-link')
  appElement.appendChild(githubLink);
  
  const title = document.createElement('h1');
  title.textContent = 'Your Information Just by Clicking on A link';
  userDiv.appendChild(title);
  
  const pre = document.createElement('pre');
  pre.textContent = JSON.stringify(data, null, 2);
  userDiv.appendChild(pre);
  
  appElement.appendChild(userDiv);
 
});

// Add the Free JavaScript (JS) image
const jsImage = document.createElement('img');
jsImage.src = '/freejs.png';
jsImage.alt = 'Free JavaScript Logo';
jsImage.label = "  <p>This project is not Associated with FSF<p>"
jsImage.classList.add('js-logo');
document.body.appendChild(jsImage);

// Add the Free Software Foundation (FSF) banner
const fsfBanner = document.createElement('a');
fsfBanner.href = 'https://github.com/sponsors/IntegerAlex';
fsfBanner.target = '_blank';
fsfBanner.classList.add('fsf-banner');
fsfBanner.innerHTML = `
  <img src="/logo-fsf.org.png" alt="Free Software Foundation Logo">

`;
document.body.appendChild(fsfBanner);
// Add GitHub repository link
const footer = document.createElement('footer');

// Add the disclaimer to the footer
const disclaimer = document.createElement('p');
disclaimer.textContent = 'This project is not associated with FSF.';
footer.appendChild(disclaimer);

// Append the footer to the body
document.body.appendChild(footer);
