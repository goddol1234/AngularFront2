import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms'

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard2' },
            { path: 'dashboard2', loadChildren: './dashboard2/dashboard.module#DashboardModule' },
            { path: 'charts2', loadChildren: './charts2/charts.module#ChartsModule' },
            { path: 'tables2', loadChildren: './tables3/tables.module#TablesModule' },
            { path: 'forms2', loadChildren: './form2/form.module#FormModule' },
            { path: 'bs-element2', loadChildren: './bs-element2/bs-element.module#BsElementModule' },
            { path: 'grid2', loadChildren: './grid2/grid.module#GridModule' },
            { path: 'components2', loadChildren: './bs-component2/bs-component.module#BsComponentModule' },
            { path: 'Certificate', loadChildren: './Certificate/Certificate.module#CertificateModule' },
            { path: 'User', loadChildren: './User/User.module#UserModule' },
            { path: 'UserInfoInEnt', loadChildren: './UserInfoInEnt/UserInfoInEnt.module#UserInfoInEntModule' },
            { path: 'UserInfoInSch', loadChildren: './UserInfoInSch/UserInfoInSch.module#UserInfoInSchModule' },
            { path: 'School', loadChildren: './School/School.module#SchoolModule' },
            { path: 'ResumeInfoUser', loadChildren: './ResumeInfoUser/ResumeInfoUser.module#ResumeInfoUserModule' },
            { path: 'RequestResume', loadChildren: './RequestResume/RequestResume.module#RequestResumeModule' },
            { path: 'Organization', loadChildren: './Organization/Organization.module#OrganizationModule' },
            { path: 'Enterprise', loadChildren: './Enterprise/Enterprise.module#EnterpriseModule' },
            { path: 'AwardDetails', loadChildren: './AwardDetails/AwardDetails.module#AwardDetailsModule' }



        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
