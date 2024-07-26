class Designs{
    // left expansion bar
    leftToolBar(){
        return cy.get('#leftToolbar')
    }
    drawingPanelMenu(drawing){
        return cy.get(`[id="${drawing}"]`)
    }
    selectedDrawingPanelMenu(selection){
        return cy.get(`[id="${selection}"]`)
    }
    drawingTemplates(template){
        return cy.get(`[name="${template}"]`)
    }
    drawingTemplateList(){
        return cy.get('.home-card-list')
    }
    selectedDrawingPattern(pattern){
        return cy.get(`[id^="${pattern}"]`)
    }
    elementCategorySelection(category){
        return cy.get(`[data-testid="${category}"]`)
    }
    elementSelection(element){
        return cy.get(`[data-testid="${element}"]`)
    }   
    btnSelection(btn){
        return cy.get('.btn').contains(`${btn}`)
    }

}
export default Designs;
