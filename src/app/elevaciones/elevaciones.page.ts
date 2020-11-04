import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { ToastController, LoadingController, Platform } from "@ionic/angular";
import { AlertController } from '@ionic/angular';
import { Router } from "@angular/router";
declare var window;
var aux = -1;

@Component({
  selector: 'app-elevaciones',
  templateUrl: './elevaciones.page.html',
  styleUrls: ['./elevaciones.page.scss'],
})
export class ElevacionesPage {
  elevaciones: any;
  subscription: any;

  constructor(
    private toastCtrl: ToastController,
    private firestore: AngularFirestore,
    private loadingCtrl: LoadingController,
    private platform: Platform,
    public alertController: AlertController,
    public router: Router
  ) {aux = window.login.adminValidator()}

  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribe(() => {
      navigator["app"].exitApp();
    });
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

  async getElevaciones() {
    // console.log("get posts");

    // show loader
    let loader = await this.loadingCtrl.create({
      message: "Cargando..."
    });
    loader.present();

    try {
      this.firestore
        .collection("elevaciones")
        .snapshotChanges()
        .subscribe(data => {
          this.elevaciones = data.map(e => {
            return {
              id: e.payload.doc.id,
              itemID: e.payload.doc.data()["itemID"],
              nombre_municipio: e.payload.doc.data()["nombre_municipio"],
              altitud: e.payload.doc.data()["altitud"],
              elevacion: e.payload.doc.data()["elevacion"]
            };
          });

          // dismiss loader
          loader.dismiss();
        });
    } catch (e) {
      this.showToast(e);
    }
  }

  async deleteElevacion(id: string) {
    // console.log(id);
    if (aux == 1) {
      // show loader
    let loader = await this.loadingCtrl.create({
      message: "Cargando..."
    });
    loader.present();

    await this.firestore.doc("elevaciones/" + id).delete();

    // dismiss loader
    loader.dismiss();

    } else {
      this.alertController.create({
        header: 'Alerta',
        subHeader: 'Permiso Denegado',
        message: 'No tiene permiso para acceder a esta seccion',
        buttons: ['OK']
      }).then(res => {
  
        res.present();
  
      });
    }
  }

  addElevacion() {
    if (aux == 1) {
      this.router.navigateByUrl("/add-elevacion");
    } else {
      this.alertController.create({
        header: 'Alerta',
        subHeader: 'Permiso Denegado',
        message: 'No tiene permiso para acceder a esta seccion',
        buttons: ['OK']
      }).then(res => {
  
        res.present();
  
      });
    }
  }

  editElevacion(id: string) {
    if (aux == 1) {
      this.router.navigateByUrl("/edit-elevacion/"+id);
    } else {
      this.alertController.create({
        header: 'Alerta',
        subHeader: 'Permiso Denegado',
        message: 'No tiene permiso para acceder a esta seccion',
        buttons: ['OK']
      }).then(res => {
  
        res.present();
  
      });
    }
  }

  ionViewWillEnter() {
    this.getElevaciones();
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
