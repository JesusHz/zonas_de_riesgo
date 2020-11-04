import { Component, OnInit } from '@angular/core';
import { Extenso } from "../models/extensos.model";
import { ActivatedRoute } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import {
  LoadingController,
  ToastController,
  NavController
} from "@ionic/angular";

@Component({
  selector: 'app-edit-menos-extensos',
  templateUrl: './edit-menos-extensos.page.html',
  styleUrls: ['./edit-menos-extensos.page.scss'],
})
export class EditMenosExtensosPage implements OnInit {
  extenso = {} as Extenso;
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
      .doc("menos-extensos/" + id)
      .valueChanges()
      .subscribe(data => {
        this.extenso.itemID = data["itemID"];
        this.extenso.nombre_municipio = data["nombre_municipio"];
        this.extenso.superficie = data["superficie"];

        // dismiss loader
        loader.dismiss();
      });
  }

  async updateExtenso(extenso: Extenso) {
    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Cargando..."
      });
      loader.present();

      try {
        await this.firestore.doc("menos-extensos/" + this.id).update(extenso);
      } catch (e) {
        this.showToast(e);
      }

      // dismiss loader
      await loader.dismiss();

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
