import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { Card } from './shared/card/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Banner } from './shared/banner/banner';
import { Container } from './shared/container/container';
import { Home } from './page/home/home';
import { CardBusca } from './shared/card-busca/card-busca';
import { MatCardModule } from '@angular/material/card';
import { CardDepoimento } from './shared/card-depoimento/card-depoimento';
import { FormBusca } from './shared/form-busca/form-busca';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Modal } from './shared/modal/modal';
import {MatDialogModule} from '@angular/material/dialog';
import { BotaoControle } from './shared/botao-controle/botao-controle';
import { PromocoesComponent } from './shared/promocoes/promocoes';
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { DropdownUf } from './shared/form-busca/dropdown-uf/dropdown-uf';
import { SeletorPassageiro } from './shared/seletor-passageiro/seletor-passageiro';




@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Card,
    Banner,
    Container,
    Home,
    CardBusca,
    CardDepoimento,
    FormBusca,
    Modal,
    BotaoControle,
    PromocoesComponent,
    CardBusca,
    DropdownUf,
    SeletorPassageiro,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
