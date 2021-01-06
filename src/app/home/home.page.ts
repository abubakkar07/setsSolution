import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  setA: boolean = false;
  setB: boolean = false;
  setUni: boolean = false;
  elementsOfA: boolean = false;
  elementsOfB: boolean = false;
  elementsOfU: boolean = false;
  compliAResult: boolean = false;
  compliBResult: boolean = false;
  AuB: boolean = false;
  aCompUB: boolean = false;
  AUBCopm: boolean = false;
  ACompUBComp: boolean = false;
  AiB: boolean = false;
  aCompIB: boolean = false;
  AIBCopm: boolean = false;
  ACompIBComp: boolean = false;
  setAinput: string = "";
  setBinput: string = "";
  setUniInput: string = "";
  arrayOfSetA = [];
  arrayOfSetB = [];
  arrayOfSetUni = [];
  filteredArrayA = [];
  filteredArrayB = [];
  filteredArrayUni = [];
  unionResult = [];
  intersectionResult = [];
  complimentAResult = [];
  complimentBResult = [];

  constructor(public alertController: AlertController) { }

  showSetA() {
    this.setUni = false;
    this.setA = true;
    this.setB = false;
  }
  showSetB() {
    this.setUni = false;
    this.setA = false;
    this.setB = true;
  }
  showSetU() {
    this.setUni = true;
    this.setA = false;
    this.setB = false;
  }
  showElementsOfA() {
    this.elementsOfA = true;
  }
  showElementsOfB() {
    this.elementsOfB = true;
  }
  showElementsOfU() {
    this.elementsOfU = true;
  }
  saveElementOfA() {
    if (this.arrayOfSetA.indexOf(this.setAinput) == -1) {
      this.arrayOfSetA.push(this.setAinput)
      this.arrayOfSetA.sort();
    } else {
      this.presentAlert();
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'This value already exist.',
      buttons: ['OK']
    });
    await alert.present();
  }
  saveElementOfB() {
    if (this.arrayOfSetB.indexOf(this.setBinput) == -1) {
      this.arrayOfSetB.push(this.setBinput)
      this.filteredArrayB.sort();
    }else {
      this.presentAlert();
    }
  }
  saveElementOfUni() {
    if (this.arrayOfSetUni.indexOf(this.setUniInput) == -1) {
      this.arrayOfSetUni.push(this.setUniInput)
      this.filteredArrayUni.sort();
    }else {
      this.presentAlert();
    }
  }
  union() {
    this.unionResult = [];
    this.unionResult = [...new Set([...this.filteredArrayA, ...this.filteredArrayB])];
    this.unionResult.sort();
    console.log(this.unionResult)
    this.AuB = true;
    this.aCompUB = false;
    this.AUBCopm = false;
    this.ACompUBComp = false;
    this.AiB = false;
    this.aCompIB = false;
    this.AIBCopm = false;
    this.ACompIBComp = false;
  }
  aCompUb() {
    this.unionResult = [];
    this.complimentAResult = [...new Set([...this.filteredArrayUni].filter(x => !this.filteredArrayA.includes(x)))];
    this.unionResult = [...new Set([...this.complimentAResult, ...this.filteredArrayB])];
    this.unionResult.sort();
    console.log(this.unionResult)
    this.AuB = false;
    this.aCompUB = true;
    this.AUBCopm = false;
    this.ACompUBComp = false;
    this.AiB = false;
    this.aCompIB = false;
    this.AIBCopm = false;
    this.ACompIBComp = false;
  }
  aUbComp() {
    this.unionResult = [];
    this.complimentBResult = [...new Set([...this.filteredArrayUni].filter(x => !this.filteredArrayB.includes(x)))];
    this.unionResult = [...new Set([...this.filteredArrayA, ...this.complimentBResult])];
    this.unionResult.sort();
    console.log(this.unionResult)
    this.AuB = false;
    this.aCompUB = false;
    this.AUBCopm = true;
    this.ACompUBComp = false;
    this.AiB = false;
    this.aCompIB = false;
    this.AIBCopm = false;
    this.ACompIBComp = false;
  }
  aCompUbComp() {
    this.unionResult = [];
    this.complimentAResult = [...new Set([...this.filteredArrayUni].filter(x => !this.filteredArrayA.includes(x)))];
    this.complimentBResult = [...new Set([...this.filteredArrayUni].filter(x => !this.filteredArrayB.includes(x)))];
    this.unionResult = [...new Set([...this.complimentAResult, ...this.complimentBResult])];
    this.unionResult.sort();
    console.log(this.unionResult)
    this.AuB = false;
    this.aCompUB = false;
    this.AUBCopm = false;
    this.ACompUBComp = true;
    this.AiB = false;
    this.aCompIB = false;
    this.AIBCopm = false;
    this.ACompIBComp = false;
  }
  intersection() {
    this.intersectionResult = [];
    this.intersectionResult = [...new Set([...this.filteredArrayA].filter(x => this.filteredArrayB.includes(x)))];
    this.intersectionResult.sort();
    console.log(this.intersectionResult)
    this.AuB = false;
    this.aCompUB = false;
    this.AUBCopm = false;
    this.ACompUBComp = false;
    this.AiB = true;
    this.aCompIB = false;
    this.AIBCopm = false;
    this.ACompIBComp = false;
  }
  aCompIb() {
    this.intersectionResult = [];
    this.complimentAResult = [...new Set([...this.filteredArrayUni].filter(x => !this.filteredArrayA.includes(x)))];
    this.intersectionResult = [...new Set([...this.complimentAResult].filter(x => this.filteredArrayB.includes(x)))];
    this.intersectionResult.sort();
    console.log(this.intersectionResult)
    this.AuB = false;
    this.aCompUB = false;
    this.AUBCopm = false;
    this.ACompUBComp = false;
    this.AiB = false;
    this.aCompIB = true;
    this.AIBCopm = false;
    this.ACompIBComp = false;
  }
  aIbComp() {
    this.intersectionResult = [];
    this.complimentBResult = [...new Set([...this.filteredArrayUni].filter(x => !this.filteredArrayB.includes(x)))];
    this.intersectionResult = [...new Set([...this.filteredArrayA].filter(x => this.complimentBResult.includes(x)))];
    this.intersectionResult.sort();
    console.log(this.intersectionResult)
    this.AuB = false;
    this.aCompUB = false;
    this.AUBCopm = false;
    this.ACompUBComp = false;
    this.AiB = false;
    this.aCompIB = false;
    this.AIBCopm = true;
    this.ACompIBComp = false;
  }
  aCompIbComp() {
    this.intersectionResult = [];
    this.complimentAResult = [...new Set([...this.filteredArrayUni].filter(x => !this.filteredArrayA.includes(x)))];
    this.complimentBResult = [...new Set([...this.filteredArrayUni].filter(x => !this.filteredArrayB.includes(x)))];
    this.intersectionResult = [...new Set([...this.complimentAResult].filter(x => this.complimentBResult.includes(x)))];
    this.intersectionResult.sort();
    console.log(this.intersectionResult)
    this.AuB = false;
    this.aCompUB = false;
    this.AUBCopm = false;
    this.ACompUBComp = false;
    this.AiB = false;
    this.aCompIB = false;
    this.AIBCopm = false;
    this.ACompIBComp = true;
  }
  complimantA() {
    this.complimentAResult = [...new Set([...this.filteredArrayUni].filter(x => !this.filteredArrayA.includes(x)))];
    this.complimentAResult.sort();
    console.log(this.complimentAResult)
    this.compliAResult = true;
  }
  complimantB() {
    this.complimentBResult = [...new Set([...this.filteredArrayUni].filter(x => !this.filteredArrayB.includes(x)))];
    this.complimentBResult.sort();
    console.log(this.complimentBResult)
    this.compliBResult = true;
  }
  clearAll() {
    this.arrayOfSetA = [];
    this.arrayOfSetB = [];
    this.arrayOfSetUni = [];
    this.filteredArrayA = [];
    this.filteredArrayB = [];
    this.filteredArrayUni = [];
    this.unionResult = [];
    this.intersectionResult = [];
    this.complimentAResult = [];
    this.complimentBResult = [];
    this.setUni = false;
    this.setA = false;
    this.setB = false;
  }
}
