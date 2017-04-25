import React from "react";
import { RouteComponentProps } from "react-router";
import FBEmitter from "fbemitter";

import SagesStore, { SagesState } from "./SagesStore";
import * as SageActions from "../../shared/actions/sageActions";
import SageThumbnail from "./SageThumbnail";
import Loading from "../../shared/components/Loading";

interface Props extends RouteComponentProps<{
}, {}> { }

export default class Sages extends React.Component<Props, SagesState> {
  eventSubscription: FBEmitter.EventSubscription;
  constructor(props: Props) {
    super(props);
    this.state = SagesStore.getState();
  }

  componentWillMount() {
    this.eventSubscription = SagesStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    this.eventSubscription.remove();
  }

  _onChange = () => {
    this.setState(SagesStore.getState());
  }

  componentDidMount() {
    if (!this.state.isInitialised) {
      SageActions.loadSages();
    }
  }

  render() {
    const { children } = this.props;
    const { isInitialised, sages } = this.state;

    return children
      ? children
      : <div className="container">
        <h2>Sages</h2>

        {isInitialised
          ? [...sages.values()].map((sage, index) => <SageThumbnail key={index} sage={sage} />)
          : <Loading />}
      </div>;
  }
}
