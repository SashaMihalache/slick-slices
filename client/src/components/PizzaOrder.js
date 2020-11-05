import React from "react";
import MenuItemStyles from "../styles/MenuItemStyles";
import Img from "gatsby-image";
import calculatePizzaPrice from "../utils/calculatePizzaPrice";
import formatMoney from "../utils/formatMoney";

export default function PizzaOrder({
  order,
  pizzas,
  removeFromOrder,
  plainImage,
}) {
  return (
    <>
      <p>You have {order.length} pizzas in your order</p>
      {order.map((singleOrder, index) => {
        const pizza = pizzas.find((p) => p.id === singleOrder.id);

        return (
          <MenuItemStyles>
            <Img fluid={pizza.image.asset.fluid} />
            <h2>{singleOrder.id}</h2>
            <p>
              {formatMoney(calculatePizzaPrice(pizza.price, singleOrder.size))}
              <button
                type="button"
                className="remove"
                title={`Remove ${singleOrder.size} ${pizza.name} from Order`}
                onClick={() => removeFromOrder(index)}
              >
                &times;
              </button>
            </p>
          </MenuItemStyles>
        );
      })}
    </>
  );
}
