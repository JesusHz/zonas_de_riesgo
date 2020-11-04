import { Component, OnInit } from "@angular/core";
import { Post } from "../models/post.model";
import {
  ToastController,
  LoadingController,
  NavController
} from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.page.html",
  styleUrls: ["./add-post.page.scss"]
})
export class AddPostPage implements OnInit {
  post = {} as Post;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  async createPost(post: Post) {
    // console.log(post);

    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Cargando..."
      });
      loader.present();

      try {
        await this.firestore.collection("posts").add(post);
      } catch (e) {
        this.showToast(e);
      }

      // dismiss loader
      loader.dismiss();

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
