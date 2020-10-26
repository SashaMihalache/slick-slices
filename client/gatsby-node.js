import path from 'path';

async function turnPizzasIntoPages({ graphql, actions }) {
  // 1. get a template for this page
  const pizzaTemplate = path.resolve('./src/templates/Pizza.js');

  // 2. query all pizzas
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);

  // 3. loop over each pizza and create a page for that pizza
  data.pizzas.nodes.forEach((pizza) => {
    console.log(`created page for pizza: ${pizza.name}`);
    const slug = pizza.slug.current;

    actions.createPage({
      path: `pizza/${slug}`,
      component: pizzaTemplate,
      context: {
        slug,
      },
    });
  });
}

async function turnToppingsIntoPages({ graphql, actions }) {
  const toppingTemplate = path.resolve('./src/pages/pizzas.js');
  const { data } = await graphql(`
    query {
      toppings: allSanityTopping {
        nodes {
          id
          name
        }
      }
    }
  `);

  data.toppings.nodes.forEach((topping) => {
    const toppingName = topping.name;

    console.log(`created page for topping: ${toppingName}`);

    actions.createPage({
      path: `topping/${toppingName}`,
      component: toppingTemplate,
      context: {
        topping: toppingName,
      },
    });
  });
}

export async function createPages(params) {
  console.log('creating pages');
  // create pages dynamically
  await Promise.all([
    turnPizzasIntoPages(params),
    turnToppingsIntoPages(params),
  ]);

  // 1. pizzas
  // 2. toppings
  // 3. slicemasters
}
