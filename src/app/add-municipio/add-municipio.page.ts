import { Component, OnInit } from '@angular/core';
import {
  ToastController,
  LoadingController,
  NavController
} from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Municipio } from "../models/municipios.model";

@Component({
  selector: 'app-add-municipio',
  templateUrl: './add-municipio.page.html',
  styleUrls: ['./add-municipio.page.scss'],
})
export class AddMunicipioPage implements OnInit {
  municipio = {} as Municipio;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
  }

  async createMunicipio(municipio: Municipio) {
    // console.log(post);

    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Cargando..."
      });
      loader.present();

      try {
        await this.firestore.collection("municipios").add(municipio);
      } catch (e) {
        this.showToast(e);
      }

      // dismiss loader
      loader.dismiss();

      // redirect to home page
      this.navCtrl.navigateRoot("municipios");
    }
  }

  formValidation() {
    if (!this.municipio.itemID) {
      // show toast message
      this.showToast("Ingresa clave");
      return false;
    }

    if (!this.municipio.nombre_municipio) {
      // show toast message
      this.showToast("Ingresa nombre");
      return false;
    }

    if (!this.municipio.significado) {
      // show toast message
      this.showToast("Ingresa significado");
      return false;
    }

    if (!this.municipio.cabecera) {
      // show toast message
      this.showToast("Ingresa cabecera");
      return false;
    }

    if (!this.municipio.superficie) {
      // show toast message
      this.showToast("Ingresa superficie");
      return false;
    }

    if (!this.municipio.altitud) {
      // show toast message
      this.showToast("Ingresa altitud");
      return false;
    }

    if (!this.municipio.clima) {
      // show toast message
      this.showToast("Ingresa clima");
      return false;
    }

    if (!this.municipio.localizacion) {
      // show toast message
      this.showToast("Ingresa localizacion");
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
