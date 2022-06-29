import classNames from 'classnames'

type Props = {
  label: string
  level: 1 | 2 | 3 | 4 | 5
  className?: string
}

const Heading: React.FC<Props> = ({ label, level, className }) => {
  const getComponent = (
    selectedLevel: Props['level']
  ): ((
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => JSX.Element) => {
    switch (selectedLevel) {
      case 1:
        return (props) => <h1 {...props} />
      case 2:
        return (props) => <h2 {...props} />
      case 3:
        return (props) => <h3 {...props} />
      case 4:
        return (props) => <h4 {...props} />
      case 5:
        return (props) => <h5 {...props} />
    }
  }
  const Component = getComponent(level)
  const getClassNames = (selectedLevel: Props['level']) => {
    switch (selectedLevel) {
      case 1:
        return 'text-5xl'
      case 2:
        return 'text-4xl'
      case 3:
        return 'text-3xl'
      case 4:
        return 'text-2xl'
      case 5:
        return 'text-xl'
    }
  }

  return (
    <Component className={classNames(getClassNames(level), className)}>
      {label}
    </Component>
  )
}

export default Heading
