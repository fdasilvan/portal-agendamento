import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})

export class ScheduleListComponent implements OnInit {

  showMoreDisabled = true;

  data: Array<any> = [
    {
      name: 'Giuliano Minor Zortea',
      register: 'CRM 23987 RS',
      specialty: 'Cardiologista',
      address: 'Rua Professor Annes Dias, 166 / Salas 303 e 305 - Centro , Porto Alegre - RS',
      phoneNumber: '(051) 3225-2082',
      imgSrc: 'http://www.symbiosis.ae/medicalcentre/images/doctors/Dr_Ateeque1.png',
      appointments: [{
        start_time: '09:00', locked: true
      },
      {
        start_time: '10:30', locked: true
      },
      {
        start_time: '11:00', locked: false
      },
      {
        start_time: '11:30', locked: true
      },
      {
        start_time: '12:00', locked: false
      }]
    },
    {
      name: 'Fernando Antonio Lucchese',
      register: 'CRM 4855 RS',
      specialty: 'Cardiologista, Cirurgião Cardiovascular, Cirurgião Geral, Cirurgião Pediátrico, Cirurgião Torácico',
      address: 'Hosp Sao Fco/Sta Casa Poa - Centro , Porto Alegre - RS',
      phoneNumber: '(051) 3225-3019',
      imgSrc: 'http://www.symbiosis.ae/medicalcentre/images/doctors/Dr_Sheirf1.png',
      appointments: [{
        start_time: '10:00', locked: true
      },
      {
        start_time: '11:00', locked: true
      },
      {
        start_time: '12:00', locked: false
      },
      {
        start_time: '13:00', locked: true
      },
      {
        start_time: '13:00', locked: false
      },
      {
        start_time: '14:00', locked: true
      },
      {
        start_time: '15:00', locked: true
      },
      {
        start_time: '16:00', locked: false
      }]
    },
    {
      name: 'Mauro Joaquim Figueiredo da Silva',
      register: 'CRM 17911 RS',
      specialty: 'Cardiologista, Clínico Geral',
      address: 'Avenida Osvaldo Aranha, 440 Sl 804 - Bom Fim , Porto Alegre - RS',
      phoneNumber: '(051) 3311-6630',
      imgSrc: 'http://www.drsunilbisen.com/images/profile.jpg',
      appointments: [{
        start_time: '13:00', locked: false
      },
      {
        start_time: '14:00', locked: true
      },
      {
        start_time: '15:00', locked: false
      },
      {
        start_time: '16:00', locked: true
      }]
    },
    {
      name: 'Francisco Pinheiro',
      register: 'CRM 9702 RS',
      specialty: 'Cardiologista, Radiologista',
      address: 'Rua Gal João Telles, 512 S 604 - Bom Fim , Porto Alegre - RS',
      phoneNumber: '(051) 3311-1447',
      imgSrc: 'https://www.drkmh.com/images/doctors/Dr-HARISUDHAN.jpg',
      appointments: [{
        start_time: '08:30', locked: true
      },
      {
        start_time: '09:00', locked: true
      },
      {
        start_time: '09:30', locked: false
      },
      {
        start_time: '10:00', locked: true
      },
      {
        start_time: '10:30', locked: false
      },
      {
        start_time: '11:00', locked: false
      },
      {
        start_time: '11:30', locked: true
      },
      {
        start_time: '13:30', locked: false
      }]
    }
  ];

  eventsObject: Array<any> = [
    { 'label': 'Editar', 'function': 'onClick1' },
    { 'label': 'Excluir', 'function': 'onClick2' },
    { 'label': 'Clonar', 'function': 'onClick3' }];

  constructor() { }

  ngOnInit() { }
}
