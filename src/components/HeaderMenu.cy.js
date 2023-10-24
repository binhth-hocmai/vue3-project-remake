import HeaderMenu from './HeaderMenu.vue'

describe('<HeaderMenu />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(HeaderMenu)
  })
})