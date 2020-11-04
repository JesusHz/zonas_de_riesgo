import { Component, OnInit } from '@angular/core';
import {
  ToastController,
  LoadingController,
  NavController
} from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Riesgo } from "../models/riesgos.model";

@Component({
  selector: 'app-add-desplazamientos',
  templateUrl: './add-desplazamientos.page.html',
  styleUrls: ['./add-desplazamientos.page.scss'],
})
export class AddDesplazamientosPage implements OnInit {
  riesgo = {} as Riesgo;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
  }

  async createRiesgo(riesgo: Riesgo) {
    // console.log(post);

    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Cargando..."
      });
      loader.present();

      try {
        await this.firestore.collection("desplazamientos").add(riesgo);
      } catch (e) {
        this.showToast(e);
      }

      // dismiss loader
      loader.dismiss();

      // redirect to home page
      this.navCtrl.navigateRoot("desplazamientos");
    }
  }

  formValidation() {
    if (!this.riesgo.itemID) {
      // show toast message
      this.showToast("Ingresa clave");
      return false;
    }

    if (!this.riesgo.nombre_municipio) {
      // show toast message
      this.showToast("Ingresa nombre");
      return false;
    }

    if (!this.riesgo.riesgo) {
      // show toast message
      this.showToast("Ingresa riesgo");
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
