const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Botun ping durumunu gösterir ve destek sunucusu linkini verir.',
    execute(message, args) {
        const ping = message.client.ws.ping;

        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('🏓 Pong!')
            .setDescription(`Botun pingi: ${ping}ms`)
            .setTimestamp();

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Destek için tıkla')
                    .setStyle('LINK')
                    .setURL('https://discord.com/invite/6SbCcgBRh8')
            );

        message.reply({ embeds: [embed], components: [row] });
    },
};