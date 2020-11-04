import { Component, OnInit } from '@angular/core';
import { Rio } from "../models/rios.model";
import { ActivatedRoute } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import {
  LoadingController,
  ToastController,
  NavController
} from "@ionic/angular";

@Component({
  selector: 'app-edit-rios',
  templateUrl: './edit-rios.page.html',
  styleUrls: ['./edit-rios.page.scss'],
})
export class EditRiosPage implements OnInit {
  rio = {} as Rio;
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
      .doc("rios/" + id)
      .valueChanges()
      .subscribe(data => {
        this.rio.itemID = data["itemID"];
        this.rio.nombre_municipio = data["nombre_municipio"];
        this.rio.longitud = data["longitud"];
        this.rio.rio = data["rio"];

        // dismiss loader
        loader.dismiss();
      });
  }

  async updateRio(rio: Rio) {
    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Cargando..."
      });
      loader.present();

      try {
        await this.firestore.doc("rios/" + this.id).update(rio);
      } catch (e) {
        this.showToast(e);
      }

      // dismiss loader
      await loader.dismiss();

      // redirect to home page
      this.navCtrl.navigateRoot("rios");
    }
  }

  formValidation() {
    if (!this.rio.itemID) {
      // show toast message
      this.showToast("Ingresa clave");
      return false;
    }

    if (!this.rio.nombre_municipio) {
      // show toast message
      this.showToast("Ingresa nombre");
      return false;
    }

    if (!this.rio.longitud) {
      // show toast message
      this.showToast("Ingresa longitud");
      return false;
    }

    if (!this.rio.rio) {
      // show toast message
      this.showToast("Ingresa rio");
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
