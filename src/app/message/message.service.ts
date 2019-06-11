import { Component, OnInit, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class MessageService {

    constructor(public toastr: ToastrService) {         
    }

    public showResgistrationFailed() {

        this.toastr.error("Resgitration failed", 'Error',
            {
                positionClass: "toast-top-right",
                timeOut: 1000,
                extendedTimeOut: 1200
            });
    }

    public userAlreadyExists() {

        this.toastr.error("User already exists", 'Error',
            {
                positionClass: "toast-top-right",
                timeOut: 1000,
                extendedTimeOut: 1200
            });
    }

    public showResgistrationSuccess() {

        this.toastr.success("Resgitration complete", 'Success',
            {
                positionClass: "toast-top-right",
                timeOut: 1000,
                extendedTimeOut: 1200
            });
    }

    public showUpdate() {

        this.toastr.success("Record updated successfully", 'Update',
            {
                positionClass: "toast-top-right",
                timeOut: 1000,
                extendedTimeOut: 1200
            });
    }

    public showLoginFailed(errorvalue){
        this.toastr.error("Login Failed - " + errorvalue, 'Error',
        {
            positionClass: "toast-top-right",
            timeOut: 1000,
            extendedTimeOut: 1200
        } );
    }

    public showUpdateFalied() {

        this.toastr.success("Record update falied", 'Update',
            {
                positionClass: "toast-top-right",
                timeOut: 1000,
                extendedTimeOut: 1200
            });
    }

}
