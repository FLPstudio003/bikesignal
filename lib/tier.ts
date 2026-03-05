export function getTier(km:number){

if(km >= 15000) return "Diamond"
if(km >= 7000) return "Platinum"
if(km >= 3000) return "Gold"
if(km >= 1000) return "Silver"

return "Bronze"

}

export function getNextTierKm(km:number){

if(km < 1000) return 1000
if(km < 3000) return 3000
if(km < 7000) return 7000
if(km < 15000) return 15000

return null

}

export function getMultiplier(tier:string){

switch(tier){

case "Diamond":
return 3

case "Platinum":
return 2

case "Gold":
return 1.5

case "Silver":
return 1.2

default:
return 1

}

}