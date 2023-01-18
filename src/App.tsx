import React from "react";
import DeliveryCalculator from "./components/DeliveryCalculator";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <div className={"h-screen flex justify-center items-center bg-gray-300"}>
      <SnackbarProvider>
        <DeliveryCalculator />
      </SnackbarProvider>
    </div>
  );
}

export default App;
