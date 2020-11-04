import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { ToastController, LoadingController, Platform } from "@ionic/angular";
import { AlertController } from '@ionic/angular';
import { Router } from "@angular/router";
declare var window;
var aux = -1;

@Component({
  selector: 'app-inundaciones',
  templateUrl: './inundaciones.page.html',
  styleUrls: ['./inundaciones.page.scss'],
})
export class InundacionesPage {
  riesgos: any;
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

  async getRiesgos() {
    // console.log("get posts");

    // show loader
    let loader = await this.loadingCtrl.create({
      message: "Cargando..."
    });
    loader.present();

    try {
      this.firestore
        .collection("inundaciones")
        .snapshotChanges()
        .subscribe(data => {
          this.riesgos = data.map(e => {
            return {
              id: e.payload.doc.id,
              itemID: e.payload.doc.data()["itemID"],
              nombre_municipio: e.payload.doc.data()["nombre_municipio"],
              riesgo: e.payload.doc.data()["riesgo"]
            };
          });

          // dismiss loader
          loader.dismiss();
        });
    } catch (e) {
      this.showToast(e);
    }
  }

  async deleteRiesgo(id: string) {
    // console.log(id);
    if (aux == 1) {
      // show loader
    let loader = await this.loadingCtrl.create({
      message: "Cargando..."
    });
    loader.present();

    await this.firestore.doc("inundaciones/" + id).delete();

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

  addRiesgo() {
    if (aux == 1) {
      this.router.navigateByUrl("/add-inundaciones");
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

  editRiesgo(id: string) {
    if (aux == 1) {
      this.router.navigateByUrl("/edit-inundaciones/"+id);
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
    this.getRiesgos();
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
