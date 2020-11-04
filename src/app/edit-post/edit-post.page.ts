import { Component, OnInit } from "@angular/core";
import { Post } from "../models/post.model";
import { ActivatedRoute } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import {
  LoadingController,
  ToastController,
  NavController
} from "@ionic/angular";

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit-post.page.html",
  styleUrls: ["./edit-post.page.scss"]
})
export class EditPostPage implements OnInit {
  post = {} as Post;
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
      .doc("posts/" + id)
      .valueChanges()
      .subscribe(data => {
        this.post.nombre = data["nombre"];
        this.post.cantidad = data["cantidad"];
        this.post.precio = data["precio"];
        this.post.fecha = data["fecha"];

        // dismiss loader
        loader.dismiss();
      });
  }

  async updatePost(post: Post) {
    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Cargando..."
      });
      loader.present();

      try {
        await this.firestore.doc("posts/" + this.id).update(post);
      } catch (e) {
        this.showToast(e);
      }

      // dismiss loader
      await loader.dismiss();

      // redirect to home page
      this.navCtrl.navigateRoot("home");
    }
  }

  formValidation() {
    if (!this.post.nombre) {
      // show toast message
      this.showToast("Ingresa nombre");
      return false;
    }

    if (!this.post.cantidad) {
      // show toast message
      this.showToast("Ingresa cantidad");
      return false;
    }

    if (!this.post.precio) {
      // show toast message
      this.showToast("Ingresa precio");
      return false;
    }

    if (!this.post.fecha) {
      // show toast message
      this.showToast("Ingresa fecha de caducidad");
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
