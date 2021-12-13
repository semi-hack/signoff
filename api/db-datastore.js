//Google datastre to help me store in the cloud
const {Datastore} = require('@google-cloud/datastore');
const ds = new Datastore({ namespace: 'tutorial' });

const kind = 'files';

function key(id) {
 return ds.key([kind, id]);
}

module.export = ds

// module.exports.list = async () => {
//  // asynchronously get a list of entities with names
//  let [data] = await ds.createQuery(kind).select('name').order('name')
//  // extract only the names
//  data = data.map((val) => val.name);
//  return data;
// };

// module.exports.get = async (id) => {
//  // asynchronously get the entity
//  const [data] = await ds.get(key(id));
//  if (data && data.val) return data.val;
//  return '';
// };

// module.exports.put = async (id, val) => {
//  const entity = {
//  key: key(id),
//  data: { name: id, val },
//  }
//  await ds.save(entity);
// }

// module.exports.post = async (value) => {
//     const entity = {
//         key: ,
//         data: { name: id, val },
//     }
//     await ds.save(entity)
// }

// module.exports.delete = async (id) => {
//     let [result] = await ds.get(key(id));
//     // delete from database
//     await ds.delete(result)

//     return 'done'
// }