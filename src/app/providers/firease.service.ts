import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class FirebaseService {

    fsRef: AngularFirestoreDocument<any>;
    angularVoteCount;
    reactVoteCount;
    vueVoteCount;
    conteudo;
    key;
    tipo;
    uuid;

    constructor(private afs: AngularFirestore) {
      afs.firestore.settings({ timestampsInSnapshots: true });
    }
    
    get(){
      return this.afs.doc('beacon/98S38U10CqFgdqY7osBL').snapshotChanges();
    }

}
