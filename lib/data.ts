export const artistData = {
  name: "Hank Willis Thomas",
  tagline: "Conceptual Artist",
  location: "Brooklyn, NY",
  born: "1976, Plainfield, NJ",

  statement: "I work primarily with themes related to perspective, identity, commodity, media, and popular culture.",

  heroQuote: "What I try to do is create work that allows us to see things that are often hiding in plain sight.",

  bio: {
    short: "Hank Willis Thomas is a conceptual artist working primarily with themes related to perspective, identity, commodity, media, and popular culture.",
    full: [
      "Hank Willis Thomas (b. 1976, Plainfield, NJ) is a conceptual artist working primarily with themes related to perspective, identity, commodity, media, and popular culture.",
      "Thomas holds a B.F.A. from New York University (1998) and an M.A./M.F.A. from the California College of the Arts in San Francisco (2004). He received honorary doctorates from the Maryland Institute of Art and the Institute for Doctoral Studies in the Visual Arts in 2017.",
      "His work explores the relationship between identity and commodity, particularly through the lens of race in America. Using advertising imagery and pop culture artifacts, Thomas exposes the visual codes that shape our understanding of Blackness, masculinity, and American identity.",
      "Thomas is a member of the Public Design Commission for the City of New York and has been recognized with numerous honors including a Guggenheim Fellowship (2018), the Gordon Parks Foundation Fellowship (2019), the Soros Equality Fellowship (2017), and the ICP Infinity Award for New Media (2017)."
    ]
  },

  education: [
    { degree: "B.F.A.", institution: "New York University", year: "1998" },
    { degree: "M.A./M.F.A.", institution: "California College of the Arts, San Francisco", year: "2004" },
    { degree: "Honorary Doctorate", institution: "Maryland Institute of Art", year: "2017" },
    { degree: "Honorary Doctorate", institution: "Institute for Doctoral Studies in the Visual Arts", year: "2017" }
  ],

  honors: [
    { title: "Gordon Parks Foundation Fellowship", year: "2019" },
    { title: "Guggenheim Fellowship", year: "2018" },
    { title: "AIMIA | AGO Photography Prize", year: "2017" },
    { title: "Soros Equality Fellowship", year: "2017" },
    { title: "ICP Infinity Award for New Media", year: "2017" },
    { title: "Aperture West Book Prize", year: "2008" },
    { title: "Renew Media Arts Fellowship, Rockefeller Foundation", year: "2007" },
    { title: "New York Foundation for the Arts Fellowship", year: "2006" }
  ],

  collaborations: [
    {
      title: "For Freedoms",
      description: "A platform for creative civic engagement, discourse, and direct action. Awarded ICP Infinity Award in 2017.",
      type: "Civic Engagement Platform"
    },
    {
      title: "Question Bridge: Black Males",
      description: "An ongoing transmedia project that facilitates dialogue between a critical mass of Black men from diverse backgrounds.",
      type: "Transmedia Project"
    },
    {
      title: "In Search Of The Truth (The Truth Booth)",
      description: "An inflatable speech bubble where participants record their own truths, traveling across the country and around the world.",
      type: "Public Art / Community Engagement"
    },
    {
      title: "The Writing on the Wall",
      description: "A public narrative project exploring the intersection of art, justice, and community voice.",
      type: "Public Art"
    }
  ],

  publicArt: [
    {
      title: "Unity",
      location: "Brooklyn, NY",
      year: "2019",
      description: "A monumental bronze sculpture depicting an embrace, symbolizing unity and solidarity in the heart of Brooklyn.",
      image: "/works/unity.jpg"
    },
    {
      title: "Love Over Rules",
      location: "San Francisco, CA",
      year: "2017",
      description: "A public artwork that transforms text into sculptural form, emphasizing the power of love in civic spaces.",
      image: "/works/love-over-rules.jpg"
    },
    {
      title: "All Power to All People",
      location: "Opa Locka, FL",
      year: "2017",
      description: "An Afro pick reimagined as monumental sculpture, reclaiming symbols of Black identity and power. A bronze version is displayed at Yorkshire Sculpture Park through August 2025.",
      image: "/works/all-power.jpg"
    }
  ],

  exhibitions: {
    current: [
      {
        title: "I AM MANY",
        venue: "Jack Shainman Gallery",
        location: "46 Lafayette Street, NYC",
        dates: "September 5 – November 1, 2025",
        description: "Large-scale sculptures, retroreflective works, lenticular pieces, textiles, and mixed-media assemblages exploring legacies of exploitation and oppression alongside new forms of community and solidarity."
      },
      {
        title: "Kinship of the Soul",
        venue: "Pace Gallery",
        location: "London",
        dates: "November 20 – December 21, 2024",
        description: "Retroreflective collages exploring histories of abstraction through lenses of colonization, globalization, and appropriation."
      }
    ],
    past: [
      {
        title: "Fragile Beauty",
        venue: "Victoria and Albert Museum",
        location: "London",
        dates: "Through January 5, 2025"
      }
    ]
  },

  selectedWorks: [
    {
      title: "I Am a Man",
      year: "2014",
      medium: "Retroreflective vinyl on aluminum",
      description: "References the 1968 Memphis Sanitation Strike. Under flash photography, latent protest imagery emerges from the surface.",
      category: "Retroreflective"
    },
    {
      title: "Branded",
      year: "2006-present",
      medium: "Mixed media",
      description: "An ongoing series examining the relationship between the Black body and commodity culture through advertising imagery.",
      category: "Photography"
    },
    {
      title: "Unbranded: Reflections in Black by Corporate America",
      year: "2005-2008",
      medium: "Digital prints",
      description: "Advertisements stripped of text, revealing the underlying assumptions and visual codes used to sell products to Black consumers.",
      category: "Photography"
    },
    {
      title: "B®anded",
      year: "2006",
      medium: "Screen print on retro reflective paper",
      description: "Explores the commodification of Black bodies, drawing parallels between historical branding practices and modern advertising.",
      category: "Print"
    },
    {
      title: "Punctum Series",
      year: "Various",
      medium: "Photography",
      description: "Referencing Roland Barthes' concept of 'punctum' - the detail in a photograph that pierces the viewer.",
      category: "Photography"
    }
  ],

  venues: [
    "International Center of Photography",
    "Guggenheim Museum Bilbao",
    "Musée du quai Branly",
    "Hong Kong Arts Centre",
    "Witte de With Center for Contemporary Art",
    "Jack Shainman Gallery",
    "Pace Gallery"
  ],

  contact: {
    representation: [
      {
        gallery: "Jack Shainman Gallery",
        location: "New York",
        website: "https://www.jackshainman.com"
      },
      {
        gallery: "Pace Gallery",
        location: "London",
        website: "https://www.pacegallery.com"
      }
    ]
  },

  themes: [
    "Perspective",
    "Identity",
    "Commodity",
    "Media",
    "Popular Culture",
    "Race in America",
    "Historical Memory",
    "Protest & Resistance"
  ]
};

export type ArtistData = typeof artistData;
