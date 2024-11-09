import { PasteText } from './create/PasteText'
import { RoastButton } from './create/RoastButton'
import { SelectObjective } from './create/SelectObjective'
import { SelectPersona } from './create/SelectPersona'
import { SelectPlatform } from './create/SelectPlatform'

export const CreatePanel = () => {
  return (
    <div className="space-y-8">
      <PasteText />
      <SelectPlatform />
      <SelectPersona />
      <SelectObjective />
      <div className="flex items-center justify-end">
        <RoastButton />
      </div>
    </div>
  )
}
