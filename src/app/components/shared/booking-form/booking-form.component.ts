import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  
  reservationChambreForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.reservationChambreForm = this.createReservationChambreForm();
    
  }

  ngOnInit(): void {
  }

  createReservationChambreForm(): FormGroup {
    return this.fb.group({
      date_arrive : [ '' , Validators.required],
      date_depart : ['' , Validators.required],
      
    });
  }


  addNewReservation(){
  
    
   console.log("date 1>>>",formatDate(this.reservationChambreForm.get('date_arrive')?.value, 'yyyy-MM-dd', 'en')); 
   console.log("date 2>>>",formatDate(this.reservationChambreForm.get('date_depart')?.value, 'yyyy-MM-dd', 'en'));

  }



}
