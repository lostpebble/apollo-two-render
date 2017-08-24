import * as React from "react";
import { observer, inject } from "mobx-react";

import LinkStore from "../mobx/LinkStore";
import ArrayUtils from "../../utils/datatypes/ArrayUtils";
import { graphql, gql, QueryProps } from "react-apollo";

interface PotentialData {
  allLinks: Array<{ url: string; description: string; id: string }>;
  testData?: boolean;
  taskDetails?: string;
  taskProgress?: {
    id: string;
    totalStages: number;
    currentStage: number;
  };
}

@inject("LinkStore")
@observer
class App extends React.Component<
  {
    LinkStore: LinkStore;
    data?: PotentialData & QueryProps;
  },
  any
> {
  constructor(props: any) {
    super(props);

    this.state = {
      count: 1,
    };
  }

  public increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  public render() {
    const { testData, allLinks } = this.props.data;

    const links = ArrayUtils.safeMap(allLinks, value =>
      <li key={value.id}>
        {value.url} : {value.description}
      </li>
    );

    console.log("Rendering App");

    return (
      <div>
        <div>
          <h1>
            Yay around with routes and apollo : {null ? "TRUE" : "FALSE"} :{" "}
            {this.props.LinkStore.otherTestData ? "TRUE" : "FALSE"}
          </h1>
          <ul onClick={this.increment}>
            {links}
          </ul>
          {this.state.count}
        </div>
        <div/>
      </div>
    );
  }
}

export default graphql<PotentialData>(gql`
  {
    allLinks {
      id
      url
      description
    }
  }
`)(App);
