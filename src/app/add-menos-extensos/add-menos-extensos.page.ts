import { Component, OnInit } from '@angular/core';
import {
  ToastController,
  LoadingController,
  NavController
} from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Extenso } from "../models/extensos.model";

@Component({
  selector: 'app-add-menos-extensos',
  templateUrl: './add-menos-extensos.page.html',
  styleUrls: ['./add-menos-extensos.page.scss'],
})
export class AddMenosExtensosPage implements OnInit {
  extenso = {} as Extenso;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
  }

  async createExtenso(extenso: Extenso) {
    // console.log(post);

    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Cargando..."
      });
      loader.present();

      try {
        await this.firestore.collection("menos-extensos").add(extenso);
      } catch (e) {
        this.showToast(e);
      }

      // dismiss loader
      loader.dismiss();

      // redirect to home page
      this.navCtrl.navigateRoot("menos-extensos");
    }
  }

  formValidation() {
    if (!this.extenso.itemID) {
      // show toast message
      this.showToast("Ingresa clave");
      return false;
    }

    if (!this.extenso.nombre_municipio) {
      // show toast message
      this.showToast("Ingresa nombre");
      return false;
    }

    if (!this.extenso.superficie) {
      // show toast message
      this.showToast("Ingresa superficie");
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
