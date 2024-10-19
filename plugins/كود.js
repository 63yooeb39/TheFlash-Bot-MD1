import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    const uptime = process.uptime();
    const uptimeString = `${Math.floor(uptime / 60)} دقائق ${Math.floor(uptime % 60)} ثواني`;
    m.react('😍');

    if (device !== 'desktop' && device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://qu.ax/ScUij.jpg'}}, { upload: conn.waUploadToServer });
        const interactiveMessage = {
            body: { text: `\n◞❐ *وقـت الـتـشـغـيـل: ${uptimeString}*`.trim() },
            footer: { text: ` *ممنوع سب للبوت لانك سبيت للبوت = سبيت المطور تمتع بالبوت ولا تكتر اسبام للبوت اذا كان لديك مشكله او تريد اضافه اوامر اخري جديده تواصل مع المطور المطور* ◞❐wa.me/201098829097`.trim() },  
            header: {
                title: `◞❐*نورت يحب قائمة الاوامر*\n*◞❐ تفضل القائمة يا:* @${mentionId.split('@')[0]}`,
                subtitle: ``,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: 'single_select',
                        buttonParamsJson: JSON.stringify({
                            title: '⌝قـائـمـه الاوامـر⌞',
                            sections: [
                                {
                                    title: 'List',
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '◡̈⃝˼‏👤˹ ━━|قسم الجروب│━━˼👤˹◡̈⃝',
                                            title: 'ESCONAR-BOT',
                                            description: 'اسكونر1.'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '🚻 ◡̈⃝☠︎︎━━ |قسم الاعضاء│━━☠︎︎🚻 ◡̈⃝‎',
                                            title: 'ESCONAR-BOT',
                                            description:' اسكونر2.'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '🂱◡̈⃝📿━━│قسم الديني│━━◡̈⃝🂱📿',
                                            title: 'ESCONAR-BOT',
                                            description:' اسكونر3.'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '◡̈⃝˼‏🏌˹ ━━|قسم الترفيه│━━˼‏🕺🏻˹◡̈⃝',
                                            title: 'ESCONAR-BOT',
                                            description:' اسكونر4.'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '⬇️◡̈⃝ ━━│ قسم التحميل │━━◡̈⃝⬇️',
                                            title: 'ESCONAR-BOT',
                                            description:' اسكونر5.'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '🔃✠━━│قسم الـتحـويل│━━✠◡̈⃝🔃',
                                            title: 'ESCONAR-BOT',
                                            description:' اسكونر6.'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '◡̈⃝⚙️❏━━│قسم الادوات│━━❏◡̈⃝⚙️',
                                            title: 'ESCONAR-BOT',
                                            description:' اسكونر7.'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '🏦❏━━│قسم البنك│━━❏◡̈⃝🏦',
                                            title: 'ESCONAR-BOT',
                                            description:' اسكونر8.'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '◡̈⃝📢❏━━│قسم الاصوات│━━❏◡̈⃝📢',
                                            title: 'ESCONAR-BOT',
                                            description:' اسكونر9.'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '◡̈⃝˼‏👤˹ ━━|قسم الانمي│━━˼✨˹◡̈⃝',
                                            title: 'ESCONAR-BOT',
                                            description:' اسكونر10.'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '🔧◡̈⃝❏━━│قسم المطور│━━❏◡̈⃝🔧',
                                            title: 'ESCONAR-BOT',
                                            description:' اسكونر11.'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '🧚🏼‍♂️◡̈⃝❏━━│مطوري│━━❏◡̈⃝🧚🏼‍♂️',
                                            title: 'ESCONAR-BOT',
                                            description:' اسكونر12.'
                                        }
                                    ]
                                }
                            ]
                        })
                    },
                    {
                        name: 'cta_url',
                        buttonParamsJson: JSON.stringify({
                            display_text: 'مطوري😘',
                            url: 'https://wa.me/201098829097',
                            merchant_url: ''
                        })
                    },
                    {
                        name: 'single_select',
                        buttonParamsJson: JSON.stringify({
                            display_text: 'call',
                            id: '.صوره'
                        })
                    }
                ],
                messageParamsJson: ''
            }
        };        

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m });
        msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { mentionedJid: [mentionId] };
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};
handler.help = ['imgboton'];
handler.tags = ['For Test'];
handler.command = /^(menu)$/i;
export default handler;
