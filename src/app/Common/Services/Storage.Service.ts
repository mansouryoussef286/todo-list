import { Injectable } from '@angular/core';

export enum StorageEnum {
	AccessToken = 'AccessToken',
	RefreshToken = 'RefreshToken',
	CurrentUser = 'CurrentUser',
	ReturnUrl = 'ReturnUrl',
}

@Injectable({ providedIn: 'root' })
export class StorageService {
	SetSessionStorage(key: StorageEnum, obj: string | JSON | Object) {
		let objStr = JSON.stringify(obj);
		sessionStorage.setItem(key, objStr);
	}

	GetSessionStorage(key: StorageEnum) {
		let objStr = sessionStorage.getItem(key);
		return !!objStr ? JSON.parse(objStr) : null;
	}

	RemoveSessionStorage(key: StorageEnum) {
		sessionStorage.removeItem(key);
	}

	SetLocalStorage(key: StorageEnum, obj: string | JSON | Object) {
		let objStr = JSON.stringify(obj);
		localStorage.setItem(key, objStr);
	}

	GetLocalStorage<T = any>(key: StorageEnum): T {
		let objStr = localStorage.getItem(key);
		let obj = JSON.parse(objStr || '{}');
		return obj as T;
	}

	RemoveLocalStorage(key: StorageEnum) {
		localStorage.removeItem(key);
	}
}
