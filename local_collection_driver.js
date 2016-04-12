LocalCollectionDriver = function () {
  var self = this;
  self.noConnCollections = {};
};

var ensureCollection = function ( name, collections, config ) {
  if ( !( name in collections ) )
    collections[name] = new LocalCollection( name, config );
  return collections[name];
};

_.extend( LocalCollectionDriver.prototype, {
  open: function ( name, conn, config ) {
    var self = this;
    if ( !name )
      return new LocalCollection;
    if ( ! conn ) {
      return ensureCollection( name, self.noConnCollections, config );
    }
    if ( ! conn._mongo_livedata_collections )
      conn._mongo_livedata_collections = {};
    // XXX is there a way to keep track of a connection's collections without
    // dangling it off the connection object?
    return ensureCollection( name, conn._mongo_livedata_collections, config );
  }
} );

// singleton
LocalCollectionDriver = new LocalCollectionDriver;
