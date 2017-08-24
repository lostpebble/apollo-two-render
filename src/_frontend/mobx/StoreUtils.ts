import { toJS } from "mobx";
import RootStore from "./RootStore";

export class BetterMobXStore {
  private rootStore: RootStore;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  public getPlainJSStore() {
    return toJS(this);
  }
}
