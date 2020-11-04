import { Component, OnInit } from '@angular/core';
import {
  ToastController,
  LoadingController,
  NavController
} from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Industrializado } from "../models/industrializados.model";

@Component({
  selector: 'app-add-industrializados',
  templateUrl: './add-industrializados.page.html',
  styleUrls: ['./add-industrializados.page.scss'],
})
export class AddIndustrializadosPage implements OnInit {
  industrializado = {} as Industrializado;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
  }

  async createIndustrializado(industrializado: Industrializado) {
    // console.log(post);

    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Cargando..."
      });
      loader.present();

      try {
        await this.firestore.collection("industrializados").add(industrializado);
      } catch (e) {
        this.showToast(e);
      }

      // dismiss loader
      loader.dismiss();

      // redirect to home page
      this.navCtrl.navigateRoot("industrializados");
    }
  }

  formValidation() {
    if (!this.industrializado.itemID) {
      // show toast message
      this.showToast("Ingresa clave");
      return false;
    }

    if (!this.industrializado.nombre_municipio) {
      // show toast message
      this.showToast("Ingresa nombre");
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
