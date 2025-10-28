# Apostolos Mavrogiannakis - Personal Academic Website

This is the source code for my personal academic website, built with [Hugo](https://gohugo.io/) and [Hugo Blox](https://hugoblox.com/).

## Website

Visit the live site at: [https://mavrogiannakisap.github.io/](https://mavrogiannakisap.github.io/)

## About

I am a PhD student in Computer Science at the University of California, Santa Cruz. My research focuses on:
- Privacy-preserving systems
- Applied cryptography
- Secure multi-party computation
- Oblivious RAM (ORAM)

## Local Development

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) (v0.112.0 or later)
- [Go](https://golang.org/dl/) (v1.20 or later)

### Setup

1. Clone this repository:
```bash
git clone https://github.com/mavrogiannakisap/mavrogiannakisap.github.io.git
cd mavrogiannakisap.github.io
```

2. Install dependencies:
```bash
hugo mod get -u
```

3. Run the development server:
```bash
hugo server
```

4. Visit `http://localhost:1313` in your browser

### Building for Production

```bash
hugo --minify
```

The site will be generated in the `public/` directory.

## Site Structure

```
content/
├── authors/admin/          # Personal profile and bio
├── publication/            # Research publications
├── teaching/               # Teaching experience
├── blog/                   # Blog posts and tutorials
└── cv.md                   # Curriculum Vitae

config/_default/
├── hugo.yaml              # Hugo configuration
├── params.yaml            # Site parameters
└── menus.yaml             # Navigation menu
```

## Customization

### Adding a Publication

Create a new directory in `content/publication/` with an `index.md` file:

```bash
hugo new publication/my-paper/index.md
```

Then edit the frontmatter with your paper details.

### Adding a Blog Post

Create a new blog post:

```bash
hugo new blog/my-post/index.md
```

### Updating Profile

Edit `content/authors/admin/_index.md` to update your bio, interests, education, and work experience.

### Adding Profile Picture

Replace `content/authors/admin/avatar.jpg` with your professional photo.

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### GitHub Actions Workflow

The `.github/workflows/hugo.yaml` file handles automatic deployment.

## License

Copyright © 2024 Apostolos Mavrogiannakis

Content is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## Links

- Email: amavrogiannakis [at] ucsc [dot] edu
- GitHub: [@mavrogiannakisap](https://github.com/mavrogiannakisap)
- Google Scholar: [Profile](https://scholar.google.com/)
- LinkedIn: [Profile](https://www.linkedin.com/in/apostolos-mavrogiannakis)

## Acknowledgments

Built with:
- [Hugo](https://gohugo.io/) - Static site generator
- [Hugo Blox](https://hugoblox.com/) - Academic theme
- [GitHub Pages](https://pages.github.com/) - Hosting

---

*Last updated: October 2024*
