import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() { }

    private readonly keys = {
        userID: 'DES-UserID',
        roleID: 'DES-RoleID',
        username: 'DES-Username',
        token: 'DES-Token',
        LogoUrl: 'DES-LogoURL',
        Colour: 'DES-Colour'
    };

    clearStorage() {
        sessionStorage.clear();
    }

    /**
     * Below Function returns 
     * True when user is logged in 
     * False when user in not logged in
     */
    loginStatus(): boolean {
        return this.getToken() ? true : false;
    }

    /* UserID */

    saveUserID(id: any) {
        sessionStorage.setItem(this.keys.userID, id);
    }

    getUserID() {
        return sessionStorage.getItem(this.keys.userID);
    }

    /* Token */

    saveToken(data: string) {
        sessionStorage.setItem(this.keys.token, data);
    }

    getToken() {
        return sessionStorage.getItem(this.keys.token);
    }

    /* Username */

    saveUsername(name: string) {
        sessionStorage.setItem(this.keys.username, name);
    }

    saveLogoUrl(url: string) {
        sessionStorage.setItem(this.keys.LogoUrl, url);
    }

    saveColour(colour: string) {
        sessionStorage.setItem(this.keys.username, colour);
    }

    getUsername() {
        return sessionStorage.getItem(this.keys.username);
    }

    /* RoleID */

    saveRoleID(roleID: string) {
        sessionStorage.setItem(this.keys.roleID, roleID);
    }

    getRoleID() {
        return sessionStorage.getItem(this.keys.roleID);
    }

    getLogoUrl() {
        return sessionStorage.getItem(this.keys.LogoUrl);
    }

    getColour() {
        return sessionStorage.getItem(this.keys.Colour);
    }

}
