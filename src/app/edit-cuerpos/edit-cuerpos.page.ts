import { Component, OnInit } from '@angular/core';
import { Cuerpo } from "../models/cuerpos.model";
import { ActivatedRoute } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import {
  LoadingController,
  ToastController,
  NavController
} from "@ionic/angular";

@Component({
  selector: 'app-edit-cuerpos',
  templateUrl: './edit-cuerpos.page.html',
  styleUrls: ['./edit-cuerpos.page.scss'],
})
export class EditCuerposPage implements OnInit {
  cuerpo = {} as Cuerpo;
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
      .doc("cuerpos/" + id)
      .valueChanges()
      .subscribe(data => {
        this.cuerpo.itemID = data["itemID"];
        this.cuerpo.nombre_municipio = data["nombre_municipio"];
        this.cuerpo.capacidad = data["capacidad"];
        this.cuerpo.cuerpo = data["cuerpo"];

        // dismiss loader
        loader.dismiss();
      });
  }

  async updateCuerpo(cuerpo: Cuerpo) {
    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Cargando..."
      });
      loader.present();

      try {
        await this.firestore.doc("cuerpos/" + this.id).update(cuerpo);
      } catch (e) {
        this.showToast(e);
      }

      // dismiss loader
      await loader.dismiss();

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
