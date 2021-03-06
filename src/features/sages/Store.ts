import { Dispatcher } from "flux";

import FluxStore from "../../shared/stores/FluxStore";
import { SageActionTypes } from "../../shared/actions/sageActions";
import { Action } from "../../shared/domain/action";
import { SageVM } from "../../shared/domain/dtos/sage";
import AppDispatcher from "../../shared/AppDispatcher";

export interface SagesState {
  sages: Map<number, SageVM>;
  isInitialised: boolean;
}

class SagesStore extends FluxStore<SagesState> {
  constructor(dispatcher: Dispatcher<Action>) {
    super(dispatcher, () => ({
      sages: new Map(),
      isInitialised: false
    }));
  }

  getState() {
    return this._state;
  }

  _updateSages = (updatedSages: Map<number, SageVM>) => {
    this._state = Object.assign({}, this._state, { sages: updatedSages, isInitialised: true });
    this.emitChange();
  }

  _onDispatch(action: Action) {
    const updateSages = this._updateSages;

    switch (action.type) {
      case SageActionTypes.LOADED_SAGES:
        const sages = action.payload as SageVM[];
        updateSages(new Map([...sages.map(sage => [sage.id, sage] as [number, SageVM])]));
        break;
    }
  }
}

const sagesStoreInstance = new SagesStore(AppDispatcher);
export default sagesStoreInstance;
