import axios from 'axios';

export const GET=(url)=>axios.create({url:url,method:"get"});