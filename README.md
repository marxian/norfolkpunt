# Norfolk Punt Sailors Association

The official website for the Norfolk Punt Sailors Association, dedicated to the Norfolk Punt racing dinghy class - a historic performance sailing dinghy with origins in 19th-century hunting punts from the Norfolk Broads, England.

**Live Site**: [norfolkpunt.org](https://norfolkpunt.org)

## Features

- **Digital Boat Register**: Comprehensive database of 100+ Norfolk Punts with detailed information including:
  - Sail numbers and build years
  - Portsmouth Yardstick handicap ratings
  - Complete ownership history
  - Measurement records
  - Race honours and wins
  - User-submitted stories
  - **Boats for sale**: Mark boats as for sale with pricing and seller information

- **Event Calendar**: Upcoming races, meetings, and social events
- **Photo Gallery**: Curated images of boats and racing with lightbox viewing
- **Honours Board**: Historical race winners from 1929 to present
- **Technical Resources**: Rules, measurement forms, procedures, and downloadable documents
- **Content Management**: CMS for administrators via Decap CMS
- **Newsletter Integration**: Allows subscription to our Buttondown email newsletter
- **Downloadable Register**: CSV export of boat data

## Tech Stack

- **Framework**: Next.js 15.5.9 with React 18.3.1
- **UI Library**: Chakra UI 2.8.2
- **Content**: Markdown files with YAML frontmatter
- **CMS**: Decap CMS (formerly Netlify CMS) with GitHub backend
- **Image Processing**: Sharp with Plaiceholder for blur-up effects
- **Analytics**: Plausible (privacy-focused)
- **Runtime**: Node.js 24.x

## Getting Started

### Prerequisites

- Node.js 24.x (specified in `.nvmrc` and `package.json` engines)
- Yarn 4.12.0 (specified in `packageManager` field)

### Installation

```bash
# Clone the repository
git clone https://github.com/marxian/norfolkpunt.git
cd norfolkpunt

# Install dependencies
yarn install

# Run development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

- `yarn dev` - Start development server with Turbopack
- `yarn build` - Build for production (runs prebuild step automatically)
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn format` - Format code with Prettier
- `yarn localcms` - Run local Decap CMS server for development

## Project Structure

```
/
├── pages/                          # Next.js pages (routes)
│   ├── index.js                    # Homepage with notices
│   ├── _app.js                     # App wrapper with theme providers
│   ├── boats/
│   │   ├── index.js                # Boat listing page
│   │   └── [slug].js               # Individual boat detail pages
│   ├── calendar.js                 # Events calendar
│   ├── gallery.js                  # Photo gallery
│   ├── honours.js                  # Race honours board
│   └── technicalities/             # Technical resources
├── components/                     # Reusable React components
│   ├── Layout.js                   # Page layout wrapper
│   ├── Nav.js                      # Navigation header
│   ├── PuntCard.js                 # Boat card for listing
│   ├── PuntDetails.js              # Detailed boat view
│   └── ...
├── content/                        # Content data files
│   ├── boats/                      # Individual boat markdown files
│   ├── pages/                      # Gallery, calendar, honours data
│   └── notices/                    # Homepage notices
├── public/                         # Static assets
│   ├── images/                     # Photos (boats, gallery, notices, site)
│   ├── files/                      # Downloadable PDFs and documents
│   ├── config.yml                  # Decap CMS configuration
│   └── admin.html                  # CMS admin interface
├── theme.js                        # Chakra UI theme configuration
└── next.config.js                  # Next.js configuration
```

## Content Management

### Accessing the CMS

Navigate to `/admin.html` to access the Decap CMS interface. Authentication is handled via GitHub OAuth.

### Local Development

For local CMS development without authentication, run the local Decap server:

```bash
yarn localcms
```

In another terminal, start the dev server:

```bash
yarn dev
```

Then access the CMS at `http://localhost:3000/admin.html` and use the local backend.

### Content Collections

- **Boats**: Individual boat records with metadata, ownership history, and stories
- **Pages**: Gallery, calendar, honours, and technical resources
- **Notices**: Homepage announcements and news

### Adding Content

All content is stored as markdown files in the `/content/` directory:

- Boat data: `/content/boats/*.md`
- Page content: `/content/pages/*.md`
- Notices: `/content/notices/*.md`

Each file contains YAML frontmatter with structured data and optional markdown content.

## Data Model

### Boat Records

Each boat includes:
- Basic information (name, sail number, year built, length)
- Portsmouth Yardstick handicap with suffix letters
- Ownership history with date ranges
- Measurement records (hull and sail)
- Race honours (computed from honours.md)
- User-submitted stories with attribution
- Previous names tracking
- **For sale information** (optional):
  - For sale flag
  - Price
  - Condition notes
  - Items included in sale
  - Seller contact information

### Boats For Sale Feature

Boats can be marked as for sale in the CMS with optional sale details. When marked for sale:
- A red "FOR SALE" badge appears on boat cards (homepage and boats index)
- An alert banner displays at the top of the boat's detail page
- Sale information (price, condition, items, seller) is shown in a dedicated section
- The boat appears in the "Boats For Sale" section on the homepage
- All sale fields are optional to allow flexibility

## Architecture

### Static Site Generation

The site uses Next.js Static Site Generation (SSG) with Incremental Static Regeneration (ISR):

- Pages are pre-rendered at build time
- Revalidation occurs every 12 hours
- Optimal performance with fresh content

### Build Process

1. Pre-build step generates CSV register from boat data (`buildRegister.js`)
2. Next.js builds static pages using `getStaticProps` and `getStaticPaths`
3. Image placeholders generated for smooth loading
4. Static HTML, CSS, and JavaScript output

### Image Handling

- Next.js Image component for automatic optimization
- Plaiceholder generates blur-up placeholders
- Images organized by content type in `/public/images/`

## Deployment

The site is optimized for static hosting platforms like Netlify, Vercel, or Cloudflare Pages.

### Build Command

```bash
yarn build
```

### Output Directory

```bash
.next
```

## Performance Features

- Static site generation for instant page loads
- Image optimization with blur placeholders
- Code splitting by route
- Security headers configured
- Privacy-focused analytics

## Development Workflow

### Node Version Management
Always run `nvm use` when opening a new shell to ensure you're using the correct Node version (24.x). The project uses Husky pre-commit hooks that require the correct Node version.

```bash
nvm use
```

### Feature Branch Workflow
For any new feature or change:
1. **Create a feature branch first** - Don't work directly on main
2. Make your changes and commit
3. Push the branch and open a PR using GitHub CLI
4. Example:
```bash
git checkout -b feature-name
# make changes
git add .
git commit -m "Description"
git push -u origin feature-name
gh pr create --base main
```

The site automatically rebuilds and deploys on commits to main, so all changes should go through pull requests.

## Contributing

Content contributions can be made through the CMS interface. For code contributions, please follow the existing code style and run linting before submitting.

## License

MIT

---

**Norfolk Punt Sailors Association**
Preserving and promoting the Norfolk Punt racing dinghy class since 1929.
