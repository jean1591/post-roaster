import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'

const personas = [
  {
    label: 'Colleague',
    description:
      'Peers or coworkers in the same organization or industry. They expect professional insights and team-related updates.',
  },
  {
    label: 'Hiring Manager',
    description:
      'Individuals responsible for recruitment and talent acquisition. They seek professional accomplishments, skills, and relevant experiences.',
  },
  {
    label: 'HR Professional',
    description:
      'Human resources personnel interested in company culture, employee development, and organizational updates.',
  },
  {
    label: 'Industry Leader',
    description:
      'Influential figures or thought leaders in the industry. They look for innovative ideas, trends, and strategic insights.',
  },
  {
    label: 'Mentor',
    description:
      'Experienced professionals who provide guidance and advice to less experienced colleagues. They appreciate insights on career development and professional growth.',
  },
  {
    label: 'Potential Customer',
    description:
      'Business prospects or clients who are evaluating your services or products. They are interested in value propositions and solutions.',
  },
  {
    label: 'Networking Contact',
    description:
      'Professionals looking to build connections for future collaborations or partnerships. They value genuine interactions and shared interests.',
  },
  {
    label: 'Recruiter',
    description:
      'Professionals focused on finding talent for various roles. They want to see skills, accomplishments, and a professional demeanor.',
  },
  {
    label: 'Follower',
    description:
      'General audience members interested in your content. They look for engaging, shareable posts and relatable content.',
  },
  {
    label: 'Industry Peer',
    description:
      'Others in your field who follow trends and share knowledge. They appreciate discussions on industry developments and insights.',
  },
  {
    label: 'Customer',
    description:
      'Individuals using your product or service. They seek support, updates, and community engagement.',
  },
  {
    label: 'Influencer',
    description:
      'Well-known figures in your industry with large followings. They expect insightful content that can foster engagement and discussions.',
  },
  {
    label: 'Event Attendee',
    description:
      'People attending webinars, conferences, or networking events. They want information on sessions, speakers, and follow-up discussions.',
  },
  {
    label: 'Thought Leader',
    description:
      'Influencers and experts who share knowledge and perspectives. They appreciate data-driven insights and innovative ideas.',
  },
  {
    label: 'Advocate',
    description:
      'Supporters of your brand or cause. They are likely to share your content and promote discussions around your values.',
  },
]

export const AudienceSelector = () => {
  return (
    <div className="space-y-2">
      <p className="font-bold leading-none tracking-tight">
        Select your persona
      </p>

      <div className="flex flex-wrap items-center justify-start gap-4">
        {personas.map((persona) => (
          <div
            key={persona.label}
            className={classNames(
              buttonHoverTransition,
              'tooltip-target group cursor-pointer rounded-md border-[1px] border-black px-4 py-2 hover:bg-black hover:text-white'
            )}
          >
            <p>{persona.label}</p>

            <div className="tooltip absolute -bottom-8 left-1/2 hidden -translate-x-1/2 transform rounded bg-black px-2 py-1 text-xs text-white group-hover:block">
              {persona.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
