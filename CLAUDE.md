# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal portfolio website for Yanis Fortier (yfortier.fr), a DevOps engineer. The site is a single-page application built with vanilla HTML, CSS, and JavaScript using Bootstrap for layout and styling.

## Architecture

**Static Site Structure:**
- Single-page portfolio with smooth scrolling navigation
- Bootstrap 4 based responsive layout with fixed sidebar navigation
- Sections: About, Experience, Education, Skills, Engagements, Awards
- French language content throughout

**Key Files:**
- `index.html` - Main and only HTML page containing all content
- `css/resume.css` - Custom styles (based on Start Bootstrap Resume template)
- `js/resume.min.js` - Custom JavaScript for smooth scrolling and interactions
- `vendor/` - Third-party libraries (Bootstrap, jQuery, FontAwesome, etc.)
- `img/` - Images and profile photos
- `CV_FORTIER_Yanis_2025.pdf` and `CV_FORTIER_Yanis_2025_English.pdf` - Downloadable CVs
- `jeux/` - Contains game-related projects (subdirectory with atom game)

**Technology Stack:**
- Pure HTML5/CSS3/JavaScript (no build process)
- Bootstrap 4 for responsive grid and components
- jQuery for DOM manipulation and smooth scrolling
- FontAwesome for icons
- Google Fonts (Saira Extra Condensed, Muli)
- MDBootstrap flag icons

## Development Workflow

**Testing locally:**
Since this is a static site, simply open `index.html` in a browser or use a local web server:
```bash
# Using Python
python -m http.server 8000

# Using PHP
php -S localhost:8000

# Then visit http://localhost:8000
```

**No build process:**
There are no npm scripts, webpack, or build tools. Changes to HTML/CSS/JS are immediately reflected when refreshing the browser.

**Deployment:**
The site is served from the repository as-is. Any changes to `index.html`, CSS, or JS files are production changes.

## Content Structure

The site follows a vertical scrolling pattern with these main sections accessible via navbar:
1. `#about` - Personal introduction and contact info
2. `#experience` - Work history (Sopra Steria, AI project in China, ITEC, STMicroelectronics, Tours Métropole)
3. `#formation` - Educational background (timeline format)
4. `#skills` - Programming languages, software skills, spoken languages
5. `#engagements` - Volunteer work and personal values (tabbed interface)
6. `#awards` - Certifications and achievements

## Important Conventions

**Editing Content:**
- All text content is inline in `index.html` - there's no CMS or separate content files
- French is the primary language; maintain consistent tone and formality
- Profile information (address, email, phone) is hardcoded in the About section
- When updating experience or education, maintain the existing card/timeline structure

**Styling:**
- Custom styles extend the Start Bootstrap Resume theme
- Primary color scheme uses `text-primary` class (blue accent)
- Images should maintain responsive classes: `img-fluid`
- Icons use FontAwesome 5 or Devicon classes

**Images:**
- Profile picture: `img/profile.jpg`
- Company logos follow pattern: `img/[company].jpg`
- Store all images in `img/` directory

## External Dependencies

All dependencies are vendored in the `vendor/` directory:
- Bootstrap 4
- jQuery
- jQuery Easing
- FontAwesome Free
- MDBootstrap (flag icons)

No package manager or CDN dependencies need to be managed.
