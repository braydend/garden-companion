// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import PlantsLayout from 'src/layouts/PlantsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={PlantsLayout}>
        <Route path="/plants/{id}" page={PlantPlantPage} name="plant" />
        <Route path="/plants" page={PlantPlantsPage} name="plants" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
