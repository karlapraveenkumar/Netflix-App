export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = "https://occ-0-3215-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
    }
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500/";

export const Background_image = "https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [

  {identifier : "eng", name : "English"},
  {identifier : "hindi", name : "Hindi"},
  {identifier : "telugu", name : "Telugu"},
  {identifier : "tamil", name : "Tamil"},
  {identifier : "kannada", name : "Kannada"},
  {identifier : "malayalam", name : "Malayalam"}
];



//export const GEMINI_KEY = "AIzaSyBFbTHoF04_KL8q57SPAkLaRvT4_eo3OGw";

//export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;