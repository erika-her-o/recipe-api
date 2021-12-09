const base_url = "https://api.edamam.com/search";
const api_id = "5f3dff1f";
const api_key = "99609981fefd375ae9c462e98ec26b09";

// endpoint  - api
export const getApiUrl = query => `${base_url} ? q=${query}&app_id=${api_id}&app_key=${api_key}`;