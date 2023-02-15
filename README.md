<div align="center">
<h1 align="center">URL Shortener</h1>

  <p align="center">
    A simple full stack application that shorten URL for easy distrubution
    <br />
    <a href="https://github.com/Samuellmk/url-shortener"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://shrink-me-bay.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/Samuellmk/url-shortener/issues">Report Bug</a>
    ·
    <a href="https://github.com/Samuellmk/url-shortener/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://shrink-me-bay.vercel.app/)

A full stack web application - a simple url shortener, **however, a short memorable domain is needed for this to be in full effect.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![Nest][Nest.js]][Nest-url]
- [![Postgresql][Postgresql]][Postgresql-url]

### Hosted on

- [![Vercel][Vercel]][Vercel-url]
- [![Railway][Railway]][Railway-url]
- [![Supabase][Supabase]][Supabase-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```
- Docker

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Samuellmk/url-shortener.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create `.env` in root directory

   ```js
   VITE_BACKEND_URL = "http://localhost:3333/api/"
   VITE_FRONTEND_URL= "localhost:4200"
   VITE_FULL_FRONTEND_URL= "http://localhost:4200/"
   ```

4. Create another `.env` in `/api` directory

   ```js
   DATABASE_URL="postgresql://postgres:123@localhost:5434/nest?schema=public"
   ```

5. Run `npm run start:client` for frontend server. Navigate to http://localhost:4200/

6. Run `npm run db:dev:restart:win` for window or `npm run db:dev:restart:unix` for unix, this command will remove db and setup a new one

7. Run `npm run generate` to generate schema

8. Run `npm run start:api` for backend server on another terminal. Use http://localhost:3333/api/ for API calls

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

<h3>APIs from http://localhost:3333/api/ </h3>

| Name     | Method | Description                     | Example             |
| -------- | ------ | ------------------------------- | ------------------- |
| /fullUrl | GET    | Exchange short for normal url   | ?shortenUrl=KFkS0A0 |
| /shorten | POST   | Shorten normal url to short url | url: www.google.com |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Frontend
- [x] Backend
- [x] Hosted

See the [open issues](https://github.com/Samuellmk/url-shortener/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- Myself :)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: https://i.ibb.co/CHQyR9y/url-shortener.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Nest.js]: https://img.shields.io/badge/NestJs-20232A?style=for-the-badge&logo=nestjs&logoColor=e0234e
[Nest-url]: https://nestjs.com/
[Postgresql]: https://img.shields.io/badge/postgresql-20232A?style=for-the-badge&logo=postgresql&logoColor=00000
[Postgresql-url]: https://www.postgresql.org/
[Vercel]: https://img.shields.io/badge/Vercel-20232A?style=for-the-badge&logo=Vercel&logoColor=00000
[Vercel-url]: https://www.vercel.com/
[Railway]: https://img.shields.io/badge/Railway-20232A?style=for-the-badge&logo=Railway&logoColor=00000
[Railway-url]: https://railway.app/
[Supabase]: https://img.shields.io/badge/supabase-20232A?style=for-the-badge&logo=supabase&logoColor=00000
[Supabase-url]: https://supabase.com/
