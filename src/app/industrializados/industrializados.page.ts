import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { ToastController, LoadingController, Platform } from "@ionic/angular";
import { AlertController } from '@ionic/angular';
import { Router } from "@angular/router";
declare var window;
var aux = -1;

@Component({
  selector: 'app-industrializados',
  templateUrl: './industrializados.page.html',
  styleUrls: ['./industrializados.page.scss'],
})
export class IndustrializadosPage {
  industrializados: any;
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

  async getIndustrializados() {
    // console.log("get posts");

    // show loader
    let loader = await this.loadingCtrl.create({
      message: "Cargando..."
    });
    loader.present();

    try {
      this.firestore
        .collection("industrializados")
        .snapshotChanges()
        .subscribe(data => {
          this.industrializados = data.map(e => {
            return {
              id: e.payload.doc.id,
              itemID: e.payload.doc.data()["itemID"],
              nombre_municipio: e.payload.doc.data()["nombre_municipio"]
            };
          });

          // dismiss loader
          loader.dismiss();
        });
    } catch (e) {
      this.showToast(e);
    }
  }

  async deleteIndustrializado(id: string) {
    // console.log(id);
    if (aux == 1) {
      // show loader
    let loader = await this.loadingCtrl.create({
      message: "Cargando..."
    });
    loader.present();

    await this.firestore.doc("industrializados/" + id).delete();

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

  addIndustrializado() {
    if (aux == 1) {
      this.router.navigateByUrl("/add-industrializados");
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

  editIndustrializado(id: string) {
    if (aux == 1) {
      this.router.navigateByUrl("/edit-industrializados/"+id);
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
    this.getIndustrializados();
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
