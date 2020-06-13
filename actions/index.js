import axios from 'axios';

const API_URL = "https://finnhub.io/api/v1";
const API_KEY = "bqlbvinrh5rfdbi8n3gg";

export function fetchGeneralNews(){
  return async (dispatch) => {
    const gnews_url = `${API_URL}/news?`;
    try{
      const result = await axios(gnews_url, {params: {
        category: "general",
        token: API_KEY
      }});
      dispatch({type: 'FETCH_GENERAL_NEWS', payload: result.data});
    }catch(error){
      console.error(error);
    }
  }
}