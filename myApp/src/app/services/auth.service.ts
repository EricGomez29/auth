import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth:AngularFireAuth, private router:Router, private db:AngularFirestore) { }

  login(email:string, password:string) {

    return new Promise((resolve, rejected) => {
      this.AFauth.signInWithEmailAndPassword(email, password)
        .then(user => {
          return resolve(user)
        })
        .catch(err => {
          return rejected(err)
        })
    });
  }

  logout() {
    this.AFauth.signOut()
      .then(auth => {
        this.router.navigate(['/login']);
      })
  }

  register(email:string, password:string, name:string, lastname:string) {
    return new Promise((resolve, rejected) => {
      this.AFauth.createUserWithEmailAndPassword(email, password)
        .then(res => {
          console.log(res.user.uid);

          this.db.collection('users').doc(res.user.uid).set({
            id: res.user.uid,
            name: name,
            lastname: lastname,
            email: email
          })

          resolve(res)
        })
        .catch(err => rejected(err))
    })
  }
}
