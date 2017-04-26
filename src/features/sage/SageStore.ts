import { Dispatcher } from "flux";

import FluxStore from "../../shared/stores/FluxStore";
import { SageActionTypes } from "../../shared/actions/sageActions";
import { Action } from "../../shared/domain/action";
import { Sage } from "../../shared/domain/dtos/sage";
import AppDispatcher from "../../shared/AppDispatcher";
import { ValidationMessages } from "../../shared/domain/saveResult";

export interface SageState {
  sage: Sage;
  validations: Map<string, string>;
  savedId: number;
}

class SageStore extends FluxStore<SageState> {
  constructor(dispatcher: Dispatcher<Action>) {
    super(dispatcher, () => ({
      sage: undefined,
      validations: new Map(),
      savedId: undefined
    }));
  }

  getState() {
    return this._state;
  }

  _onDispatch(action: Action) {
    switch (action.type) {
      case SageActionTypes.LOADED_SAGE:
        const sage = action.payload as Sage;
        this._updateStateAndEmit({ sage });
        break;

      case SageActionTypes.REMOVED_SAGE:
        this._updateStateAndEmit({ sage: null });
        break;

      case SageActionTypes.SAVED_SAGE:
        const savedId = action.payload as number;
        this._updateStateAndEmit({ savedId });
        break;

      case SageActionTypes.SAVE_SAGE_FAILED:
        const validations = action.payload as ValidationMessages;
        this._updateStateAndEmit({ validations: new Map([
          ...Object.keys(validations.errors).map(error => [error, validations.errors[error].join()] as [string, string])
        ]) });
        break;

      case SageActionTypes.CLEAR_VALIDATIONS:
        this._updateStateAndEmit({ validations: new Map() });
        break;

      case SageActionTypes.CLEAR_SAVED_ID:
        this._updateStateAndEmit({ savedId: undefined });
        break;
    }
  }
}

const sageStoreInstance = new SageStore(AppDispatcher);
export default sageStoreInstance;