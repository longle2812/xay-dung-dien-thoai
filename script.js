var nokiaIndex =0;
var iphoneIndex =0;
var iphoneSent = [];
var nokiaSent =[];
let Mobile = function (battery,tying, inbox, sent) {
    this.battery = battery;
    this.inbox = inbox;
    this.sent = sent;
    this.isOn = true;
    this.showStatus = function () {
        alert('Your phone is at ' +this.battery+ '%, has ' +this.inbox+ ' inbox SMS, '+ this.sent+' sent SMS');
    }
    this.turnOn = function () {
        if (this.isOn) {
            this.isOn = false;
            alert("Turning off");
        } else {
            this.isOn = true;
            alert("Powering on");
        }
    }
    this.sendSMS = function (id) {
        if ((id == 1) && (iphone.isOn)) {
            let text = document.getElementById("nokiaInput").value;
            nokiaSent[nokiaIndex] = text;
            nokiaIndex += 1;
            iphone.inbox += 1;
            alert("Send SMS successfully");
        } else  if ((id == 2) && (nokia.isOn)) {
            let text = document.getElementById("iphoneInput").value;
            iphoneSent[iphoneIndex] = text;
            iphoneIndex += 1;
            iphone.inbox += 1;
            alert("Send SMS successfully");
        }
        else alert("Send SMS unsuccessfully, your destination is not on");
        if ((this.isOn) && (this.battery >0)) {
            this.sent = this.sent + 1;
            this.battery -= 1;
        }
        else alert("Your phone is off. Please turn on your phone");
    }
    this.charge = function () {
    }
    this.checkInbox = function (id) {
        if (id == 1) {
            if (iphoneIndex > 0) {
                alert("You recieved " +iphoneIndex+ " SMS");
                for (let i = 0; i < iphoneIndex; i++) {
                    alert(iphoneSent[i]);
                }
                iphoneIndex = 0;
                iphoneSent = [];
                this.battery -= 1;
            }
            else {
                alert("You have 0 SMS");
                this.battery -= 1;
            }
        } else {
            if (nokiaIndex > 0) {
                alert("You recieved " +nokiaIndex+ " SMS");
                for (let i = 0; i < nokiaIndex; i++) {
                    alert(nokiaSent[i]);
                }
                nokiaIndex = 0;
                nokiaSent = [];
                this.battery -= 1;
            }
            else {
                alert("You have 0 SMS");
                this.battery -= 1;
            }
        }
    }
}
let nokia = new Mobile(50, 0, 0, 0);
let iphone = new Mobile(30, 0, 0, 0);
let mobifone = [nokia, iphone];
console.log(mobifone);