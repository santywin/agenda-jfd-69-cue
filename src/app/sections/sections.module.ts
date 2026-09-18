import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { GroupsComponent } from './groups/groups.component';
import { TrainingComponent } from './training/training.component';
import { MenuComponent } from './menu/menu.component';
import {AppModule} from "../app.module";
import {RouterLink, RouterLinkWithHref} from "@angular/router";
import { UnissmaComponent } from './unissma/unissma.component';
import { LalaComponent } from './lala/lala.component';
import { AcademicoComponent } from './academico/academico.component';
import { AvacComponent } from './avac/avac.component';
import { AcreditacionComponent } from './acreditacion/acreditacion.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { FormComponent } from './form/form.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GeneralCallComponent } from './general-call/general-call.component';
import { InvestigacionComponent } from './investigacion/investigacion.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'teacher_training', component: TrainingComponent},
    { path: 'signup', component: MenuComponent },
    { path: 'groups', component: GroupsComponent },
    { path: 'investigation', component: InvestigacionComponent },
    { path: 'unissma', component: UnissmaComponent},
    { path: 'curriculum_reform', component: TrainingComponent},
    { path: 'lala', component: LalaComponent},
    { path: 'acreditation', component: AcreditacionComponent},
    { path: 'avac', component: AvacComponent},
    { path: 'form', component: FormComponent},
    { path: 'general_call', component: GeneralCallComponent}
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule.forChild(routes),
        RouterLinkWithHref,
        RouterLink,
        MatFormFieldModule,
        MatCardModule,
        MatButtonModule,
        MatPaginatorModule,
        MatInputModule,
        MatIconModule,
        ReactiveFormsModule,
    ],
    exports: [
        TrainingComponent,
        MenuComponent,
        CalendarComponent
    ],
    declarations: [
        GroupsComponent,
        MenuComponent,
        TrainingComponent,
        UnissmaComponent,
        LalaComponent,
        AcademicoComponent,
        AvacComponent,
        AcreditacionComponent,
        FormComponent,
        CalendarComponent,
        GeneralCallComponent,
        InvestigacionComponent
    ]
})
export class SectionsModule { }
