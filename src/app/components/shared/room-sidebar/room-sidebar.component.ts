import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BreadcrumbComponent } from 'angular-crumbs';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const ApiPath = environment.API ;
@Component({
  selector: 'app-room-sidebar',
  templateUrl: './room-sidebar.component.html',
  styleUrls: ['./room-sidebar.component.css']
})
export class RoomSidebarComponent implements OnInit {

  @Output() bookTitleCreated = new EventEmitter<{ startDate: string, endDate: string, room: string }>();
  @Output() FormCreated = new EventEmitter<{ type: string, number_persone: number, nom: string, prenom: string, email: string, phone_number: string, tarif: number}>();
  bookTitle:any;
  @Input() childMessage: any;
  @Input() changeView: any;
  roomType:any;
  roomPrice:any;
  showType = true;
  makes: any[] = [];
  dates:any[] = [];

  picker:any;

  reservationChambreForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router, private http : HttpClient) { 
 // console.log("room>>>>",this.childMessage.title);
  



    this.reservationChambreForm = this.createReservationChambreForm();
 
  }


  createReservationChambreForm(): FormGroup {
    return this.fb.group({
    
      date_arrive : [ '' , Validators.required],
      date_depart : ['' , Validators.required],
      type : [ '' , Validators.required],
      number_persone : ['' , Validators.required],
      nom : [ '' , Validators.required],
      prenom : ['' , Validators.required],
      email : [ '' , Validators.required],
      phone_number : [ '' , Validators.required]
    });
  }





  ngOnInit(): void {
   // console.log("room>>>>",this.childMessage.title);
    this.http.get(ApiPath + "reservations/check/room?room="+ `${this.childMessage.title}`).subscribe((resp : any) =>{
      //console.log("resp1>>>>",resp);
   //  
      var newArray = Array.prototype.concat.apply([], resp);

      for(let i = 0; i< newArray.length; i++){
           this.makes.push(newArray[i].slice(0,10))
      }
        // console.log("dates>>>>", newArray);
        // console.log("makes>>>>",  this.makes);
})

    
    for(let i=0; i < this.dates.length; i++){
      this.makes.push(this.dates[i].slice(1,4))
     // console.log("list>>>",this.makes);
    
 }
   
  }


  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {

    const dateArray = [];
      if (view === 'month') {
        
        const date = cellDate;
        const newdate =  formatDate(date, 'yyyy-MM-dd', 'en');
    
        return ((this.makes.includes(newdate))) ? 'example-custom-date-class' : 'example-custom-date-class2';
    
     } 
         
      return ''
  }



 









  addNewReservation(){
  
    
//  console.log("date 1>>>",formatDate(this.reservationChambreForm.get('date_arrive')?.value, 'yyyy-MM-dd', 'en')); 
  // console.log("date 2>>>",formatDate(this.reservationChambreForm.get('date_depart')?.value, 'yyyy-MM-dd', 'en'));

  }




  onAddTitle() {
    
    if (!(this.reservationChambreForm.get('date_arrive')?.value && this.reservationChambreForm.get('date_depart')?.value)) {
      this.showNotification(
        ['error'],
         "Il faut choisir la date de disponibilité",
        'top',
        'end'
      );
        return;
      }

     
    this.bookTitleCreated.emit({ 
      startDate: formatDate(this.reservationChambreForm.get('date_arrive')?.value, 'yyyy-MM-dd', 'en'),
      endDate:formatDate(this.reservationChambreForm.get('date_depart')?.value, 'yyyy-MM-dd', 'en'),
      room : this.childMessage.title
    });
  }

  onAddinfo() {
   if (!this.reservationChambreForm.valid) {
      this.showNotification(
        ['error'],
         "Le formulaire n'est pas validé",
        'top',
        'end'
      );
        return;
      }
    
      
      

      if(this.reservationChambreForm.get('type')?.value == 1 && this.childMessage.title == "Bonneli")
      {
         this.roomType = "Haute de saison double";
         this.roomPrice = 350;
      }
      if(this.reservationChambreForm.get('type')?.value == 2 &&  this.childMessage.title == "Bonneli")
      {
         this.roomType = "Basse de saison double";
         this.roomPrice = 280;
      }
      if(this.reservationChambreForm.get('type')?.value == 3 &&  this.childMessage.title == "Bonneli")
      {
         this.roomType = "Basse de saison single";
         this.roomPrice = 210;
      }
      if(this.reservationChambreForm.get('type')?.value == 4 &&  this.childMessage.title == "Bonneli")
      {
        this.roomType = "Haute de saison single";
         this.roomPrice = 280;
      }

      ////////////////////////////////////////////////////
      if(this.reservationChambreForm.get('type')?.value == 1 && this.childMessage.title == "Ruppia")
      {
         this.roomType = "Haute de saison double";
         this.roomPrice = 385;
      }
      if(this.reservationChambreForm.get('type')?.value == 2 &&  this.childMessage.title == "Ruppia")
      {
         this.roomType = "Basse de saison double";
         this.roomPrice = 280;
      }
      if(this.reservationChambreForm.get('type')?.value == 3 &&  this.childMessage.title == "Ruppia")
      {
         this.roomType = "Basse de saison single";
         this.roomPrice = 245;
      }
      if(this.reservationChambreForm.get('type')?.value == 4 &&  this.childMessage.title == "Ruppia")
      {
        this.roomType = "Haute de saison single";
         this.roomPrice = 315;
      }
       ///////////////////////////////////////////////// 

      if(this.reservationChambreForm.get('type')?.value == 1 && this.childMessage.title == "Amorpha")
      {
         this.roomType = "Haute de saison double";
         this.roomPrice = 385;
      }
      if(this.reservationChambreForm.get('type')?.value == 2 &&  this.childMessage.title == "Amorpha")
      {
         this.roomType = "Basse de saison double";
         this.roomPrice = 315;
      }
      if(this.reservationChambreForm.get('type')?.value == 3 &&  this.childMessage.title == "Amorpha")
      {
         this.roomType = "Basse de saison single";
         this.roomPrice = 245;
      }
      if(this.reservationChambreForm.get('type')?.value == 4 &&  this.childMessage.title == "Amorpha")
      {
        this.roomType = "Haute de saison single";
         this.roomPrice = 315;
      }

       //////////////////////////////////////////////////

      if(this.reservationChambreForm.get('type')?.value == 1 && this.childMessage.title == "Colony")
      {
         this.roomType = "Haute de saison double";
         this.roomPrice = 525;
      }
      if(this.reservationChambreForm.get('type')?.value == 2 &&  this.childMessage.title == "Colony")
      {
         this.roomType = "Basse de saison double";
         this.roomPrice = 455;
      }
      if(this.reservationChambreForm.get('type')?.value == 3 &&  this.childMessage.title == "Colony")
      {
         this.roomType = "Basse de saison single";
         this.roomPrice = 385;
      }
      if(this.reservationChambreForm.get('type')?.value == 4 &&  this.childMessage.title == "Colony")
      {
        this.roomType = "Haute de saison single";
         this.roomPrice = 455;
      }
       ///////////////////////////////////////////////////

       if(this.reservationChambreForm.get('type')?.value == 1 && this.childMessage.title == "Ciconia")
       {
          this.roomType = "Haute de saison double";
          this.roomPrice = 370;
       }
       if(this.reservationChambreForm.get('type')?.value == 2 &&  this.childMessage.title == "Ciconia")
       {
          this.roomType = "Basse de saison double";
          this.roomPrice = 300;
       }
       if(this.reservationChambreForm.get('type')?.value == 3 &&  this.childMessage.title == "Ciconia")
       {
          this.roomType = "Basse de saison single";
          this.roomPrice = 230;
       }
       if(this.reservationChambreForm.get('type')?.value == 4 &&  this.childMessage.title == "Ciconia")
       {
         this.roomType = "Haute de saison single";
          this.roomPrice = 300;
       }
      ///////////////////////////////////////////////////////////////////

      if(this.reservationChambreForm.get('type')?.value == 1 && this.childMessage.title == "Cicogne")
      {
         this.roomType = "Haute de saison double";
         this.roomPrice = 405;
      }
      if(this.reservationChambreForm.get('type')?.value == 2 &&  this.childMessage.title == "Cicogne")
      {
         this.roomType = "Basse de saison double";
         this.roomPrice = 335;
      }
      if(this.reservationChambreForm.get('type')?.value == 3 &&  this.childMessage.title == "Cicogne")
      {
         this.roomType = "Basse de saison single";
         this.roomPrice = 265;
      }
      if(this.reservationChambreForm.get('type')?.value == 4 &&  this.childMessage.title == "Cicogne")
      {
        this.roomType = "Haute de saison single";
         this.roomPrice = 335;

      }

    /*  if(this.reservationChambreForm.get('type')?.value == 1 &&  this.childMessage.title == "Tout la villa")
      {
        this.roomType = "Haute de saison";
         this.roomPrice = 2600;

      }
      if(this.reservationChambreForm.get('type')?.value == 2 &&  this.childMessage.title == "Tout la villa")
      {
        this.roomType = "Basse de saison";
         this.roomPrice = 2100;

      }*/


      this.getTarifClient(this.roomPrice)
      //console.log("rommprice >>>>", this.roomPrice);
     
      
    this.FormCreated.emit({ 
      type : this.roomType,
      number_persone : this.reservationChambreForm.get('number_persone')?.value,
      nom: this.reservationChambreForm.get('nom')?.value,
      email : this.reservationChambreForm.get('email')?.value,
      prenom : this.reservationChambreForm.get('prenom')?.value,
      phone_number : this.reservationChambreForm.get('phone_number')?.value,
      tarif: this.roomPrice
    });

    this.showNotification(
      ['success'],
       "Réservation effectuée avec succès",
      'top',
      'end'
    );

    this.router.navigate(["/room-grid"])

  }


  
  showNotification(colorName:any, text:any, placementFrom:any, placementAlign:any) {
    this.snackBar.open(text, '', {
      duration: 4000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }



  getTarifClient(roomPrice:any){
      var Time = this.reservationChambreForm.get('date_depart')?.value.getTime()- this.reservationChambreForm.get('date_arrive')?.value.getTime() ; 
      var Days = Time / (1000 * 3600 * 24);
    // console.log("days>>>", Days);
     this.roomPrice = Days * roomPrice;
   //  console.log("rommPrice2 >>>>", this.roomPrice);
  }



}
