module.exports = {
    graphql: {
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: true,
        depthLimit: 50,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
          introspection: true,
        },
      },
    },
  };