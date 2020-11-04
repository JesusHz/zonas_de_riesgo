import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { ToastController, LoadingController, Platform } from "@ionic/angular";
import { AlertController } from '@ionic/angular';
import { AddPostPage } from '../add-post/add-post.page';
import { Router } from "@angular/router";
declare var window;
var aux = -1;

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  posts: any;
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

  async getPosts() {
    // console.log("get posts");

    // show loader
    let loader = await this.loadingCtrl.create({
      message: "Cargando..."
    });
    loader.present();

    try {
      this.firestore
        .collection("posts")
        .snapshotChanges()
        .subscribe(data => {
          this.posts = data.map(e => {
            return {
              id: e.payload.doc.id,
              nombre: e.payload.doc.data()["nombre"],
              cantidad: e.payload.doc.data()["cantidad"],
              precio: e.payload.doc.data()["precio"],
              fecha: e.payload.doc.data()["fecha"]
            };
          });

          // dismiss loader
          loader.dismiss();
        });
    } catch (e) {
      this.showToast(e);
    }
  }

  async deletePost(id: string) {
    // console.log(id);
    if (aux == 1) {
      // show loader
    let loader = await this.loadingCtrl.create({
      message: "Cargando..."
    });
    loader.present();

    await this.firestore.doc("posts/" + id).delete();

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

  addPost() {
    if (aux == 1) {
      this.router.navigateByUrl("/add-post");
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

  irMunicipios() {
    this.router.navigateByUrl("/municipios");
  }

  irElevaciones() {
    this.router.navigateByUrl("/elevaciones");
  }

  irRios() {
    this.router.navigateByUrl("/rios");
  }

  irCuerpos() {
    this.router.navigateByUrl("/cuerpos");
  }

  irMasPoblados() {
    this.router.navigateByUrl("/poblados");
  }

  irMasExtensos() {
    this.router.navigateByUrl("/mas-extensos");
  }

  irMenosPoblados() {
    this.router.navigateByUrl("/menos-extensos");
  }

  irIndustrializados() {
    this.router.navigateByUrl("/industrializados");
  }

  irRiesgos() {
    this.router.navigateByUrl("/riesgos");
  }

  editPost(id: string) {
    if (aux == 1) {
      this.router.navigateByUrl("/edit-post/"+id);
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
    this.getPosts();
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
