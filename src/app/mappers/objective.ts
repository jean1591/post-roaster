import {
  PiArrowBendDoubleUpRight,
  PiBrain,
  PiBroadcast,
  PiCalendarCheck,
  PiLink,
  PiMagnetStraight,
  PiMapPinArea,
  PiQuestionMark,
  PiSpeakerHigh,
  PiUsers,
} from 'react-icons/pi'

import { Objective } from '@/store/features/createPost/slice'

export const objectiveToIconMapper: Record<
  Objective,
  { description: string; icon: React.ElementType }
> = {
  [Objective.BoostEventAttendance]: {
    description:
      'Promote upcoming events and encourage sign-ups or participation.',
    icon: PiCalendarCheck,
  },
  [Objective.BuildBrandAwareness]: {
    description:
      'Increase visibility and recognition of your brand to a wider audience.',
    icon: PiBroadcast,
  },
  [Objective.CollectFeedback]: {
    description:
      'Gather opinions and insights from your audience to improve products or services.',
    icon: PiQuestionMark,
  },
  [Objective.DriveTraffic]: {
    description:
      'Encourage users to click through to your website or landing page for more information.',
    icon: PiMapPinArea,
  },
  [Objective.EncourageDiscussion]: {
    description:
      'Prompt users to share their thoughts and opinions to create a dialogue around the topic.',
    icon: PiSpeakerHigh,
  },
  [Objective.EnhanceCustomerLoyalty]: {
    description:
      'Strengthen relationships with existing customers through engagement and value-driven content.',
    icon: PiLink,
  },
  [Objective.GenerateLeads]: {
    description:
      'Capture contact information from potential clients or customers through sign-ups or inquiries.',
    icon: PiMagnetStraight,
  },
  [Objective.IncreaseFollowers]: {
    description:
      'Attract new followers or connections by sharing valuable content that resonates with the target audience.',
    icon: PiArrowBendDoubleUpRight,
  },
  [Objective.MaximizeEngagement]: {
    description:
      'Increase likes, shares, comments, and interactions with the post to foster a sense of community.',
    icon: PiUsers,
  },
  [Objective.ShowcaseExpertise]: {
    description:
      'Demonstrate your knowledge in your field to position yourself or your brand as a thought leader.',
    icon: PiBrain,
  },
}
