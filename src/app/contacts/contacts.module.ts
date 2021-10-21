import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListeContactsComponent } from './liste-contacts/liste-contacts.component';
import { ContactComponent } from './contact/contact.component';
import { HasContactGuard } from './has-contact.guard';

const appChild: Routes = [
  {
    path: 'listeContacts',
    component: ListeContactsComponent,
    canActivate: [HasContactGuard],
  },
  {
    path: 'contact/:id',
    component: ContactComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(appChild)],
  declarations: [ListeContactsComponent, ContactComponent],
  providers: [HasContactGuard],
})
export class ContactsModule {}
