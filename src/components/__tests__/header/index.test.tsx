import { render } from '@testing-library/react'

import Header from '../../shared/header'

describe('<Header />', () => {
  it('should render', () => {
    const { getByTestId } = render(<Header siteTitle="eM Sport Slaný" />)

    const element = getByTestId('header')

    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('eM Sport Slaný')
  })
})
