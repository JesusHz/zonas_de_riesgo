import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { ToastController, LoadingController, Platform } from "@ionic/angular";
import { AlertController } from '@ionic/angular';
import { Router } from "@angular/router";
declare var window;
var aux = -1;

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.page.html',
  styleUrls: ['./municipios.page.scss'],
})
export class MunicipiosPage {
  municipios: any;
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

  async getMunicipios() {
    // console.log("get posts");

    // show loader
    let loader = await this.loadingCtrl.create({
      message: "Cargando..."
    });
    loader.present();

    try {
      this.firestore
        .collection("municipios")
        .snapshotChanges()
        .subscribe(data => {
          this.municipios = data.map(e => {
            return {
              id: e.payload.doc.id,
              itemID: e.payload.doc.data()["itemID"],
              nombre_municipio: e.payload.doc.data()["nombre_municipio"],
              significado: e.payload.doc.data()["significado"],
              cabecera: e.payload.doc.data()["cabecera"],
              superficie: e.payload.doc.data()["superficie"],
              altitud: e.payload.doc.data()["altitud"],
              clima: e.payload.doc.data()["clima"],
              localizacion: e.payload.doc.data()["localizacion"]
            };
          });

          // dismiss loader
          loader.dismiss();
        });
    } catch (e) {
      this.showToast(e);
    }
  }

  async deleteMunicipio(id: string) {
    // console.log(id);
    if (aux == 1) {
      // show loader
    let loader = await this.loadingCtrl.create({
      message: "Cargando..."
    });
    loader.present();

    await this.firestore.doc("municipios/" + id).delete();

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

  addMunicipio() {
    if (aux == 1) {
      this.router.navigateByUrl("/add-municipio");
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

  editMunicipio(id: string) {
    if (aux == 1) {
      this.router.navigateByUrl("/edit-municipio/"+id);
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
    this.getMunicipios();
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
