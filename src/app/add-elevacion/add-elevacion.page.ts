import { Component, OnInit } from '@angular/core';
import {
  ToastController,
  LoadingController,
  NavController
} from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Elevacion } from "../models/elevaciones.model";

@Component({
  selector: 'app-add-elevacion',
  templateUrl: './add-elevacion.page.html',
  styleUrls: ['./add-elevacion.page.scss'],
})
export class AddElevacionPage implements OnInit {
  elevacion = {} as Elevacion;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
  }

  async createElevacion(elevacion: Elevacion) {
    // console.log(post);

    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Cargando..."
      });
      loader.present();

      try {
        await this.firestore.collection("elevaciones").add(elevacion);
      } catch (e) {
        this.showToast(e);
      }

      // dismiss loader
      loader.dismiss();

      // redirect to home page
      this.navCtrl.navigateRoot("elevaciones");
    }
  }

  formValidation() {
    if (!this.elevacion.itemID) {
      // show toast message
      this.showToast("Ingresa clave");
      return false;
    }

    if (!this.elevacion.nombre_municipio) {
      // show toast message
      this.showToast("Ingresa nombre");
      return false;
    }

    if (!this.elevacion.altitud) {
      // show toast message
      this.showToast("Ingresa altitud");
      return false;
    }

    if (!this.elevacion.elevacion) {
      // show toast message
      this.showToast("Ingresa elevacion");
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
