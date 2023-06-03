import { getAllByTestId, render } from "@testing-library/react";
import Header from "../Header";
import store from "../../utils/store";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rerndering header", () => {
  //load header
 const header =  render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  
  const logo  = header.getAllByTestId("logoId");

  expect((logo[0].src)).toBe("http://localhost/dummy.png");

  // check if logo is loaded

});

test("Cart should have 0 items on rerndering header", () => {
    //load header
   const header =  render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    
    const cart  = header.getByTestId("cart");
  
    expect((cart.innerHTML)).toBe("Cart- 0 items");
  
    // check if logo is loaded
  
  });