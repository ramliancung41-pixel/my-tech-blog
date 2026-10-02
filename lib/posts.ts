export type PostBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; id: string; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "code"; language: string; filename: string; code: string }
  | { type: "note"; title: string; text: string }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  date: string;
  readingMinutes: number;
  featured: boolean;
  tags: string[];
  author?: string;
  coverImage?: string;
  content: PostBlock[];
};

export type TocItem = {
  id: string;
  text: string;
};

const posts: Post[] = [
  {
    slug: "how-to-get-google-adsense-approved",
    title: "How to Get Google AdSense Approved: The Checklist Reviewers Actually Use",
    description:
      "What Google checks before AdSense approval, why sites get rejected, and the pages and content that make a review go faster.",
    excerpt:
      "What Google checks before AdSense approval, why sites get rejected, and the pages and content that make a review go faster.",
    category: "Publishing",
    date: "2026-10-01",
    readingMinutes: 8,
    featured: true,
    author: "CodeAndBuild Team",
    tags: ["AdSense", "SEO", "Publishing"],
    content: [
      {
        type: "paragraph",
        text: "People search this from every platform because the AdSense screen just says the site is under review, or it comes back as low-value content. There is no paid skip and no secret button. The review moves when the site already looks like a finished publication a stranger can trust.",
      },
      {
        type: "heading",
        level: 2,
        id: "what-google-checks",
        text: "What the review is checking",
      },
      {
        type: "paragraph",
        text: "AdSense is deciding whether the site is yours, whether the pages are useful, and whether ads would sit on a site that follows the program policies. Reviewers and the automated checks look for the same things.",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "You control the domain, and the site is public on HTTPS. A login wall or a \"coming soon\" page cannot be reviewed.",
          "The content is original. Copied articles, scraped pages, and near-duplicate posts are the usual reason for a low-value rejection.",
          "A visitor can tell who runs the site. An [About](/about) page, a [contact](/contact) path, and a [privacy policy](/privacy-policy) are the standard set.",
          "Navigation works. The header and footer should reach the guides, the about page, contact, and the privacy policy without a dead end.",
          "The topic is allowed. Sexual content, copyrighted copies, dangerous instructions, and deceptive pages are policy problems, not a wording problem.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "before-you-apply",
        text: "Finish the site before you apply",
      },
      {
        type: "paragraph",
        text: "Applying on a thin site and then adding pages during the review is slower than applying once. Use this order.",
      },
      {
        type: "steps",
        items: [
          {
            title: "Publish real guides",
            text: "Aim for a set of pages a developer would bookmark. Each one should answer a specific question with steps, examples, and a point of view. Ten thin posts that repeat the same idea count for less than a handful of complete ones.",
          },
          {
            title: "Add the trust pages",
            text: "About, contact, and privacy policy. The privacy policy should say that advertising cookies may be used. Put those links in the header or footer so they are on every page.",
          },
          {
            title: "Use your own domain",
            text: "Connect the domain, force HTTPS, and confirm the site in Google Search Console. The sitemap should list the home page, the trust pages, and the guides.",
          },
          {
            title: "Read the site as a stranger",
            text: "Click every nav item. Fix broken links, empty states, and pages that are only a title and a picture. Remove placeholder text.",
          },
          {
            title: "Apply once",
            text: "Submit the site you will actually show ads on. If you are rejected, read the reason, change the site, and apply again. Refreshing the application the same day does not speed the queue.",
          },
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "rejections",
        text: "Why applications get rejected",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "**Low-value content.** The pages are short, repetitive, or generated without a real explanation. Add depth to the existing guides instead of publishing more of the same.",
          "**Incomplete site.** No about page, no contact path, or a privacy policy that never mentions ads.",
          "**Hard to navigate.** Guides exist, but the home page does not link them, or the menu only works on one screen size.",
          "**Policy content.** The site includes material the program does not allow, or it copies someone else's work.",
          "**Site not ready.** The domain does not resolve, the host returns errors, or important pages require a login.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "after-approval",
        text: "After the account is approved",
      },
      {
        type: "paragraph",
        text: "Approval is not the end of the check. Invalid traffic can disable the account later. Do not click your own ads. Do not ask friends, group chats, or a traffic service to click them. Bought visits and click-exchange schemes are how new accounts get limited.",
      },
      {
        type: "paragraph",
        text: "When ads are on, add an ads.txt file that lists your publisher ID, keep the privacy policy accurate, and leave enough space around ad units so a normal tap is not an accidental click.",
      },
      {
        type: "note",
        title: "How long it takes",
        text: "Google does not publish a guaranteed clock. Many reviews finish in a few days. Some take a couple of weeks. A complete site is the thing that shortens the wait. A second application on an unchanged site does not.",
      },
    ],
  },
  {
    slug: "time-travel-year-3000-4k-ai-video-prompt",
    title: "4K AI Short Video Prompt: Time Travel to the Year 3000",
    description:
      "A copy-ready 4K prompt for an 8-second time-travel short set in the year 3000, with camera move, lens, and color grade.",
    excerpt:
      "A copy-ready 4K prompt for an 8-second time-travel short set in the year 3000, with camera move, lens, and color grade.",
    category: "AI Art",
    date: "2026-10-01",
    readingMinutes: 4,
    featured: true,
    author: "CodeAndBuild Team",
    coverImage: "/images/year-3000-time-travel.jpg",
    tags: ["AI Art", "Video", "Prompts", "4K"],
    content: [
      {
        type: "paragraph",
        text: "This short is one shot. A traveler walks a glass skybridge toward a ring of light, and the city of the year 3000 fills the frame. Render it at 3840×2160, 24 frames per second, 16:9, about 8 seconds. The picture on this page is the opening keyframe.",
      },
      {
        type: "heading",
        level: 2,
        id: "settings",
        text: "Export settings",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "**Resolution:** 3840×2160 (4K UHD).",
          "**Frame rate:** 24 fps.",
          "**Aspect:** 16:9.",
          "**Length:** 8 seconds.",
          "**Look:** photoreal, anamorphic, teal and amber grade.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "prompt",
        text: "Prompt",
      },
      {
        type: "code",
        language: "text",
        filename: "prompt.txt",
        code: "4K cinematic science-fiction short, 8 seconds, 24 fps, 16:9. A lone adult traveler in a long dark coat walks slowly away from camera along a glass skybridge above a year-3000 city at dusk. Camera follows in a smooth low dolly. A vertical ring of white-gold light, a time portal, grows ahead of them and reflects on the glass floor. Towers of pale metal and hanging gardens rise through fog. Small flying craft cross the distance. Soft volumetric light, teal shadows, amber sky, anamorphic lens, shallow depth, natural motion, no text, no logos.",
      },
      {
        type: "heading",
        level: 2,
        id: "shot",
        text: "How to keep the shot stable",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Start on the traveler's back so the face never has to stay consistent.",
          "Use one camera move only: a slow dolly forward.",
          "Name the portal as a ring of light, not a jump cut.",
          "Ask for natural motion and no text so titles are not burned into the frames.",
        ],
      },
      {
        type: "note",
        title: "Where to render it",
        text: "Paste the prompt into a video model that exports 4K, such as Runway, Kling, Luma, or Sora, and set the output to 3840×2160. Label the clip as generated.",
      },
    ],
  },
  {
    slug: "neon-rim-light-ai-portrait-prompt",
    title: "Neon Rim Light AI Portrait Prompt: A Cinematic Night Street Formula",
    description:
      "Copy a photorealistic Flux prompt for a night street portrait with blue neon rim light, a warm streetlamp, and a shallow 85mm background.",
    excerpt:
      "Copy a photorealistic Flux prompt for a night street portrait with blue neon rim light, a warm streetlamp, and a shallow 85mm background.",
    category: "AI Art",
    date: "2026-10-01",
    readingMinutes: 4,
    featured: true,
    author: "CodeAndBuild Team",
    coverImage: "/images/ai-portrait-neon-rim.jpg",
    tags: ["AI Art", "Prompts", "Flux", "Lighting"],
    content: [
      {
        type: "paragraph",
        text: "Night portraits go viral when the light has two colors. A cool rim separates the subject from the street, and a warm lamp keeps the face readable. The cover on this page was generated from the prompt below.",
      },
      {
        type: "heading",
        level: 2,
        id: "prompt",
        text: "Prompt",
      },
      {
        type: "code",
        language: "text",
        filename: "prompt.txt",
        code: "Photorealistic cinematic portrait of an adult woman in her late twenties, fully clothed in a tailored charcoal coat, standing on a rainy city street at night. Cool blue neon rim light and a warm streetlamp key light, bokeh background, 85mm lens, shallow depth of field, natural skin texture, elegant and editorial.",
      },
      {
        type: "heading",
        level: 2,
        id: "why-it-works",
        text: "Why this prompt works",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "**Subject:** one adult, one outfit, one pose. Extra people make the face less sharp.",
          "**Lighting:** name both colors. Blue rim plus a warm key stops the face from going gray.",
          "**Lens:** 85mm and shallow depth of field turn street lights into bokeh.",
          "**Texture:** natural skin texture keeps the result from looking plastic.",
        ],
      },
      {
        type: "note",
        title: "Label the result",
        text: "Say the picture is generated. Do not present a synthetic portrait as a photograph of a real person.",
      },
    ],
  },
  {
    slug: "soft-window-light-ai-portrait-prompt",
    title: "Soft Window Light AI Portrait Prompt: Natural Daylight Formula",
    description:
      "Use this Flux prompt to make a photorealistic portrait with window daylight, a linen shirt, and a quiet editorial background.",
    excerpt:
      "Use this Flux prompt to make a photorealistic portrait with window daylight, a linen shirt, and a quiet editorial background.",
    category: "AI Art",
    date: "2026-10-01",
    readingMinutes: 4,
    featured: true,
    author: "CodeAndBuild Team",
    coverImage: "/images/ai-portrait-window-light.jpg",
    tags: ["AI Art", "Prompts", "Flux", "Portraits"],
    content: [
      {
        type: "paragraph",
        text: "Window light is the easiest photoreal setup to repeat. One large light source, a simple shirt, and a plain wall keep the face as the subject. The cover on this page was generated from the prompt below.",
      },
      {
        type: "heading",
        level: 2,
        id: "prompt",
        text: "Prompt",
      },
      {
        type: "code",
        language: "text",
        filename: "prompt.txt",
        code: "Photorealistic portrait photograph of an adult woman in her late twenties, fully clothed in a cream linen shirt, seated beside a large window. Soft natural daylight, gentle shadows, muted sage wall, airy editorial fashion photography, 85mm lens, shallow depth of field, natural skin texture.",
      },
      {
        type: "heading",
        level: 2,
        id: "why-it-works",
        text: "Why this prompt works",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "**Light:** a window is a large soft source, so the shadows stay gentle.",
          "**Clothes:** a plain linen shirt does not compete with the face.",
          "**Background:** a muted wall and out-of-focus leaves add depth without clutter.",
          "**Lens:** 85mm and a shallow depth of field match a real portrait sitting.",
        ],
      },
      {
        type: "note",
        title: "Label the result",
        text: "Say the picture is generated. Do not present a synthetic portrait as a photograph of a real person.",
      },
    ],
  },
  {
    slug: "rembrandt-lighting-ai-portrait-prompt",
    title: "Rembrandt Lighting AI Portrait Prompt: Studio Formula for Photoreal Faces",
    description:
      "Copy a studio Flux prompt that uses Rembrandt lighting, a black turtleneck, and an 85mm lens for a photoreal portrait.",
    excerpt:
      "Copy a studio Flux prompt that uses Rembrandt lighting, a black turtleneck, and an 85mm lens for a photoreal portrait.",
    category: "AI Art",
    date: "2026-10-01",
    readingMinutes: 4,
    featured: true,
    author: "CodeAndBuild Team",
    coverImage: "/images/ai-portrait-rembrandt.jpg",
    tags: ["AI Art", "Prompts", "Flux", "Lighting"],
    content: [
      {
        type: "paragraph",
        text: "Rembrandt lighting is a small triangle of light on the shadow cheek. That one mark makes a studio face look photographed instead of flat. The cover on this page was generated from the prompt below.",
      },
      {
        type: "heading",
        level: 2,
        id: "prompt",
        text: "Prompt",
      },
      {
        type: "code",
        language: "text",
        filename: "prompt.txt",
        code: "Photorealistic studio portrait photograph of an adult woman in her late twenties, fully clothed in a black turtleneck, facing the camera with a calm expression. Dramatic Rembrandt lighting, warm highlights on one side of the face, dark brown seamless backdrop, shot on an 85mm lens, shallow depth of field, natural skin texture, elegant and editorial.",
      },
      {
        type: "heading",
        level: 2,
        id: "why-it-works",
        text: "Why this prompt works",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "**Light:** name Rembrandt lighting so the model builds a shadow side and a lit side.",
          "**Backdrop:** a dark seamless background removes room clutter.",
          "**Clothes:** a black turtleneck keeps the frame on the face.",
          "**Lens:** 85mm and shallow depth of field are the usual studio portrait pair.",
        ],
      },
      {
        type: "note",
        title: "Label the result",
        text: "Say the picture is generated. Do not present a synthetic portrait as a photograph of a real person.",
      },
    ],
  },
  {
    slug: "mastering-flux-ai-prompts-photorealism",
    title: "Mastering Flux AI Prompts: Ultimate Secrets for Photorealistic Portraits",
    description:
      "Learn how to use Flux.1 AI model prompt formulas to create stunning photorealistic portraits, studio lighting setups, and cinematic character renders.",
    excerpt:
      "Learn how to use Flux.1 AI model prompt formulas to create stunning photorealistic portraits, studio lighting setups, and cinematic character renders.",
    category: "AI Art",
    date: "2026-10-01",
    readingMinutes: 5,
    featured: true,
    author: "CodeAndBuild Team",
    coverImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    tags: ["AI Art", "Flux", "Prompts", "Portraits"],
    content: [
      {
        type: "heading",
        level: 2,
        id: "why-flux",
        text: "Why Flux.1 is the #1 AI Image Generator",
      },
      {
        type: "paragraph",
        text: "Artificial Intelligence image generation has reached an unprecedented level of realism. Among the top open-source and commercial models available today, **Flux.1 (Dev & Schnell)** stands out for its exceptional accuracy in human anatomy, skin textures, complex studio lighting, and photorealistic camera angles.",
      },
      {
        type: "heading",
        level: 2,
        id: "master-formula",
        text: "The Master Formula for Photorealistic Portraits",
      },
      {
        type: "paragraph",
        text: "To get high-definition studio results without strange artifacts, structure your text prompts using this proven universal formula:",
      },
      {
        type: "note",
        title: "Formula",
        text: "[Subject Description] + [Lighting Setup] + [Camera Lens & Specs] + [Atmosphere & Mood] + [Color Grading / Quality]",
      },
      {
        type: "heading",
        level: 3,
        id: "example-blueprint",
        text: "Example Blueprint",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "**Subject:** Hyper-realistic portrait of a confident young tech entrepreneur.",
          "**Lighting:** Softbox key light, subtle rim light highlights, volumetric shadow depth.",
          "**Camera Specs:** Shot on Hasselblad H6D-100c, 85mm portrait lens, f/1.4 aperture, shallow depth of field.",
          "**Details:** Natural skin pore textures, lifelike eyes reflection, subtle stray hairs, 8k Resolution.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "prompt-examples",
        text: "Top 3 Prompt Examples to Try Today",
      },
      {
        type: "heading",
        level: 3,
        id: "cinematic-studio-portrait",
        text: "1. Cinematic Studio Portrait",
      },
      {
        type: "code",
        language: "text",
        filename: "prompt.txt",
        code: "Hyper-detailed 8k studio portrait of a woman with sharp elegant features, dramatic Rembrandt lighting, soft warm highlights, shot on 85mm lens, f/1.8, cinematic color grade, photorealistic, raw camera style.",
      },
    ],
  },
  {
    slug: "mastering-hyper-realistic-ai-portraits",
    title: "Mastering Hyper-Realistic AI Portraits: Advanced Prompt Formulas & Lighting Guides",
    description:
      "Discover professional lighting setups, camera lens specs, and advanced prompt engineering techniques to create ultra-detailed AI portraits.",
    excerpt:
      "Discover professional lighting setups, camera lens specs, and advanced prompt engineering techniques to create ultra-detailed AI portraits.",
    category: "AI Art",
    date: "2026-09-27",
    readingMinutes: 4,
    featured: true,
    author: "CodeAndBuild Team",
    coverImage: "/images/mastering-hyper-realistic-ai-portraits.jpg",
    tags: ["AI Art", "Prompts", "Lighting", "Portraits"],
    content: [
      {
        type: "heading",
        level: 2,
        id: "photorealistic-science",
        text: "The Science Behind Photorealistic AI Art",
      },
      {
        type: "paragraph",
        text: "Creating cinematic digital portraits requires controlling key visual parameters: studio lighting, lens aperture, focal length, and skin texture details.",
      },
      {
        type: "heading",
        level: 3,
        id: "prompt-blueprint",
        text: "Advanced Prompt Blueprint",
      },
      {
        type: "paragraph",
        text: "When generating high-definition studio portraits, structure your prompts using this exact formula:",
      },
      {
        type: "note",
        title: "Master Formula",
        text: "Hyper-detailed 8k studio portrait of [Subject], soft box lighting, rim light contrast, shot on Hasselblad 85mm lens, f/1.8 aperture, natural skin texture, cinematic color grading, hyper-realistic, photorealistic.",
      },
      {
        type: "heading",
        level: 3,
        id: "generation-engines",
        text: "Top 3 Generation Engines",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "**Flux.1 (Dev/Schnell):** Exceptional facial anatomy and texture accuracy.",
          "**Leonardo AI:** High flexibility for lighting and prompt weights.",
          "**Midjourney v6:** Unmatched cinematic depth and artistic flair.",
        ],
      },
    ],
  },
  {
    slug: "essential-ai-coding-tools-guide",
    title: "Top Free AI Tools and Modern Editors to Accelerate Software Development",
    description:
      "Discover the best free AI code editors, backend services, and deployment platforms to build modern web and mobile apps faster.",
    excerpt:
      "Discover the best free AI code editors, backend services, and deployment platforms to build modern web and mobile apps faster.",
    category: "Development",
    date: "2026-09-27",
    readingMinutes: 3,
    featured: true,
    author: "CodeAndBuild Team",
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    tags: ["AI", "Editors", "Next.js", "Deployment"],
    content: [
      {
        type: "heading",
        level: 2,
        id: "developer-stack",
        text: "Essential Modern Developer Stack",
      },
      {
        type: "paragraph",
        text: "Building full-stack web and mobile applications has never been easier. Here are the top free tools used by professional developers worldwide:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "**Cursor AI Editor:** AI-powered IDE that automates code generation and multi-file updates.",
          "**Supabase & Firebase:** Serverless backend databases providing instant authentication and APIs.",
          "**Vercel:** Lightning-fast global deployment platform optimized for Next.js applications.",
        ],
      },
    ],
  },
  {
    slug: "top-trending-photorealistic-ai-portraits",
    title: "The Ultimate Guide to Photorealistic AI Portraits: Master Prompt Formulas Revealed",
    description:
      "Explore high-definition photorealistic portraits generated with cutting-edge AI tools and discover the exact prompt techniques used by top digital creators.",
    excerpt:
      "Explore high-definition photorealistic portraits generated with cutting-edge AI tools and discover the exact prompt techniques used by top digital creators.",
    category: "AI Art",
    date: "2026-09-27",
    readingMinutes: 4,
    featured: true,
    author: "CodeAndBuild Team",
    coverImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop",
    tags: ["AI Art", "Prompts", "Flux", "Portraits"],
    content: [
      {
        type: "heading",
        level: 2,
        id: "rise",
        text: "The Rise of Photorealistic Digital Art",
      },
      {
        type: "paragraph",
        text: "Hyper-realistic portraiture generated by artificial intelligence is currently driving massive visual engagement across global digital platforms. Modern AI tools can now capture ultra-detailed textures, realistic eyes, natural lighting, and cinematic depths.",
      },
      {
        type: "heading",
        level: 3,
        id: "prompt-setup",
        text: "Master Prompt Setup for Photorealism",
      },
      {
        type: "paragraph",
        text: "To create studio-grade realistic human portraits, creators combine detailed descriptions of studio light, specific camera lenses, and natural skin textures:",
      },
      {
        type: "note",
        title: "Example Prompt",
        text: "Ultra-realistic 8k cinematic portrait of a beautiful young woman, delicate facial features, glossy natural lighting, shot on 85mm portrait lens, smooth background blur, hyper-detailed skin texture, elegant studio style.",
      },
      {
        type: "heading",
        level: 3,
        id: "generators",
        text: "Best Free Image Generators",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "**Flux.1 (Dev/Schnell)** – Offers cinema-grade skin detail and lighting fidelity.",
          "**Leonardo AI** – Perfect for styled portrait renders with flexible lens controls.",
          "**SeaArt AI** – Great mobile-friendly creation tool with high visual clarity.",
        ],
      },
    ],
  },
  {
    slug: "top-trending-photorealistic-ai-portraits-2026",
    title: "Top Trending Photorealistic AI Portraits in 2026: Master Prompt Formulas Revealed",
    description:
      "Explore high-definition photorealistic portraits generated with cutting-edge AI tools and discover the prompt techniques used by digital creators.",
    excerpt:
      "Explore high-definition photorealistic portraits generated with cutting-edge AI tools and discover the prompt techniques used by digital creators.",
    category: "AI Art",
    date: "2026-09-25",
    readingMinutes: 4,
    featured: true,
    author: "CodeAndBuild Team",
    coverImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
    tags: ["AI Art", "Prompts", "Flux", "Portraits"],
    content: [
      {
        type: "heading",
        level: 2,
        id: "rise",
        text: "The rise of photorealistic digital art in 2026",
      },
      {
        type: "paragraph",
        text: "Hyper-realistic portraiture generated by artificial intelligence is currently driving huge visual engagement across global digital platforms. Modern AI tools can now capture ultra-detailed textures, realistic eyes, natural lighting, and cinematic depth.",
      },
      {
        type: "heading",
        level: 3,
        id: "prompt-setup",
        text: "Master prompt setup for photorealism",
      },
      {
        type: "paragraph",
        text: "To create studio-grade realistic human portraits, creators combine detailed descriptions of studio light, specific camera lenses, and natural skin textures.",
      },
      {
        type: "note",
        title: "Example prompt",
        text: "Ultra-realistic 8k cinematic portrait of a beautiful young woman, delicate facial features, glossy natural lighting, shot on 85mm portrait lens, smooth background blur, hyper-detailed skin texture, elegant studio style.",
      },
      {
        type: "heading",
        level: 3,
        id: "generators",
        text: "Best free image generators",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Flux.1 (Dev/Schnell) – Offers cinema-grade skin detail and lighting fidelity.",
          "Leonardo AI – Perfect for styled portrait renders with flexible lens controls.",
          "SeaArt AI – Great mobile-friendly creation tool with high visual clarity.",
        ],
      },
      {
        type: "paragraph",
        text: "Try using these master prompts on your favorite generator to build stunning visual portfolios. Label the result as generated, and do not present a synthetic portrait as a photograph of a real person.",
      },
    ],
  },
  {
    slug: "how-to-build-modern-web-and-mobile-apps-2026",
    title: "How to Build Modern Web & Mobile Apps in 2026: Complete Guide & Free Tools Download",
    description:
      "Discover the best web and mobile app types you can build today, along with free developer software download links and step-by-step setup instructions.",
    excerpt:
      "Discover the best web and mobile app types you can build today, along with free developer software download links and step-by-step setup instructions.",
    category: "Development",
    date: "2026-09-25",
    readingMinutes: 5,
    featured: true,
    author: "CodeAndBuild Team",
    coverImage:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop",
    tags: ["Web Development", "Mobile Apps", "Next.js", "Free Tools"],
    content: [
      {
        type: "heading",
        level: 2,
        id: "app-types",
        text: "What types of web and mobile apps can you build?",
      },
      {
        type: "paragraph",
        text: "With today's modern developer tools and AI assistants, building software applications has become faster and more accessible than ever. Here are the main types of applications you can build:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Dynamic web applications: e-commerce stores, SaaS dashboards, and modern blogs using Next.js and React.",
          "Cross-platform mobile apps: high-performance Android and iOS apps using React Native or Flutter.",
          "Database-driven portals: web portals with authentication and real-time backend data powered by Supabase or Firebase.",
          "Custom portfolio and business sites: ultra-fast static and dynamic web pages optimized for modern SEO.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "free-tools",
        text: "Free developer tools and essential download links",
      },
      {
        type: "paragraph",
        text: "To start building your own applications, download these industry-standard free tools:",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "[Cursor AI Editor](https://www.cursor.com/) – The most powerful AI-native code editor designed for rapid development.",
          "[Visual Studio Code](https://code.visualstudio.com/) – The world's most popular free code editor.",
          "[Node.js Runtime](https://nodejs.org/) – Essential environment required to build and run modern Next.js and React apps.",
          "[Git Version Control](https://git-scm.com/) – The primary tool for managing code version history and syncing with GitHub.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "setup",
        text: "Step-by-step guide: how to use these tools",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Install your environment: download and install Node.js and Cursor AI (or VS Code) on your PC.",
          "Open your project: open your project folder inside Cursor AI and launch the integrated terminal (Ctrl + `).",
          "Run live preview: type `npm run dev` in your terminal to preview your app locally at `http://localhost:3000`.",
          "Deploy to the web: run `npx vercel --prod` to instantly deploy your website live to global edge networks.",
        ],
      },
    ],
  },
  {
    slug: "free-flux-ai-prompts-photorealistic-portraits-2026",
    title: "10 Viral Flux AI Prompts for Hyper-Realistic Portraits in 2026 (Free Studio Quality)",
    description:
      "Ten free Flux prompt formulas for studio-quality portraits: lighting, lens, skin texture, and color, without pretending the result is a real photograph.",
    excerpt:
      "Ten Flux prompt formulas for studio light, lens choice, and natural skin texture.",
    category: "AI Trends",
    date: "2026-09-25",
    readingMinutes: 6,
    featured: true,
    author: "CodeAndBuild Team",
    coverImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    tags: ["Flux", "AI Art", "Prompts", "Portraits", "AI Trends"],
    content: [
      {
        type: "paragraph",
        text: "Flux is the generator people open when a portrait has to survive a close crop. The prompts below are studio setups: light, lens, and surface detail. Paste one, then change the wardrobe or the background. Leave a real person's name out of the prompt unless you have the right to depict them.",
      },
      {
        type: "heading",
        level: 2,
        id: "prompts",
        text: "Ten studio prompt formulas",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Soft window portrait, natural skin texture, shot on 85mm lens, f/1.8, gentle rim light, neutral gray backdrop, realistic eyes, fine hair detail, editorial fashion, photorealistic.",
          "Daylight headshot, open shade, 50mm lens, f/2, visible pores, no beauty filter, linen shirt, quiet outdoor background, natural color, sharp catchlights.",
          "Studio beauty frame, large softbox, 85mm, f/2.8, even skin, subtle film grain, black backdrop, silver earring, high detail hair, photorealistic.",
          "Golden hour close-up, warm side light, 85mm, f/1.4, wind in the hair, shallow depth of field, realistic eyes, no plastic skin, cinematic color.",
          "Overcast street portrait, 35mm lens, f/2, cool gray light, wool coat, wet pavement bokeh, natural texture, documentary style, photorealistic.",
          "Rembrandt lighting, single key light, dark background, 85mm, f/2, deep shadow on one cheek, realistic skin, oil-painting color without looking painted.",
          "High-key portrait, white seamless paper, soft overhead light, 70mm, f/4, clean color, fine hair strands, minimal makeup, studio catalog look.",
          "Night window portrait, practical lamp, cool blue spill from outside, 50mm, f/1.8, realistic eyes, quiet expression, film still, photorealistic.",
          "Profile portrait, hard edge light, 100mm macro feel, f/2.8, detailed eyelashes and hair, charcoal background, restrained color grade.",
          "Environmental portrait in a small studio, 35mm, f/2.8, subject seated, practical lights in the background, natural posture, real fabric texture, no extra fingers, photorealistic.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "how-to-use",
        text: "How to use them",
      },
      {
        type: "paragraph",
        text: "Start with one sentence from the list. Add only the detail you care about next: hair, clothing, or background. If the skin looks waxy, repeat natural skin texture and visible pores. If the face looks like a specific public figure you did not name, regenerate. A likeness you did not ask for is still not a photo of that person.",
      },
      {
        type: "note",
        title: "Label the picture",
        text: "Say the portrait is generated wherever you post it. Do not caption it as a studio sitting, a paparazzi frame, or an endorsement.",
      },
    ],
  },
  {
    slug: "ai-actress-photorealistic-prompts-2026",
    title: "How to Create Hyper-Realistic AI Actress Portraits in 2026 (Free Prompts)",
    description:
      "Learn the secret prompt formulas used by top digital creators to generate photorealistic celebrity-style AI portraits for free.",
    excerpt:
      "Learn the secret prompt formulas used by top digital creators to generate photorealistic celebrity-style AI portraits for free.",
    category: "AI Trends",
    date: "2026-09-24",
    readingMinutes: 4,
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    tags: ["AI Art", "Prompts", "Flux", "Midjourney", "Stable Diffusion"],
    content: [
      {
        type: "heading",
        level: 2,
        id: "rise",
        text: "The rise of photorealistic AI portraiture",
      },
      {
        type: "paragraph",
        text: "Creating realistic celebrity-style portraits with AI has become one of the biggest visual trends on Instagram, TikTok, and Facebook. Flux, Midjourney, and Stable Diffusion can now produce studio-style facial detail from a short prompt.",
      },
      {
        type: "heading",
        level: 3,
        id: "prompt-structure",
        text: "Prompt structure",
      },
      {
        type: "paragraph",
        text: "Creators chasing 8K-style lighting and skin texture tend to stack the same kinds of words: camera, lens, light, and surface detail. This is the template those portraits start from.",
      },
      {
        type: "note",
        title: "Prompt template",
        text: "Cinematic 8k portrait of a famous Hollywood actress, natural skin texture, soft studio lighting, shot on 85mm lens, f/1.8 aperture, realistic eyes, hyper-detailed hair, elegant fashion aesthetic, extremely detailed.",
      },
      {
        type: "paragraph",
        text: "A likeness of a real person is not yours to invent and publish as if they sat for it. Label the result as generated, and do not present it as a photo, an endorsement, or a face swapped onto someone else's picture.",
      },
      {
        type: "heading",
        level: 3,
        id: "free-tools",
        text: "Free tools people use",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Flux.1 AI. Strong realism for human faces and skin detail.",
          "Leonardo AI. Free daily tokens for high-resolution renders.",
          "SeaArt AI. Prompt help and realistic portrait experiments. Do not use it to swap a real person's face onto another photo.",
        ],
      },
      {
        type: "paragraph",
        text: "Lighting words do most of the work. Soft studio light, a shallow aperture, and a note about natural skin texture will change the frame more than adding another adjective for beauty.",
      },
    ],
  },
  {
    slug: "ai-generated-actress-portraits-beauty-trends-2026",
    title: "How AI Image Generators Are Redefining Modern Actress Portraits and Digital Beauty in 2026",
    description:
      "Explore how viral AI image tools like Midjourney v6, Flux, and Stable Diffusion are creating hyper-realistic digital portraits of trending global actresses and celebrities.",
    excerpt:
      "Why hyper-realistic AI portraits spread so fast, which generators sit behind them, and the rules artists still have to follow.",
    category: "AI Trends",
    date: "2026-09-24",
    readingMinutes: 8,
    featured: true,
    author: "CodeAndBuild Team",
    tags: ["AI Art", "Actress Trends", "Midjourney", "Flux AI", "Digital Beauty"],
    content: [
      {
        type: "paragraph",
        text: "In 2026, a polished portrait can travel farther than the film it is supposed to promote. Hyper-realistic images of actresses and other public figures now move through feeds as stills, loops, and campaign mockups, and a large share of the most shared ones were never shot on a set. They were generated.",
      },
      {
        type: "paragraph",
        text: "The shift is visual and cultural at once. Lighting, skin, wardrobe, and expression can be iterated in minutes. That speed is why the pictures feel everywhere. It is also why a viewer can no longer treat a flawless close-up as proof that a person stood in front of a camera.",
      },
      {
        type: "heading",
        level: 2,
        id: "tools",
        text: "The tools behind viral celebrity visuals",
      },
      {
        type: "paragraph",
        text: "Three families of generators show up again and again when a portrait starts circulating. They are not interchangeable. Each one biases the picture toward a different kind of finish.",
      },
      {
        type: "heading",
        level: 3,
        id: "midjourney",
        text: "Midjourney v6",
      },
      {
        type: "paragraph",
        text: "Midjourney v6 is the tool people reach for when the goal is a cinematic still. It is strong at cohesive lighting, fabric, and a frame that already looks graded. Editorial teams use that look for mood boards and concept posters. The risk is the same strength: a generated frame can be mistaken for a photograph of a real person if nobody labels it.",
      },
      {
        type: "heading",
        level: 3,
        id: "flux",
        text: "Flux.1",
      },
      {
        type: "paragraph",
        text: "Flux.1 is associated with tighter prompt following and sharper detail in faces, type, and hands, which is why it shows up in portraits that are meant to survive a close crop on a phone. Artists use it when they need the same character to stay consistent across several frames. Consistency is a creative feature. Applied to a living person's face without permission, it is also how a fake photoshoot starts to look official.",
      },
      {
        type: "heading",
        level: 3,
        id: "sdxl",
        text: "Stable Diffusion XL",
      },
      {
        type: "paragraph",
        text: "Stable Diffusion XL remains the open model people fine-tune. Custom checkpoints and LoRA-style adapters are how a look becomes a trend: one beauty aesthetic, trained once, then reused by thousands of accounts. Open weights make experimentation cheap. They also make it easy to ship a style that imitates a specific celebrity and pretend the result is original art.",
      },
      {
        type: "heading",
        level: 2,
        id: "viral",
        text: "Why digital beauty trends spread so fast",
      },
      {
        type: "paragraph",
        text: "Instagram, TikTok, and X reward the same thing: a face that stops a thumb in under a second. AI portraits are built for that pause. The skin is even, the light is flattering, and the wardrobe can match whatever aesthetic is already climbing the For You page. A creator can post a new variation every day without a studio, a stylist, or the person depicted.",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Instagram favors a single striking frame that works as a grid tile and a story.",
          "TikTok turns the portrait into a before-and-after or a slideshow set to a trending sound.",
          "X spreads the still as a quote-post, often with no caption saying the picture is generated.",
        ],
      },
      {
        type: "paragraph",
        text: "The beauty standard inside those images is narrower than the people scrolling past them. Pores disappear. Age disappears. A public figure's actual face is replaced by a smoothed average of what the model thinks a star looks like. The picture performs well because it is familiar, not because it is true.",
      },
      {
        type: "heading",
        level: 2,
        id: "ethics",
        text: "Ethical standards and copyright for digital artists",
      },
      {
        type: "paragraph",
        text: "A generated portrait of a real actress is not a neutral wallpaper. Publicity and likeness rights in many places restrict using someone's face to sell a product, imply an endorsement, or present a fiction as a real photograph. Copyright is a second layer: the model, the training material, and the output can each sit under different rules, and a platform's terms can be stricter than the law.",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Label the image as generated wherever it is published, including the first line of a caption.",
          "Do not present a synthetic portrait as a paparazzi photo, a film still, or a statement from the person.",
          "Do not use a living person's likeness in ads, merchandise, or political messages without a license.",
          "Skip sexualized or humiliating depictions of real people. Consent is not implied by fame.",
          "Read the generator's terms before you sell the picture. Some licenses forbid imitating a real individual.",
        ],
      },
      {
        type: "note",
        title: "A practical test",
        text: "If a viewer could believe the person sat for the photo, and you have no rights to their likeness, do not publish it as if they did.",
      },
      {
        type: "heading",
        level: 2,
        id: "conclusion",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Midjourney v6, Flux.1, and Stable Diffusion XL made actress portraits cheap to invent and easy to spread. The pictures will keep getting cleaner. The standard that matters is the one around them: say the image is synthetic, leave real people in control of their own faces, and treat a viral beauty trend as a design choice, not as evidence.",
      },
    ],
  },
  {
    slug: "best-ai-tools-for-web-developers-2026",
    title: "10 Best AI Tools for Web Developers in 2026 (Including Grok AI & Cursor)",
    description:
      "Discover the top AI tools for web developers in 2026. Learn how Cursor AI, Grok AI, GitHub Copilot, v0.dev, and Claude 3.5 Sonnet can boost your coding speed by 5x.",
    excerpt:
      "How Cursor, Grok, Copilot, and the current UI generators fit into one faster full-stack workflow.",
    category: "AI & Development",
    date: "2026-09-24",
    readingMinutes: 10,
    featured: true,
    author: "CodeAndBuild Team",
    coverImage: "/images/ai-tools-2026.jpg",
    tags: ["AI Tools", "Grok AI", "Cursor AI", "Web Development", "Next.js", "Productivity"],
    content: [
      {
        type: "paragraph",
        text: "AI-assisted development in 2026 is no longer a single autocomplete box in the editor. Teams now split the work across a repository-aware editor, a model that can reason about fresh API docs, and a generator that drafts the first UI. The developers who ship faster are the ones who assign each tool a job and review the diff before it lands.",
      },
      {
        type: "paragraph",
        text: "This guide maps that lineup: Cursor and Copilot in the editor, Grok for fast technical reasoning, Supermaven and Replit for speed and prototypes, v0, Bolt, and Lovable for interface drafts, and Claude, GPT-4o, and Gemini when the problem is logic or sheer context size.",
      },
      {
        type: "heading",
        level: 2,
        id: "editors",
        text: "Top AI code editors and assistants",
      },
      {
        type: "heading",
        level: 3,
        id: "cursor",
        text: "Cursor AI",
      },
      {
        type: "paragraph",
        text: "Cursor keeps deep context on the repository and edits in place. Point it at a shared type, a route handler, and the component that calls it, and it can propose the change as a diff you accept file by file. Inline edit is the everyday motion: select the function, describe the new behavior, and keep the surrounding code untouched.",
      },
      {
        type: "heading",
        level: 3,
        id: "copilot",
        text: "GitHub Copilot",
      },
      {
        type: "paragraph",
        text: "GitHub Copilot remains the strongest multi-language autocomplete, and it sits inside the editors most teams already use. It is the right tool for the next line of TypeScript, a SQL fragment, or a test that follows the pattern of the file you are in. The GitHub ecosystem around it, from pull request suggestions to the CLI, makes it easy to keep the assistant next to the code review instead of in a separate chat.",
      },
      {
        type: "heading",
        level: 3,
        id: "grok",
        text: "Grok AI",
      },
      {
        type: "paragraph",
        text: "Grok AI is the assistant to open when the question depends on current technical knowledge. A library released last week, a changed response shape in a public API, or a deprecation note that your local index has not absorbed yet are all cases where a model with fresh web context answers faster than one trained on a frozen snapshot.",
      },
      {
        type: "paragraph",
        text: "Use Grok for code reasoning and API analysis before you edit. Paste the endpoint contract, the error payload, and the function that consumes it, and ask what changed and which call sites break. Then take that short plan into Cursor and apply it against the real files. Grok decides the approach. Cursor writes it into the repository.",
      },
      {
        type: "heading",
        level: 3,
        id: "supermaven-replit",
        text: "Supermaven and Replit Agent",
      },
      {
        type: "paragraph",
        text: "Supermaven is built for low-latency completion over a long file, which keeps suggestions ahead of your typing when a module is already large. Replit Agent builds the other direction: describe a small app and let it scaffold and run in the browser. Treat that output as a prototype. Move production secrets and the final architecture back into a repository you control.",
      },
      {
        type: "heading",
        level: 2,
        id: "ui-generators",
        text: "Top AI UI and frontend generators",
      },
      {
        type: "heading",
        level: 3,
        id: "v0",
        text: "v0.dev by Vercel",
      },
      {
        type: "paragraph",
        text: "v0.dev turns a prompt into React UI you can paste into a Next.js app. It is strongest on styling and layout: a dashboard shell, a form, an empty state. After you generate, rename props to match your domain and swap placeholder colors for the tokens your design system already uses.",
      },
      {
        type: "heading",
        level: 3,
        id: "bolt-lovable",
        text: "Bolt.new and Lovable",
      },
      {
        type: "paragraph",
        text: "Bolt.new and Lovable produce a working prototype in the browser, pages and client behavior included. They are the fastest way to show a product idea the same day. Before that prototype becomes the codebase you maintain, export it, add tests around the flows that take user input, and remove any key that was written into client code.",
      },
      {
        type: "heading",
        level: 2,
        id: "models",
        text: "Top AI models for developers",
      },
      {
        type: "heading",
        level: 3,
        id: "claude-gpt",
        text: "Claude 3.5 Sonnet and GPT-4o",
      },
      {
        type: "paragraph",
        text: "Claude 3.5 Sonnet and GPT-4o are the models to use for advanced refactoring and logic. A race in a React effect, a generic that infers the wrong type, or a data-fetching migration all need a model that can hold the constraint and explain the patch. Ask for the reasoning first. Apply the edit only after the plan matches the behavior you intend to keep.",
      },
      {
        type: "heading",
        level: 3,
        id: "gemini",
        text: "Google Gemini 1.5 Pro",
      },
      {
        type: "paragraph",
        text: "Gemini 1.5 Pro is the choice when the input is the problem. Its published context window reaches about 2 million tokens, so a long specification, a generated API reference, or a large legacy module can go in one request. Name the files that are authoritative, and name the behavior that must stay the same, or the extra context becomes extra noise.",
      },
      {
        type: "heading",
        level: 2,
        id: "grok-and-cursor",
        text: "Best practices: Grok AI with Cursor AI",
      },
      {
        type: "paragraph",
        text: "The fastest workflow in this lineup pairs Grok with Cursor. Grok answers what the outside world currently says. Cursor applies that answer inside your repository. Keep those roles separate and the loop stays short.",
      },
      {
        type: "steps",
        items: [
          {
            title: "Ask Grok what changed",
            text: "Paste the API error, the docs excerpt, or the library release note. Ask for the breaking change and the smallest code change that absorbs it.",
          },
          {
            title: "Turn the answer into a Cursor edit",
            text: "In Cursor, attach only the files that call the API. Paste Grok's short plan and ask for an inline edit that preserves existing tests.",
          },
          {
            title: "Review the diff, then run the suite",
            text: "Accept the hunks you understand. Reject the ones that rename unrelated symbols. Run the tests that cover the route before you commit.",
          },
        ],
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Keep API keys in server environment variables. Do not paste a production key into Grok, Cursor, or a hosted agent.",
          "Give Grok the contract and the error. Give Cursor the files. Dumping the whole repo into a chat slows the answer and widens the mistake.",
          "Treat generated UI from v0, Bolt, or Lovable as a draft. Check links, form actions, and any script that arrived with the component.",
        ],
      },
      {
        type: "note",
        title: "A safe default",
        text: "A prototype key and a production key should never be the same value, even when an assistant offers to deploy the app for you.",
      },
      {
        type: "heading",
        level: 2,
        id: "conclusion",
        text: "Conclusion and summary",
      },
      {
        type: "paragraph",
        text: "Cursor edits the repository. Copilot completes the next line. Grok reasons about current APIs and technical changes. Supermaven and Replit cover fast completion and prototypes. v0, Bolt, and Lovable draft the interface. Claude 3.5 Sonnet, GPT-4o, and Gemini 1.5 Pro handle hard refactors and very large context.",
      },
      {
        type: "paragraph",
        text: "Used as one loop, with Grok deciding the approach and Cursor applying it, these tools can multiply how much working software you finish in a week. The 5x shows up after you read the diff, not before.",
      },
    ],
  },
  {
    slug: "how-to-integrate-openai-gemini-api-nextjs",
    title: "How to Integrate OpenAI & Gemini API in Next.js (Step-by-Step Guide)",
    description:
      "Learn how to build full-stack AI applications by integrating OpenAI and Google Gemini APIs into Next.js App Router using Server Actions and Vercel AI SDK.",
    excerpt:
      "Stream chat from OpenAI or Gemini through a Next.js route handler, then render it with useChat on the client.",
    category: "Next.js",
    date: "2026-09-24",
    readingMinutes: 9,
    featured: true,
    tags: ["Next.js", "OpenAI", "Gemini"],
    content: [
      {
        type: "paragraph",
        text: "A Next.js App Router app can call OpenAI and Google Gemini without exposing either API key to the browser. The route handler holds the key, streams tokens back, and a small client component renders the conversation with `useChat` from the Vercel AI SDK.",
      },
      {
        type: "heading",
        level: 2,
        id: "prerequisites",
        text: "Prerequisites and package install",
      },
      {
        type: "paragraph",
        text: "Start from an App Router project on Node.js 20 or newer. You need an OpenAI API key and a Gemini key from Google AI Studio. The AI SDK speaks to both providers through the same streaming interface, so the UI does not care which model answered.",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "A Next.js App Router app.",
          "Accounts that can create `OPENAI_API_KEY` and `GOOGLE_GENERATIVE_AI_API_KEY`.",
          "The `ai` package plus the OpenAI and Google provider packages.",
        ],
      },
      {
        type: "code",
        language: "text",
        filename: "terminal",
        code: `npm install ai @ai-sdk/openai @ai-sdk/google`,
      },
      {
        type: "note",
        title: "Server Actions versus a route handler",
        text: "A Server Action is a good fit for a single request that returns one completed answer. A chat box that prints tokens as they arrive needs a Route Handler, because `useChat` speaks to an HTTP endpoint that streams.",
      },
      {
        type: "heading",
        level: 2,
        id: "environment",
        text: "Environment variables",
      },
      {
        type: "paragraph",
        text: "Put both keys in `.env.local`. The OpenAI provider reads `OPENAI_API_KEY`. The Google provider reads `GOOGLE_GENERATIVE_AI_API_KEY`. Leave the `NEXT_PUBLIC_` prefix off. A public variable is shipped to the browser.",
      },
      {
        type: "code",
        language: "text",
        filename: ".env.local",
        code: `OPENAI_API_KEY=your_openai_key
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_key`,
      },
      {
        type: "paragraph",
        text: "Restart `next dev` after saving the file. On Vercel, add the same names in the project environment settings for Production and Preview. Do not commit `.env.local`.",
      },
      {
        type: "heading",
        level: 2,
        id: "route-handler",
        text: "Stream from a route handler",
      },
      {
        type: "paragraph",
        text: "Create `app/api/chat/route.ts`. The client sends the message history and which provider to use. The handler picks a model, streams the completion, and returns the data stream `useChat` expects.",
      },
      {
        type: "code",
        language: "ts",
        filename: "app/api/chat/route.ts",
        code: `import { google } from "@ai-sdk/google";
import { openai } from "@ai-sdk/openai";
import { streamText, type CoreMessage } from "ai";

export const maxDuration = 30;

type ChatRequest = {
  messages: CoreMessage[];
  provider?: "openai" | "gemini";
};

export async function POST(request: Request) {
  const body = (await request.json()) as ChatRequest;
  const messages = Array.isArray(body.messages) ? body.messages : [];
  const model =
    body.provider === "gemini"
      ? google("gemini-2.5-flash")
      : openai("gpt-4o-mini");

  const result = streamText({
    model,
    messages,
  });

  return result.toDataStreamResponse();
}`,
      },
      {
        type: "paragraph",
        text: "Keep model names in this file, not in client code that you do not trust. Swapping `gpt-4o-mini` or `gemini-2.5-flash` for another model from the same provider does not change the rest of the route.",
      },
      {
        type: "heading",
        level: 2,
        id: "chat-ui",
        text: "Render the chat with useChat",
      },
      {
        type: "paragraph",
        text: "`useChat` posts to `/api/chat` by default, stores the messages, and appends streamed text to the latest assistant message. Pass `body.provider` when the reader switches between OpenAI and Gemini.",
      },
      {
        type: "code",
        language: "tsx",
        filename: "components/ChatPanel.tsx",
        code: `"use client";

import { useChat } from "ai/react";
import { useState } from "react";

export function ChatPanel() {
  const [provider, setProvider] = useState<"openai" | "gemini">("openai");
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    body: { provider },
  });

  return (
    <section>
      <label>
        Provider
        <select
          value={provider}
          onChange={(event) => setProvider(event.target.value as "openai" | "gemini")}
        >
          <option value="openai">OpenAI</option>
          <option value="gemini">Gemini</option>
        </select>
      </label>
      <ol>
        {messages.map((message) => (
          <li key={message.id}>
            <strong>{message.role}</strong>
            <p>{message.content}</p>
          </li>
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInputChange} placeholder="Ask a question" />
        <button type="submit" disabled={isLoading}>
          Send
        </button>
      </form>
    </section>
  );
}`,
      },
      {
        type: "note",
        title: "Import path",
        text: "On AI SDK 4, `useChat` is exported from `ai/react` and the route returns `toDataStreamResponse()`. A newer major version may move the hook to `@ai-sdk/react` and rename the stream response. Match the hook and the route to the same major version in your lockfile.",
      },
      {
        type: "heading",
        level: 2,
        id: "rate-limits",
        text: "Rate limits and server-side requests",
      },
      {
        type: "paragraph",
        text: "The route is public as soon as you deploy it. Anyone who can reach `/api/chat` can spend your provider quota. Check the body, cap how often a caller can post, and keep the provider request on the server.",
      },
      {
        type: "steps",
        items: [
          {
            title: "Reject a bad body",
            text: "Require `messages` to be an array, cap its length, and ignore roles or fields you did not ask for.",
          },
          {
            title: "Limit bursts",
            text: "Count calls per user or per IP inside a short window. A process-local map works on one server. A shared store is required when several serverless instances run at once.",
          },
          {
            title: "Bound the work",
            text: "Set `maxDuration` on the route and `maxTokens` on `streamText` so one prompt cannot run until the platform kills it.",
          },
        ],
      },
      {
        type: "code",
        language: "ts",
        filename: "lib/rate-limit.ts",
        code: `const hits = new Map<string, { count: number; reset: number }>();

export function allowRequest(key: string, limit = 10, windowMs = 60_000) {
  const now = Date.now();
  const current = hits.get(key);

  if (!current || current.reset < now) {
    hits.set(key, { count: 1, reset: now + windowMs });
    return true;
  }

  if (current.count >= limit) return false;
  current.count += 1;
  return true;
}`,
      },
      {
        type: "paragraph",
        text: "Call `allowRequest` at the top of `POST` and return a 429 response when it returns false. Prefer a signed-in user id over the raw `x-forwarded-for` header, which a client can spoof. Log failures and status codes. Do not log the API keys or the full prompt if the conversation may contain private text.",
      },
    ],
  },
  {
    slug: "top-5-ai-code-editors-2026",
    title: "Top 5 AI Code Editors in 2026: Cursor AI vs GitHub Copilot vs Claude",
    description:
      "A comprehensive review and comparison of the top 5 AI code editors in 2026 including Cursor AI, GitHub Copilot, and Claude 3.5 Sonnet.",
    excerpt:
      "How Cursor, GitHub Copilot, Claude, Windsurf, and Tabnine differ in 2026, and which editor fits the work in front of you.",
    category: "AI",
    date: "2026-09-23",
    readingMinutes: 8,
    featured: true,
    tags: ["AI", "Cursor", "GitHub Copilot", "Claude"],
    content: [
      {
        type: "paragraph",
        text: "Artificial Intelligence has completely transformed modern software development. In 2026, writing code from scratch without AI assistance is rapidly becoming a thing of the past. Whether you are building full-stack web applications, debugging complex codebases, or learning new programming languages, choosing the right AI code editor can significantly boost your coding speed and productivity.",
      },
      {
        type: "paragraph",
        text: "In this comprehensive guide, we will review and compare the top 5 AI code editors in 2026, analyzing their features, pricing, strengths, and ideal use cases.",
      },
      {
        type: "heading",
        level: 2,
        id: "quick-comparison",
        text: "Quick Comparison Overview",
      },
      {
        type: "table",
        headers: ["AI Code Editor", "Primary Focus", "Best Feature", "Pricing Model"],
        rows: [
          ["Cursor AI", "Full IDE Integration", "Composer & Codebase Indexing", "Free / $20/mo Pro"],
          ["GitHub Copilot", "Inline Autocomplete", "Seamless VS Code Integration", "$10/mo Individual"],
          ["Claude (Anthropic)", "Complex Logic & Refactoring", "Long Context & Nuanced Code", "Free / $20/mo Pro"],
          ["Windsurf (Codeium)", "Agentic Coding Flows", "Cascade AI Agent", "Free / Paid Tiers"],
          ["Tabnine", "Enterprise Security", "On-Premise & Local AI", "Free / Enterprise"],
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "cursor-ai",
        text: "1. Cursor AI: The Ultimate Agentic IDE",
      },
      {
        type: "paragraph",
        text: "Cursor AI has established itself as the leading AI-first code editor in 2026. Built as a fork of Visual Studio Code, Cursor seamlessly inherits all VS Code extensions while embedding deep AI capabilities directly into the core editor experience.",
      },
      {
        type: "heading",
        level: 3,
        id: "cursor-features",
        text: "Key Features",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Full Codebase Indexing: Indexes your entire repository locally.",
          "Composer (Ctrl + I / Cmd + I): Multi-file editing that generates and refactors entire project structures.",
          "Smart Terminal Debugging: Directly fix terminal build errors with one click.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "github-copilot",
        text: "2. GitHub Copilot: The Industry Standard Autocomplete",
      },
      {
        type: "paragraph",
        text: "Backed by GitHub and OpenAI, GitHub Copilot remains one of the most widely adopted AI coding assistants worldwide.",
      },
      {
        type: "heading",
        level: 3,
        id: "copilot-features",
        text: "Key Features",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Real-time Autocomplete: Generates line-by-line or whole-function code completions.",
          "Copilot Chat: Integrated chat sidebar in VS Code, JetBrains IDEs, and Visual Studio.",
          "Pull Request Summaries: Automatically generates PR documentation directly inside GitHub repositories.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "claude",
        text: "3. Claude 3.5 Sonnet (Anthropic): Best for Complex Logic & Architecture",
      },
      {
        type: "paragraph",
        text: "While Claude is primarily a large language model rather than a standalone IDE, its superior code reasoning makes it an essential tool for modern developers.",
      },
      {
        type: "heading",
        level: 3,
        id: "claude-features",
        text: "Key Features",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Unrivaled Code Quality: Outperforms most models in writing clean, bug-free TypeScript, Python, and React code.",
          "Artifacts Feature: Allows live previewing of web UI components directly alongside the chat interface.",
          "Massive Context Window: Capable of processing massive documentation files.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "windsurf",
        text: "4. Windsurf (by Codeium): The Next-Gen Agentic Experience",
      },
      {
        type: "paragraph",
        text: "Windsurf by Codeium is a powerful AI editor designed around Cascade—an agentic framework that seamlessly combines human developer input with autonomous AI execution.",
      },
      {
        type: "heading",
        level: 2,
        id: "tabnine",
        text: "5. Tabnine: Privacy-First Enterprise AI",
      },
      {
        type: "paragraph",
        text: "For enterprise developers and privacy-conscious teams, Tabnine offers localized code completion models that never leak proprietary code to external servers.",
      },
    ],
  },
  {
    slug: "app-router-data-fetching",
    title: "Fetch data in the App Router without a waterfall",
    description:
      "Colocate server fetches with the UI that renders them, and start independent requests together so a Next.js page does not wait on itself.",
    excerpt:
      "Colocate the fetch with the UI that needs it, then run independent requests in parallel so a page does not wait on itself.",
    category: "Next.js",
    date: "2026-09-14",
    readingMinutes: 7,
    featured: true,
    tags: ["Next.js", "App Router", "Data fetching"],
    content: [
      {
        type: "paragraph",
        text: "A Server Component can await a fetch directly. That is convenient, and it is also how a page grows a waterfall: the layout waits, then the page waits, then a child waits on a value the page already had.",
      },
      {
        type: "heading",
        level: 2,
        id: "start-together",
        text: "Start independent work together",
      },
      {
        type: "paragraph",
        text: "If two requests do not depend on each other, start them before you await either one. `Promise.all` keeps the slower request from stacking on top of the faster one.",
      },
      {
        type: "code",
        language: "tsx",
        filename: "app/page.tsx",
        code: `export default async function Page() {
  const guidesPromise = getGuides();
  const notesPromise = getNotes();
  const [guides, notes] = await Promise.all([
    guidesPromise,
    notesPromise,
  ]);

  return (
    <>
      <GuideList guides={guides} />
      <NoteList notes={notes} />
    </>
  );
}`,
      },
      {
        type: "heading",
        level: 2,
        id: "colocate",
        text: "Colocate the fetch with the component that renders it",
      },
      {
        type: "paragraph",
        text: "Fetch in the component that renders the data so the dependency stays visible. Pass the result down only when a sibling needs the same value. Do not load the same record in a parent and again in a child.",
      },
      {
        type: "note",
        title: "Deduping is not a design",
        text: "Next.js dedupes identical `fetch` calls during a single server render. That safety net is not a reason to hide a second request. Write the data dependency where a reader can see it.",
      },
      {
        type: "heading",
        level: 2,
        id: "route-handlers",
        text: "Prefer a Server Component over a route handler",
      },
      {
        type: "paragraph",
        text: "A route handler is an HTTP endpoint. Use one when a browser, a webhook, or another service must call your app. A page that only renders data for itself does not need that extra hop.",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Use a Server Component for data that exists to render this page.",
          "Use a route handler for clients that are not this React tree.",
          "Use a Server Action when a form needs to change data and then refresh the page.",
        ],
      },
      {
        type: "heading",
        level: 3,
        id: "read-the-wait",
        text: "Read a slow page in this order",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "The layout, which blocks every nested page.",
          "The page itself, which often refetches what the layout already loaded.",
          "Any child that cannot render until the page has finished.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "ship-check",
        text: "A short check before you ship",
      },
      {
        type: "steps",
        items: [
          {
            title: "Name the requests",
            text: "If you cannot say what each promise returns, the page is doing too much.",
          },
          {
            title: "Mark the real dependency",
            text: "A request that needs an id from another request has to wait. Everything else can start immediately.",
          },
          {
            title: "Look at the sequence",
            text: "One slow request is a capacity problem. The same request stacked three times is a bug.",
          },
        ],
      },
    ],
  },
  {
    slug: "server-components-mental-model",
    title: "A mental model for React Server Components",
    description:
      "Server Components render on the server, Client Components cross a serializable boundary, and the file directive is what marks that line.",
    excerpt:
      "Treat the client directive as a boundary, not a decoration. Props that cross it have to be data, not functions or classes.",
    category: "React",
    date: "2026-09-08",
    readingMinutes: 8,
    featured: true,
    tags: ["React", "Server Components", "Next.js"],
    content: [
      {
        type: "paragraph",
        text: "In the App Router, a component is a Server Component unless its file starts with `\"use client\"`. The directive opts that file, and every module it imports, into the client bundle. It does not mean the component runs only in the browser. Client Components still pre-render on the server, and then they hydrate.",
      },
      {
        type: "heading",
        level: 2,
        id: "the-boundary",
        text: "The boundary is the file, not the function",
      },
      {
        type: "paragraph",
        text: "Put the directive in the leaf that needs state, effects, or a browser API. A button that tracks a copied flag does not force the whole page into the client bundle, as long as the page passes plain props into that button.",
      },
      {
        type: "code",
        language: "tsx",
        filename: "components/CopyButton.tsx",
        code: `"use client";

import { useState } from "react";

export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(value);
        setCopied(true);
      }}
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}`,
      },
      {
        type: "heading",
        level: 2,
        id: "serializable",
        text: "Props must survive serialization",
      },
      {
        type: "paragraph",
        text: "Values passed from a Server Component to a Client Component are serialized. Strings, numbers, plain objects, and arrays travel. Functions, class instances, and `Date` objects do not. Format the date on the server and pass a string.",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Keep data fetching in Server Components.",
          "Keep event handlers in Client Components.",
          "Pass ids and already formatted strings across the boundary.",
        ],
      },
      {
        type: "note",
        title: "Import direction",
        text: "A Client Component must not import a module that reads a database, touches a secret, or uses a server-only API. The client graph is public. Treat every import under `\"use client\"` as code you are shipping to the browser.",
      },
      {
        type: "heading",
        level: 2,
        id: "composition",
        text: "Compose children from the server",
      },
      {
        type: "paragraph",
        text: "When an interactive shell needs server-rendered content, pass that content as `children`. The shell can be a Client Component while the child stays a Server Component, because the child was created in a server file and handed in.",
      },
      {
        type: "steps",
        items: [
          {
            title: "Build the interactive shell",
            text: "Keep the client file small: state, events, and the markup that depends on them.",
          },
          {
            title: "Render it from a server file",
            text: "The server file fetches data and passes server content as children.",
          },
          {
            title: "Do not refetch to avoid composition",
            text: "A second fetch inside the shell usually means the boundary was drawn around too much UI.",
          },
        ],
      },
    ],
  },
  {
    slug: "technical-seo-for-developer-blogs",
    title: "Technical SEO for a developer blog",
    description:
      "Titles, descriptions, canonical URLs, a sitemap, and one clear heading are the parts of SEO a technical blog can actually control.",
    excerpt:
      "Write a specific title, give each guide one URL, and make the heading structure match the outline a reader would sketch.",
    category: "SEO",
    date: "2026-08-28",
    readingMinutes: 6,
    featured: true,
    tags: ["SEO", "Metadata", "Next.js"],
    content: [
      {
        type: "paragraph",
        text: "Search engines can read a JavaScript app, and they still reward pages that say what they are. A guide needs a stable URL, a title that matches the question, and HTML that outlines the answer.",
      },
      {
        type: "heading",
        level: 2,
        id: "one-url",
        text: "One guide, one URL",
      },
      {
        type: "paragraph",
        text: "Pick a slug from the words a reader would type, then keep it. If the slug has to change, redirect the old path so existing links move with the page. Do not publish the same essay at two addresses.",
      },
      {
        type: "heading",
        level: 2,
        id: "metadata",
        text: "Put the title in metadata and on the page",
      },
      {
        type: "paragraph",
        text: "The document title and the `h1` should agree. The meta description should be a sentence you would say out loud, not a list of keywords. In the App Router, the Metadata API owns the document head.",
      },
      {
        type: "code",
        language: "tsx",
        filename: "app/blog/[slug]/page.tsx",
        code: `export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not found" };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: \`/blog/\${post.slug}\` },
  };
}`,
      },
      {
        type: "heading",
        level: 2,
        id: "outline",
        text: "Make the outline real",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Use one `h1`, then `h2` for sections and `h3` for subsections.",
          "Link to related guides with the words the destination page is about.",
          "Publish a sitemap of canonical URLs, and point `robots.txt` at it.",
          "Keep the steps in HTML. A diagram can support a section. It should not be the only copy of the instructions.",
        ],
      },
      {
        type: "note",
        title: "Structured data",
        text: "JSON-LD for `BlogPosting` restates the title, date, and URL already visible on the page. It does not replace a clear article. Keep the script in sync with what the reader sees.",
      },
    ],
  },
  {
    slug: "narrow-types-at-the-boundary",
    title: "Narrow types at the edge of your program",
    description:
      "Validate untrusted input once, where it enters, and let the rest of the function accept a type it can trust.",
    excerpt:
      "Parse input where it enters. After that, the type system should carry a value you already checked.",
    category: "TypeScript",
    date: "2026-08-19",
    readingMinutes: 7,
    featured: true,
    tags: ["TypeScript", "Validation"],
    content: [
      {
        type: "paragraph",
        text: "`unknown` is the honest type for data you did not create: a request body, a query string, a file on disk. The mistake is to cast it with `as` in the middle of a function and hope the shape holds.",
      },
      {
        type: "heading",
        level: 2,
        id: "write-a-guard",
        text: "Write a guard that returns a type",
      },
      {
        type: "paragraph",
        text: "A type predicate narrows `unknown` to the shape you checked. Call it at the edge. The code after it can stop asking whether the field exists.",
      },
      {
        type: "code",
        language: "ts",
        filename: "lib/guide.ts",
        code: `type GuideInput = {
  title: string;
  minutes: number;
};

function isGuideInput(value: unknown): value is GuideInput {
  if (typeof value !== "object" || value === null) return false;

  const record = value as Record<string, unknown>;
  return (
    typeof record.title === "string" &&
    typeof record.minutes === "number"
  );
}

export function parseGuide(value: unknown): GuideInput {
  if (!isGuideInput(value)) {
    throw new Error("Guide payload is missing a title or minutes.");
  }

  return value;
}`,
      },
      {
        type: "paragraph",
        text: "The cast inside the guard is local, and it sits behind an object check. That is a different habit from sprinkling `as GuideInput` through the UI.",
      },
      {
        type: "heading",
        level: 2,
        id: "trust-the-parse",
        text: "Trust the value after the parse",
      },
      {
        type: "paragraph",
        text: "`parseGuide` either throws or returns `GuideInput`. Callers should not re-check `title`. If a field is optional, model that in the type and handle it inside the parser, not in every consumer.",
      },
      {
        type: "heading",
        level: 3,
        id: "search-params",
        text: "Forms and search params",
      },
      {
        type: "paragraph",
        text: "`searchParams` values arrive as `string | string[] | undefined`. Normalize them in one function that returns a small object. Components then receive `page: number`, not an array they each parse differently.",
      },
      {
        type: "steps",
        items: [
          {
            title: "Accept the raw value at the boundary",
            text: "The parameter type is `unknown`, or the framework type you have not checked yet.",
          },
          {
            title: "Return a named type or fail",
            text: "Throw an error a caller can catch, or return a result object. Do not return a half-parsed record.",
          },
          {
            title: "Keep casts inside the parser",
            text: "A cast in a view is a sign the parser stopped too early.",
          },
        ],
      },
      {
        type: "note",
        title: "A cast is a claim",
        text: "A cast tells TypeScript to believe you. A guard shows the check. Prefer the check for any value that crossed a process, a network, or a file.",
      },
    ],
  },
  {
    slug: "tailwind-layout-primitives",
    title: "Layout primitives for Tailwind interfaces",
    description:
      "A small set of width, gap, and padding rules will hold a Tailwind layout together longer than another one-off margin.",
    excerpt:
      "Decide the page width, the stack gap, and the card padding once. Most screens are those three decisions repeated.",
    category: "CSS",
    date: "2026-08-07",
    readingMinutes: 5,
    featured: true,
    tags: ["Tailwind CSS", "Layout"],
    content: [
      {
        type: "paragraph",
        text: "Tailwind makes every spacing value equally easy to type. That is how a page ends up with `mt-3`, `mt-7`, and a custom pixel value for the same kind of gap. Pick a few primitives and repeat them.",
      },
      {
        type: "heading",
        level: 2,
        id: "widths",
        text: "One reading width, one page width",
      },
      {
        type: "paragraph",
        text: "Long text wants a narrow column, about `max-w-3xl`. A card grid wants the page width, about `max-w-6xl`. Center both with `mx-auto`, and use the same horizontal padding on every page so the header lines up with the content.",
      },
      {
        type: "code",
        language: "tsx",
        filename: "app/page.tsx",
        code: `<main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {articles.map((article) => (
      <article key={article.slug} className="rounded-2xl border p-6">
        {article.title}
      </article>
    ))}
  </div>
</main>`,
      },
      {
        type: "heading",
        level: 2,
        id: "gap",
        text: "Stack with gap, not a margin on every child",
      },
      {
        type: "paragraph",
        text: "`flex flex-col gap-4` and `grid gap-5` put space between items without a special case for the first child. Reach for `mt-*` when one section needs to separate from the section above it, not between every paragraph the parent already controls.",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Page shell: `max-w-6xl` with `px-4` and `sm:px-6`.",
          "Article column: `max-w-3xl` inside that shell.",
          "Cards: `p-6`, `rounded-2xl`, and a 1px border.",
          "Inline stacks: `gap-2` for meta, `gap-4` or `gap-6` for sections.",
        ],
      },
      {
        type: "note",
        title: "Responsive means the grid changes",
        text: "A phone can use one column and the same type size as the article on a desktop. Changing the column count is the part readers feel. Bumping every heading at each breakpoint is optional.",
      },
    ],
  },
  {
    slug: "git-history-you-can-trust",
    title: "Git history your future self can trust",
    description:
      "Small commits, each with a message about the reason, make a codebase easier to review, bisect, and revert.",
    excerpt:
      "Write the history as a sequence of reasons. A reviewer should understand the change before opening the diff.",
    category: "Git",
    date: "2026-07-22",
    readingMinutes: 5,
    featured: true,
    tags: ["Git", "Workflow"],
    content: [
      {
        type: "paragraph",
        text: "`git log` is a document. If every message says update or fix stuff, the document is gone and you are left with blame and guesswork. A useful history is a sequence of changes small enough to explain in one sentence.",
      },
      {
        type: "heading",
        level: 2,
        id: "say-why",
        text: "Say why the change exists",
      },
      {
        type: "paragraph",
        text: "The diff already shows what changed. The message should say why this change is the whole change. \"Fix guide dates that render a day early\" beats \"update format\".",
      },
      {
        type: "heading",
        level: 2,
        id: "one-reason",
        text: "Keep a commit to one reason",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "One bug fix is one commit, even when the fix touches two files.",
          "Formatting that is unrelated to the fix goes in its own commit, or it does not ride along.",
          "A commit should build. Do not save a half-migrated type error for the next commit.",
        ],
      },
      {
        type: "code",
        language: "text",
        filename: "terminal",
        code: `git add app/blog/[slug]/page.tsx lib/posts.ts
git commit -m "Render guide dates in UTC so the published day stays stable"`,
      },
      {
        type: "heading",
        level: 3,
        id: "review",
        text: "What a reviewer should see",
      },
      {
        type: "steps",
        items: [
          {
            title: "The subject names the result",
            text: "Write it in the imperative, as an instruction to the codebase: render, fix, add, remove.",
          },
          {
            title: "The body names the constraint",
            text: "If you need a body, describe the bug or the rule. Skip the tour of filenames. The diff has those.",
          },
          {
            title: "The diff matches the subject",
            text: "A reviewer should be able to revert the commit without reverting an unrelated cleanup.",
          },
        ],
      },
      {
        type: "note",
        title: "Write for the search you will run later",
        text: "Future you, looking for the commit that changed caching, will search the subject line. A branch that did one thing is also a branch that is easy to revert.",
      },
    ],
  },
];

export function getAllPosts() {
  return [...posts].sort((a, b) => {
    if (a.date === b.date) return 0;
    return a.date < b.date ? 1 : -1;
  });
}

export function getFeaturedPosts() {
  return getAllPosts().filter((post) => post.featured);
}

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, count = 2) {
  return getAllPosts()
    .filter((post) => post.slug !== slug)
    .slice(0, count);
}

export function getHeadings(blocks: PostBlock[]): TocItem[] {
  return blocks.flatMap((block) =>
    block.type === "heading" && block.level === 2
      ? [{ id: block.id, text: block.text }]
      : [],
  );
}
