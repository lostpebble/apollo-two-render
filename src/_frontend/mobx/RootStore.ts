import {BetterMobXStore} from "./StoreUtils";
import LinkStore from "./LinkStore";

export default class RootStore {
  public LinkStore: LinkStore;

  constructor() {
    this.LinkStore = new LinkStore(this);
  }

  public get storeNames() {
    return Object.keys(this);
  }

  public hydrateOldState(oldRootStores: RootStore) {
    for (const storeName of this.storeNames) {
      if (oldRootStores.hasOwnProperty(storeName)) {
        Object.assign(this[storeName], oldRootStores[storeName]);
      }
    }
  }

  public getStoresAsPlainJS() {
    const stores = {};

    for (const storeName of this.storeNames) {
      stores[storeName] = (this[storeName] as BetterMobXStore).getPlainJSStore();
    }

    return stores;
  }
}
