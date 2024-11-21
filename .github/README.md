# Portfolio Website

This is a responsive one page portfolio website which highlights skills, work experience, projects and shares some personal information about the owner (Me👋) of the website.

<p align="center">
    <img src="../public/images/portfolio_p1.webp" alt="Hero" width="400">
    <img src="../public/images/portfolio_p2.webp" alt="AboutMe" width="400">
</p>
<p align="center">
    <img src="../public/images/portfolio_p3.webp" alt="Projects" width="400">
    <img src="../public/images/portfolio_p4.webp" alt="Services" width="400">
</p>
<p align="center">
    <img src="../public/images/portfolio_mp1.webp" alt="Hero Mobile" width="200">
    <img src="../public/images/portfolio_mp2.webp" alt="Menu Mobile" width="200">
    <img src="../public/images/portfolio_mp3.webp" alt="Contact Mobile" width="200">
</p>

## Key features:

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=next,typescript,tailwind,nodejs" />
  </a>
</p>

- Built with Next.js, Typescript, Node.js, Tailwind CSS, Framer Motion
- Secure contact Form with hcaptcha using the API routes of Next.js
- Responsive Design, Burger Menu, SEO

## Setup contact form:
- To use hcaptcha you will need to create a free account:
https://www.hcaptcha.com
- create copy of .env_template and rename it to .env in the root directory
- enter secret and sitekey of your hcaptcha account
- if you own a domain, use credentials (email, pwd) and SMTP details of the email belonging to the domain
- enter the email (RECIPIENT) to which the messages should be send (can be a public email like protonmail)
- Please note: for deployment on vercel you have to enter the env variables in their dashboard
```
NEXT_PUBLIC_HCAPTCHA_SECRET=
NEXT_PUBLIC_HCAPTCHA_SITEKEY=
NEXT_PUBLIC_SMTP_SERVER=
NEXT_PUBLIC_SMTP_PORT=
NEXT_PUBLIC_USER=
NEXT_PUBLIC_PWD=
NEXT_PUBLIC_RECIPIENT=
```

## Roadmap
- Internationalisation (I18n)
- Dynamic project section using the Github API


## Check it out:
https://www.fullstacklab.net