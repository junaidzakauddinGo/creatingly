import Designs from '../pages/design.js'
import { visitDesignPage, selectDrawingPanel, selectTemplate, drawingPatternSelection} from '../wrappers/design.js'
const designEle = new Designs()

describe('template spec', () => {
  it('passes', () => {
    visitDesignPage()
    selectDrawingPanel('drawing-panel', 'draw-drawing-panel')
    selectTemplate('Desktop Templates')
    drawingPatternSelection('Artboard')
    designEle.elementCategorySelection('Chart').click().should('have.class', 'activeElement')
    designEle.elementSelection('Bar Chart').first().click({force: true})
    cy.wait(3000)
    designEle.btnSelection('C | C').click()
    designEle.btnSelection('Stretch vertically').click()
    designEle.btnSelection('Stretch horizontally').click()
    cy.get('.grid-align-container .btn')
            .should('have.length', 9) 
            .each((btn) => {
                cy.get(btn).should('have.class', 'active')
            });
  })
})