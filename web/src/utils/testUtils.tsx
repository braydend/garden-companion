import React from 'react'

import { render } from '@redwoodjs/testing/web'

export function setUpComponentTest<PropTypes>(
  Component: React.ElementType,
  defaultProps: PropTypes
) {
  return (customProps?: Partial<PropTypes>) => {
    const props: PropTypes = {
      ...defaultProps,
      ...customProps,
    }

    return render(<Component {...props} />)
  }
}
