import { Event } from "../structures/Event";
import { client } from "..";
import { MessageEmbed, TextChannel } from "discord.js";

export default new Event("guildMemberAdd", async (newMember) => {
  try {
    console.log(
      "Member " +
        newMember.user.username +
        "#" +
        newMember.user.discriminator +
        " has joined the server."
    );
    let embed = new MessageEmbed()
      .setTitle("👋 Welcome to the datalink!")
      .setFooter({
        text:
          "Requested by " +
          newMember.user.username +
          "#" +
          newMember.user.discriminator,
        iconURL: newMember.user.avatarURL(),
      })
      .setTimestamp()
      .setColor("#2F3136")

      .setImage(
        newMember.guild.iconURL({ size: 512 })
      )
      .addField(
        "A quick introduction",
        "**Please** read through the rules. Feel free to introduce yourself to the community and/or ask for help. Keep in mind this server is the only official server for datalink.\n\n *If you require any assistance, DM a member of our administrator team!*"
      );
    client.users.cache.get(newMember.id).send({ embeds: [embed] });

    (
      client.guilds.cache
        .get(process.env.guildId.toString())
        .channels.cache.get("1011641273205145756") as TextChannel
    ).send({
      content: `Hello! <@${newMember.id}>, welcome to **datalink**! Say hello to the community :D`,
    });
  } catch (e) {}
});
