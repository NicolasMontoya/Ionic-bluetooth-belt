import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public show : boolean;
  constructor(public navCtrl: NavController, public bluetoothSerial: BluetoothSerial, private alertCtrl: AlertController) {

  }
  ionViewWillEnter() {
    this.bluetoothSerial.isConnected().then((data) => {
            // set the list to returned value
            console.log("ENABLE");

        });
  }
  getinfo(){
    var data = new Uint8Array(4);
    data[0] = 0x41;
    console.log("ENTER");
    this.bluetoothSerial.write(data).then((data) =>{
        this.bluetoothSerial.read().then((data) => {
          console.log(data);
        });


      console.log(data);
    },(err) => console.log("err"));
  }

}
