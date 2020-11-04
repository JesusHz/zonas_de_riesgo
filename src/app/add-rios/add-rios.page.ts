import { Component, OnInit } from '@angular/core';
import {
  ToastController,
  LoadingController,
  NavController
} from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Rio } from "../models/rios.model";

@Component({
  selector: 'app-add-rios',
  templateUrl: './add-rios.page.html',
  styleUrls: ['./add-rios.page.scss'],
})
export class AddRiosPage implements OnInit {
  rio = {} as Rio;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
  }

  async createRio(rio: Rio) {
    // console.log(post);

    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Cargando..."
      });
      loader.present();

      try {
        await this.firestore.collection("rios").add(rio);
      } catch (e) {
        this.showToast(e);
      }

      // dismiss loader
      loader.dismiss();

      // redirect to home page
      this.navCtrl.navigateRoot("rios");
    }
  }

  formValidation() {
    if (!this.rio.itemID) {
      // show toast message
      this.showToast("Ingresa clave");
      return false;
    }

    if (!this.rio.nombre_municipio) {
      // show toast message
      this.showToast("Ingresa nombre");
      return false;
    }

    if (!this.rio.longitud) {
      // show toast message
      this.showToast("Ingresa longitud");
      return false;
    }

    if (!this.rio.rio) {
      // show toast message
      this.showToast("Ingresa rio");
      return false;
    }

    return true;
  }

  showToast(message: string) {
    this.toastCtrl
      .create({
        message: message,
        duration: 3000
      })
      .then(toastData => toastData.present());
  }
}
