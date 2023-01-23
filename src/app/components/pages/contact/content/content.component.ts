import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import { Contact } from '../../../models/contact';
import { MatSnackBar } from '@angular/material/snack-bar';
import { data } from 'jquery';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentComponent implements OnInit {

  model = new Contact;
  submitted = false;
  error: {} | undefined;
  constructor(private contactService: ContactService , private snackBar: MatSnackBar) { }

  onSubmit() {
    //console.log("form output>>>", this.model);
   
    this.submitted = true; 
    return this.contactService.contactForm(this.model).subscribe(
      //data => this.model = data,
      
     // error => this.error = error
      (data : any ) => {
       //  console.log("data contacte>>>", data);
         
        if(data.message == 'Votre réclamation est envoyée avec succès'){
          this.showNotification(
            ['success'],
             data.message,
            'top',
            'end'
          );
        
          this.model.message = "";
          this.model.email = "";
          this.model.name = "";
          this.model.phone = "";
          this.model.subject = "";

        }
      }, err => {
      
        this.showNotification(
          ['error'],
          err,
         'top',
         'end'
       );
     }
    );
  }; 

  resolved(captchaResponse: string) {
   // console.log(`Resolved response token: ${captchaResponse}`);
  };



  zoom: number = 12;
  lat: number = 37.03233494058279;
  lng: number = 9.707485797955997;

  ngOnInit(): void {
  }


   
  showNotification(colorName:any, text:any, placementFrom:any, placementAlign:any) {
    this.snackBar.open(text, '', {
      duration: 4000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }
}
