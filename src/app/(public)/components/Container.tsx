export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto max-w-6xl px-4 lg:px-0">{children}</div>
}

export const ContainerSingleColumn = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <div className="mx-auto max-w-5xl px-4 lg:px-0">{children}</div>
}
