//? axios //
import axios, {AxiosError, AxiosResponse} from "axios";

//? types && interfaces //
import { Posts, Root,TodosRoot } from '../types/interfaces';



//* get request için yeniden kullanılabilir yardımcı fonksiyon //
const getRequest = async (url: string) =>{
    return axios({ //you need to return in your saveFormData scope also
        method: 'get',
        url: url,
      })
        .catch((error) => {
          console.log(error);
          return error
        })
        .then((response) => {
            const json =  response.data;
          return json;
        });

};

export default getRequest;
