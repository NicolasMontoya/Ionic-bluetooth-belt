import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

public devices : any;
public show : boolean;
  constructor(public navCtrl : NavController,public bluetoothSerial: BluetoothSerial, private alertCtrl: AlertController) {
    this.show = false;
   }

  myFunc(){
    this.bluetoothSerial.list().then((allDevices) => {
            // set the list to returned value
            if(allDevices != undefined)
            {
              this.show = true;
              this.devices = allDevices;
              console.log(allDevices);
            }

        });


  }
  selectDevice(device){
    console.log(device);

    this.bluetoothSerial.connect(device.address).subscribe((data)=>{
            let alert = this.alertCtrl.create({
                title: 'Bluetooth',
                subTitle: data,
                buttons: ['ok']
                });
                alert.present();
        },error=>{
            let alert = this.alertCtrl.create({
                title: 'Bluetooth',
                subTitle: error,
                buttons: ['ok']
                });
                alert.present();
        });

  }



}
