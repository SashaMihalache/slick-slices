import path, { resolve } from 'path';
import fetch from 'isomorphic-fetch';

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

async function turnSlicemastersIntoPages({ graphql, actions }) {
  // these are paginated from env var
  const { data } = await graphql(`
    query {
      slicemasters: allSanityPerson {
        totalCount
        nodes {
          name
          id
          slug {
            current
          }
        }
      }
    }
  `);

  data.slicemasters.nodes.forEach((slicemaster) => {
    console.log(`Creating page for slicemaster: ${slicemaster.name}`);

    actions.createPage({
      path: `/slicemaster/${slicemaster.slug.current}`,
      component: resolve('./src/templates/Slicemaster.js'),
      context: {
        name: slicemaster.person,
        slug: slicemaster.slug.current,
      },
    });
  });

  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(data.slicemasters.totalCount / pageSize);
  console.log(
    `There are ${data.slicemasters.totalCount} total people, ${pageCount} pages with ${pageSize} per page `
  );

  Array.from({ length: pageCount }).forEach((_, i) => {
    actions.createPage({
      path: `/slicemasters/${i + 1}`,
      component: path.resolve('./src/pages/slicemasters.js'),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}

async function fetchBeersAndTurnIntoNodes({
  actions,
  createNodeId,
  createContentDigest,
}) {
  console.log('Turn Beer into Nodes!');
  // 1. fetch list of beers
  const res = await fetch('https://sampleapis.com/beers/api/ale');
  const beers = await res.json();
  // 2. loop over erach one
  for (const beer of beers) {
    const nodeMeta = {
      id: createNodeId(`beer-${beer.name}`),
      parent: null,
      children: [],
      internal: {
        type: 'Beer',
        mediaType: 'application/json',
        contentDigest: createContentDigest(beer),
      },
    };

    // 3. create a node for that beer
    actions.createNode({
      ...beer,
      ...nodeMeta,
    });
  }
}

export async function sourceNodes(params) {
  // fetch list of beers and source them into our gatsby api
  await Promise.all([fetchBeersAndTurnIntoNodes(params)]);
}

export async function createPages(params) {
  console.log('creating pages');
  // create pages dynamically
  await Promise.all([
    turnPizzasIntoPages(params),
    turnToppingsIntoPages(params),
    turnSlicemastersIntoPages(params),
  ]);

  // 1. pizzas
  // 2. toppings
  // 3. slicemasters
}
