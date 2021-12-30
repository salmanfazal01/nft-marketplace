import React, { createContext } from "react";
import config from "../config/config";

const AppConfigContext = createContext(null);

const withAppConfig = (Component) => {
  const ChildComponent = (props) => {
    return (
      <AppConfigContext.Consumer>
        {(value) => {
          const { appConfig } = value || {};
          return (
            <Component appConfig={{ ...config, ...appConfig }} {...props} />
          );
        }}
      </AppConfigContext.Consumer>
    );
  };

  return ChildComponent;
};

export default withAppConfig;
