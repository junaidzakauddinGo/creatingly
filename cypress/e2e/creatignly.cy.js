import Designs from '../../pages/design.js'
import { visitDesignPage, selectDrawingPanel, selectTemplate, drawingPatternSelection} from '../../wrappers/design.js'
const designEle = new Designs()

describe('template spec', () => {
  it('passes', () => {
    visitDesignPage()
    // selection of artboard from left side expandsion menu
    selectDrawingPanel('drawing-panel', 'draw-drawing-panel')
    selectTemplate('Desktop Templates')
    drawingPatternSelection('Artboard')

    // from available elements select chart from left side shown menu
    designEle.elementCategorySelection('Chart').click().should('have.class', 'activeElement')
    designEle.elementSelection('Bar Chart').first().click({force: true})
    cy.wait(3000)

    // from right side menu adjust selected chart to middle of the artboard
    designEle.btnSelection('C | C').click()

    // stretch vertically till the limit of artboard
    designEle.btnSelection('Stretch vertically').click()

    // stretch horizontally till the limit of artboard
    designEle.btnSelection('Stretch horizontally').click()

    // verify that chart is fit in the container using alignment buttons
    cy.get('.grid-align-container .btn')
            .should('have.length', 9) 
            .each((btn) => {
                cy.get(btn).should('have.class', 'active')
            });
  })
})