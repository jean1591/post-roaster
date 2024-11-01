import { Tab } from './Tab'
import { TabButton } from './TabButton'
import { Tab as TabEnum } from '@/store/features/post/slice'

export const Tabs = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-5 gap-4">
        <TabButton label={TabEnum.Summary} />
        <TabButton label={TabEnum.Audience} />
        <TabButton label={TabEnum.Engagement} />
        <TabButton label={TabEnum.Language} />
        <TabButton label={TabEnum.Structure} />
      </div>

      <Tab />
    </div>
  )
}
