import Designs from '../pages/design.js'
const designEle = new Designs()

export function visitDesignPage(){
  // cy.intercept("POST", "https://dev-cdn.platform.creatingly.com/s3/dev-mobile-elements*").as("homePage")
  cy.visit('https://dev.platform.creatingly.com/webstudio')
  cy.intercept('GET', '**/*').as('getAll');
  cy.wait('@getAll');

    cy.get('.confirm-button-ok').then($button => {
      if ($button.length > 0) {
        cy.wrap($button).click();
      } else {
        cy.log('confirm-button-ok does not exist');
      }
    designEle.leftToolBar().should('exist')
  })
}

// selection of artboard from left side expandsion menu
export function selectDrawingPanel(drawingPanel, drawDrawingPanel){
    designEle.drawingPanelMenu(drawingPanel).trigger('mouseover')
    designEle.selectedDrawingPanelMenu(drawDrawingPanel).click()
}

// selection of template from the list
export function selectTemplate(template){
    designEle.drawingTemplates(template).should('exist').parent().should('have.class', 'highlightMode')
    designEle.drawingTemplateList().eq(1).click()
}

// selection of pattern from the list
export function drawingPatternSelection(pattern){
    designEle.selectedDrawingPattern(pattern).should('exist')
}
