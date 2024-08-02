# Products System Redesign
<h2 align="center"> Project Atelier Products-Service System Redesign </h2>
<details>
  <summary>Table of Content</summary>
  <ol>
    <li>
      <a href = "About"> About </a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href = "#getting-started"> Getting Started </a>
      <ul>
        <li><a href="#Prerequisites">Built With</a></li>
        <li><a href="#Installation">Installation</a></li>
    </li>
    <li>
      <a href = "#Usage">Usage</a>
    </li>
    <li><a href="#Roadmap">Roadmap </a></li>
    <li><a href="#Optimizations">Optimizations</a></li>
    <li><a hred = "#Contributing">Contributing</a></li>
    <li><a hred = "#Contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About
Project Atelier is a desktop and mobile friendly app utilizing Node.js, React and Express to provide a modern e-commerce portal that is not just functional, but also intuitive and user-friendly. The backend service created here utilizes NginX, PostgreSQL to create a seamless flow of data to the client, and allowing for horizontal scaling to handle increased traffic while maintaining low service response times.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With
<p align = "center">
  <a href="https://skillicons.dev">
<img src="https://skillicons.dev/icons?i=js,html,css,nodejs,nginx,postgres,aws")
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started
<p align = "center"> Instructions to setup the Products API on your local machine below. </p>

### Prerequisites
<div align="center">
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" title="npm"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/></code>
</div>

* npm
  ```sh
  npm install npm@latest -g
  ```
### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/shaoyuchen3213/Huskey-Helper-Products.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your port and database info in `env.local` file
   ```js
   PORT=(your port)
   DATABASE IP = "YOUR DATABASE IP"
   ```
4. Run in server enironment
   ```js
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage
 Project Atelier is run on the designated port. Local testing can be performed by installing K6 and entering the following command in the projects root directory
  ```sh
  ky run script.js
  ```
or by utilizing tools such as Postman
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Optimizations

<!-- MARKDOWN LINKS & IMAGES -->
<p align = "center> 
  Reduced query time by 48% through database migration to Postgres and data and consolidation.

Incorperated NginX Least Connections load balancing for hash scaling.

</p>
## Contact
<div align="center">
  <h3 > Shaoyu Chen</h3>
    <a href="https://www.linkedin.com/in/shaoyu-chen-341352160/">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
</div>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

