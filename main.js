/*    
    @licstart  The following is the entire license notice for the 
    JavaScript code in this file.

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

    @licend  The above is the entire license notice
    for the JavaScript code in this file.
 */


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

