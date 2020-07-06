let array = [{'id':1, 'type': 'external'}, {'id':2}, {'id':3, type: 'internal'}];
  array.filter( function(item) {
    if (Object.keys(item).includes('type')) {
      var index = Object.keys(item).findIndex( i => i === 'type');
      if (Object.values(item)[index] === 'external'){
        return item;
      }
    }
  });
