import Designs from '../pages/design.js'
const designEle = new Designs()

export function visitDesignPage(){
    cy.visit('https://dev.platform.creatingly.com/webstudio')
    cy.wait(20000)
    cy.get('.confirm-button-ok').then($button => {
      if ($button.length > 0) {
        cy.wrap($button).click();
      } else {
        cy.log('confirm-button-ok does not exist');
      }
    });
    designEle.leftToolBar().should('exist')
}

export function selectDrawingPanel(drawingPanel, drawDrawingPanel){
    designEle.drawingPanelMenu(drawingPanel).trigger('mouseover')
    designEle.selectedDrawingPanelMenu(drawDrawingPanel).click()
}

export function selectTemplate(template){
    designEle.drawingTemplates(template).should('exist').parent().should('have.class', 'highlightMode')
    designEle.drawingTemplateList().eq(1).click()
}

export function drawingPatternSelection(pattern){
    designEle.selectedDrawingPattern(pattern).should('exist')
}
