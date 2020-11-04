import { Component, OnInit } from '@angular/core';
import { Industrializado } from "../models/industrializados.model";
import { ActivatedRoute } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import {
  LoadingController,
  ToastController,
  NavController
} from "@ionic/angular";

@Component({
  selector: 'app-edit-industrializados',
  templateUrl: './edit-industrializados.page.html',
  styleUrls: ['./edit-industrializados.page.scss'],
})
export class EditIndustrializadosPage implements OnInit {
  industrializado = {} as Industrializado;
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
      .doc("industrializados/" + id)
      .valueChanges()
      .subscribe(data => {
        this.industrializado.itemID = data["itemID"];
        this.industrializado.nombre_municipio = data["nombre_municipio"];
    
        // dismiss loader
        loader.dismiss();
      });
  }

  async updateIndustrializado(industrializado: Industrializado) {
    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Cargando..."
      });
      loader.present();

      try {
        await this.firestore.doc("industrializados/" + this.id).update(industrializado);
      } catch (e) {
        this.showToast(e);
      }

      // dismiss loader
      await loader.dismiss();

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
