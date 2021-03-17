import { render } from '@testing-library/react'

import Footer from '../../../components/shared/footer'

describe('<Footer />', () => {
  it('it should render', () => {
    const { container } = render(<Footer />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
