import { Event } from "../structures/Event";

export default new Event("messageReactionAdd", async (reaction, user) => {
    let reaction_msg_ids = {
        "pronouns": "933611483491893299",
        "gender": "933612898486476810",
        "grade": "933614209311313950",
        "age": "933615652663619625", 
        "depressed": "933617274059911179"
    }

    let reaction_role_ids = {
        "pronouns": {
            "she/her": [ "933609420154363995", "🔴", "red_circle" ], 
            "he/him":  [ "933609500777254923", "🔵", "blue_circle" ], 
            "they/them": [ "933609555278045214", "🟢", "green_circle" ]
        },

        "gender": {
            "female": [ "933609686723338300", "🇦", "regional_indicator_a" ],
            "male": [ "933609789395701770", "🇧", "regional_indicator_b" ],
            "non-binary": [ "933609776938639402", "🇨", "regional_indicator_c" ],
            "other": [ "933609922078314547", "🇩", "regional_indicator_d" ], 
            "rather not say": [ "933609983709417542", "🇪", "regional_indicator_e" ],
        }, 
        
        "grade": {
            "6th": [ "933609631392071720", "❤️", "heart" ],
            "7th": [ "933563160508661953", "🧡", "orange_heart" ],
            "8th": [ "933563344844099665", "💛", "yellow_heart" ],
            "9th": [ "933563388225785857", "💚", "green_heart" ],
            "10th": [ "933563430265307146", "💙", "blue_heart" ],
            "11th": [ "933563438825869332", "💜", "purple_heart" ],
            "12th": [ "933563495906181200", "🤍", "white_heart" ],
        },

        "age": {
            "11-13": [ "933610034628288553", "✅", "white_check_mark" ], 
            "14-18": [ "933610168502087680", "☑️", "ballot_box_with_check" ], 
        },

        "depression": {
            "[1]": [ "934354545780346931", "🤡", "clown" ]
        }
    }

    let keys_msg = Object.keys(reaction_msg_ids)
    let keys_roles = Object.keys(reaction_role_ids)

    


    for (let i = 0; i < keys_msg.length; i++) {
        if (reaction.message.id === reaction_msg_ids[keys_msg[i]]) {
            for (let t = 0; t < keys_roles.length; t++) {
                const index1 = reaction_role_ids[keys_roles[t]]
                const index1_keys = Object.keys(index1)
                for (let j = 0; j < index1_keys.length; j++) {
                    const index2 = index1[index1_keys[j]]
                    for (let s = 0; s < 1; s++) {
                        console.log(index2[2])
                        if (reaction.emoji.name === index2[2]) {
                            console.log("reaction role triggered")
                            reaction.message.guild.members.cache.get(user.id).roles.add(reaction.message.guild.roles.cache.get(index2[0]))
                        }
                    }
                }
            }
        }
    }
}) 
