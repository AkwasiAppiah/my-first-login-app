import * as React from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Signup from "./Signup";
import { BrowserRouter as HashRouter, Switch, Route} from "react-router-dom";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <HashRouter>
          {/* <AuthProvider> */}
          <Switch>
            <Route path="/signup" component={Signup} />
          </Switch>
          {/* </AuthProvider> */}
        </HashRouter>
      </Grid>
    </Box>
  </ChakraProvider>
);
