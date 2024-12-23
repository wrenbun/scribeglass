import PouchDB from 'pouchdb';

const SettingsDB = new PouchDB('scribesight-settingDB');
const AnalysisDB = new PouchDB('scribesight-analysisDB');

//NOTE - Development only
SettingsDB.info().then(function (info) {
  console.log(`ScribeSight UserSettings DB: \n ${info}`);
})
AnalysisDB.info().then(function (info) {
  console.log(`ScribeSight Analysis DB: \n ${info}`);
})



// const database: { db?: IDBDatabase } = {};
// 
// const openDatabase = async (dbName: string, version: number): Promise<IDBDatabase> => {
//     return new Promise<IDBDatabase>((resolve, reject) => {
//         const request = indexedDB.open(dbName, version);
// 
//         request.onupgradeneeded = (iDBOpRq) => {
//             const db = (iDBOpRq.target as IDBOpenDBRequest).result;
// 
//             if (!db.objectStoreNames.contains('settings')) {
//                 const settingsStore = db.createObjectStore('settings', { keyPath: 'id' });
//                 settingsStore.createIndex('type', 'type', { unique: false });
//             }
// 
//             if (!db.objectStoreNames.contains('analyzed')) {
//                 const analyzedStore = db.createObjectStore('analyzed', { keyPath: 'id' });
//                 analyzedStore.createIndex('jsonRaw', 'jsonRaw');
//                 analyzedStore.createIndex('processedOn', 'processedOn.timestamp', { unique: false });
//                 analyzedStore.createIndex('conflicts', 'id');
//             }
//         };
// 
//         request.onsuccess = () => {
//             const db = request.result;
//             Object.defineProperty(database, 'db', {
//                 value: db,
//                 writable: false,
//                 configurable: false
//             });
//             if (database.db) {
//                 resolve(database.db);
//             } else {
//                 reject(new Error('Database is undefined'));
//             }
//         };
// 
//         request.onerror = () => {
//             reject(request.error);
//         };
//     });
// };

