//import jsonServerProvider from 'ra-data-json-server';
import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
import { log } from 'console';

const apiUrl = 'https://domesticservicesbackend-production-acb6.up.railway.app';
//const apiUrl = 'http://localhost:3001';
const httpClient = fetchUtils.fetchJson;

export const dataProvider = {
  getList: (resource, params) => {
    console.log('estoy en getProvider y este es el valor de resorce: ',resource);
    
    
    const { nameService, email } = params.filter || {};
    let url =``;
    
    if (resource==='payment'){console.log(1);
    ;url=`${apiUrl}/${resource}/admin/dataPays`}
    else if (nameService===undefined && email===undefined){console.log(2);
     ;url=`${apiUrl}/${resource}`}
    else if (nameService!==undefined){console.log(3);
    ;url=`${apiUrl}/${resource}/name?name=${nameService}` }
    else {console.log(4);
    ;url=`${apiUrl}/${resource}/email?email=${email}`}
    
    console.log('esta es la url: ',url);
    return httpClient(url).then(({ headers, json }) => {console.log('aqui va el json',json);
    ;return{
      data: json,
      total: json.length,
    }});
  },
  getOne: (resource, params) =>{
    console.log('estoy en getOne y este es el valor de resorce: ',resource);
    console.log('ademas el valor de params.id es: ',params.id);
    
    
      return(
      httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => (
      {
          data: json,
        })))},

  update: (resource, {id, data, previousData}) =>{
       if (resource==='user'){ 
      return httpClient(`${apiUrl}/${resource}/enabled/${id}`, {
          method: 'PUT',
          body: JSON.stringify(data),
        }).then(({ json }) => ({ data: json }))}
        else{
        console.log('entre en update yeah');
 
        console.log('el id es: ',id);
        console.log('el data es: ',data);
        console.log('el resource es: ',resource);
        
        
      return httpClient(`${apiUrl}/${resource}/enabledS/${id}`, {
          method: 'PUT',
          body: JSON.stringify(data),
        }).then(({ json }) => ({ data: json }))}
      },

  create: (resource, params) =>
      httpClient(`${apiUrl}/${resource}`, {
          method: 'POST',
          body: JSON.stringify(params.data),
        }).then(({ json }) => ({
          data: { ...params.data, id: json.id },
        })),

  delete: (resource, params) =>
      httpClient(`${apiUrl}/${resource}/${params.id}`, {
          method: 'PUT',
        }).then(({ json }) => ({ data: json })),
};

export default dataProvider;