import { Component, OnInit } from '@angular/core';
import { Elevacion } from "../models/elevaciones.model";
import { ActivatedRoute } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import {
  LoadingController,
  ToastController,
  NavController
} from "@ionic/angular";

@Component({
  selector: 'app-edit-elevacion',
  templateUrl: './edit-elevacion.page.html',
  styleUrls: ['./edit-elevacion.page.scss'],
})
export class EditElevacionPage implements OnInit {
  elevacion = {} as Elevacion;
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
      .doc("elevaciones/" + id)
      .valueChanges()
      .subscribe(data => {
        this.elevacion.itemID = data["itemID"];
        this.elevacion.nombre_municipio = data["nombre_municipio"];
        this.elevacion.altitud = data["altitud"];
        this.elevacion.elevacion = data["elevacion"];

        // dismiss loader
        loader.dismiss();
      });
  }

  async updateElevacion(elevacion: Elevacion) {
    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Cargando..."
      });
      loader.present();

      try {
        await this.firestore.doc("elevaciones/" + this.id).update(elevacion);
      } catch (e) {
        this.showToast(e);
      }

      // dismiss loader
      await loader.dismiss();

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
