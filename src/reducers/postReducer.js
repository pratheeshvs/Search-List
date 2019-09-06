import { SEARCH } from "../action/types"
import { SEARCH_RESULT } from "../action/types"

const initianState = 
    [
        {
          "_id": "5d711ccbdf1e412992f44616",
          "name": "Gould Barton",
          "gender": "male"
        },
        {
          "_id": "5d711ccbfdb86d8daa4ddd6a",
          "name": "Cabrera Massey",
          "gender": "male"
        },
        {
          "_id": "5d711ccbeb74db6b24fde5d4",
          "name": "Lloyd Lopez",
          "gender": "male"
        },
        {
          "_id": "5d711ccb3ea542e707b08547",
          "name": "Foley Oconnor",
          "gender": "male"
        },
        {
          "_id": "5d711ccb5fbd09a4a6e9b297",
          "name": "Hayden Russell",
          "gender": "male"
        },
        {
          "_id": "5d711ccbf23abf357aff9330",
          "name": "Ebony Mayo",
          "gender": "female"
        },
        {
          "_id": "5d711ccb3c3605f3456acc4f",
          "name": "Jeannette Fletcher",
          "gender": "female"
        },
        {
          "_id": "5d711ccb69b071f5fe804608",
          "name": "Katherine Rodgers",
          "gender": "female"
        },
        {
          "_id": "5d711ccb7f83da453feca82d",
          "name": "Brown Justice",
          "gender": "male"
        },
        {
          "_id": "5d711ccb2817f95eaa782fa1",
          "name": "Marci Alston",
          "gender": "female"
        },
        {
          "_id": "5d711ccb0ead2c9b4dfe70f8",
          "name": "Boyer Douglas",
          "gender": "male"
        },
        {
          "_id": "5d711ccb6820df2a37075a7c",
          "name": "Cornelia Hanson",
          "gender": "female"
        },
        {
          "_id": "5d711ccb4562af2e2478ddaf",
          "name": "Watkins Bender",
          "gender": "male"
        },
        {
          "_id": "5d711ccb41dff3cc8fe54a1c",
          "name": "Gates Schneider",
          "gender": "male"
        },
        {
          "_id": "5d711ccb5dfb780c6ab4d33b",
          "name": "Carrillo Frost",
          "gender": "male"
        },
        {
          "_id": "5d711ccbbe06b050302d6bc0",
          "name": "Esther Holmes",
          "gender": "female"
        },
        {
          "_id": "5d711ccbcde661c86477f40c",
          "name": "Sarah Rich",
          "gender": "female"
        },
        {
          "_id": "5d711ccbe8189281b4d779c4",
          "name": "Earlene Ryan",
          "gender": "female"
        },
        {
          "_id": "5d711ccb8069410757a074b4",
          "name": "Farmer Wilkinson",
          "gender": "male"
        },
        {
          "_id": "5d711ccbf405be334842f6ba",
          "name": "Latoya Lara",
          "gender": "female"
        },
        {
          "_id": "5d711ccbd55492490398a0f1",
          "name": "Jessica Patterson",
          "gender": "female"
        },
        {
          "_id": "5d711ccbdcb231148ccc85d3",
          "name": "Cathryn Bush",
          "gender": "female"
        },
        {
          "_id": "5d711ccb2df714ddc3bec270",
          "name": "Rachel Meyers",
          "gender": "female"
        },
        {
          "_id": "5d711ccba9be106e257ba9f2",
          "name": "Meadows Goodwin",
          "gender": "male"
        },
        {
          "_id": "5d711ccbd986db3cb242fc13",
          "name": "Herman Benson",
          "gender": "male"
        }
      ]


export default function(state = initianState, action){
    
    switch(action.type){
        case SEARCH:
            return{
                ...state
            }
        case SEARCH_RESULT:
            return{
                ...state
            }
       default:
           return state;
    }

}
