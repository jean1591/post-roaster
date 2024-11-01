import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'

const objectives = [
  {
    label: 'Maximize Engagement',
    description:
      'Increase likes, shares, comments, and interactions with the post to foster a sense of community.',
  },
  {
    label: 'Drive Traffic',
    description:
      'Encourage users to click through to your website or landing page for more information.',
  },
  {
    label: 'Build Brand Awareness',
    description:
      'Increase visibility and recognition of your brand to a wider audience.',
  },
  {
    label: 'Generate Leads',
    description:
      'Capture contact information from potential clients or customers through sign-ups or inquiries.',
  },
  {
    label: 'Encourage Discussion',
    description:
      'Prompt users to share their thoughts and opinions to create a dialogue around the topic.',
  },
  {
    label: 'Showcase Expertise',
    description:
      'Demonstrate your knowledge in your field to position yourself or your brand as a thought leader.',
  },
  {
    label: 'Increase Followers',
    description:
      'Attract new followers or connections by sharing valuable content that resonates with the target audience.',
  },
  {
    label: 'Boost Event Attendance',
    description:
      'Promote upcoming events and encourage sign-ups or participation.',
  },
  {
    label: 'Enhance Customer Loyalty',
    description:
      'Strengthen relationships with existing customers through engagement and value-driven content.',
  },
  {
    label: 'Collect Feedback',
    description:
      'Gather opinions and insights from your audience to improve products or services.',
  },
]

export const ObjectiveSelector = () => {
  return (
    <div className="space-y-2">
      <p className="font-bold leading-none tracking-tight">
        Select your objective
      </p>

      <div className="flex flex-wrap items-center justify-start gap-4">
        {objectives.map((objective) => (
          <div
            key={objective.label}
            className={classNames(
              buttonHoverTransition,
              'tooltip-target group cursor-pointer rounded-md border-[1px] border-black px-4 py-2 hover:bg-black hover:text-white'
            )}
          >
            <p>{objective.label}</p>

            <div className="tooltip absolute -bottom-8 left-1/2 hidden -translate-x-1/2 transform rounded bg-black px-2 py-1 text-xs text-white group-hover:block">
              {objective.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
