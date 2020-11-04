import { Component, OnInit } from '@angular/core';
import { Poblado } from "../models/poblados.model";
import { ActivatedRoute } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import {
  LoadingController,
  ToastController,
  NavController
} from "@ionic/angular";

@Component({
  selector: 'app-edit-poblados',
  templateUrl: './edit-poblados.page.html',
  styleUrls: ['./edit-poblados.page.scss'],
})
export class EditPobladosPage implements OnInit {
  poblado = {} as Poblado;
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
      .doc("poblados/" + id)
      .valueChanges()
      .subscribe(data => {
        this.poblado.itemID = data["itemID"];
        this.poblado.nombre_municipio = data["nombre_municipio"];
        this.poblado.poblacion = data["poblacion"];

        // dismiss loader
        loader.dismiss();
      });
  }

  async updatePoblado(poblado: Poblado) {
    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Cargando..."
      });
      loader.present();

      try {
        await this.firestore.doc("poblados/" + this.id).update(poblado);
      } catch (e) {
        this.showToast(e);
      }

      // dismiss loader
      await loader.dismiss();

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
