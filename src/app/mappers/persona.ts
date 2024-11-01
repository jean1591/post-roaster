import {
  PiArrowBendDoubleUpRight,
  PiBrain,
  PiBroadcast,
  PiCalendarCheck,
  PiCurrencyDollar,
  PiLink,
  PiMagnifyingGlass,
  PiMapPinArea,
  PiPlus,
  PiQuestionMark,
  PiSpeakerHigh,
  PiUsers,
} from 'react-icons/pi'

import { Persona } from '@/store/features/createPost/slice'

export const personaToIconMapper: Record<
  Persona,
  { description: string; icon: React.ElementType }
> = {
  [Persona.Advocate]: {
    description:
      'Supporters of your brand or cause. They are likely to share your content and promote discussions around your values.',
    icon: PiPlus,
  },
  [Persona.Colleague]: {
    description:
      'Peers or coworkers in the same organization or industry. They expect professional insights and team-related updates.',
    icon: PiUsers,
  },
  [Persona.Customer]: {
    description:
      'Individuals using your product or service. They seek support, updates, and community engagement.',
    icon: PiCurrencyDollar,
  },
  [Persona.EventAttendee]: {
    description:
      'People attending webinars, conferences, or networking events. They want information on sessions, speakers, and follow-up discussions.',
    icon: PiCalendarCheck,
  },
  [Persona.Follower]: {
    description:
      'General audience members interested in your content. They look for engaging, shareable posts and relatable content.',
    icon: PiArrowBendDoubleUpRight,
  },
  [Persona.HrProfessional]: {
    description:
      'Human resources personnel interested in company culture, employee development, and organizational updates.',
    icon: PiMagnifyingGlass,
  },
  [Persona.IndustryLeader]: {
    description:
      'Influential figures or thought leaders in the industry. They look for innovative ideas, trends, and strategic insights.',
    icon: PiMapPinArea,
  },
  [Persona.IndustryPeer]: {
    description:
      'Others in your field who follow trends and share knowledge. They appreciate discussions on industry developments and insights.',
    icon: PiBroadcast,
  },
  [Persona.Influencer]: {
    description:
      'Well-known figures in your industry with large followings. They expect insightful content that can foster engagement and discussions.',
    icon: PiSpeakerHigh,
  },
  [Persona.NetworkingContact]: {
    description:
      'Professionals looking to build connections for future collaborations or partnerships. They value genuine interactions and shared interests.',
    icon: PiLink,
  },
  [Persona.PotentialCustomer]: {
    description:
      'Business prospects or clients who are evaluating your services or products. They are interested in value propositions and solutions.',
    icon: PiQuestionMark,
  },
  [Persona.ThoughtLeader]: {
    description:
      'Influencers and experts who share knowledge and perspectives. They appreciate data-driven insights and innovative ideas.',
    icon: PiBrain,
  },
}
