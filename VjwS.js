const chalk = require('chalk')
const fs = require('fs')
const dit = "`"
const ki = "\`"
const ka = "\`"
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

// MENU UTAMA
global.allmenu = `
            _*C P A N E L*_

> └  ◦ *${ki}clearadmin${ka}* :
> ┌  ◦ *${ki}clearall${ka}* : 
> └  ◦ *${ki}clearuser${ka}* :
> ┌  ◦ *${ki}listadmin${ka}* : 
> └  ◦ *${ki}listpanel${ka}* :
> ┌  ◦ *${ki}deladmin${ka}* : 
> └  ◦ *${ki}delpanel${ka}* :
> ┌  ◦ *${ki}cadmin${ka}* : 
> └  ◦ *${ki}risuhpanel${ka}* :
> ┌  ◦ *${ki}1gb${ka}* : 
> └  ◦ *${ki}2gb${ka}* :
> ┌  ◦ *${ki}3gb${ka}* : 
> └  ◦ *${ki}4gb${ka}* :
> ┌  ◦ *${ki}5gb${ka}* : 
> └  ◦ *${ki}6gb${ka}* :
> ┌  ◦ *${ki}7gb${ka}* : 
> └  ◦ *${ki}8gb${ka}* :
> ┌  ◦ *${ki}9gb${ka}* : 
> └  ◦ *${ki}10gb${ka}* :
> ┌  ◦ *${ki}11gb${ka}* : 
> └  ◦ *${ki}12gb${ka}* :
> ┌  ◦ *${ki}13gb${ka}* : 
> └  ◦ *${ki}14gb${ka}* :
> ┌  ◦ *${ki}15gb${ka}* : 
> └  ◦ *${ki}16gb${ka}* :
> ┌  ◦ *${ki}17gb${ka}* : 
> └  ◦ *${ki}18gb${ka}* :
> ┌  ◦ *${ki}19gb${ka}* : 
> └  ◦ *${ki}20gb${ka}* :
> ┌  ◦ *${ki}unli${ka}* : 
> └  ◦ *${ki}hackbackpanel${ka}* :

            _*C P A N E L*_

> └  ◦ *${ki}clearadmin-s2${ka}* :
> ┌  ◦ *${ki}clearall-s2${ka}* : 
> └  ◦ *${ki}clearuser-s2${ka}* :
> ┌  ◦ *${ki}listadmin-s2${ka}* : 
> └  ◦ *${ki}listpanel-s2${ka}* :
> ┌  ◦ *${ki}deladmin-s2${ka}* : 
> └  ◦ *${ki}delpanel-s2${ka}* :
> ┌  ◦ *${ki}cadmin-s2${ka}* : 
> └  ◦ *${ki}rusuhpanel-s2${ka}* :
> ┌  ◦ *${ki}1gb-s2${ka}* : 
> └  ◦ *${ki}2gb-s2${ka}* :
> ┌  ◦ *${ki}3gb-s2${ka}* : 
> └  ◦ *${ki}4gb-s2${ka}* :
> ┌  ◦ *${ki}5gb-s2${ka}* : 
> └  ◦ *${ki}6gb-s2${ka}* :
> ┌  ◦ *${ki}7gb-s2${ka}* : 
> └  ◦ *${ki}8gb-s2${ka}* :
> ┌  ◦ *${ki}9gb-s2${ka}* : 
> └  ◦ *${ki}10gb-s2${ka}* :
> ┌  ◦ *${ki}11gb-s2${ka}* : 
> └  ◦ *${ki}12gb-s2${ka}* :
> ┌  ◦ *${ki}13gb-s2${ka}* : 
> └  ◦ *${ki}14gb-s2${ka}* :
> ┌  ◦ *${ki}15gb-s2${ka}* : 
> └  ◦ *${ki}16gb-s2${ka}* :
> ┌  ◦ *${ki}17gb-s2${ka}* : 
> └  ◦ *${ki}18gb-s2${ka}* :
> ┌  ◦ *${ki}19gb-s2${ka}* : 
> └  ◦ *${ki}20gb-s2${ka}* :
> ┌  ◦ *${ki}unli$-s2${ka}* : 
> └  ◦ *${ki}hackbackpanel-s2${ka}* :

            _*C P A N E L*_

> └  ◦ *${ki}clearadmin-s3${ka}* :
> ┌  ◦ *${ki}clearall-s3${ka}* : 
> └  ◦ *${ki}clearuser-s3${ka}* :
> ┌  ◦ *${ki}listadmin-s3${ka}* : 
> └  ◦ *${ki}listpanel-s3${ka}* :
> ┌  ◦ *${ki}deladmin-s3${ka}* : 
> └  ◦ *${ki}delpanel-s3${ka}* :
> ┌  ◦ *${ki}cadmin-s3${ka}* : 
> └  ◦ *${ki}rusuhpanel-s3${ka}* :
> ┌  ◦ *${ki}1gb-s3${ka}* : 
> └  ◦ *${ki}2gb-s3${ka}* :
> ┌  ◦ *${ki}3gb-s3${ka}* : 
> └  ◦ *${ki}4gb-s3${ka}* :
> ┌  ◦ *${ki}5gb-s3${ka}* : 
> └  ◦ *${ki}6gb-s3${ka}* :
> ┌  ◦ *${ki}7gb-s3${ka}* : 
> └  ◦ *${ki}8gb-s3${ka}* :
> ┌  ◦ *${ki}9gb-s3${ka}* : 
> └  ◦ *${ki}10gb-s3${ka}* :
> ┌  ◦ *${ki}11gb-s3${ka}* : 
> └  ◦ *${ki}12gb-s3${ka}* :
> ┌  ◦ *${ki}13gb-s3${ka}* : 
> └  ◦ *${ki}14gb-s3${ka}* :
> ┌  ◦ *${ki}15gb-s3${ka}* : 
> └  ◦ *${ki}16gb-s3${ka}* :
> ┌  ◦ *${ki}17gb-s3${ka}* : 
> └  ◦ *${ki}18gb-s3${ka}* :
> ┌  ◦ *${ki}19gb-s3${ka}* : 
> └  ◦ *${ki}20gb-s3${ka}* :
> ┌  ◦ *${ki}unli-s3${ka}* : 
> └  ◦ *${ki}hackbackpanel-s3${ka}* :

            _*C P A N E L*_

> └  ◦ *${ki}clearadmin-s4${ka}* :
> ┌  ◦ *${ki}clearall-s4${ka}* : 
> └  ◦ *${ki}clearuser-s4${ka}* :
> ┌  ◦ *${ki}listadmin-s4${ka}* : 
> └  ◦ *${ki}listpanel-s4${ka}* :
> ┌  ◦ *${ki}deladmin-s4${ka}* : 
> └  ◦ *${ki}delpanel-s4${ka}* :
> ┌  ◦ *${ki}cadmin-s4${ka}* : 
> └  ◦ *${ki}rusupanel-s4${ka}* :
> ┌  ◦ *${ki}1gb-s4${ka}* : 
> └  ◦ *${ki}2gb-s4${ka}* :
> ┌  ◦ *${ki}3gb-s4${ka}* : 
> └  ◦ *${ki}4gb-s4${ka}* :
> ┌  ◦ *${ki}5gb-s4${ka}* : 
> └  ◦ *${ki}6gb-s4${ka}* :
> ┌  ◦ *${ki}7gb-s4${ka}* : 
> └  ◦ *${ki}8gb-s4${ka}* :
> ┌  ◦ *${ki}9gb-s4${ka}* : 
> └  ◦ *${ki}10gb-s4${ka}* :
> ┌  ◦ *${ki}11gb-s4${ka}* : 
> └  ◦ *${ki}12gb-s4${ka}* :
> ┌  ◦ *${ki}13gb-s4${ka}* : 
> └  ◦ *${ki}14gb-s4${ka}* :
> ┌  ◦ *${ki}15gb-s4${ka}* : 
> └  ◦ *${ki}16gb-s4${ka}* :
> ┌  ◦ *${ki}17gb-s4${ka}* : 
> └  ◦ *${ki}18gb-s4${ka}* :
> ┌  ◦ *${ki}19gb-s4${ka}* : 
> └  ◦ *${ki}20gb-s4${ka}* :
> ┌  ◦ *${ki}unli-s4${ka}* : 
> └  ◦ *${ki}hackbackpanel-s4${ka}* :

            _*C P A N E L*_

> └  ◦ *${ki}clearadmin-s5${ka}* :
> ┌  ◦ *${ki}clearall-s5${ka}* : 
> └  ◦ *${ki}clearuser-s5${ka}* :
> ┌  ◦ *${ki}listadmin-s5${ka}* : 
> └  ◦ *${ki}listpanel-s5${ka}* :
> ┌  ◦ *${ki}deladmin-s5${ka}* : 
> └  ◦ *${ki}delpanel-s5${ka}* :
> ┌  ◦ *${ki}cadmin-s5${ka}* : 
> └  ◦ *${ki}rusuhpanel-s5${ka}* :
> ┌  ◦ *${ki}1gb-s5${ka}* : 
> └  ◦ *${ki}2gb-s5${ka}* :
> ┌  ◦ *${ki}3gb-s5${ka}* : 
> └  ◦ *${ki}4gb-s5${ka}* :
> ┌  ◦ *${ki}5gb-s5${ka}* : 
> └  ◦ *${ki}6gb-s5${ka}* :
> ┌  ◦ *${ki}7gb-s5${ka}* : 
> └  ◦ *${ki}8gb-s5${ka}* :
> ┌  ◦ *${ki}9gb-s5${ka}* : 
> └  ◦ *${ki}10gb-s5${ka}* :
> ┌  ◦ *${ki}11gb-s5${ka}* : 
> └  ◦ *${ki}12gb-s5${ka}* :
> ┌  ◦ *${ki}13gb-s5${ka}* : 
> └  ◦ *${ki}14gb-s5${ka}* :
> ┌  ◦ *${ki}15gb-s5${ka}* : 
> └  ◦ *${ki}16gb-s5${ka}* :
> ┌  ◦ *${ki}17gb-s5${ka}* : 
> └  ◦ *${ki}18gb-s5${ka}* :
> ┌  ◦ *${ki}19gb-s5${ka}* : 
> └  ◦ *${ki}20gb-s5${ka}* :
> ┌  ◦ *${ki}unli-s5${ka}* : 
> └  ◦ *${ki}hackbackpanel-s5${ka}* :

            _*B U G  B O T*_
            
┌  ◦ *\`xreact\`* : <reply chat>
└  ◦ *\`x\`* : <number|amount>
┌  ◦ *\`x2\`* : <amount>
└  ◦ *\`iosbug\`* : <number|amount>
┌  ◦ *\`iosbug2\`* : <amount>
└  ◦ *\`xaudio\`* : <number|amount>
┌  ◦ *\`xaudio2\`* : <amount>
└  ◦ *\`xsticker\`* : <number|amount>
┌  ◦ *\`xsticker2\`* : <amount>
└  ◦ *\`xloc\`* : <number|amount>
┌  ◦ *\`xloc2\`* : <amount>
└  ◦ *\`xlist\`* : <number|amount>
┌  ◦ *\`xlist2\`* : <amount>
└  ◦ *\`xkill\`* : <number|amount>
┌  ◦ *\`xkill2\`* : <amount>
└  ◦ *\`xkillgc\`* : <link group>
┌  ◦ *\`tempban\`* :<code|number>
└  ◦ *\`xcrash\`* :<number>
┌  ◦ *\`xcrash2\`* :<amount>
└  ◦ *\`xioscrash\`* :<number>
┌  ◦ *\`xioscrash2\`* :<amount>
└  ◦ *\`iosgoogle\`* : <number>
┌  ◦ *\`iosgoogle2\`* : <amount>
└  ◦ *\`iosq\`* : <number>

           _*M E N U   S T O R E*_

 • .addlist
 • .dellist
 • .done
 • .updatelist
 • .proses
 • .jpm
 • .setteksjpm
 • .startjpm
 • .textjpm
 • .jpm
 • .jpm2
 • .store

         _*M E N U   L I N O D E*_

 • .resetpassword
 • .deletelinode
 • .listlinode
 • .onlinode
 • .offlinode
 • .rebootlinode
 • .rebuildlinode
 • .sisalinode
 • .saldolinode
 • .cekvpslinode
 • .linode2gb
 • .linode4gb
 • .linode8gb
 • .linode16gb
 
            _*Q U O T E S*_

┌  ◦ *\`motivasi\`* : 
└  ◦ *\`quotes-motivasi\`* : 
┌  ◦ *\`hacker\`* :
└  ◦ *\`quotes-hacker\`* : 
┌  ◦ *\`cinta\`* : 
└  ◦ *\`quotes-cinta\`* : 
┌  ◦ *\`sindiran\`* : 
└  ◦ *\`quotes-sindiran\`* : 
┌  ◦ *\`islam\`* : 
└  ◦ *\`quotes-islam\`* :

            _*A N O N Y M O U S*_

┌  ◦ *\`menfes\`* : 
└  ◦ *\`stopmenfess\`* : 
┌  ◦ *\`tolakmenfes\`* :
└  ◦ *\`balasmenfess\`* : 
┌  ◦ *\`start\`* : 
└  ◦ *\`mulai\`* : 
┌  ◦ *\`leave\`* : 
└  ◦ *\`keluar\`* : 
┌  ◦ *\`next\`* : 
└  ◦ *\`lanjut\`* :
┌  ◦ *\`anonymouschat\`* : 
└  ◦ *\`sendprofil\`* :

         _*B E R I T A*_
         
┌  ◦ *\`ꜰᴀᴊᴀʀ\`* :
└  ◦ *\`ᴄɴɴ\`* :
┌  ◦ *\`ʟᴀʏᴀʀᴋᴀᴄᴀ\`* :
└  ◦ *\`ᴄɴʙᴄ\`* :
┌  ◦ *\`ᴛʀɪʙᴜɴ\`* :
└  ◦ *\`ɪɴᴅᴏᴢᴏɴᴇ\`* :
┌  ◦ *\`ᴋᴏᴍᴘᴀꜱ\`* :
└  ◦ *\`ᴅᴇᴛɪᴋɴᴇᴡꜱ\`* :
┌  ◦ *\`ᴅᴀɪʟʏɴᴇᴡꜱ\`* :
└  ◦ *\`ɪɴᴇᴡꜱ\`* :
┌  ◦ *\`ᴏᴋᴇᴢᴏɴᴇ\`* :
└  ◦ *\`ꜱɪɴᴅᴏ\`* :
┌  ◦ *\`ᴛᴇᴍᴘᴏ\`* :
└  ◦ *\`ᴀɴᴛᴀʀᴀ\`* :
┌  ◦ *\`ᴋᴏɴᴛᴀɴ\`* :
└  ◦ *\`ᴍᴇʀᴅᴇᴋᴀ\`* :
┌  ◦ *\`ᴊᴀʟᴀɴᴛɪᴋᴜꜱ\`* :
└  ◦ *\`ɢᴇᴍᴘᴀɴᴇᴡꜱ\`* :
┌  ◦ *\`dark\`* :
└  ◦ *\`gempa\`* :

         _*I S L A M*_
         
┌  ◦ *\`listsurah\`* :
└  ◦ *\`asmaulhusna\`* : 
┌  ◦ *\`kisahnabi\`* :
└  ◦ *\`jadwalsholat\`* : 
┌  ◦ *\`randomquran\`* :
└  ◦ *\`quranaudio\`* : 
┌  ◦ *\`ceramah-ustad\`* :
└  ◦ *\`niat-sholat\`* : 

         _*P O P U L E R*_
         
┌  ◦ *\`daftar\`* :
└  ◦ *\`tqto\`* : 
┌  ◦ *\`brat\`* :
└  ◦ *\`bratvid\`* : 
┌  ◦ *\`qc\`* :
└  ◦ *\`qc2\`* : 
┌  ◦ *\`chatgpt\`* :
└  ◦ *\`ai\`* : 
┌  ◦ *\`nulis\`* :
└  ◦ *\`nulis2\`* : 
┌  ◦ *\`atp\`* :
└  ◦ *\`attp\`* : 
┌  ◦ *\`attp2\`* :
└  ◦ *\`smeme\`* : 
┌  ◦ *\`galau\`* :
└  ◦ *\`bokep\`* : 
┌  ◦ *\`play\`* :
└  ◦ *\`spotify\`* : 
┌  ◦ *\`ytmp4\`* :
└  ◦ *\`ytmp3\`* : 
┌  ◦ *\`tiktok\`* :
└  ◦ *\`instagram\`* : 
┌  ◦ *\`captcut\`* :
└  ◦ *\`facebook\`* : 
┌  ◦ *\`pinterest\`* :
└  ◦ *\`sctiker\`* : 
┌  ◦ *\`tiktoksearch\`* : tts
└  ◦ *\`youtubesearch\`* : yts
┌  ◦ *\`ewe\`* :
└  ◦ *\`wikwik\`* : 
┌  ◦ *\`confess\`* :
└  ◦ *\`menfess\`* : 
┌  ◦ *\`confessgc\`* :
└  ◦ *\`getpp\`* : 
┌  ◦ *\`lirik\`* :
└  ◦ *\`ping\`* : 

         _*B E L A J A R*_

┌  ◦ *\`rangkum\`* :
└  ◦ *\`nulis\`* : 
┌  ◦ *\`nulis2\`* : 
└  ◦ *\`kalkulator\`* :
┌  ◦ *\`hitung\`* : 
└  ◦ *\`chatgpt\`* : 
┌  ◦ *\`wikipedia\`* : 
└  ◦ *\`google\`* :
┌  ◦ *\`.\`* :
└  ◦ *\`.\`* : 

         _*S T I C K E R*_

┌  ◦ *\`sticker\`* :
└  ◦ *\`smeme\`* : 
┌  ◦ *\`attp\`* : 
└  ◦ *\`attp2\`* :
┌  ◦ *\`ttp\`* :
└  ◦ *\`ttp2\`* : 
┌  ◦ *\`brat\`* : 
└  ◦ *\`bratvid\`* :
┌  ◦ *\`qc\`* :
└  ◦ *\`qc2\`* : 
┌  ◦ *\`btatnime\`* :
└  ◦ *\`bratanime\`* : 
┌  ◦ *\`patrick\`* :
└  ◦ *\`doge\`* : 
┌  ◦ *\`kawan-sponsbob\`* :
└  ◦ *\`sponsbob\`* : 
┌  ◦ *\`dino-kuning\`* :
└  ◦ *\`gojosatoru\`* : 
┌  ◦ *\`pack\`* :
└  ◦ *\`stick\`* : 
┌  ◦ *\`hope-boy\`* :
└  ◦ *\`jisoo\`* : 
┌  ◦ *\`kr-robot\`* :
└  ◦ *\`kucing\`* :
┌  ◦ *\`manusia-lidi\`* :
└  ◦ *\`menjamet\`* :  
┌  ◦ *\`meow\`* :
└  ◦ *\`nicholas\`* : 
┌  ◦ *\`tyni\`* :
└  ◦ *\`qckode\`* : 
┌  ◦ *\`stickerwm\`* :
└  ◦ *\`stickergif\`* : 
┌  ◦ *\`lonte\`* :
└  ◦ *\`jamet\`* : 
┌  ◦ *\`emojimix\`* :
└  ◦ *\`stikersearch\`* : 

            _*P U S H  K O N T A K*_
            
_Version Text Biasa_
┌  ◦ *\`pushkontak\`* : [version text]
└  ◦ *\`pushkontak2\`* : [version idgc]
  
_Version Yang Ada Gambar_
┌  ◦ *\`pushkontak3\`* : [version text]
└  ◦ *\`pushkontak4\`* : [version idgc]
┌  ◦ *\`pushkontak5\`* : [version idgc + text + button link]
└  ◦ *\`pushkontak6\`* : [version idgc + text + button biasa]
┌  ◦ *\`pushkontak7\`* : [version idgc + text + button copy]
└  ◦ *\`pushkontak8\`* : [version idgc + text + button telpon]
┌  ◦ *\`pushkontak9\`* : [version idgc + text + burton list]
  
_Version Yang Ada Video_
└  ◦ *\`pushkontak10\`* : [version text]
┌  ◦ *\`pushkontak11\`* : [version idgc]
└  ◦ *\`pushkontak12\`* : [version idgc + text + button link]
┌  ◦ *\`pushkontak13\`* : [version idgc + text + button biasa]
└  ◦ *\`pushkontak14\`* : [version idgc + text + button copy]
┌  ◦ *\`pushkontak15\`* : [version idgc + text + button telpon]
└  ◦ *\`pushkontak16\`* : [version idgc + text + burton list]

            _*R A N D O M   P H O T O*_
            
└  ◦ *\`hijab\`* :
┌  ◦ *\`indo\`* :
└  ◦ *\`confess\`* : 
┌  ◦ *\`menfess\`* : 
└  ◦ *\`japanese\`* :
┌  ◦ *\`korean\`* :
└  ◦ *\`malay\`* :
┌  ◦ *\`randomgirl\`* :
└  ◦ *\`randomboy\`* :
┌  ◦ *\`thai\`* :
└  ◦ *\`vietnamese\`* :
┌  ◦ *\`aesthetic\`* :
└  ◦ *\`chinese\`* :
┌  ◦ *\`pubg\`* :
└  ◦ *\`antiwork\`* :
┌  ◦ *\`blackpink2\`* :
└  ◦ *\`cosplay\`* :
┌  ◦ *\`cat\`* :
└  ◦ *\`doggo\`* :
┌  ◦ *\`justina\`* :
└  ◦ *\`kayes\`* :
┌  ◦ *\`bike\`* :
└  ◦ *\`boneka\`* :
┌  ◦ *\`kpop\`* :
└  ◦ *\`notnot\`* :
┌  ◦ *\`car\`* :
└  ◦ *\`rose\`* :
┌  ◦ *\`ryujin\`* :
└  ◦ *\`ulzangboy\`* :
┌  ◦ *\`ulzanggirl\`* :
└  ◦ *\`mobilelegend\`* :

            _*N S F W*_
            
┌  ◦ *\`dlychan\`* :
└  ◦ *\`hana\`* :
┌  ◦ *\`merial\`* :
└  ◦ *\`Mihye\`* :
┌  ◦ *\`nanaqi\`* :
└  ◦ *\`NguyenXHuang\`* :
┌  ◦ *\`Noname\`* :
└  ◦ *\`nude\`* :
┌  ◦ *\`okita\`* :
└  ◦ *\`onlyfans\`* :
┌  ◦ *\`onlyfansvid\`* :
└  ◦ *\`quan\`* :
┌  ◦ *\`umekoj\`* :
└  ◦ *\`yoshinobi\`* :
┌  ◦ *\`hentai\`* :
└  ◦ *\`hentaivid\`* :
┌  ◦ *\`hneko\`* :
└  ◦ *\`nwaifu\`* :
┌  ◦ *\`animespank\`* :
└  ◦ *\`gasm\`* :
┌  ◦ *\`cuckold\`* :  
└  ◦ *\`cum\`* :  
┌  ◦ *\`milf\`* :  
└  ◦ *\`eba\`* :  
┌  ◦ *\`ero\`* :  
└  ◦ *\`manga\`* :  
┌  ◦ *\`pussy\`* :  
└  ◦ *\`tentacles\`* : 
┌  ◦ *\`yuri\`* :  
└  ◦ *\`zettai\`* :
    

      _*O T H E R S*_

└  ◦ *\`bokep\`* :
┌  ◦ *\`bokep1-27\`* :
└  ◦ *\`art\`* :
┌  ◦ *\`paptt\`* :
└  ◦ *\`awoo\`* :
┌  ◦ *\`hentaivid\`* :
└  ◦ *\`hentaivid2\`* :
┌  ◦ *\`xnxxs\`* : *judul*
└  ◦ *\`xnxxdl\`* : *link*

            _*O W N E R    T O O L S*_

┌  ◦ *\`ping\`* :
└  ◦ *\`hdvideo\`* :
┌  ◦ *\`runtime\`* :
└  ◦ *\`opsichatpc\`* : *nomor*
┌  ◦ *\`opsichatgc\`* : *id*
└  ◦ *\`addcase\`* : *code*
┌  ◦ *\`delcase\`* : *command*
└  ◦ *\`addsewa\`* : *link + time*
┌  ◦ *\`listsewa\`* :
└  ◦ *\`checksewa\`* :
┌  ◦ *\`hdvideo\`* :
└  ◦ *\`delsewa\`* :
┌  ◦ *\`ebase64\`* : *text/code*
└  ◦ *\`debase64\`* : *base64*
┌  ◦ *\`ehex\`* : *text/code*
└  ◦ *\`dehex\`* : *hex*
┌  ◦ *\`restart\`* : *restart bot*
└  ◦ *\`shutdown\`* : *mati*
┌  ◦ *\`buatgc\`* : *namanya*
└  ◦ *\`ipbot\`* :
┌  ◦ *\`shortlink\`* : *url*
└  ◦ *\`ebinary\`* : *text*
┌  ◦ *\`dbinary\`* : *text*
└  ◦ *\`clearjdb\`* :
┌  ◦ *\`getdb\`* :
└  ◦ *\`delsampah\`* :
┌  ◦ *\`encrypt\`* : *text/code*
└  ◦ *\`ban\`* :
┌  ◦ *\`nowa\`* : *nomor*
└  ◦ *\`banned\`* : *mention or reply*
┌  ◦ *\`call\`* : *telepon*
└  ◦ *\`spamsms\`* : *pesan spam*
┌  ◦ *\`gantifile\`* : *nama file*
└  ◦ *\`delfolder\`* : *nama folder*
┌  ◦ *\`nomor-wa\`* : *nomornya*
  • $ *exec*
  
            _*A S U P A N*_
            
┌  ◦ *\`cucimata\`* :
└  ◦ *\`tobrut\`* : 
┌  ◦ *\`bokep\`* :
└  ◦ *\`asupan1-20\`* : [ coming soon]
┌  ◦ *\`tiktokgirl\`* :
└  ◦ *\`tiktoknukthy\`* :
┌  ◦ *\`tiktokkayes\`* :
└  ◦ *\`tiktokpanrika\`* :
┌  ◦ *\`tiktoknotnot\`* :
└  ◦ *\`tiktokghea\`* :
┌  ◦ *\`tiktoksantuy\`* :
└  ◦ *\`tiktokbocil\`* :

            _*P H O T O O X Y*_

└  ◦ *\`shadow\`* : *text*
┌  ◦ *\`write\`* : *text*
└  ◦ *\`romantic\`* : *text*
┌  ◦ *\`burnpaper\`* : *text*
└  ◦ *\`smoke\`* : *text*
┌  ◦ *\`narutobanner\`* : *text*
└  ◦ *\`love\`* : *text*
┌  ◦ *\`undergrass\`* : *text*
└  ◦ *\`doublelove\`* : *text*
┌  ◦ *\`coffecup\`* : *text*
└  ◦ *\`underwaterocean\`* :*text*
┌  ◦ *\`smokyneon\`* : *text*
└  ◦ *\`starstext\`* : *text*
┌  ◦ *\`rainboweffect\`* : *text*
└  ◦ *\`balloontext\`* : *text*
┌  ◦ *\`metalliceffect\`* : *text*
└  ◦ *\`embroiderytext\`* : *text*
┌  ◦ *\`flamingtext\`* : *text*
└  ◦ *\`stonetext\`* : *text*
┌  ◦ *\`writeart\`* : *text*
└  ◦ *\`summertext\`* : *text*
┌  ◦ *\`wolfmetaltext\`* : *text*
└  ◦ *\`nature3dtext\`* : *text*
┌  ◦ *\`rosestext\`* : *text*
└  ◦ *\`naturetypography\`* : *text*
┌  ◦ *\`quotesunder\`* : *text*
└  ◦ *\`shinetext\`* : *text*

            _*J A D I   B O T*_
┌  ◦ *\`renew-jadibot\`* : pairing
└  ◦ *\`repses-jadibot\`* : qrcode
┌  ◦ *\`jadibot-pairing\`* : pairing
└  ◦ *\`jadibot-scan\`* : qrcode
┌  ◦ *\`stop\`* : *mematikan*
└  ◦ *\`start\`* : *memulai*
┌  ◦ *\`listjadibot\`* :
└  ◦ *\`delsession\`* :
┌  ◦ *\`getsession\`* :
└  ◦ *\`carajadibot\`* :

            _*T E X T  M A K E R*_

┌  ◦ *\`blackpink\`* : 
└  ◦ *\`neon\`* : 
┌  ◦ *\`greenneon\`* : 
└  ◦ *\`advanceglow\`* : 
┌  ◦ *\`futureneon\`* : 
└  ◦ *\`sandwriting\`* : 
┌  ◦ *\`sandsummer\`* : 
└  ◦ *\`sandengraved\`* : 
┌  ◦ *\`metaldark\`* : 
└  ◦ *\`neonlight\`* : 
┌  ◦ *\`holographic\`* : 
└  ◦ *\`text1917\`* : 
┌  ◦ *\`minion\`* : 
└  ◦ *\`deluxesilver\`* : 
┌  ◦ *\`newyearcard\`* : 
└  ◦ *\`bloodfrosted\`* : 
┌  ◦ *\`halloween\`* : 
└  ◦ *\`jokerlogo\`* : 
┌  ◦ *\`fireworksparkle\`* : 
└  ◦ *\`natureleaves\`* : 
┌  ◦ *\`bokeh\`* : 
└  ◦ *\`toxic\`* : 
┌  ◦ *\`strawberry\`* : 
└  ◦ *\`box3d\`* : 
┌  ◦ *\`roadwarning\`* : 
└  ◦ *\`breakwall\`* : 
┌  ◦ *\`icecold\`* : 
└  ◦ *\`luxury\`* : 
┌  ◦ *\`cloud\`* : 
└  ◦ *\`summersand\`* : 
┌  ◦ *\`horrorblood\`* : 
└  ◦ *\`thunder\`* : 

           _*O W N E R*_

┌  ◦ *\`public\`* :
└  ◦ *\`self\`* :
┌  ◦ *\`bc\`* :
└  ◦ *\`bcgc\`* :
┌  ◦ *\`backup\`* :
└  ◦ *\`delsesi\`* :  
┌  ◦ *\`warcallid\`* : *id|text*
└  ◦ *\`cleardb\`* :
┌  ◦ *\`adduserdb\`* : *reply*
└  ◦ *\`deluserdb\`* : *reply*
┌  ◦ *\`adduserdbgc\`* :
└  ◦ *\`listdbuser\`* :
┌  ◦ *\`unbanned\`* : *mention or reply*
└  ◦ *\`addprem\`* : *mention or reply*
┌  ◦ *\`delprem\`* : *mention or reply*
└  ◦ *\`setprefix\`* : *symbol*
┌  ◦ *\`setcover\`* : *link photo*
└  ◦ *\`setppbot\`* : *reply photo*
┌  ◦ *\`delppbot\`* :
└  ◦ *\`block\`* : *mention or reply*
┌  ◦ *\`unblock\`* : *mention or reply*
└  ◦ *\`listblock\`* :
┌  ◦ *\`listpc\`* :
└  ◦ *\`listgc\`* :
┌  ◦ *\`listonline\`* :   
└  ◦ *\`delchat\`* :
┌  ◦ *\`readvo\`* : *reply viewonce*
└  ◦ *\`setnamabot\`* : *nama*
┌  ◦ *\`setbiobot\`* : *bionya*
└  ◦ *\`setthumb\`* : *gambar*
┌  ◦ *\`welcome\`* : *on / off*
└  ◦ *\`anticall\`* : *on / off*
┌  ◦ *\`autodownload\`* : *on / off*
└  ◦ *\`autoreadsw\`* : *on / off*

            _*S E A R C H*_

┌  ◦ *\`pict\`* : *query*
└  ◦ *\`dark\`* : 
┌  ◦ *\`play\`* : *judul*
└  ◦ *\`spotify\`* : *title*
┌  ◦ *\`spotifysearch\`* : *title*
└  ◦ *\`pinterest\`* : *text*
┌  ◦ *\`ytvideo\`* : *text*
└  ◦ *\`yts\`* : *querry*
┌  ◦ *\`ssweb\`* : *link*
└  ◦ *\`google\`* : *text*
┌  ◦ *\`nontontv\`* :
└  ◦ *\`ttsearch\`* : *username*
┌  ◦ *\`ghstalk\`* : *username*
└  ◦ *\`igstalk\`* : *username*
┌  ◦ *\`tiktokstalk\`* : *username*
└  ◦ *\`npmsearch\`* : *pack name*
┌  ◦ *\`weather\`* : *lokasi*
└  ◦ *\`aiimg\`* : *text*
┌  ◦ *\`gimage\`* : *text*
└  ◦ *\`textimg\`* : *prompt*
┌  ◦ *\`bingimg\`* : *prompt*
└  ◦ *\`bingimg\`* : *prompt*
┌  ◦ *\`translate\`* : *reply text*
└  ◦ *\`jarak\`* : *kota|kota*
┌  ◦ *\`lirik\`* : *judul lagu*
└  ◦ *\`xnxxs\`* : *title*
┌  ◦ *\`pornhubgif\`* : *judul*
└  ◦ *\`animesearch\`* : *title*
┌  ◦ *\`otakudesu\`* : *title*
└  ◦ *\`hentaisearch\`* : *judul :D*
┌  ◦ *\`drakor\`* : 
└  ◦ *\`infocuaca\`* :

            _*A I - G P T*_

┌  ◦ *\`amba\`* :
└  ◦ *\`faceswap\`* : 
┌  ◦ *\`prodia\`* :
└  ◦ *\`stabledif\`* : 
┌  ◦ *\`editee\`* :
└  ◦ *\`tomoe\`* : 
┌  ◦ *\`ai\`* : 
└  ◦ *\`ai2\`* : 
┌  ◦ *\`aidrawing\`* :
└  ◦ *\`aiimg\`* : 
┌  ◦ *\`ai-elevenlabs\`* :
└  ◦ *\`ttselevenlabs\`* : 
┌  ◦ *\`topixel\`* :
└  ◦ *\`toanime\`* : 
┌  ◦ *\`photoleap\`* :
└  ◦ *\`chatgpt2\`* : 
┌  ◦ *\`replicate\`* :
└  ◦ *\`aiscene\`* : 
┌  ◦ *\`simi\`* :
└  ◦ *\`differentme\`* : 
┌  ◦ *\`diffusion\`* :
└  ◦ *\`bang-rim\`* : 
┌  ◦ *\`prabowo-stalk\`* :
└  ◦ *\`michi-stalk\`* : 
┌  ◦ *\`chatgpt\`* :
└  ◦ *\`chatgpt2\`* : 
┌  ◦ *\`gpt\`* : *ask*
└  ◦ *\`openai\`* : *ask*
┌  ◦ *\`min\`* : *ask*
└  ◦ *\`pace\`* : *ask*
┌  ◦ *\`lora\`* :
└  ◦ *\`leptoai\`* : 
┌  ◦ *\`ocr\`* :
└  ◦ *\`megahd\`* :    
┌  ◦ *\`pulsar-gpt\`* :
└  ◦ *\`asuma-gpt\`* : 
┌  ◦ *\`oi\`* :
└  ◦ *\`texttosound\`* : 
┌  ◦ *\`remini2\`* :
└  ◦ *\`remini\`* : 
┌  ◦ *\`recolor\`* :
└  ◦ *\`dehaze\`* : 
┌  ◦ *\`superhd\`* :
└  ◦ *\`kompres\`* : 
┌  ◦ *\`hd\`* :
└  ◦ *\`hd2\`* : 
┌  ◦ *\`hdr\`* :
└  ◦ *\`hdr2\`* : 
┌  ◦ *\`txt2img\`* :
└  ◦ *\`txt2emoji\`* : 
┌  ◦ *\`txt2waifu\`* :
└  ◦ *\`txt2anime\`* : 
┌  ◦ *\`animediffusion\`* :
└  ◦ *\`animediffusion2\`* : 
┌  ◦ *\`animediffusion3\`* :
└  ◦ *\`animediffusion4\`* : 
┌  ◦ *\`diffusion\`* :
└  ◦ *\`differentme\`* : 
┌  ◦ *\`differentme2\`* :
└  ◦ *\`differentme\`* : 
┌  ◦ *\`bingimage\`* :
└  ◦ *\`bingimage2\`* : 
┌  ◦ *\`meta-ai\`* :
└  ◦ *\`luminai\`* : 
┌  ◦ *\`islamic-ai\`* :
└  ◦ *\`masamba\`* : 

            _*E G G V I P - M E N U*_

 • .addip *ip/link*
 • .deleteip *ip*
 • .listip

            _*J A G A  G R U P*_
┌  ◦ *\`antitag\`* : *coming soon*
└  ◦ *\`antilinkgrub\`* : *on / off*
┌  ◦ *\`antitoxic\`* : *on / off*
└  ◦ *\`antilinkyt\`* : *on / off*  
┌  ◦ *\`antilinkfb\`* : *on / off*  
└  ◦ *\`antilinktt\`* : *on / off*  
┌  ◦ *\`antilinkig\`* : *on / off*  
└  ◦ *\`antifoto\`* : *on / off*  
┌  ◦ *\`antivideo\`* : *on / off*  
└  ◦ *\`antisticker\`* : *on / off*  
┌  ◦ *\`antiaudio\`* : *on / off*  
└  ◦ *\`antibot\`* : *on / off*  
┌  ◦ *\`antilinksaluran\`* : *on / off*  
└  ◦ *\`antimedia\`* : *on / off*  
┌  ◦ *\`antistikeygay\`* : *on / off*  
└  ◦ *\`anticontact\`* : *on / off* 
┌  ◦ *\`antidokumen\`* : *on / off*  
└  ◦ *\`antipolling\`* : *on / off*  
┌  ◦ *\`antitagsw\`* : *on / off*  
└  ◦ *\`antitagswkick\`* : *on / off*  
┌  ◦ *\`antiwame\`* : *on / off*  
└  ◦ *\`antilinktele\`* : *on / off*  

            _*C O N V E R T*_

┌  ◦ *\`say\`* : *text*
└  ◦ *\`toonce\`* : *media*
┌  ◦ *\`smeme\`* : *image & text*
└  ◦ *\`qc\`* : *text*
┌  ◦ *\`qcimg\`* : *text*
└  ◦ *\`smeta\`* : *reply sticker*
┌  ◦ *\`sticker\`* : *reply image/video*
└  ◦ *\`toimg\`* : *reply sticker*
┌  ◦ *\`toptv\`* : *reply video*
└  ◦ *\`tomp4\`* : *reply sticker*
┌  ◦ *\`toaudio\`* : *reply video*
└  ◦ *\`tomp3\`* : *reply video*
┌  ◦ *\`togif\`* : *reply video*
└  ◦ *\`toqr\`* : *link or text*
┌  ◦ *\`tovn\`* : *reply audio*
└  ◦ *\`remini\`* : *reply gambar*

            _*D O W N L O A D*_

└  ◦ *\`ytsearch\`* : *judul*
┌  ◦ *\`ytreels\`* : *link*
└  ◦ *\`getmusic\`* : *reply yts*
┌  ◦ *\`getvideo\`* : *reply yts*
└  ◦ *\`ytvideo\`* : *judul video*
┌  ◦ *\`ytmp3\`* : *link youtube*
└  ◦ *\`ytmp4\`* : *link youtube*
┌  ◦ *\`ytdok\`* : *link youtube*
└  ◦ *\`ytvn\`* : *link youtube*
┌  ◦ *\`ytvideo\`* : *link youtube*
└  ◦ *\`tiktok\`* : *link tiktok*
┌  ◦ *\`igdl\`* : *link* 
└  ◦ *\`capcutdl\`* : *link*
┌  ◦ *\`megadl\`* : *link*
└  ◦ *\`fbdl\`* : *link*
┌  ◦ *\`spotifydl\`* : *link*
└  ◦ *\`igdl\`* : *link*
┌  ◦ *\`gitclone\`* : *link*
└  ◦ *\`mediafire\`* : *link*
┌  ◦ *\`happymod\`* : *game name*
└  ◦ *\`gdrive\`* : *link*

            _*E P H O T O*_

└  ◦ *\`credit\`* :
┌  ◦ *\`glitchtext\`* : *text*
└  ◦ *\`writetext\`* : *text*
┌  ◦ *\`advancedglow\`* : *text*
└  ◦ *\`typographytext\`* : *text*
┌  ◦ *\`pixelglitch\`* : *text*
└  ◦ *\`neonglitch\`* : *text*
┌  ◦ *\`flagtext\`* : *text*
└  ◦ *\`flag3dtext\`* : *text*
┌  ◦ *\`deletingtext\`* : *text*
└  ◦ *\`blackpinkstyle\`* : *text*
┌  ◦ *\`glowingtext\`* : *text*
└  ◦ *\`underwatertext\`* : *text*
┌  ◦ *\`logomaker\`* : *text*
└  ◦ *\`cartoonstyle\`* : *text*
┌  ◦ *\`papercutstyle\`* : *text*
└  ◦ *\`watercolortext\`* : *text*
┌  ◦ *\`effectclouds\`* : *text*
└  ◦ *\`blackpinklogo\`* : *text*
┌  ◦ *\`gradienttext\`* : *text*
└  ◦ *\`summerbeach\`* : *text*
┌  ◦ *\`luxurygold\`* : *text*
└  ◦ *\`multicoloredneon\`* : *text*
┌  ◦ *\`sandsummer\`* : *text*
└  ◦ *\`galaxywallpaper\`* : *text*
┌  ◦ *\`1917style\`* : *text*
└  ◦ *\`makingneon\`* : *text*
┌  ◦ *\`royaltext\`* : *text*
└  ◦ *\`freecreate\`* : *text*
┌  ◦ *\`galaxystyle\`* : *text*
└  ◦ *\`lighteffects\`* : *text*

            _*P R I M B O N*_

┌  ◦ *\`credit\`* :
└  ◦ *\`artinama\`* : *text*
┌  ◦ *\`artimimpi\`* : *text*
└  ◦ *\`kecocokanpasangan\`* : *text*
┌  ◦ *\`kecocokannama\`* : *text*
└  ◦ *\`jadianpernikahan\`* : *text*
┌  ◦ *\`rezeki\`* : *text*
└  ◦ *\`sifatusaha\`* : *text*
┌  ◦ *\`pekerjaan\`* : *text*
└  ◦ *\`artitarot\`* : *text*
┌  ◦ *\`potensipenyakit\`* : *text*
└  ◦ *\`ramalannasib\`* : *text*
┌  ◦ *\`harisangar\`* : *text*
└  ◦ *\`haribaik\`* : *text*
┌  ◦ *\`fengshui\`* : *text*
└  ◦ *\`nagahari\`* : *text*
┌  ◦ *\`harinaas\`* : *text*
└  ◦ *\`weton\`* : *text*
┌  ◦ *\`peruntungan\`* : *text*
└  ◦ *\`arahrejeki\`* : *text*
┌  ◦ *\`sifat\`* : *text*
└  ◦ *\`kebetuntungan\`* : *text*
┌  ◦ *\`memancing\`* : *text*
└  ◦ *\`masasubur\`* : *text*
┌  ◦ *\`zodiak\`* : *text*
└  ◦ *\`shio\`* : *text*

            _*G R O U P*_

┌  ◦ *\`credit\`* :
└  ◦ *\`rules\`* :
┌  ◦ *\`getsider\`* :
└  ◦ *\`totalfitur\`* :
┌  ◦ *\`boostgc\`* :
└  ◦ *\`warcall\`* : *text*
┌  ◦ *\`getcontact\`* : *tag*
└  ◦ *\`sendcontact\`* : *tag*
┌  ◦ *\`contacttag\`* : *tag*
└  ◦ *\`kontakme\`* :
┌  ◦ *\`menfess\`* : *pesannya*
└  ◦ *\`setcmd\`* : *command*
┌  ◦ *\`listcmd\`* :
└  ◦ *\`delcmd\`* : *command*
┌  ◦ *\`timergc\`* : *waktu*
└  ◦ *\`afk\`* : *alasan*
┌  ◦ *\`tagall\`* : *text*
└  ◦ *\`kudeta\`* : *berbahaya*
┌  ◦ *\`idgc\`* :
└  ◦ *\`promoteall\`* : *adminkan semua*
┌  ◦ *\`demoteall\`* : *unadmin semua*
└  ◦ *\`hidetag\`* : *text*
┌  ◦ *\`cekgc\`* : *link*
└  ◦ *\`ppcp/couple\`* :
┌  ◦ *\`getname\`* : *mention or reply*
└  ◦ *\`getpp\`* : *mention or reply*
┌  ◦ *\`getbio\`* : *mention or reply*
└  ◦ *\`delete\`* : *reply pesan*
┌  ◦ *\`promote\`* : *mention or reply*
└  ◦ *\`demote\`* : *mention or reply*
┌  ◦ *\`add\`* : *number*
└  ◦ *\`kick\`* : *mention or reply*
┌  ◦ *\`infogrup\`* :
└  ◦ *\`linkgrup\`* :
┌  ◦ *\`grup\`* : *open / close*
└  ◦ *\`revoke\`* :
┌  ◦ *\`join\`* : *link group*
└  ◦ *\`left\`* :
┌  ◦ *\`setppgrup\`* : *reply photo*
└  ◦ *\`setgrupname\`* : *text*
┌  ◦ *\`setdesc\`* : *text*
└  ◦ *\`pushkontakfrom\`* : *text*

            _*A N I M E*_

└  ◦ *\`cogan\`* :
┌  ◦ *\`elaina2\`* :
└  ◦ *\`exo\`* :
┌  ◦ *\`elf\`* :
└  ◦ *\`estetic\`* :
┌  ◦ *\`kanna\`* :
└  ◦ *\`loli\`* :
┌  ◦ *\`shota\`* :
└  ◦ *\`husbu\`* :
┌  ◦ *\`sagiri\`* :
└  ◦ *\`shinobu\`* :
┌  ◦ *\`megumin\`* :
└  ◦ *\`wallnime\`* :
┌  ◦ *\`neko\`* :
└  ◦ *\`waifu\`* :
┌  ◦ *\`kill\`* :
└  ◦ *\`pat\`* :
┌  ◦ *\`lick\`* :
└  ◦ *\`bite\`* :
┌  ◦ *\`yeet\`* :
└  ◦ *\`bonk\`* :
┌  ◦ *\`wink\`* :
└  ◦ *\`poke\`* :
┌  ◦ *\`nom\`* :
└  ◦ *\`slap\`* :
┌  ◦ *\`smile\`* :
└  ◦ *\`wave\`* :
┌  ◦ *\`blush\`* :
└  ◦ *\`smug\`* :
┌  ◦ *\`glomp\`* :
└  ◦ *\`happy\`* :
┌  ◦ *\`dance\`* :
└  ◦ *\`cringe\`* :
┌  ◦ *\`highfive\`* :
└  ◦ *\`handhold\`* :
┌  ◦ *\`akira\`* :
└  ◦ *\`akiyama\`* :
┌  ◦ *\`ana\`* :
└  ◦ *\`asuna\`* :
┌  ◦ *\`ayuzawa\`* :
└  ◦ *\`boruto\`* :
┌  ◦ *\`chiho\`* :
└  ◦ *\`chitoge\`* :
┌  ◦ *\`cosplayloli\`* :
└  ◦ *\`cosplaysagiri\`* :
┌  ◦ *\`deidara\`* :
└  ◦ *\`doraemon\`* :
┌  ◦ *\`elena\`* :
└  ◦ *\`emilia\`* :
┌  ◦ *\`erza\`* :
└  ◦ *\`gremory\`* :
┌  ◦ *\`hestia\`* :
└  ◦ *\`hinata\`* :
┌  ◦ *\`husbu\`* :
└  ◦ *\`inori\`* :
┌  ◦ *\`isuzu\`* :
└  ◦ *\`itachi\`* :
┌  ◦ *\`itori\`* :
└  ◦ *\`kaga\`* :
┌  ◦ *\`kagura\`* :
└  ◦ *\`kakasih\`* :
┌  ◦ *\`kaori\`* :
└  ◦ *\`keneki\`* :
┌  ◦ *\`kotori\`* :
└  ◦ *\`kurumi\`* :
┌  ◦ *\`loli\`* :
└  ◦ *\`madara\`* :
┌  ◦ *\`megumin\`* :
└  ◦ *\`mikasa\`* :
┌  ◦ *\`mikey\`* :
└  ◦ *\`miku\`* :
┌  ◦ *\`minato\`* :
└  ◦ *\`naruto\`* :
┌  ◦ *\`neko\`* :
└  ◦ *\`neko2\`* :
┌  ◦ *\`nekonime\`* :
└  ◦ *\`nezuko\`* :
┌  ◦ *\`onepiece\`* :
└  ◦ *\`pokemon\`* :
┌  ◦ *\`randomnime\`* :
└  ◦ *\`randomnime2\`* :
┌  ◦ *\`rize\`* :
└  ◦ *\`sagiri\`* :
┌  ◦ *\`sakura\`* :
└  ◦ *\`sasuke\`* :
┌  ◦ *\`shina\`* :
└  ◦ *\`shinka\`* :
┌  ◦ *\`shinomiya\`* :
└  ◦ *\`shizuka\`* :
┌  ◦ *\`shota\`* :
└  ◦ *\`tejina\`* :
┌  ◦ *\`toukachan\`* :
└  ◦ *\`tsunade\`* :
┌  ◦ *\`waifu\`* :
└  ◦ *\`animewall\`* :
┌  ◦ *\`yotsuba\`* :
└  ◦ *\`yuki\`* :
┌  ◦ *\`yulibocil\`* :
└  ◦ *\`yumeko\`* :
┌  ◦ *\`8ball\`* :
└  ◦ *\`tickle\`* :
┌  ◦ *\`gecg\`* :
└  ◦ *\`feed\`* :

            _*R P G    G A M E S*_
coming soon

            _*S O U N D*_

└  ◦ *\`sound1\`* :
┌  ◦ *\`sound2\`* :
└  ◦ *\`sound3\`* :
┌  ◦ *\`sound4\`* :
└  ◦ *\`sound5\`* :
┌  ◦ *\`sound6\`* :
└  ◦ *\`sound7\`* : - 161
┌  ◦ *\`music1\`* :
└  ◦ *\`music1\`* :
┌  ◦ *\`music2\`* :
└  ◦ *\`music3\`* :
┌  ◦ *\`music4\`* :
└  ◦ *\`music5\`* :
┌  ◦ *\`music6\`* :
└  ◦ *\`music7\`* : - 35
┌  ◦ *\`sad1\`* :
└  ◦ *\`sad1\`* :
┌  ◦ *\`sad2\`* :
└  ◦ *\`sad3\`* :
┌  ◦ *\`sad4\`* :
└  ◦ *\`sad5\`* :
┌  ◦ *\`sad6\`* :
└  ◦ *\`sad7\`* : - 35

            _*A U D I O*_  

└  ◦ *\`addvn\`* : *audio*
┌  ◦ *\`listvn\`* : *audio*
└  ◦ *\`delvn\`* : *audio*
┌  ◦ *\`bass\`* : *reply audio*
└  ◦ *\`deep\`* : *reply audio*
┌  ◦ *\`slow\`* : *reply audio*
└  ◦ *\`blown\`* :
┌  ◦ *\`smooth\`* :
└  ◦ *\`earrape\`* :
┌  ◦ *\`fast\`* :
└  ◦ *\`fat\`* :
┌  ◦ *\`reverse\`* :
└  ◦ *\`nightcore\`* :
┌  ◦ *\`robot\`* :
└  ◦ *\`squirrel\`* :

             _*G A M E*_  

┌  ◦ *\`werewolf\`* :
└  ◦ *\`suit\`* : *tag atau reply*
┌  ◦ *\`tictactoe\`* : *tag atau reply*
└  ◦ *\`delttt\`* :
┌  ◦ *\`petakbom\`* :
└  ◦ *\`delpetakbom\`* :
┌  ◦ *\`tebakgambar\`* :
└  ◦ *\`tebakanime\`* :
┌  ◦ *\`tebakkabupaten\`* :
└  ◦ *\`tebaklagu\`* :
┌  ◦ *\`kuis\`* :
└  ◦ *\`tebakkalimat\`* :
┌  ◦ *\`tebakkata\`* :
└  ◦ *\`tebaklirik\`* :
┌  ◦ *\`tebakkimia\`* :
└  ◦ *\`tebakbendera\`* :
┌  ◦ *\`susunkata\`* :
└  ◦ *\`asahotak\`* :
┌  ◦ *\`siapakahaku\`* :
└  ◦ *\`caklontong\`* :
┌  ◦ *\`math\`* :
└  ◦ *\`family100\`* :
┌  ◦ *\`ewe\`* :
└  ◦ *\`war\`* :
┌  ◦ *\`casino\`* :
└  ◦ *\`delcasino\`* :
┌  ◦ *\`tebakjkt\`* :
└  ◦ *\`nyerah\`* :
┌  ◦ *\`nyerah\`* : news
└  ◦ *\`bantuan\`* : news

            _*S H O P   S H O P*_  
            
└  ◦ *\`nokos\`* :
┌  ◦ *\`vps\`* :
└  ◦ *\`panel\`* :    
┌  ◦ *\`saldo\`* : *lihat saldo anda*
└  ◦ *\`ceksaldo\`* : *tag/reply*
┌  ◦ *\`transfer\`* : *reply + nominal*
└  ◦ *\`topup\`* : *nominal*
┌  ◦ *\`cekmin\`* : *bukti prabayar*
└  ◦ *\`belipanel\`* : *lakukan pembelian*
┌  ◦ *\`addusr\`* : *beli user panel anda*
└  ◦ *\`buyserver\`* : *beli server user*
┌  ◦ *\`addusr\`* : *gratis buat user*
└  ◦ *\`addsrv\`* : *gunakan saldo*
┌  ◦ *\`addusradmin\`* : *untuk creator*
└  ◦ *\`addsaldo\`* : *untuk creator*
┌  ◦ *\`listpanel\`* : *lihat harga*
└  ◦ *\`listvps\`* :  *lihat harga*
┌  ◦ *\`listusr\`* : *data user*
└  ◦ *\`listsrv\`* : *data server*
┌  ◦ *\`startsrv\`* : *ID server*
└  ◦ *\`stopsrv\`* : *ID server*
┌  ◦ *\`addlist\`* : *tambah list*
└  ◦ *\`dellist\`* : *hapus list*
┌  ◦ *\`updatelist\`* : *edit list*
└  ◦ *\`list\`* : *tampilkan list*
┌  ◦ *\`tambah\`* :
└  ◦ *\`kali\`* :
┌  ◦ *\`kurang\`* :
└  ◦ *\`bagi\`* :

           _*S U B    D O M A I N*_  

└  ◦ *\`domain1\`* : panellku.cfd
┌  ◦ *\`domain2\`* : kangpannel.xyz
└  ◦ *\`domain3\`* : mypannelku.com
┌  ◦ *\`domain4\`* : pannelmurah.xyz
└  ◦ *\`domain5\`* : storepannel.xyz
┌  ◦ *\`domain6\`* : putraoffc.site
└  ◦ *\`domain7\`* : putraoffc.com
┌  ◦ *\`domain8\`* : panellstore.com
└  ◦ *\`domain9\`* : panellstore.net
┌  ◦ *\`domain10\`* : panellstore.icu
└  ◦ *\`domain11\`* : panellstore.xyz
┌  ◦ *\`domain12\`* : jasa-panel.my.id
└  ◦ *\`domain13\`* : panellkita.my.id
┌  ◦ *\`domain14\`* : putraoffc.cfd
└  ◦ *\`domain15\`* : sellerpannel.my.id
┌  ◦ *\`domain16\`* : hyuuoffc.my.id
└  ◦ *\`domain17\`* : pannelku.icu
┌  ◦ *\`domain18\`* : panellku.my.id
└  ◦ *\`domain19\`* : panellku.me
┌  ◦ *\`domain20\`* : panellku.biz.id
└  ◦ *\`domain21\`* : panellku.tech
┌  ◦ *\`domain22\`* : panelkuu.xyz
└  ◦ *\`domain23\`* : panellku.com
┌  ◦ *\`domain24\`* : yasshost.com
└  ◦ *\`domain25\`* : yasshost.my.id
┌  ◦ *\`domain26\`* : yasspedia.xyz
└  ◦ *\`domain27\`* : panelmurah.cfd
┌  ◦ *\`domain28\`* : panelstore.xyz
└  ◦ *\`domain29\`* : panelstore.art
┌  ◦ *\`domain30\`* : mypanel.biz.id
└  ◦ *\`domain31\`* : ofcbotku.com
┌  ◦ *\`domain32\`* : kayy.me
└  ◦ *\`domain33\`* : DapaOFFC.tech
┌  ◦ *\`domain34\`* : kayypedia.com
└  ◦ *\`domain35\`* : panell.icu

            _*F U N  A S K*_  

└  ◦ *\`createqr\`* : *text*
┌  ◦ *\`detectqr\`* : *reply qr*
└  ◦ *\`apakah\`* : *text*
┌  ◦ *\`bagaimanakah\`* : *text*
└  ◦ *\`kapankah\`* : *text*
┌  ◦ *\`bisakah\`* : *text
└  ◦ *\`sangecek\`* : *tag*
┌  ◦ *\`cantikcek\`* : *tag*
└  ◦ *\`gantengcek\`* : *tag*
┌  ◦ *\`jomokcek\`* : *tag*
└  ◦ *\`wangy\`* : *tag*
┌  ◦ *\`rate\`* :
└  ◦ *\`tolol\`* :
┌  ◦ *\`goblog\`* :
└  ◦ *\`goblok\`* :
┌  ◦ *\`idiot\`* :
└  ◦ *\`gay\`* :
┌  ◦ *\`jomok\`* :
└  ◦ *\`bajingan\`* :
┌  ◦ *\`munafik\`* :
└  ◦ *\`kontol\`* :
┌  ◦ *\`yatim\`* :
└  ◦ *\`poke\`* :
┌  ◦ *\`pembokep\`* :
└  ◦ *\`hitam\`* :
┌  ◦ *\`jawa\`* :
└  ◦ *\`wibu\`* :
┌  ◦ *\`stress\`* :
└  ◦ *\`miskin\`* :
┌  ◦ *\`cantik\`* :
└  ◦ *\`manis\`* :
┌  ◦ *\`babi\`* :
└  ◦ *\`ganteng\`* :
┌  ◦ *\`cina\`* :
└  ◦ *\`atheis\`* :
┌  ◦ *\`papua\`* :
└  ◦ *\`nigga\`* :
┌  ◦ *\`pengentot\`* :
└  ◦ *\`seksi\`* :
┌  ◦ *\`kawai\`* :
└  ◦ *\`tercindo\`* :
┌  ◦ *\`fembokef\`* :
└  ◦ *\`pengocok\`* :
┌  ◦ *\`cabul\`* :
└  ◦ *\`fuckboy\`* :
┌  ◦ *\`playboy\`* :
└  ◦ *\`sange\`* :
┌  ◦ *\`sangean\`* :
└  ◦ *\`hot\`* :

`
