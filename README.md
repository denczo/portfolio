# Nextfolio

Nextfolio is a responsive portfolio website which highlights skills, work experience, projects and shares some personal information about the owner (Me👋) of the website. The timeline as well as the project section are dynamically created. Nextfolio also includes a reliable secure contact form with hcaptcha verification which can be connected to user's personal email.

## Key features:

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=next,typescript,tailwind,nodejs" />
  </a>
</p>

- Built with Next.js, Typescript, Node.js, Tailwind CSS, Framer Motion
- Dynamically created timeline for work experiences with Tags for skills
- Dynamically created project cards which can be linked to the actual project
- Secure contact form with hcaptcha using the API routes of Next.js
- Responsive Design, Burger Menu, SEO

## Screenshots:

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