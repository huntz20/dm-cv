import {CalendarIcon, FlagIcon, MapIcon, SparklesIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Huntz Your Humble DM',
  description:
    "I'm Huntz, a professional Dungeon Master with 5+ years of experience crafting unforgettable tabletop adventures.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Huntz`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Hey there! I'm a lifelong storyteller and professional Dungeon Master with 5+ years of experience turning dice
        rolls into unforgettable memories. Whether it's epic fantasy, gritty post-apocalypse, or spooky folklore horror,
        I love crafting adventures where player choices truly matter. I'm all about drama, twists, and those "oh no...
        OH YES!" moments at the table. Expect dynamic roleplay, homebrew surprises, and worlds that feel alive and maybe
        a few cursed artifacts along the way. Let's roll some dice and make magic happen.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc:
    'https://cdn.discordapp.com/avatars/432262122815225867/4e6bc06fee7ff0cbbeea78ec2087b319.webp?size=240',
  description: `I’m a professional Dungeon Master offering immersive, character-driven adventures tailored to your party’s style. I’m experienced with D&D 5e, Vaesen, Ten Candles, and more and I run games with a strong narrative arc, emotional depth, and plenty of room for creative player agency. Whether you're looking for a one-shot, a long-term campaign, or a spooky horror session, I provide a safe, inclusive, and unforgettable experience for players of all backgrounds.`,
  aboutItems: [
    {label: 'Location', text: 'Jakarta - Bogor', Icon: MapIcon},
    {label: 'Age', text: 'Born under the sign of the d20, three decades ago.', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indonesia', Icon: FlagIcon},
    {label: 'Interests', text: 'DND, Food, Books, History', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Fantasy Roleplaying',
    skills: [
      {
        name: 'Dungeons & Dragons',
        level: 10,
      },
      {
        name: 'Fabula Ultima',
        level: 10,
      },
      {
        name: 'SOtDL',
        level: 7,
      },
      {
        name: 'Fate Core',
        level: 9,
      },
    ],
  },
  {
    name: 'Horror Roleplaying',
    skills: [
      {
        name: 'Vaesen',
        level: 8,
      },
      {
        name: 'Ten Candles',
        level: 10,
      },
      {
        name: 'Walking Dead',
        level: 6,
      },
    ],
  },
  {
    name: 'Simple Yet Fun Roleplaying',
    skills: [
      {
        name: 'Kaizoku',
        level: 10,
      },
      {
        name: 'Goblin Errand',
        level: 5,
      },
      {
        name: "Oh, Dang! Bigfoot Stole My Car With My Friend's Birthday Present Inside Is A Solid One-Page Game",
        level: 10,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2021',
    location: 'DND - Online',
    title: 'Euditia Realm',
    content: (
      <p>
        Euditia or Mortal Realm where the ancient whispers of magic intertwine with the very breath of the land, a realm
        unfolds like pages from an age-old tome. Towering spires adorned with eldritch symbols reach towards the
        heavens, casting shadows over vibrant, enchanted landscapes. Moss-laden forests, their trees standing tall and
        wise, weave together like the threads of a mystical tapestry, concealing secrets within the rustling leaves.The
        air hums with the harmonious resonance of arcane energies, where every gust carries the ethereal fragrance of
        forgotten incantations. Majestic dragons, their scales shimmering with hues unseen by mortal eyes, soar above
        crystalline rivers and valleys, guardians of ancient wisdom and keepers of ageless lore.In the heart of
        Euditia's realms, four majestic continents stand as bastions of distinct cultures, each woven into the very
        fabric of the land they inhabit. From the regal spires of Aetheris, where wizards weave spells like threads in
        the cosmic loom, to the rugged peaks of Draconia, where dragon riders forge unbreakable bonds with their scaly
        companions, the diversity of Euditia unfolds like a map of dreams.Yet, beneath the surface of this magical
        tapestry, shadows stir. Ancient prophecies foretell of a looming darkness that threatens to engulf Euditia in
        its inky tendrils. It is in this enchanting realm that heroes must rise, wielding the ancient magic of the land
        and standing against the encroaching night.As the sun sets over Euditia, casting hues of gold and lavender
        across its fantastical landscapes, the echoes of bygone ages beckon, inviting those brave enough to explore the
        secrets hidden within the heart of magic and dragons. The adventure awaits, like an epic yet unwritten, within
        the folds of this mystical realm called Euditia.
      </p>
    ),
  },
  {
    date: 'April 2022',
    location: 'Vaesen - Offline',
    title: 'Santara Land',
    content: (
      <p>
        Welcome to Santara Land a reimagined archipelago inspired by 1980s Indonesia, where the hum of development
        echoes through growing cities, factories blaze into life, and cassette radios blare rock dangdut through the
        alleys of kampung and concrete flats. But beneath the asphalt and satellite dishes, something ancient still
        breathes. Here, the world of mortals and the realm of the dedemit beings of myth and folklore exist not as tales
        of the past, but as a haunting, living reality. Some remain hidden in the deep forests and forgotten temples,
        avoiding the encroach of modernity. Others walk quietly among humans, their presence whispered in markets,
        alleyways, and smoky warungs. Most citizens turn a blind eye, focused on careers, schooling, and surviving in
        this rising economy. But for those who still listen shamans, dreamers, and the unlucky few the signs are
        unmistakable. A keris humming with restless energy. Children speaking to unseen friends. A sudden chill beneath
        the neon lights.
      </p>
    ),
  },
  {
    date: 'April 2023',
    location: 'Online',
    title: 'Fabula Ultima - Fanalia Kingdom',
    content: (
      <p>
        Welcome to Fanalia, a kingdom where ancient castles crown mountaintops, dragons sleep beneath emerald forests,
        and the echoes of legendary heroes still inspire the brave. This is a world born from light and shadow — where
        magic flows through bloodlines and elemental spirits whisper to those who dare listen. Centuries ago, Fanalia
        was nearly consumed by darkness, but was saved by the united strength of legendary warriors who forged peace
        through sacrifice and trust. That legacy now lives on in the hearts of new heroes. In the capital of Altireia,
        guilds train adventurers not just to fight, but to grow — in strength, in heart, and in loyalty to one another.
        Young warriors take up arms not for gold alone, but for dreams: to protect the weak, to restore lost honor, or
        to prove their worth in a world that tests both steel and soul. But peace never lasts forever. New threats rise
        from forgotten ruins, rogue kingdoms stir rebellion, and whispers speak of a sealed evil returning — one that no
        hero has yet faced and lived to tell. The time is coming for the next generation to rise.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2025 - Present',
    location: 'Online',
    title: 'Gods Plan (DND - Long Campaign)',
    content: (
      <p>
        In the cold embrace of the night, you awaken from a restless slumber, your mind still tangled in the fragments
        of a haunting dream. A voice, ethereal and resonant, echoes faintly in your memory a warning from beyond mortal
        comprehension. Though vague, its words are etched into your soul, commanding your attention: "Mortals, heed my
        call! A storm of chaos brews on the horizon, orchestrated by three gods consumed by greed and malice. They
        conspire to unravel the order of your world, sending forth their agents to sow destruction. The Trickster shall
        weave discord and doubt among you, the Reaper will shadow your lands with death’s cold embrace, and the Weaver
        shall ensnare your minds in webs of deceit. Yet, do not succumb to despair, for within your hearts burns a light
        brighter than any darkness. Let compassion be your shield to unmask the Trickster’s lies. Let courage steel you
        against the Reaper’s relentless scythe. Seek truth with unyielding resolve to untangle the Weaver’s deceptions.
        The fate of your world now lies in your hands. Stand together, let unity be your strength, and let the flame of
        hope guide your way. If you rise as one, bound by love and purpose, no shadow shall claim dominion over your
        realm. The darkness comes but so too does your chance to defy it. Be steadfast, for the hour of reckoning draws
        near."
      </p>
    ),
  },
  {
    date: 'July 2024 - December 2024',
    location: 'Offline',
    title: 'Echoes of Forgotten War (DND - Medium Campaign)',
    content: (
      <p>
        Before the gods whispered to mortals… before the storm of chaos darkened the skies… there was only war. Endless,
        senseless war. In the land of Tetonia, kingdoms clashed for reasons long forgotten, entire generations raised to
        bleed for banners without meaning. The world called it fate. The scholars called it history. But one
        manZiacalled it a lie. Haunted by dreams and driven by visions none could explain, Zia walks a blood-soaked land
        searching for answers. What he finds is a truth older than kings: the war was never about territory, pride, or
        justice. It was designed. Structured. Engineered by a hidden hand. One mind. One will. One shadow pulling every
        string.
      </p>
    ),
  },
  {
    date: 'Jan 2024 - March 2024',
    location: 'Online',
    title: 'Blooming Mind Part 1 (DND - Medium Campaign)',
    content: (
      <p>
        The gods have fallen silent. The chaos has receded. And in the heart of Tetonia, peace begins to take root. But
        peace is fragile and far from universal. On the distant island of Thallasa, far from the war-torn lands of the
        mainland, something ancient stirs beneath the calm. It begins with the disappearance of Calico, a gifted young
        philosopher and inventor a "bright mind" beloved across the island. Vanished for days in the dreaded Mist
        Forest, she returns… different. Her eyes gleam with knowledge no mortal should bear. Her words inspire strange
        dreams. Her inventions whisper when no one is near. And the island changes with her. Whispers of impossible
        machines echo from hidden groves. Dreams bleed into waking life. The veil of reality thins, and something
        terrible watches from just beyond. The agents of chaos, thought vanquished, have sown seeds in secret and now,
        they bloom.
      </p>
    ),
  },
  {
    date: 'Jan 2023 - Ongoing',
    location: 'Online/Offline',
    title: 'Unsung story of euditia (DND - Various Campaign)',
    content: (
      <p>
        United under the brilliant tactician General Yao, it rose from scattered clans into a single empire. But unity
        is a fragile illusion, and when the Agents of Chaos spread their corruption from within, the kingdom shattered
        like porcelain on stone. Though the chaos was defeated, its venom lingered. Now, Oriental Kingdom is divided
        into three rival nations, each claiming legitimacy to the old throne, each locked in a brutal cycle of conquest,
        betrayal, and fragile alliances. Old friendships are twisted by ambition. Heroes fall unsung. Peace is a myth
        few dare to dream of. Yet the true danger lies not in the swords of men, but in what waits beyond. From the edge
        of the Damned Land, an ancient force stirs silent, patient, and hungry. While the fractured nations spill blood
        over a crown long turned to dust, something darker prepares to erase all of Oriental Kingdom… and the world
        beyond.
      </p>
    ),
  },
  {
    date: 'April 2023 - Jun 2023',
    location: 'Online',
    title: 'Whispers in Saritem (Vaesen - Short Campaign)',
    content: (
      <p>
        In the neon-soaked backstreets of Saritem, where laughter dances with cigarette smoke and secrets are sold
        behind velvet curtains, life carries on under the glow of red lanterns and whispered promises. For years, this
        hidden quarter of Bandagara City has been a refuge for the forgotten the drifters, the dreamers, and the women
        known only by stage names and starlight smiles. But when one of Saritem’s brightest “flowers” is found lifeless
        in her small rented room her body untouched, her expression peaceful, and no mark of violence the district
        freezes. The other girls grow quiet. The guests grow wary. Something isn’t right. Rumors bloom like mold in damp
        walls. Some say she died of heartbreak. Others claim she saw something she shouldn’t have an old spirit, a
        wronged soul, a cursed lover. But the whispers are always followed by silence… as if the district itself is
        listening.
      </p>
    ),
  },
  {
    date: 'April 2023 - Jun 2023',
    location: 'Offline',
    title: 'The Saranjana Dossier (Vaesen - Short Campaign)',
    content: (
      <p>
        Somewhere along the southern coast of Santara past the fishing villages, through the mangrove forests, and
        beyond the reach of satellite maps there is a place whispered of in truck stops, schoolyard rumors, and
        late-night radio shows. A city that doesn’t officially exist. Locals call it Saranjana. A city of glittering
        lights unseen by the naked eye. A place where lost people go, where time flows differently, and where deals are
        made with things that wear human faces but are anything but. Government officials deny its existence. Yet
        shipping manifests list deliveries to “Saranjana, South Kalang.” Locals go missing and return years later with
        no memory or too much.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Riyan',
      text: "In Bang Hunts' DMing, I feel comfortable. You give your players the freedom to do anything, but every choice has a consequence. The spotlight distribution is also good. Your storytelling and worldbuilding are amazing you're patient, not quick-tempered, and you understand your players.",
      image: 'https://cdn.discordapp.com/avatars/342139247546990593/6f7e7d40e4e510c32d917d75d99ca107.webp?size=240',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I’m always open to discussing new projects, creative ideas, or opportunities to be part of your story.',
  items: [
    {
      type: ContactType.Email,
      text: 'huntzrahmadi@gmail.com',
      href: 'mailto:huntzrahmadi@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Huntz',
      href: 'https://discordapp.com/users/huntz20',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Youtube', Icon: GithubIcon, href: 'https://www.youtube.com/@sliceoflife-id'},
  {
    label: 'World Building',
    Icon: StackOverflowIcon,
    href: 'https://www.notion.so/edutiarealm/ec1e00cd35854ec2914aa3ce7139ac93?v=d53c0be2a2ac477eb94cf5c7957aff79',
  },
];
