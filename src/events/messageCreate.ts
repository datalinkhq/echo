import { Event } from "../structures/Event";
import { client } from "..";
import { MessageEmbed, TextChannel } from "discord.js";
import prisma from "../../lib/prisma";
import { userStore } from "../../lib/libUser";
import urlcat from "urlcat";
import axios from "axios";

export default new Event("messageCreate", async (message) => {
  try {
    const store = new userStore(BigInt(message.author.id));
    let data = await store.get(BigInt(message.author.id));
    console.log("libUser :: Unpacked data -> ", data)

    if (!data || data.length <= 0) {
      console.log(`Creating user profile ${message.author.id} in UserStore...`);
      await store.create(0, 0, BigInt(message.author.id));
    } else {
      const messageCount = (await store.get(BigInt(message.author.id)))[0]
        .messageCount;
      const realMessageCount = messageCount + 1
      // Level progression

      if (realMessageCount <= 50 && realMessageCount >= 1) {
        const mathdata = `${realMessageCount} / 10`;
        const MATH_API = urlcat("https://api.mathjs.org/v4", "?expr=:mathdata", {
          mathdata,
        });
        const newlevel = (await axios.get(MATH_API)).data;
        await store.update(
          BigInt(message.author.id),
          realMessageCount,
          newlevel
        );
      }

      if (realMessageCount <= 100 && realMessageCount >= 50) {
        const mathdata = `${realMessageCount} / 20`;
        const MATH_API = urlcat("https://api.mathjs.org/v4", "?expr=:mathdata", {
          mathdata,
        });
        const newlevel = (await axios.get(MATH_API)).data;
        await store.update(
          BigInt(message.author.id),
          realMessageCount,
          newlevel
        );
      }

      if (realMessageCount <= 500 && realMessageCount >= 100) {
        const mathdata = `${realMessageCount} / 25`;
        const MATH_API = urlcat("https://api.mathjs.org/v4", "?expr=:mathdata", {
          mathdata,
        });
        const newlevel = (await axios.get(MATH_API)).data;
        await store.update(
          BigInt(message.author.id),
          realMessageCount,
          newlevel
        );
      }
      
      if (realMessageCount <= 1000 && realMessageCount >= 500) {
        const mathdata = `${realMessageCount} / 40`;
        const MATH_API = urlcat("https://api.mathjs.org/v4", "?expr=:mathdata", {
          mathdata,
        });
        const newlevel = (await axios.get(MATH_API)).data;
        await store.update(
          BigInt(message.author.id),
          realMessageCount,
          newlevel
        );
      }
      

      if (realMessageCount <= 10000) {
        const mathdata = `${realMessageCount} / 100`;
        const MATH_API = urlcat("https://api.mathjs.org/v4", "?expr=:mathdata", {
          mathdata,
        });
        const newlevel = (await axios.get(MATH_API)).data;
        await store.update(
          BigInt(message.author.id),
          realMessageCount,
          newlevel
        );
      }

      const level = (await store.get(BigInt(message.author.id)))[0].level;
      if (level && level % 1 !== 0) {
      } else {
        console.log(`User ${message.author.tag} has levelled up.`);
        (
          message.guild.channels.cache.get("1011641273205145756") as TextChannel
        ).send(
          `Hey <@${message.author.id}>, you just advanced to level ${level}. You're on a roll!`
        );
      }
    }
  } catch (e) { }
});
