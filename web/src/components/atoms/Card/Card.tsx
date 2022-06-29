import classNames from 'classnames'

type CardVariants = 'green' | 'red'

type Props = {
  variant: CardVariants
  className?: string
}

const getVariantClasses = (variant: CardVariants) => {
  const baseClasses = 'border-2 rounded p-6'

  switch (variant) {
    case 'red':
      return classNames(baseClasses, 'bg-red-200', 'border-red-400')
    case 'green':
      return classNames(baseClasses, 'bg-emerald-200', 'border-emerald-400')
  }
}

export const Card: React.FC<Props> = ({ variant, children, className }) => {
  return (
    <section className={classNames(getVariantClasses(variant), className)}>
      {children}
    </section>
  )
}
