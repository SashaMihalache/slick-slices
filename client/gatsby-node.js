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
  console.log(data);
  // 3. loop over each pizza and create a page for that pizza
  data.pizzas.nodes.forEach((pizza) => {
    console.log(`created page for${pizza.name}`);
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

export async function createPages(params) {
  console.log('creating pages');
  // create pages dynamically
  // 1. pizzas
  await turnPizzasIntoPages(params);
  // 2. toppings
  // 3. slicemasters
}
