export default defineCachedEventHandler(async (event) => {
  return {
    status: 'success',
    at: new Date().toISOString(),
  }
}, {
    maxAge : 10, //seconds
    getKey: event => event.path,
  }
}
