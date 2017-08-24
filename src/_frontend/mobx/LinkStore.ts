import {action, observable} from "mobx";
import {BetterMobXStore} from "./StoreUtils";

export default class LinkStore extends BetterMobXStore {
  @observable.ref public otherTestData: boolean = true;

  constructor(rootStore) {
    super(rootStore);
  }

  @action public changeTestData() {
    this.otherTestData = !this.otherTestData;
  }
}
