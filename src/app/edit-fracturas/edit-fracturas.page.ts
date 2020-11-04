import { Component, OnInit } from '@angular/core';
import { Riesgo } from "../models/riesgos.model";
import { ActivatedRoute } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import {
  LoadingController,
  ToastController,
  NavController
} from "@ionic/angular";

@Component({
  selector: 'app-edit-fracturas',
  templateUrl: './edit-fracturas.page.html',
  styleUrls: ['./edit-fracturas.page.scss'],
})
export class EditFracturasPage implements OnInit {
  riesgo = {} as Riesgo;
  id: any;
  
  constructor(
    private actRoute: ActivatedRoute,
    private firestore: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) {
    this.id = this.actRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.getPostById(this.id);
  }

  async getPostById(id: string) {
    // show loader
    let loader = await this.loadingCtrl.create({
      message: "Cargando..."
    });
    loader.present();

    this.firestore
      .doc("fracturas/" + id)
      .valueChanges()
      .subscribe(data => {
        this.riesgo.itemID = data["itemID"];
        this.riesgo.nombre_municipio = data["nombre_municipio"];
        this.riesgo.riesgo = data["riesgo"];

        // dismiss loader
        loader.dismiss();
      });
  }

  async updateRiesgo(riesgo: Riesgo) {
    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Cargando..."
      });
      loader.present();

      try {
        await this.firestore.doc("fracturas/" + this.id).update(riesgo);
      } catch (e) {
        this.showToast(e);
      }

      // dismiss loader
      await loader.dismiss();

      // redirect to home page
      this.navCtrl.navigateRoot("fracturas");
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
