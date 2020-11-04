import { Component, OnInit } from '@angular/core';
import {
  ToastController,
  LoadingController,
  NavController
} from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Cuerpo } from "../models/cuerpos.model";

@Component({
  selector: 'app-add-cuerpos',
  templateUrl: './add-cuerpos.page.html',
  styleUrls: ['./add-cuerpos.page.scss'],
})
export class AddCuerposPage implements OnInit {
  cuerpo = {} as Cuerpo;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
  }

  async createCuerpo(cuerpo: Cuerpo) {
    // console.log(post);

    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Cargando..."
      });
      loader.present();

      try {
        await this.firestore.collection("cuerpos").add(cuerpo);
      } catch (e) {
        this.showToast(e);
      }

      // dismiss loader
      loader.dismiss();

      // redirect to home page
      this.navCtrl.navigateRoot("cuerpos");
    }
  }

  formValidation() {
    if (!this.cuerpo.itemID) {
      // show toast message
      this.showToast("Ingresa clave");
      return false;
    }

    if (!this.cuerpo.nombre_municipio) {
      // show toast message
      this.showToast("Ingresa nombre");
      return false;
    }

    if (!this.cuerpo.capacidad) {
      // show toast message
      this.showToast("Ingresa capacidad");
      return false;
    }

    if (!this.cuerpo.cuerpo) {
      // show toast message
      this.showToast("Ingresa cuerpo");
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
