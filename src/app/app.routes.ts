import { RouterModule , Routes } from '@angular/router';
import {ProductCategoryComponent} from "./product-category/product-category.component";

const APP_ROUTES : Routes = [
    { path : '' , component : ProductCategoryComponent}

];
export const routing = RouterModule.forRoot(APP_ROUTES);