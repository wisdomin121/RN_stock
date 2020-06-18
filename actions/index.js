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

export function fetchCompanyNews(symbol){
  return async (dispatch) => {
    const news_url = `${API_URL}/company-news?`
    var today = new Date();
    var Full_today = "2020-06-18";
    var Full_yesterday ="2020-06-17";
    try{
      const result = await axios(news_url, {params: {
        symbol: symbol,
        from: Full_yesterday,
        to: Full_today,
        token: API_KEY
      }});
      dispatch({type: 'FETCH_COMPANY_NEWS', payload: result.data});
    }catch(error){
      console.error(error);
    }
  };
}

export function fetchRate(){
  return async (dispatch) => {
    const rate_url = `${API_URL}/forex/rates?`;
    try{
      const result = await axios(rate_url, {params: {
        token: API_KEY
      }});
      dispatch({type: 'FETCH_RATE', payload: result.data.quote});
    }catch(error){
      console.error(error);
    }
  }
}

export function fetchStock(symbol){
  return async (dispatch) => {
    const stock_url = `${API_URL}/stock/profile2?`;
    try{
      const result = await axios(stock_url, {params: {
        symbol: symbol,
        token: API_KEY
      }});
      dispatch({type: 'FETCH_STOCK', payload: result.data});
    }catch(error){
      console.error(error);
    }
  }
}

export function fetchPrice(symbol){
  return async (dispatch) => {
    const stock_url = `${API_URL}/quote?`;
    try{
      const result = await axios(stock_url, {params: {
        symbol: symbol,
        token: API_KEY
      }});
      dispatch({type: 'FETCH_PRICE', payload: result.data});
    }catch(error){
      console.error(error);
    }
  }
}