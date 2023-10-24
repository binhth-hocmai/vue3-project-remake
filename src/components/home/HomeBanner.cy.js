import HomeBanner from './HomeBanner.vue'

describe('<HomeBanner />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(HomeBanner)
  })
})