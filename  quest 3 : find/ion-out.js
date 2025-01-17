function ionOut(input){
   const regex = /\b[a-zA-Z]*t(?=ion)[a-zA-Z]*\b/g;
   const matches = input.match(regex) || [];
   return matches.map(word => word.replace('ion', ''));
}