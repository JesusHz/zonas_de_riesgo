import { Component, OnInit } from '@angular/core';
import { Municipio } from "../models/municipios.model";
import { ActivatedRoute } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import {
  LoadingController,
  ToastController,
  NavController
} from "@ionic/angular";

@Component({
  selector: 'app-edit-municipio',
  templateUrl: './edit-municipio.page.html',
  styleUrls: ['./edit-municipio.page.scss'],
})
export class EditMunicipioPage implements OnInit {
  municipio = {} as Municipio;
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
    // console.log(this.id);

    this.getPostById(this.id);
  }

  async getPostById(id: string) {
    // show loader
    let loader = await this.loadingCtrl.create({
      message: "Cargando..."
    });
    loader.present();

    this.firestore
      .doc("municipios/" + id)
      .valueChanges()
      .subscribe(data => {
        this.municipio.itemID = data["itemID"];
        this.municipio.nombre_municipio = data["nombre_municipio"];
        this.municipio.significado = data["significado"];
        this.municipio.cabecera = data["cabecera"];
        this.municipio.superficie = data["superficie"];
        this.municipio.altitud = data["altitud"];
        this.municipio.clima = data["clima"];
        this.municipio.localizacion = data["localizacion"];

        // dismiss loader
        loader.dismiss();
      });
  }

  async updateMunicipio(municipio: Municipio) {
    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Cargando..."
      });
      loader.present();

      try {
        await this.firestore.doc("municipios/" + this.id).update(municipio);
      } catch (e) {
        this.showToast(e);
      }

      // dismiss loader
      await loader.dismiss();

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
