describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=todoscomponent--primary'));

  it('should render the component', () => {
    cy.get('myorg-todos').should('exist');
  });
});
