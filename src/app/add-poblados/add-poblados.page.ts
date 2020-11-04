import { Component, OnInit } from '@angular/core';
import {
  ToastController,
  LoadingController,
  NavController
} from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Poblado } from "../models/poblados.model";

@Component({
  selector: 'app-add-poblados',
  templateUrl: './add-poblados.page.html',
  styleUrls: ['./add-poblados.page.scss'],
})
export class AddPobladosPage implements OnInit {
  poblado = {} as Poblado;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
  }

  async createPoblado(poblado: Poblado) {
    // console.log(post);

    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Cargando..."
      });
      loader.present();

      try {
        await this.firestore.collection("poblados").add(poblado);
      } catch (e) {
        this.showToast(e);
      }

      // dismiss loader
      loader.dismiss();

      // redirect to home page
      this.navCtrl.navigateRoot("poblados");
    }
  }

  formValidation() {
    if (!this.poblado.itemID) {
      // show toast message
      this.showToast("Ingresa clave");
      return false;
    }

    if (!this.poblado.nombre_municipio) {
      // show toast message
      this.showToast("Ingresa nombre");
      return false;
    }

    if (!this.poblado.poblacion) {
      // show toast message
      this.showToast("Ingresa poblacion");
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
